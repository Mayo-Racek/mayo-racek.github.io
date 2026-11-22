/** Mayo Racek site content and HTML renderers.
 *  Single source of truth: edit the service, project and article arrays below.
 *  No published outcomes, client names, testimonials or invented dates.
 */
export const profile = {
  name: 'Mayo Racek',
  role: 'Data & AI Solutions Architect',
  location: 'Slovakia · Working remotely with international teams',
  linkedin: 'https://sk.linkedin.com/in/mayoracek',
  github: 'https://github.com/Mayo-Racek',
  x: 'https://x.com/MayoRacek',
};

export const services = [
  {
    "slug": "measurement-architecture",
    "number": "01",
    "icon": "measure",
    "name": "Collect & Measure",
    "short": "Capture reliable web and app data with clear measurement, consent and quality standards.",
    "teaser": "Data collection, event architecture, GA4, GTM and server-side tagging built around the questions your business needs to answer.",
    "headline": "Collect the data that matters.",
    "intro": "Design reliable web and app measurement from the beginning. I define what to measure, implement first-party collection where appropriate, and validate events and consent rules so teams can trust the information they use.",
    "offerings": [
      [
        "Measurement design",
        "Business goals, event taxonomy and data layer specifications."
      ],
      [
        "Implementation",
        "Web and app collection, GTM, GA4 and server-side tagging where appropriate."
      ],
      [
        "Quality & privacy",
        "Consent-aware delivery, QA, monitoring and maintainable documentation."
      ]
    ],
    "fit": "Product and marketing teams seeking dependable digital measurement."
  },
  {
    "slug": "cloud-data-products",
    "number": "02",
    "icon": "cloud",
    "name": "Connect & Analyze",
    "short": "Connect your systems, engineer trustworthy data and turn it into decisions and insights.",
    "teaser": "From APIs and ingestion to BigQuery, transformations, analytics and dashboards that teams can use confidently.",
    "headline": "Connect your data. See the bigger picture.",
    "intro": "Bring digital, customer and operational data into a governed cloud foundation. I build data pipelines, reusable models and clear analytics that connect source systems to business decisions.",
    "offerings": [
      [
        "Connect & ingest",
        "Integrate APIs, events and business systems into a cloud data platform."
      ],
      [
        "Transform & govern",
        "BigQuery and Dataform models, shared metrics and data quality checks."
      ],
      [
        "Analyze & visualize",
        "Reporting, Looker Studio dashboards and analysis built for decisions."
      ]
    ],
    "fit": "Teams wanting one trustworthy view across previously disconnected sources."
  },
  {
    "slug": "applied-ai-systems",
    "number": "03",
    "icon": "spark",
    "name": "Activate & Automate",
    "short": "Put trusted data to work in business tools and carefully designed AI-powered workflows.",
    "teaser": "Data activation, AI-ready foundations and controlled automation grounded in governance, evaluation and human oversight.",
    "headline": "Turn trusted data into useful action.",
    "intro": "Data becomes more valuable when it reaches the right tools and workflows. I connect approved data to business systems and design practical automation, including AI-assisted workflows where they offer a clear benefit and can be evaluated safely.",
    "offerings": [
      [
        "Data activation",
        "Share permitted data with CRM, customer engagement and operational platforms."
      ],
      [
        "AI-ready foundations",
        "Prepare documented, permissioned data for retrieval and AI applications."
      ],
      [
        "Practical automation",
        "Design bounded agent workflows with testing, human review, observability and cost controls."
      ]
    ],
    "fit": "Teams ready to use governed data for activation and practical automation."
  }
];

// Editorial placeholders. Never display as completed client work.
// Only completed, tested and approved case studies belong in this list.
export const projects = [];

