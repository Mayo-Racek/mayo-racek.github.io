"""Real-browser checks for home first screen and interactive lifecycle.

Runs on the generated Astro dist after npm run build. Uses a temporary
localhost server, no public network dependency, and saves review screenshots.
"""
from __future__ import annotations
import contextlib
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
ARTIFACTS = ROOT / "artifacts" / "layout"
ARTIFACTS.mkdir(parents=True, exist_ok=True)
Handler = functools.partial(SimpleHTTPRequestHandler, directory=str(DIST))
server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
thread = threading.Thread(target=server.serve_forever, daemon=True)
thread.start()
URL = f"http://127.0.0.1:{server.server_address[1]}/"
viewports = [(320, 568), (360, 740), (390, 844), (430, 932),
             (768, 1024), (1024, 768), (1366, 768), (1920, 1080)]
errors = []

try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, args=["--no-sandbox"])
        for width, height in viewports:
            page = browser.new_page(viewport={"width": width, "height": height},
                                    device_scale_factor=1)
            page.goto(URL, wait_until="networkidle")
            hero = page.locator(".hero").bounding_box()
            life = page.locator("#data-lifecycle").bounding_box()
            if not hero or not life:
                errors.append(f"{width}x{height}: Missing home hero or lifecycle")
                page.close()
                continue

            # Test readable composition, not an artificially forced full-screen hero.
            if width <= 600:
                portrait = page.locator(".hero-visual").bounding_box()
                title = page.locator(".hero h1").bounding_box()
                intro = page.locator(".hero-intro").bounding_box()
                if not portrait or not title or not intro:
                    errors.append(f"{width}x{height}: Hero portrait, title or intro missing")
                else:
                    if portrait["x"] < title["x"] + title["width"] - 3:
                        errors.append(f"{width}x{height}: Portrait horizontally overlaps title")
                    if portrait["y"] + portrait["height"] > intro["y"] + 4:
                        errors.append(f"{width}x{height}: Portrait vertically overlaps introduction")
                    if intro["y"] <= title["y"]:
                        errors.append(f"{width}x{height}: Intro starts before headline")
            if width <= 600 and height >= 740 and life["y"] < height - 3:
                errors.append(f"{width}x{height}: Lifecycle title enters initial viewport")
            if width >= 390 and width <= 600:
                signoff = page.locator(".hero-signoff").bounding_box()
                if signoff and height >= 740 and signoff["y"] + signoff["height"] < height * 0.76:
                    errors.append(f"{width}x{height}: Unbalanced empty space below hero content")
            print(f"layout {width}x{height}: hero bottom {hero['y']+hero['height']:.0f}, lifecycle starts {life['y']:.0f}")
            horizontal = page.evaluate("Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)")
            if horizontal > width + 5:
                errors.append(f"{width}x{height}: Horizontal overflow {horizontal}px")
            if width >= 390 and height >= 740:
                first = page.get_by_role("link", name="Explore Services").bounding_box()
                second = page.get_by_role("link", name="Read My Blog").bounding_box()
                for label, rect in [("Explore Services", first), ("Read My Blog", second)]:
                    if not rect or rect["y"] + rect["height"] > height + 3:
                        errors.append(f"{width}x{height}: Primary CTA outside the first viewport: {label}")
            page.screenshot(path=str(ARTIFACTS / f"hero-{width}x{height}.png"), full_page=False)
            if width == 390:
                page.locator("#data-lifecycle").screenshot(
                    path=str(ARTIFACTS / "lifecycle-390.png"))
            page.close()

        page = browser.new_page(viewport={"width": 390, "height": 844})
        page.goto(URL, wait_until="networkidle")
        steps = ["collect", "connect", "transform", "analyze", "activate", "automate"]
        for step in steps:
            button = page.locator(f'[data-life-step="{step}"]')
            button.click()
            selected = button.get_attribute("aria-pressed")
            panel = page.locator(f'[data-life-panel="{step}"]')
            if selected != "true" or not panel.is_visible():
                errors.append(f"Lifecycle selection failed: {step}")
            if panel.locator(".life-viz svg").count() != 1:
                errors.append(f"Stage illustration missing: {step}")
            if panel.locator('a[href^="/services/"]').count() != 1:
                errors.append(f"Stage service link missing: {step}")
        events = page.evaluate("window.dataLayer.filter(e => e.event === 'lifecycleStepSelected').map(e => e.interaction.actionId)")
        if events != steps:
            errors.append(f"Lifecycle event sequence mismatch: {events}")
        page.locator('[data-life-step="collect"]').focus()
        page.keyboard.press("ArrowRight")
        if page.locator('[data-life-step="connect"]').get_attribute("aria-pressed") != "true":
            errors.append("Arrow-key navigation did not advance to Connect")
        if page.evaluate("window.dataLayer.filter(e => e.event === 'pageViewed').length") != 1:
            errors.append("Page view emitted more than once")

        reduced = browser.new_page(viewport={"width": 390, "height": 844}, reduced_motion="reduce")
        reduced.goto(URL, wait_until="networkidle")
        trace = reduced.locator(".life-detail:not([hidden]) .life-trace").first
        if trace.count() and trace.evaluate("(el) => getComputedStyle(el).animationName") != "none":
            errors.append("Reduced-motion preference not respected")
        reduced.close()
        page.close()
        browser.close()
finally:
    server.shutdown()

if errors:
    raise SystemExit("\n".join(errors))
print(f"Responsive lifecycle checks passed for {len(viewports)} viewports; interactions, keyboard, reduced motion and telemetry.")
