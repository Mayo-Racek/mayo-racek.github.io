"""Browser UAT for blog-first mayoracek.com. No public-network dependency."""
from __future__ import annotations
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
DIST=ROOT/"dist"
SHOTS=ROOT/"artifacts"/"layout"
SHOTS.mkdir(parents=True,exist_ok=True)
Handler=functools.partial(SimpleHTTPRequestHandler,directory=str(DIST))
server=ThreadingHTTPServer(("127.0.0.1",0),Handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f"http://127.0.0.1:{server.server_address[1]}/"
sizes=[(320,568),(360,740),(390,844),(430,932),(768,1024),(1024,768),(1366,768),(1920,1080)]
errors=[]
try:
 with sync_playwright() as pw:
  browser=pw.chromium.launch(headless=True,args=["--no-sandbox"])
  for width,height in sizes:
   page=browser.new_page(viewport={"width":width,"height":height},device_scale_factor=1)
   page.goto(url,wait_until="networkidle")
   hero=page.locator(".hero").bounding_box()
   writing=page.locator(".home-writing").bounding_box()
   if not hero or not writing:
    errors.append(f"{width}x{height}: hero or latest writing missing")
    page.close()
    continue
   if writing["y"] < height-3:
    errors.append(f"{width}x{height}: latest writing enters first screen")
   if page.locator("#data-lifecycle,.service-grid,.contact-band").count():
    errors.append(f"{width}x{height}: retired consultancy UI still displayed")
   if width<=600:
    portrait=page.locator(".hero-visual").bounding_box()
    title=page.locator(".hero h1").bounding_box()
    intro=page.locator(".hero-intro").bounding_box()
    if not all([portrait,title,intro]):
     errors.append(f"{width}x{height}: portrait or text missing")
    else:
     if portrait["x"] < title["x"]+title["width"]-3:
      errors.append(f"{width}x{height}: portrait and title overlap")
     if portrait["y"]+portrait["height"]>intro["y"]+4:
      errors.append(f"{width}x{height}: portrait overlaps intro")
   scroll_width=page.evaluate("Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)")
   if scroll_width>width+5:
    errors.append(f"{width}x{height}: horizontal overflow {scroll_width}")
   for label in ("Read the Blog","About Me"):
    rect=page.get_by_role("link",name=label,exact=True).first.bounding_box()
    if not rect:
     errors.append(f"{width}x{height}: {label} CTA missing")
    elif width>=390 and height>=740 and rect["y"]+rect["height"]>height+3:
     errors.append(f"{width}x{height}: {label} CTA outside first screen")
   if page.evaluate("window.dataLayer.filter(x=>x.event==='pageViewed').length")!=1:
    errors.append(f"{width}x{height}: incorrect pageViewed count")
   if width in (390,1366):
    page.screenshot(path=str(SHOTS/f"blog-home-{width}.png"),full_page=True)
   if page.evaluate("window.dataLayer.find(x=>x.event==='pageViewed')?.activity?.name")!="viewPage":
    errors.append(f"{width}x{height}: page activity missing")
   if width==390:
    # Prevent navigation only for the test, so the intent event stays visible.
    page.evaluate("""() => document.querySelector('[data-track-id="heroReadBlog"]')
      .addEventListener('click', event => event.preventDefault(), {capture:true})""")
    page.locator('[data-track-id="heroReadBlog"]').click()
    activity=page.evaluate("""() => window.dataLayer.filter(e=>e.event==='ctaClicked').at(-1)?.activity""")
    if activity!={"name":"readBlog","category":"navigation","status":"intent"}:
     errors.append(f"Homepage article CTA activity incorrect: {activity}")
   page.close()

  page=browser.new_page(viewport={"width":390,"height":844})
  for route,heading in [
   ("blog/","Writing about the"),
   ("blog/start-with-the-problem/","Start with the problem"),
   ("about/","Hi, I’m Mayo"),
   ("resume/","Mayo Racek"),
   ("contact/","Get in touch")
  ]:
   page.goto(url+route,wait_until="networkidle")
   if not page.locator("h1").count() or heading.lower() not in page.locator("h1").first.inner_text().lower():
    errors.append("Wrong heading on "+route)
   if page.evaluate("window.dataLayer.filter(x=>x.event==='pageViewed').length")!=1:
    errors.append("Missing/duplicated pageViewed on "+route)
   if page.evaluate("document.documentElement.scrollWidth")>390+5:
    errors.append("Mobile horizontal overflow: "+route)
   if route in ("blog/","about/"):
    page.screenshot(path=str(SHOTS/("blog-listing.png" if route=="blog/" else "blog-about.png")),full_page=True)
  page.goto(url+"blog/",wait_until="networkidle")
  if page.locator(".post-card").count()!=1:
   errors.append("Expected one complete blog article")
  else:
   page.locator(".post-card").first.click()
   if "start-with-the-problem" not in page.url:
    errors.append("Article card did not navigate")
  page.goto(url+"about/",wait_until="networkidle")
  cv=page.get_by_role("link",name="Download My CV")
  if cv.count()!=1 or "Mayo_Racek_CV.pdf" not in cv.get_attribute("href"):
   errors.append("About CV link missing")
  # Contact form must begin inside the first visible screen, not below a banner.
  for cw,ch in [(320,568),(390,844),(430,932),(768,1024),(1366,768)]:
   page.set_viewport_size({"width":cw,"height":ch})
   page.goto(url+"contact/",wait_until="networkidle")
   form=page.locator("#project-brief").bounding_box()
   heading=page.locator("#contact-title").bounding_box()
   if not form or not heading:
    errors.append(f"{cw}x{ch}: Contact heading or form missing")
   elif form["y"]>=ch*.69:
    errors.append(f"{cw}x{ch}: Contact form appears too far below fold ({form['y']:.0f}px)")
   if page.locator(".contact-hero,.page-hero").count():
    errors.append(f"{cw}x{ch}: Redundant Contact hero still present")
   if cw>=390:
    action=page.locator('#project-brief button[type="submit"]').bounding_box()
    if action and action["y"]+action["height"]>ch+3:
     errors.append(f"{cw}x{ch}: Contact action not initially visible")
   if page.evaluate("document.documentElement.scrollWidth")>cw+5:
    errors.append(f"{cw}x{ch}: Contact horizontal overflow")
   if cw in (390,1366):
    page.screenshot(path=str(SHOTS/f"contact-{cw}.png"),full_page=True)
  page.set_viewport_size({"width":390,"height":844})
  page.goto(url+"contact/",wait_until="networkidle")
  page.locator("#brief-need").select_option("other")
  selected=page.evaluate("""() => window.dataLayer.filter(x=>x.event==='projectBriefNeedSelected').map(x=>({
   code:x.interaction.actionId,name:x.activity?.name,category:x.activity?.category,status:x.activity?.status
  }))""")
  if selected!=[{"code":"other","name":"chooseContactTopic","category":"contact","status":"selected"}]:
   errors.append(f"Other topic contract or activity changed: {selected}")
  if page.evaluate("window.dataLayer.some(x => JSON.stringify(x).includes('Tell me briefly'))"):
   errors.append("Form message text must never reach data layer")
  for dead in ("services/","projects/","lab/aria/","start/"):
   resp=page.request.get(url+dead)
   if resp.status==200:
    errors.append("Removed page still publicly generated: "+dead)
  page.close()
  browser.close()
finally:
 server.shutdown()
if errors:
 raise SystemExit("\n".join(errors))
print(f"Blog browser QA passed across {len(sizes)} viewports: hero, articles, About/CV, contact, data layer, old routes.")