export const posts = [
  {
    "slug": "start-with-the-problem",
    "category": "Engineering approach",
    "title": "Start with the problem, not the platform",
    "excerpt": "Why reliable data and useful AI start with a specific decision, a clear contract and evidence that the solution works.",
    "status": "Field note",
    "sections": [
      [
        "A request is not yet a problem statement",
        "A team asks for a dashboard, more tracking or an AI agent. That is a proposed solution, not necessarily the underlying need. I start by asking what decision is difficult today, what manual work stands in the way, who is affected and how we would recognize an improvement. A dashboard is useful if someone acts on it. Automation is useful if it reliably removes a bottleneck. Without this connection, sophisticated engineering can produce very little value."
      ],
      [
        "Define the contract before choosing tools",
        "Once the outcome is clear, I make inputs and outputs explicit. For measurement, that means defining the business action, its event name, permitted properties, identity rules, consent dependencies and acceptance criteria. For data models, it means specifying grain, metric definitions, freshness expectations and ownership. For AI workflows, it means allowed tasks, authoritative sources, tool permissions, human approvals and failure behavior. A written contract gives engineers and stakeholders something concrete to test."
      ],
      [
        "Trace the full system, not just the dashboard",
        "A website event may travel through the data layer, client-side tagging, a server-side collection endpoint, an analytics platform and an export into a warehouse. Other tools follow different paths. When reported numbers disagree, I inspect each boundary rather than assume the dashboard is wrong. I check the browser action, request payload, identifiers, consent conditions, delivery timing, deduplication and transformation logic. The same mindset applies to AI: inspect retrieval, instructions, tool calls, execution traces and final actions as one connected workflow."
      ],
      [
        "Make verification part of delivery",
        "Tests should follow real journeys, including failure paths. I want explicit cases for consent choices, missing inputs, duplicate events, navigation changes and late-arriving data. In the warehouse, reconciliation and freshness monitoring help distinguish expected differences from defects. For agents, evaluations should cover correct outcomes, incorrect tool use, denied actions and escalation to a human. A feature is not delivered simply because the happy-path demo works. A UAT sign-off should reference test cases and evidence, not only a stakeholder impression."
      ],
      [
        "Build automation with boundaries",
        "Repetitive review work is a promising AI use case, but an agent is not automatically safer or faster than a deterministic script. Start with the simplest reliable mechanism. When reasoning across varied inputs genuinely helps, keep access narrow, record tool operations, validate proposed changes and require approval for consequential actions. Give operators a way to stop, inspect and reverse a workflow. Evaluate the cost of accepted results rather than the number of model calls."
      ],
      [
        "What a successful solution looks like",
        "A good outcome is not a long list of technologies. It is a process someone can explain, evidence that it produces the intended result, and an operating model that survives after the original engineer steps away. I look for clarity of purpose, privacy and security by design, repeatable tests, understandable ownership and an honest account of limitations. The goal is useful engineering that earns trust."
      ]
    ]
  }
];

const esc = (v='') => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external=(url,text,label='')=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer"${label?` aria-label="${esc(label)}"`:''}>${text}</a>`;
const arrow='<span aria-hidden="true">↗</span>';
const icon=(id)=> {
  if(id==='measure')return '<svg viewBox="0 0 28 28" aria-hidden="true" fill="none"><path d="M5 23v-7h4v7M12 23V9h4v14M19 23V4h4v19" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  if(id==='cloud')return '<svg viewBox="0 0 28 28" aria-hidden="true" fill="none"><path d="M8.5 21H21a5 5 0 0 0 .1-10A8.1 8.1 0 0 0 6 12.9 4.2 4.2 0 0 0 8.5 21Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  return '<svg viewBox="0 0 28 28" aria-hidden="true" fill="none"><path d="m14 2 2.5 8.5L25 13l-8.5 2.5L14 24l-2.5-8.5L3 13l8.5-2.5L14 2ZM23 22l1 2.2L26 25l-2 .8-1 2.2-1-2.2-2-.8 2-.8 1-2.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';
};
const path=(s,base='/')=>{const clean=String(s).replace(/^\//,''); const offline=base!=='/'; const target=offline&&(clean===''||clean.endsWith('/'))?clean+'index.html':clean; return base.replace(/\/$/,'')+'/'+target;};
const navLink=(href,name,active,base)=>`<a class="nav-link ${active===name.toLowerCase()?'is-active':''}" data-track-event="navigationClicked" data-track-location="header" data-track-id="${esc(name.toLowerCase())}" href="${path(href,base)}">${name}</a>`;
function header(active,base){return '<header class="site-header"><div class="site-container header-inner"><a href="'+path('',base)+'" class="brand" aria-label="Mayo Racek, homepage"><strong>Mayo Racek</strong></a><nav class="site-nav" id="primary-navigation" aria-label="Main navigation">'+navLink('services/','Services',active,base)+navLink('blog/','Blog',active,base)+navLink('about/','About',active,base)+navLink('contact/','Contact',active,base)+'</nav><button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button></div></header>';}
function footer(base){return '<footer class="site-footer"><div class="site-container footer-top"><div><a class="brand" href="'+path('',base)+'"><strong>Mayo Racek</strong></a><p>Data engineering, analytics and practical AI.</p></div><div class="footer-links"><a href="'+path('services/',base)+'">Services</a><a href="'+path('blog/',base)+'">Blog</a><a href="'+path('about/',base)+'">About</a><a href="'+path('resume/',base)+'">Resume</a><a href="'+path('contact/',base)+'">Contact</a></div><div class="footer-social">'+external(profile.linkedin,'LinkedIn ↗')+external(profile.github,'GitHub ↗')+external(profile.x,'X ↗')+'</div></div><div class="site-container footer-bottom"><span>© '+new Date().getFullYear()+' Mayo Racek</span><span>Based in Slovakia · Working internationally</span></div></footer>';}
function contactCta(base,{compact=false}={}){return '<section class="contact-band '+(compact?'compact':'')+'" id="contact"><div class="site-container contact-band-inner"><div><span class="kicker">LET US BUILD SOMETHING USEFUL</span><h2>What is your next goal?</h2><p>Tell me what you want to achieve with your data.</p></div><a class="btn btn-primary" href="'+path('start/',base)+'">Share Your Goal <span aria-hidden="true">↗</span></a></div></section>';}
function shell({title,description,body,active='home',base='/',canonical='',og='website'}){
  const fullTitle= title==='Home'?'Mayo Racek | Data & AI Solutions Architect':`${title} | Mayo Racek`;
  const metaDesc=description||'Cloud data engineering, measurement architecture and governed AI automation. Solutions designed around real problems.';
  const fullUrl=`https://mayoracek.com${title==='Page not found'?'/404/':canonical||'/'}`;
  const noindex = title==='Page not found' || /^\/projects\/[^/]+\/$/.test(canonical);
  const pagePath = title==='Page not found'?'/404/':canonical||'/';
  const segments = pagePath.split('/').filter(Boolean);
  const pageType = title==='Page not found' ? 'notFound' : !segments.length ? 'home' : segments[0] === 'services' && segments.length > 1 ? 'serviceDetail' : segments[0] === 'blog' && segments.length > 1 ? 'article' : segments[0] === 'lab' ? 'labProject' : segments[0];
  const pageEvent = {event:'pageViewed',schemaVersion:'1.0.0',page:{pageType,pagePath,pageTitle:title,language:'en',canonicalUrl:fullUrl}};
  // Data layer messages remain local until a separately governed collection integration is added.
  const dataLayerInit = '<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push('+JSON.stringify(pageEvent).replace(/</g,'\\u003c')+');</script>';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="theme-color" content="#071325"/><meta name="description" content="${esc(metaDesc)}"/>${noindex?'<meta name="robots" content="noindex, follow"/>':''}<meta property="og:type" content="${esc(og)}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(metaDesc)}"/><meta property="og:url" content="${esc(fullUrl)}"/><link rel="canonical" href="${esc(fullUrl)}"/>${dataLayerInit}<link rel="icon" href="${path('favicon.svg',base)}" type="image/svg+xml"/><link rel="stylesheet" href="${path('styles.css',base)}"/><title>${esc(fullTitle)}</title></head><body>${header(active,base)}<main id="main-content">${body}</main>${footer(base)}<script defer src="${path('site-analytics.js',base)}"></script><script>(function(){const b=document.querySelector('.menu-toggle');const n=document.querySelector('.site-nav');if(b&&n){const close=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')};b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('open',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();b.focus()}});document.addEventListener('click',e=>{if(!b.contains(e.target)&&!n.contains(e.target))close()})}})();</script></body></html>`;
}
function serviceCard(s,base){return `<a class="service-card" data-track-event="serviceSelected" data-track-location="servicesGrid" data-track-id="${esc(s.slug)}" href="${path(`services/${s.slug}/`,base)}"><div class="service-icon">${icon(s.icon)}</div><div class="service-number">${s.number}</div><h3>${esc(s.name)}</h3><p>${esc(s.short)}</p><span class="card-link">Explore this service <span aria-hidden="true">↗</span></span></a>`;}
function projectCard(p,base){return `<a class="project-card" href="${path(`projects/${p.slug}/`,base)}"><div class="project-art art-${p.theme}"><span class="art-serial">${p.number} / WORK</span><span class="art-glyph" aria-hidden="true">${p.theme==='cyan'?'◌':p.theme==='blue'?'▧':'✳'}</span><span class="project-category">${esc(p.category)}</span></div><div class="project-card-body"><span class="status-label">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="card-link">See what’s planned <span aria-hidden="true">↗</span></span></div></a>`;}
function postCard(p,base){return `<a class="post-card" data-track-event="articleSelected" data-track-location="blogGrid" data-track-id="${esc(p.slug)}" href="${path(`blog/${p.slug}/`,base)}"><div class="post-topline"><span>${esc(p.category)}</span><span class="status-label">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="card-link">See the outline <span aria-hidden="true">↗</span></span></a>`;}
function sectionHead(kicker,title,sub='',link='',linkText='',base='/'){return `<div class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${title}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div>${link?`<a class="section-link" href="${path(link,base)}">${esc(linkText)} <span aria-hidden="true">↗</span></a>`:''}</div>`;}
export function renderHome(base='/'){
 const hero="<section class=\"hero\"><div class=\"hero-shine hero-shine-a\"></div><div class=\"hero-shine hero-shine-b\"></div><div class=\"site-container hero-grid\"><div class=\"hero-copy\"><div class=\"eyebrow\"><span class=\"eyebrow-rule\"></span>DATA ENGINEERING <span class=\"mid-dot\">·</span> ANALYTICS <span class=\"mid-dot\">·</span> AI</div><h1><span class=\"headline-desktop\">Designing data solutions to <em>empower your goals.</em></span><span class=\"headline-mobile\">Data solutions to <em>empower your goals.</em></span></h1><p class=\"hero-intro\">From data collection and cloud engineering to analytics and intelligent automation. I design connected solutions that help you turn information into action.</p><div class=\"hero-actions\"><a class=\"btn btn-primary\" data-track-event=\"ctaClicked\" data-track-id=\"heroExploreServices\" data-track-location=\"hero\" href=\"__SERVICES_URL__\">Explore Services <span aria-hidden=\"true\">↗</span></a><a class=\"btn btn-outline\" data-track-event=\"ctaClicked\" data-track-id=\"heroReadBlog\" data-track-location=\"hero\" href=\"__BLOG_URL__\">Read My Blog <span aria-hidden=\"true\">↗</span></a></div><div class=\"hero-signoff\"><span class=\"little-line\"></span><p>17+ years in data and analytics engineering.</p></div></div><div class=\"hero-visual\" aria-label=\"Portrait of Mayo Racek\"><div class=\"orb orb-a\"></div><div class=\"orb orb-b\"></div><div class=\"portrait-orbit orbit-one\"></div><div class=\"portrait-orbit orbit-two\"></div><div class=\"portrait-floor\"></div><img class=\"portrait\" src=\"__PORTRAIT__\" width=\"415\" height=\"643\" alt=\"Mayo Racek, data and AI solutions architect\"/></div></div><div class=\"hero-bottom-fade\"></div></section>".replaceAll('__SERVICES_URL__',path('services/',base)).replaceAll('__BLOG_URL__',path('blog/',base)).replaceAll('__PORTRAIT__',path('mayo-portrait-cropped.webp',base));
 const content="<section class=\"section services-section\" id=\"services\"><div class=\"site-container\"><div class=\"section-head\"><div><span class=\"kicker\">WHAT I DO</span><h2>From data to action.</h2><p>Collect, connect, analyze and activate your data. Build for AI when it adds value.</p></div></div><div class=\"service-grid\">__CARDS__</div></div></section>".replaceAll('__CARDS__',services.map(s=>serviceCard(s,base)).join(''));
 return shell({title:'Home',description:'Mayo Racek designs connected data solutions, from collection and analytics to AI-ready data and practical automation.',body:hero+content+contactCta(base,{compact:true}),active:'home',base});
}
export function renderServices(base='/'){
 const intro="<section class=\"page-hero small-hero\"><div class=\"site-container\"><span class=\"kicker\">SERVICES</span><h1>From collection to <em>action.</em></h1><p>Three connected ways to make your data more useful, from reliable measurement to analytics and intelligent automation.</p></div></section>";
 const list="<section class=\"section services-landing\"><div class=\"site-container\"><div class=\"service-grid\">__CARDS__</div><p class=\"service-foundation\">Every solution is built around quality, privacy, security and clear ownership.</p></div></section>".replaceAll('__CARDS__',services.map(s=>serviceCard(s,base)).join(''));
 return shell({title:'Data & AI Services',description:'Data collection, cloud data engineering, analytics, activation and intelligent automation services by Mayo Racek.',body:intro+list+contactCta(base,{compact:true}),active:'services',base,canonical:'/services/'});
}
export function renderService(slug,base='/'){
 const s=services.find(item=>item.slug===slug); if(!s)throw new Error('Unknown service '+slug);
 const offeringHtml=s.offerings.map(([name,description])=>'<li><strong>'+esc(name)+'</strong><span>'+esc(description)+'</span></li>').join('');
 const body="<section class=\"page-hero service-page-hero simple-service-hero\"><div class=\"site-container\"><a class=\"back-link\" href=\"__BACK__\">← All services</a><span class=\"kicker\">__NAME__</span><h1>__HEADLINE__</h1><p>__INTRO__</p></div></section><section class=\"section simple-service-section\"><div class=\"site-container\"><div class=\"simple-service-layout\"><div><span class=\"kicker\">HOW I HELP</span><h2>What I deliver</h2><p class=\"simple-service-fit\"><strong>Best for:</strong> __FIT__</p></div><ul class=\"simple-offerings\">__OFFERINGS__</ul></div><div class=\"service-action\"><p>Start with your goal. We can agree on the right scope, technology and acceptance criteria.</p><a class=\"btn btn-primary\" href=\"__START__\">Share Your Goal <span aria-hidden=\"true\">↗</span></a></div></div></section>".replaceAll('__BACK__',path('services/',base)).replaceAll('__NAME__',esc(s.name)).replaceAll('__HEADLINE__',esc(s.headline)).replaceAll('__INTRO__',esc(s.intro)).replaceAll('__FIT__',esc(s.fit)).replaceAll('__OFFERINGS__',offeringHtml).replaceAll('__START__',path('start/',base));
 return shell({title:s.name,description:s.teaser,body,active:'services',base,canonical:'/services/'+slug+'/'});
}
export function renderProjects(base='/'){
 const body="<section class=\"page-hero small-hero\"><div class=\"site-container\"><span class=\"kicker\">SELECTED WORK</span><h1>Useful work deserves <em>real evidence.</em></h1><p>I publish completed case studies only when implementation, QA, UAT and shareable evidence support the story. No placeholder projects or invented outcomes.</p></div></section><section class=\"section\"><div class=\"site-container\"><div class=\"placeholder-note\"><strong>Case studies are being validated for publication.</strong><p>Each will explain the operational problem, design trade-offs, what was built, the tests performed and what was actually achieved.</p></div><div class=\"section-head\"><div><span class=\"kicker\">ENGINEERING LAB</span><h2>What I am building now</h2></div></div><a class=\"lab-feature\" data-track-event=\"labProjectSelected\" data-track-id=\"aria\" data-track-location=\"projectsPage\" href=\"__ARIA__\"><div><span class=\"status-label\">In development</span><h3>Aria — Agent-assisted GTM operations</h3><p>A problem-led experiment in reducing repetitive audits, review effort and release risk with governed AI workflows.</p></div><span class=\"card-link\">Explore Aria's approach <span aria-hidden=\"true\">↗</span></span></a></div></section>".replaceAll('__ARIA__',path('lab/aria/',base));
 return shell({title:'Selected work',description:'Only validated, completed projects are published as case studies. Aria is an active engineering lab.',body,active:'work',base,canonical:'/projects/'});
}
export function renderProject(slug,base='/'){
 const p=projects.find(x=>x.slug===slug);if(!p)throw new Error('Unknown project '+slug);
 const body=`<section class="page-hero small-hero"><div class="site-container"><a class="back-link" href="${path('projects/',base)}">← All projects</a><span class="kicker">PROJECT ${p.number} / ${esc(p.category.toUpperCase())}</span><div class="banner-label">${esc(p.status)}</div><h1>${esc(p.title)}</h1><p>${esc(p.detail)}</p></div></section><section class="section"><div class="site-container"><div class="placeholder-note"><strong>Reserved for a verified case study.</strong><p>The headings below are an editorial structure only. There are no invented results, clients or performance claims on this page.</p></div><div class="story-steps">${p.sections.map(([t,d],i)=>`<article><span class="tiny-number">0${i+1}</span><h2>${esc(t)}</h2><p>${esc(d)}</p></article>`).join('')}</div><a class="text-link" href="${path('projects/',base)}">← Back to selected work</a></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:p.title,description:p.summary,body,active:'work',base,canonical:'/projects/'+slug+'/'});
}
export function renderBlog(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">BLOG</span><h1>Thinking in <em>systems, not features.</em></h1><p>Practical perspectives on solving engineering problems, designing trustworthy data and making automation useful.</p></div></section><section class="section"><div class="site-container"><div class="post-grid">${posts.map(x=>postCard(x,base)).join('')}</div></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:'Blog',description:'Practical articles on measurement, cloud data engineering and trustworthy AI systems by Mayo Racek.',body,active:'blog',base,canonical:'/blog/'});
}
export function renderPost(slug,base='/'){
 const p=posts.find(x=>x.slug===slug);if(!p)throw new Error('Unknown post '+slug);
 const body=`<section class="page-hero small-hero"><div class="site-container"><a class="back-link" href="${path('blog/',base)}">← All writing</a><span class="kicker">${esc(p.category.toUpperCase())} / FIELD NOTE</span><h1>${esc(p.title)}</h1><p>${esc(p.excerpt)}</p></div></section><section class="section"><div class="site-container article-shell"><p class="article-intro">A practical engineering perspective. No confidential client details or unsupported performance claims.</p>${p.sections.map(([t,d],i)=>`<section class="article-outline"><span class="tiny-number">SECTION 0${i+1}</span><h2>${esc(t)}</h2><p>${esc(d)}</p></section>`).join('')}<a class="text-link" href="${path('blog/',base)}">← Return to the blog</a></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:p.title,description:p.excerpt,body,active:'blog',base,canonical:'/blog/'+slug+'/',og:'article'});
}
export function renderAbout(base='/'){
 const body=`<section class="page-hero about-hero"><div class="site-container about-hero-grid"><div><span class="kicker">ABOUT</span><h1>I work where data, systems and <em>decisions meet.</em></h1><p>I'm Mayo, a data engineer and consultant based in Slovakia. I've spent nearly two decades working with digital measurement, analytics and the engineering that makes both useful. Increasingly, that includes careful, practical AI automation.</p><p>I enjoy the point where a technical question turns out to be a business question: what are we measuring, why does it matter and what needs to change?</p><a class="btn btn-outline about-cv" href="${path('resume/',base)}">View my resume <span aria-hidden="true">↗</span></a></div><div class="about-photo"><img src="${path('mayo-portrait-cropped.webp',base)}" alt="Portrait of Mayo Racek"/></div></div></section><section class="section"><div class="site-container"><div class="approach-grid"><div><span class="kicker">HOW I THINK</span><h2>Clear decisions. Work you can verify.</h2></div><div class="approach-copy"><p>I prefer a clear problem statement, real evidence and an implementation someone else can understand after I leave. I ask awkward questions about definitions, consent, ownership, reliability and cost because those details usually decide whether the solution lasts.</p><p>Most of my work lives around Google Cloud, BigQuery, Dataform, GTM, GA4, Python and the connections between them. I use AI tools where they help, but not as a substitute for engineering judgment.</p></div></div></div></section><section class="section section-muted"><div class="site-container">${sectionHead('FOCUS','What I spend my time on')}<div class="service-grid">${services.map(s=>serviceCard(s,base)).join('')}</div></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:'About',description:'Mayo Racek is a Slovakia-based Data Engineer and AI Architect focused on measurement, BigQuery and practical AI systems.',body,active:'about',base,canonical:'/about/'});
}

export function renderResume(base='/'){
 const body='<section class="page-hero resume-hero"><div class="site-container"><span class="kicker">RESUME</span><h1>Experienced in the details. <em>Focused on the outcome.</em></h1><p>I have spent more than 17 years working across digital measurement, data engineering and analytics. My focus is building systems teams can understand, trust and use.</p><div class="hero-actions"><a class="btn btn-primary" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download CV (PDF) <span aria-hidden="true">↓</span></a><a class="btn btn-outline" href="'+profile.linkedin+'" target="_blank" rel="noopener noreferrer">View LinkedIn <span aria-hidden="true">↗</span></a></div></div></section>'+
 '<section class="section resume-summary"><div class="site-container"><div class="resume-intro"><span class="kicker">WHAT I BRING</span><h2>Measurement, data engineering and practical delivery.</h2><p>I work between business teams, developers and analysts. That includes defining a measurement strategy, improving collection quality, building cloud data products and making technical decisions easy to explain.</p></div><div class="resume-expertise"><div><span class="resume-tag">01 / MEASUREMENT</span><h3>Web & App architecture</h3><p>Event frameworks, GA4, GTM, server-side tagging, consent and enterprise QA.</p></div><div><span class="resume-tag">02 / ENGINEERING</span><h3>Cloud data products</h3><p>BigQuery, Dataform, reusable models, validation, reliability and cost awareness.</p></div><div><span class="resume-tag">03 / APPLICATION</span><h3>Analytics and automation</h3><p>Business KPIs, analysis, reporting and bounded AI workflows.</p></div></div></div></section>'+
 '<section class="section section-muted"><div class="site-container"><div class="section-head"><div><span class="kicker">EXPERIENCE</span><h2>Selected professional experience.</h2><p>Roles and responsibilities summarised from my professional CV. Client-specific implementation details are intentionally excluded.</p></div></div><div class="resume-timeline"><article><time>2023 - Present</time><div><h3>Founder & Senior Data Consultant</h3><p>Independent consulting through Powerful Data s.r.o., supporting measurement, cloud data engineering, attribution, analytics and reporting projects.</p></div></article><article><time>2021 - Present</time><div><h3>Senior Technical Data Analyst & Analytics Lead</h3><p>International consulting engagement spanning measurement frameworks, consent-aware collection, validation, BigQuery models and cross-functional delivery.</p></div></article><article><time>2020 - 2021</time><div><h3>Senior Technical Analyst</h3><p>Enterprise analytics implementation, tracking quality assurance and reporting.</p></div></article><article><time>2016 - 2020</time><div><h3>Digital Analytics Consultant</h3><p>Measurement frameworks, experimentation, dashboarding and stakeholder workshops.</p></div></article><article><time>2010 - 2016</time><div><h3>Digital Marketing & Analytics Roles</h3><p>Analytics, SEO, conversion measurement and digital marketing advisory work.</p></div></article></div></div></section>'+
 '<section class="section resume-bottom"><div class="site-container resume-last"><div><span class="kicker">EDUCATION & WORKING MODEL</span><h2>Business context matters as much as the stack.</h2><p>MBA in Marketing, City University of Seattle. Business administration and management background. Based in Slovakia, collaborating remotely with international teams in CET.</p></div><div class="resume-download"><h3>Want the full background?</h3><p>Download a public version of my CV, or send a message about a specific role or project.</p><a class="btn btn-primary" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download CV (PDF) <span aria-hidden="true">↓</span></a></div></div></section>'+contactCta(base,{compact:true});
 return shell({title:'Resume',description:'Professional experience of Mayo Racek in enterprise Web & App measurement, cloud data engineering and analytics.',body,active:'resume',base,canonical:'/resume/'});
}

export function renderContact(base='/'){
 const body=`<section class="page-hero contact-hero"><div class="site-container"><span class="kicker">CONTACT</span><h1>Tell me what you want to <em>achieve.</em></h1><p>Starting something new? Trying to understand your customers, improve reporting or reduce manual work? You do not need a technical brief. Tell me what you want to change and we can discuss the options.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('start/',base)}">Share a short project brief <span aria-hidden="true">↗</span></a></div><div class="contact-options"><a class="contact-option" href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer"><span>BEST PLACE TO REACH ME</span><strong>Message me on LinkedIn</strong><span class="option-arrow">↗</span></a><a class="contact-option" href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer"><span>SEE MY CODE</span><strong>Find me on GitHub</strong><span class="option-arrow">↗</span></a><a class="contact-option" href="${path('resume/',base)}"><span>PROFESSIONAL BACKGROUND</span><strong>View resume and download CV</strong><span class="option-arrow">↗</span></a></div><p class="contact-footnote">Based in Slovakia. Happy to discuss remote collaboration with teams elsewhere.</p></div></section>`;
 return shell({title:'Contact',description:'Start a conversation with Mayo Racek about a real measurement, data engineering or AI automation problem.',body,active:'contact',base,canonical:'/contact/'});
}
export function renderStart(base='/'){
 const body="<section class=\"page-hero intake-hero\"><div class=\"site-container\"><span class=\"kicker\">START A CONVERSATION</span><h1>What would you like to <em>improve?</em></h1><p>You do not need to know which tools to use. Tell me what your business needs, and I can help explore a sensible approach.</p></div></section>\n<section class=\"section intake-section\"><div class=\"site-container intake-layout\"><div class=\"intake-aside\"><span class=\"kicker\">A SHORT PROJECT BRIEF</span><h2>One minute is enough to get started.</h2><p>Pick the closest challenge and share a few lines. I work with new implementations, growing teams and complex enterprise environments.</p><div class=\"intake-points\"><span>01 &nbsp; Start with the outcome</span><span>02 &nbsp; No technical specification</span><span>03 &nbsp; No automatic data collection</span></div><p class=\"intake-caution\">Please do not include customer records, passwords, confidential files or personal data in your first message.</p></div>\n<div class=\"intake-panel\"><form id=\"project-brief\"><fieldset class=\"intake-fieldset\"><legend>What is your main challenge?</legend>\n<label class=\"intake-choice\"><input required type=\"radio\" name=\"need\" value=\"Set up or improve Web & App measurement\"><span>Set up or improve Web & App measurement</span></label>\n<label class=\"intake-choice\"><input type=\"radio\" name=\"need\" value=\"Combine data for better reporting and analysis\"><span>Combine data for reporting and analysis</span></label>\n<label class=\"intake-choice\"><input type=\"radio\" name=\"need\" value=\"Activate data in marketing or CRM tools\"><span>Use data in marketing or CRM tools</span></label>\n<label class=\"intake-choice\"><input type=\"radio\" name=\"need\" value=\"Prepare data for AI or automate work\"><span>Prepare data for AI or automate work</span></label>\n<label class=\"intake-choice\"><input type=\"radio\" name=\"need\" value=\"Not sure yet - want to discuss\"><span>Not sure yet — I would like advice</span></label></fieldset>\n<div class=\"intake-input\"><label for=\"brief-details\">What are you hoping to achieve?</label><textarea id=\"brief-details\" name=\"details\" rows=\"5\" minlength=\"12\" maxlength=\"1100\" required placeholder=\"For example, sales and website data are scattered across tools. We need a reliable view of performance and a way to use the data in our CRM.\"></textarea><span class=\"intake-hint\">A few sentences are enough. Please avoid sensitive information.</span></div>\n<div class=\"intake-grid\"><div class=\"intake-input\"><label for=\"brief-stage\">Where are you in the process? <span>(optional)</span></label><select id=\"brief-stage\" name=\"stage\"><option value=\"\">Choose a stage</option><option>Exploring options</option><option>Starting something new</option><option>Improving an existing setup</option><option>Scaling across teams or markets</option></select></div>\n<div class=\"intake-input\"><label for=\"brief-company\">Company <span>(optional)</span></label><input id=\"brief-company\" type=\"text\" name=\"company\" autocomplete=\"organization\" maxlength=\"80\" placeholder=\"Company or team\"></div></div>\n<div class=\"intake-actions\"><button class=\"btn btn-primary\" type=\"submit\">Prepare email to Mayo <span aria-hidden=\"true\">↗</span></button><button class=\"btn btn-outline\" type=\"button\" id=\"copy-brief\">Copy brief instead</button></div>\n<p id=\"brief-feedback\" class=\"intake-feedback\" role=\"status\" aria-live=\"polite\"></p>\n<p class=\"intake-notice\">This site does not submit or store your answers. <strong>Prepare email</strong> opens a draft in your own email app; you decide whether to send it. You can also <a href=\"__CONTACT__\">contact me directly</a>.</p></form></div></div></section>".replaceAll('__CONTACT__',path('contact/',base))+'<script defer src="'+path('intake.js',base)+'"></script>';
 return shell({title:'Share a project brief',description:'Tell Mayo Racek what you need to improve in measurement, data activation, reporting or AI. Prepare a short email without sharing data through a web form.',body,active:'start',base,canonical:'/start/'});
}

export function renderAria(base='/'){
 const body="<section class=\"page-hero small-hero\"><div class=\"site-container\"><a class=\"back-link\" href=\"__WORK__\">← Back to work</a><span class=\"kicker\">ENGINEERING LAB · IN DEVELOPMENT</span><h1>Aria: making GTM operations <em>less repetitive and more controlled.</em></h1><p>The problem is not a shortage of tags. It is the effort and risk involved in reviewing containers, understanding changes and validating releases across complex measurement setups.</p></div></section><section class=\"section\"><div class=\"site-container\"><div class=\"story-steps\"><article><span class=\"tiny-number\">01 / PROBLEM</span><h2>Reviews consume engineering time</h2><p>Routine GTM checks can require manually inspecting tags, triggers, variables, consent dependencies and versions. Repeating those checks makes consistency and traceability harder as implementations grow.</p></article><article><span class=\"tiny-number\">02 / APPROACH</span><h2>Assist the engineer, not bypass them</h2><p>Aria explores structured container inspection, understandable findings and bounded, policy-aware change proposals. The intended workflow keeps high-impact actions under explicit human review and leaves an evidence trail.</p></article><article><span class=\"tiny-number\">03 / QUALITY GATES</span><h2>Evidence before the production label</h2><p>For publication as a finished project, Aria must demonstrate reproducible tests, consent and permissions checks, injection and refusal evaluations, deterministic workflow boundaries, safe rollback and an agreed UAT outcome. Capabilities will be documented only after verification.</p></article><article><span class=\"tiny-number\">04 / CURRENT STATUS</span><h2>Active engineering, not a client case study</h2><p>This is an in-development initiative. No production deployment, financial saving, autonomy level or UAT completion is claimed on this page.</p></article></div><a class=\"text-link\" href=\"__BLOG__\">Read the engineering principles behind the work <span aria-hidden=\"true\">↗</span></a></div></section>".replaceAll('__WORK__',path('projects/',base)).replaceAll('__BLOG__',path('blog/',base));
 return shell({title:'Aria | Engineering Lab',description:'Aria explores governed AI assistance for repetitive Google Tag Manager audits and change-review work. In development.',body,active:'work',base,canonical:'/lab/aria/'});
}

export function renderNotFound(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">404 / PAGE NOT FOUND</span><h1>That page isn't <em>here.</em></h1><p>Try the homepage or head straight to services, work or the blog.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('',base)}">Go home <span aria-hidden="true">↗</span></a></div></div></section>`;
 return shell({title:'Page not found',body,active:'home',base});
}
