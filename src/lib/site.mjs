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
    "fit": "Product and marketing teams seeking dependable digital measurement.",
    "process": [
      [
        "Define",
        "Agree on the business questions, customer journeys and permitted data."
      ],
      [
        "Design",
        "Specify events, parameters, consent rules and acceptance criteria."
      ],
      [
        "Implement",
        "Build suitable web, app and server-side collection paths."
      ],
      [
        "Validate",
        "QA real journeys, reconcile delivery and document ownership."
      ]
    ]
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
    "fit": "Teams wanting one trustworthy view across previously disconnected sources.",
    "process": [
      [
        "Discover",
        "Understand the sources, business questions and data quality."
      ],
      [
        "Connect",
        "Ingest data securely from events, APIs and business systems."
      ],
      [
        "Model",
        "Create tested transformations, metrics and reliable data products."
      ],
      [
        "Deliver",
        "Enable analysis, visualization and governed activation."
      ]
    ]
  },
  {
    "slug": "applied-ai-systems",
    "number": "03",
    "icon": "spark",
    "name": "Activate & Automate",
    "short": "Turn trusted data into business action with activation, responsible AI agents and automation.",
    "teaser": "Data activation, AI-ready foundations and controlled automation grounded in governance, evaluation and human oversight.",
    "headline": "Turn trusted data into useful action.",
    "intro": "Make your data useful beyond dashboards. I connect approved data to operational tools and design purposeful AI-assisted workflows, with permissions, evaluation, human oversight and cost controls considered from the start. The scope is defined and validated for each engagement.",
    "offerings": [
      [
        "Data activation",
        "Deliver permitted data to CRM, customer engagement and business systems."
      ],
      [
        "AI agents & automation",
        "Design bounded agent workflows and tools around real operational use cases."
      ],
      [
        "Trust, evaluation & cost",
        "Plan governance, safety controls, human approval, monitoring and token or inference cost."
      ]
    ],
    "fit": "Teams ready to use governed data for activation and practical automation.",
    "process": [
      [
        "Identify",
        "Select a useful outcome and the right automation boundary."
      ],
      [
        "Prepare",
        "Validate data, permissions and safe tool access for AI."
      ],
      [
        "Build",
        "Combine structured workflows and AI agents where appropriate."
      ],
      [
        "Evaluate",
        "Check quality, safety, human review, observability and cost."
      ]
    ]
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
function contactCta(base,{compact=false}={}){return '<section class="contact-band '+(compact?'compact':'')+'" id="contact"><div class="site-container contact-band-inner"><div><span class="kicker">START A CONVERSATION</span><h2>Have something you would like to explore?</h2><p>A short description is enough. There is no need to know the technical solution yet.</p></div><a class="btn btn-primary" data-track-event="ctaClicked" data-track-id="contactStartConversation" data-track-location="contactBand" href="'+path('contact/',base)+'#enquiry">Tell Me What You Need <span aria-hidden="true">↗</span></a></div></section>';}
function shell({title,description,body,active='home',base='/',canonical='',og='website'}){
  const fullTitle= title==='Home'?'Mayo Racek | Data & AI Solutions Architect':`${title} | Mayo Racek`;
  const metaDesc=description||'Cloud data engineering, measurement architecture and governed AI automation. Solutions designed around real problems.';
  const fullUrl=`https://mayoracek.com${title==='Page not found'?'/404/':canonical||'/'}`;
  const noindex = title==='Page not found' || canonical==='/projects/' || canonical==='/lab/aria/' || canonical==='/start/' || /^\/projects\/[^/]+\/$/.test(canonical);
  const pagePath = title==='Page not found'?'/404/':canonical||'/';
  const segments = pagePath.split('/').filter(Boolean);
  const pageType = title==='Page not found' ? 'notFound' : !segments.length ? 'home' : segments[0] === 'services' && segments.length > 1 ? 'serviceDetail' : segments[0] === 'blog' && segments.length > 1 ? 'article' : segments[0] === 'lab' ? 'labProject' : segments[0];
  const pageEvent = {event:'pageViewed',schemaVersion:'1.1.0',page:{pageType,pagePath,pageTitle:title,language:'en',canonicalUrl:fullUrl}};
  // Data layer messages remain local until a separately governed collection integration is added.
  const dataLayerInit = '<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push('+JSON.stringify(pageEvent).replace(/</g,'\\u003c')+');</script>';
  const homeUrl='https://mayoracek.com/';
  const personId=homeUrl+'#person';
  const structured=[{
    '@type':'Person','@id':personId,name:profile.name,url:homeUrl,jobTitle:profile.role,
    sameAs:[profile.linkedin,profile.github,profile.x],
    knowsAbout:['Data engineering','Digital measurement','BigQuery','Analytics engineering','Artificial intelligence','Agentic automation']
  }];
  if(canonical==='/' || canonical==='')structured.push({'@type':'WebSite','@id':homeUrl+'#website',url:homeUrl,name:'Mayo Racek',inLanguage:'en'});
  const service=services.find(item=>canonical==='/services/'+item.slug+'/');
  if(service){
    structured.push({'@type':'Service','@id':fullUrl+'#service',name:service.name,description:service.teaser,url:fullUrl,provider:{'@id':personId}});
    structured.push({'@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:homeUrl},
      {'@type':'ListItem',position:2,name:'Services',item:homeUrl+'services/'},
      {'@type':'ListItem',position:3,name:service.name,item:fullUrl}
    ]});
  }
  if(canonical==='/about/')structured.push({'@type':'ProfilePage',name:'About Mayo Racek',url:fullUrl,mainEntity:{'@id':personId}});
  const article=posts.find(item=>canonical==='/blog/'+item.slug+'/');
  if(article){
    structured.push({'@type':'Article',headline:article.title,description:article.excerpt,mainEntityOfPage:fullUrl,
      inLanguage:'en',author:{'@id':personId},publisher:{'@id':personId}});
    structured.push({'@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:homeUrl},
      {'@type':'ListItem',position:2,name:'Blog',item:homeUrl+'blog/'},
      {'@type':'ListItem',position:3,name:article.title,item:fullUrl}
    ]});
  }
  const jsonLd='<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':structured}).replace(/</g,'\\u003c')+'</script>';

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="theme-color" content="#071325"/><meta name="description" content="${esc(metaDesc)}"/>${noindex?'<meta name="robots" content="noindex, follow"/>':''}<meta property="og:type" content="${esc(og)}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(metaDesc)}"/><meta property="og:url" content="${esc(fullUrl)}"/><link rel="canonical" href="${esc(fullUrl)}"/><meta name="twitter:card" content="summary"/><meta name="twitter:creator" content="@MayoRacek"/>${jsonLd}${dataLayerInit}<link rel="icon" href="${path('favicon.svg',base)}" type="image/svg+xml"/><link rel="stylesheet" href="${path('styles.css',base)}"/><title>${esc(fullTitle)}</title></head><body><a class="skip-link" href="#main-content">Skip to content</a>${header(active,base)}<main id="main-content">${body}</main>${footer(base)}<script defer src="${path('site-analytics.js',base)}"></script><script>(function(){const b=document.querySelector('.menu-toggle');const n=document.querySelector('.site-nav');if(b&&n){const close=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')};b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('open',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();b.focus()}});document.addEventListener('click',e=>{if(!b.contains(e.target)&&!n.contains(e.target))close()})}})();</script></body></html>`;
}
function serviceCard(s,base){return `<a class="service-card" data-track-event="serviceSelected" data-track-location="servicesGrid" data-track-id="${esc(s.slug)}" href="${path(`services/${s.slug}/`,base)}"><div class="service-icon">${icon(s.icon)}</div><div class="service-number">${s.number}</div><h3>${esc(s.name)}</h3><p>${esc(s.short)}</p><span class="card-link">Explore ${esc(s.name)} <span aria-hidden="true">↗</span></span></a>`;}
function projectCard(p,base){return `<a class="project-card" href="${path(`projects/${p.slug}/`,base)}"><div class="project-art art-${p.theme}"><span class="art-serial">${p.number} / WORK</span><span class="art-glyph" aria-hidden="true">${p.theme==='cyan'?'◌':p.theme==='blue'?'▧':'✳'}</span><span class="project-category">${esc(p.category)}</span></div><div class="project-card-body"><span class="status-label">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="card-link">See what’s planned <span aria-hidden="true">↗</span></span></div></a>`;}
function postCard(p,base){return `<a class="post-card" data-track-event="articleSelected" data-track-location="blogGrid" data-track-id="${esc(p.slug)}" href="${path(`blog/${p.slug}/`,base)}"><div class="post-topline"><span>${esc(p.category)}</span><span class="status-label">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="card-link">Read the article <span aria-hidden="true">↗</span></span></a>`;}
function sectionHead(kicker,title,sub='',link='',linkText='',base='/'){return `<div class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${title}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div>${link?`<a class="section-link" href="${path(link,base)}">${esc(linkText)} <span aria-hidden="true">↗</span></a>`:''}</div>`;}
function dataJourney(base='/'){
 const stages=[{"id":"collect","number":"01","label":"Collect","mini":"Digital measurement","heading":"Capture the right information.","description":"Create a reliable starting point with clear events, first-party measurement, consent-aware collection and validation.","service":"measurement-architecture","serviceName":"Collect & Measure","x":8,"y":61,"mx":25,"my":8},{"id":"connect","number":"02","label":"Connect","mini":"Systems and APIs","heading":"Bring your data together.","description":"Connect websites, applications and operational tools through purposeful ingestion and integration.","service":"cloud-data-products","serviceName":"Connect & Analyze","x":25,"y":34,"mx":75,"my":25},{"id":"transform","number":"03","label":"Transform","mini":"Trusted models","heading":"Make data consistent and trustworthy.","description":"Build documented models, shared definitions and automated quality checks that teams can rely on.","service":"cloud-data-products","serviceName":"Connect & Analyze","x":42,"y":69,"mx":25,"my":42},{"id":"analyze","number":"04","label":"Analyze","mini":"Decisions and insights","heading":"Understand what the data means.","description":"Connect analysis and visualization to the questions that matter to your team and the decisions you want to make.","service":"cloud-data-products","serviceName":"Connect & Analyze","x":59,"y":27,"mx":75,"my":59},{"id":"activate","number":"05","label":"Activate","mini":"Business action","heading":"Put insights into action.","description":"Make approved data available to CRM, marketing and operational systems with clear rules and ownership.","service":"applied-ai-systems","serviceName":"Activate & Automate","x":76,"y":69,"mx":25,"my":76},{"id":"automate","number":"06","label":"Automate","mini":"AI and workflows","heading":"Make useful work happen automatically.","description":"Design practical automation and bounded AI-agent workflows with evaluation, human oversight, security and cost visibility.","service":"applied-ai-systems","serviceName":"Activate & Automate","x":93,"y":32,"mx":75,"my":93}];
 const desktopSvg="<svg class=\"life-path life-path-desktop\" viewBox=\"0 0 1000 310\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M 80 190 C 162 190 156 105 250 105 S 344 214 420 214 S 510 84 590 84 S 678 214 760 214 S 850 100 930 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>";
 const mobileSvg="<svg class=\"life-path life-path-mobile\" viewBox=\"0 0 360 610\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"M 88 48 C 88 107 270 110 270 152 S 90 220 90 256 S 270 313 270 360 S 90 420 90 464 S 270 540 270 569\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>";
 const dots=stages.map((st,i)=>'<li class="life-stage" style="--step-x:'+st.x+'%;--step-y:'+st.y+'%;--mobile-x:'+st.mx+'%;--mobile-y:'+st.my+'%"><button type="button" class="life-step" data-life-step="'+st.id+'" aria-pressed="'+(i===0?'true':'false')+'" aria-controls="life-detail-'+st.id+'"><span class="life-step-number">'+st.number+'</span><strong>'+st.label+'</strong><span class="life-step-mini">'+st.mini+'</span></button></li>').join('');
 const panels=stages.map((st,i)=>'<article class="life-detail" id="life-detail-'+st.id+'" data-life-panel="'+st.id+'"'+(i?' hidden':'')+'><span class="kicker">'+st.number+' / '+st.label.toUpperCase()+'</span><h3>'+st.heading+'</h3><p>'+st.description+'</p><a class="life-detail-link" data-track-event="serviceSelected" data-track-id="'+st.service+'" data-track-location="dataLifecycle" href="'+path('services/'+st.service+'/',base)+'">Explore '+st.serviceName+' <span aria-hidden="true">↗</span></a></article>').join('');
 return '<section class="life-section" id="data-lifecycle" aria-labelledby="life-title"><div class="site-container"><div class="life-heading"><span class="kicker">FULL DATA LIFECYCLE</span><h2 id="life-title">From data to meaningful action.</h2><p>Select a stage to see how reliable information moves from collection to decisions, activation and intelligent automation.</p></div><div class="life-canvas">'+desktopSvg+mobileSvg+'<ol class="life-steps" aria-label="Select a data lifecycle stage">'+dots+'</ol></div><div class="life-panel" aria-live="polite">'+panels+'</div><p class="life-foundation">Quality · Privacy · Governance · Security · Cost awareness — throughout the lifecycle</p></div></section>';
}
export function renderHome(base='/'){
 const hero="<section class=\"hero\"><div class=\"hero-shine hero-shine-a\"></div><div class=\"hero-shine hero-shine-b\"></div><div class=\"site-container hero-grid\"><div class=\"hero-copy\"><div class=\"eyebrow\"><span class=\"eyebrow-rule\"></span>DATA ENGINEERING <span class=\"mid-dot\">·</span> ANALYTICS <span class=\"mid-dot\">·</span> AI</div><h1><span class=\"headline-desktop\">Designing data solutions to <em>empower your goals.</em></span><span class=\"headline-mobile\">Data solutions to <em>empower your goals.</em></span></h1><p class=\"hero-intro\">From data collection and cloud engineering to analytics and intelligent automation. I design connected solutions that help you turn information into action.</p><div class=\"hero-actions\"><a class=\"btn btn-primary\" data-track-event=\"ctaClicked\" data-track-id=\"heroExploreServices\" data-track-location=\"hero\" href=\"__SERVICES_URL__\">Explore Services <span aria-hidden=\"true\">↗</span></a><a class=\"btn btn-outline\" data-track-event=\"ctaClicked\" data-track-id=\"heroReadBlog\" data-track-location=\"hero\" href=\"__BLOG_URL__\">Read My Blog <span aria-hidden=\"true\">↗</span></a></div><div class=\"hero-signoff\"><span class=\"little-line\"></span><p>17+ years in data and analytics engineering.</p></div></div><div class=\"hero-visual\" aria-label=\"Portrait of Mayo Racek\"><div class=\"orb orb-a\"></div><div class=\"orb orb-b\"></div><div class=\"portrait-orbit orbit-one\"></div><div class=\"portrait-orbit orbit-two\"></div><div class=\"portrait-floor\"></div><img class=\"portrait\" src=\"__PORTRAIT__\" width=\"415\" height=\"643\" alt=\"Mayo Racek, data and AI solutions architect\"/></div></div><div class=\"hero-bottom-fade\"></div></section>".replaceAll('__SERVICES_URL__',path('services/',base)).replaceAll('__BLOG_URL__',path('blog/',base)).replaceAll('__PORTRAIT__',path('mayo-portrait-cropped.webp',base));
 return shell({title:'Home',description:'Mayo Racek designs connected data solutions, from collection and analytics to AI-ready data and practical automation.',body:hero+dataJourney(base)+contactCta(base,{compact:true})+'<script defer src="'+path('lifecycle.js',base)+'"></script>',active:'home',base});
}
export function renderServices(base='/'){
 const intro="<section class=\"page-hero small-hero\"><div class=\"site-container\"><span class=\"kicker\">SERVICES</span><h1>From collection to <em>action.</em></h1><p>Three connected ways to make your data more useful, from reliable measurement to analytics and intelligent automation.</p></div></section>";
 const list="<section class=\"section services-landing\"><div class=\"site-container\"><div class=\"service-grid\">__CARDS__</div><p class=\"service-foundation\">Every solution is built around quality, privacy, security and clear ownership.</p></div></section>".replaceAll('__CARDS__',services.map(s=>serviceCard(s,base)).join(''));
 return shell({title:'Data & AI Services',description:'Data collection, cloud data engineering, analytics, activation and intelligent automation services by Mayo Racek.',body:intro+list+contactCta(base,{compact:true}),active:'services',base,canonical:'/services/'});
}
export function renderService(slug,base='/'){
 const s=services.find(item=>item.slug===slug); if(!s)throw new Error('Unknown service '+slug);
 const steps=s.process.map(([heading,description],i)=>'<li class="process-step"><span class="process-number">'+String(i+1).padStart(2,'0')+'</span><div><h3>'+esc(heading)+'</h3><p>'+esc(description)+'</p></div></li>').join('');
 const outputs=s.offerings.map(([heading,description],i)=>'<article class="capability-card"><span class="capability-number">0'+(i+1)+'</span><h3>'+esc(heading)+'</h3><p>'+esc(description)+'</p></article>').join('');
 const hero='<section class="page-hero service-page-hero service-hero-v2"><div class="site-container"><a class="back-link" href="'+path('services/',base)+'">← Services</a><span class="kicker">'+esc(s.name.toUpperCase())+'</span><h1>'+esc(s.headline)+'</h1><p>'+esc(s.intro)+'</p></div></section>';
 const method='<section class="section service-method"><div class="site-container"><div class="journey-heading"><div><span class="kicker">HOW IT COMES TOGETHER</span><h2>A clear path from idea to delivery.</h2></div><p>A practical engineering process, adapted to the goal rather than a fixed platform.</p></div><ol class="process-timeline">'+steps+'</ol></div></section>';
 const capabilities='<section class="section service-capabilities"><div class="site-container"><div class="section-head"><div><span class="kicker">WHAT I CAN DELIVER</span><h2>Engineering that has a purpose.</h2></div></div><div class="capability-grid">'+outputs+'</div><div class="service-next"><p>Every engagement starts with your goal. Tell me what you have in mind and we can work out the best approach.</p><a class="btn btn-primary" data-track-event="ctaClicked" data-track-id="serviceStartConversation" data-track-location="serviceNext" href="'+path('contact/',base)+'#enquiry">Start a Conversation <span aria-hidden="true">↗</span></a></div></div></section>';
 return shell({title:s.name,description:s.teaser,body:hero+method+capabilities,active:'services',base,canonical:'/services/'+slug+'/'});
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
 const body=`<section class="page-hero small-hero"><div class="site-container"><a class="back-link" href="${path('blog/',base)}">← All writing</a><span class="kicker">${esc(p.category.toUpperCase())} / FIELD NOTE</span><h1>${esc(p.title)}</h1><p>${esc(p.excerpt)}</p></div></section><section class="section"><div class="site-container article-shell"><p class="article-byline">By Mayo Racek · Engineering field note</p><p class="article-intro">A practical engineering perspective. No confidential client details or unsupported performance claims.</p>${p.sections.map(([t,d],i)=>`<section class="article-outline"><span class="tiny-number">SECTION 0${i+1}</span><h2>${esc(t)}</h2><p>${esc(d)}</p></section>`).join('')}<a class="text-link" href="${path('blog/',base)}">← Return to the blog</a></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:p.title,description:p.excerpt,body,active:'blog',base,canonical:'/blog/'+slug+'/',og:'article'});
}
export function renderAbout(base='/'){
 const body="<section class=\"page-hero about-hero about-new\"><div class=\"site-container about-hero-grid\"><div class=\"about-new-copy\"><span class=\"kicker\">ABOUT ME</span><h1>Hi, I'm Mayo. <em>Great to meet you.</em></h1><p>I'm a data and AI solutions architect based in Slovakia. For more than 17 years, I've worked across digital measurement, cloud data engineering and analytics. What I enjoy most is connecting business ideas with practical engineering and seeing a solution become genuinely useful.</p><p>I'm curious by nature. I like learning new things, improving the way I work and sharing useful knowledge with people around me. Today, that includes exploring how AI agents can work safely, reliably and with a measurable purpose.</p><div class=\"hero-actions\"><a class=\"btn btn-primary\" data-track-event=\"resumeDownloadClicked\" data-track-id=\"aboutDownloadResume\" data-track-location=\"aboutHero\" href=\"__CV__\" download=\"Mayo_Racek_CV.pdf\">Download My CV <span aria-hidden=\"true\">↓</span></a><a class=\"btn btn-outline\" href=\"__RESUME__\">View My Experience <span aria-hidden=\"true\">↗</span></a></div></div><div class=\"about-photo\"><img src=\"__PHOTO__\" alt=\"Portrait of Mayo Racek\" width=\"415\" height=\"643\"/></div></div></section><section class=\"section about-human\"><div class=\"site-container about-human-grid\"><div><span class=\"kicker\">BEYOND THE WORK</span><h2>Family, football and continuous learning.</h2></div><div><p>I'm also a husband and father of three. Family comes first, and football is a passion I have always enjoyed. Both remind me of the value of teamwork, patience and getting a little better every day.</p><p>I bring the same mindset to my work. I value honest conversations, thoughtful solutions, good documentation and helping others when I can. I believe sharing knowledge makes teams stronger.</p></div></div></section><section class=\"section about-approach\"><div class=\"site-container\"><div class=\"section-head\"><div><span class=\"kicker\">HOW I WORK</span><h2>Listen, build, verify and share.</h2></div></div><div class=\"about-principles\"><article><span>01</span><h3>Understand the goal</h3><p>Start with the decision or outcome, then agree on what success looks like.</p></article><article><span>02</span><h3>Engineer responsibly</h3><p>Make quality, privacy, security and maintainability part of the design.</p></article><article><span>03</span><h3>Keep learning together</h3><p>Document the work, share the reasoning and leave something others can build on.</p></article></div><div class=\"about-next\"><a class=\"text-link\" href=\"__BLOG__\">Read My Blog <span aria-hidden=\"true\">↗</span></a><a class=\"text-link\" href=\"__CONTACT__\">Get in Touch <span aria-hidden=\"true\">↗</span></a></div></div></section>".replaceAll('__CV__',path('Mayo_Racek_CV.pdf',base)).replaceAll('__RESUME__',path('resume/',base)).replaceAll('__PHOTO__',path('mayo-portrait-cropped.webp',base)).replaceAll('__BLOG__',path('blog/',base)).replaceAll('__CONTACT__',path('contact/',base)+'#enquiry');
 return shell({title:'About Me',description:'Meet Mayo Racek, a Slovakia-based data and AI solutions architect, father of three and football enthusiast who enjoys engineering, learning and sharing knowledge.',body,active:'about',base,canonical:'/about/'});
}
export function renderResume(base='/'){
 const experiences=[
  ['2023 - Present','Founder & Senior Data Consultant','Powerful Data s.r.o.','Independent consultancy across measurement architecture, cloud data engineering, attribution, analytics and reporting.'],
  ['2021 - Present','Senior Technical Data Analyst & Analytics Lead','International consulting','Enterprise data collection frameworks, consent controls, QA, analytical models and cross-team technical delivery.'],
  ['2020 - 2021','Senior Technical Analyst','Enterprise analytics','Implementation, measurement quality assurance, audits and reporting.'],
  ['2016 - 2020','Digital Analytics Consultant','Data and measurement consulting','Measurement frameworks, KPIs, experimentation and stakeholder workshops.'],
  ['2014 - 2016','Digital Analytics & Marketing Specialist','Digital analytics','Digital performance reporting, marketing and conversion measurement.'],
  ['2010 - 2014','Independent Digital Marketing Consultant','Small and mid-sized businesses','SEO, website analytics, conversion improvement and advisory work.']
 ];
 const capabilities=[
  ['Measurement Architecture','GA4, GTM, web & server-side tracking, event design, data layer, consent and QA.'],
  ['Cloud Data Engineering','BigQuery, Dataform, SQL modelling, pipelines, data quality and monitoring.'],
  ['Analytics & Activation','Business KPIs, Looker Studio, Tableau, customer data integration and operational insights.'],
  ['AI & Automation','Python, APIs, Google Cloud, agent workflows, evaluation, governance and cost awareness.']
 ];
 const hero='<section class="resume-v2-hero"><div class="site-container resume-v2-hero-inner"><div class="resume-v2-copy"><span class="kicker">PROFESSIONAL RESUME</span><h1>Mayo Racek</h1><p class="resume-v2-role">Data &amp; AI Solutions Architect</p><p class="resume-v2-intro">Designing and delivering reliable data solutions, from digital measurement and cloud data platforms to analytics and practical AI automation.</p><div class="resume-v2-meta"><span>17+ years in data and analytics</span><span>Slovakia · International collaboration</span></div><div class="hero-actions"><a class="btn btn-primary" data-track-event="resumeDownloadClicked" data-track-id="resumeHeroDownload" data-track-location="resumeHero" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download Resume (PDF) <span aria-hidden="true">↓</span></a><a class="btn btn-outline" href="'+profile.linkedin+'" target="_blank" rel="noopener noreferrer">LinkedIn Profile <span aria-hidden="true">↗</span></a></div></div><div class="resume-v2-photo"><img src="'+path('mayo-portrait-cropped.webp',base)+'" alt="Portrait of Mayo Racek" width="415" height="643"/></div></div></section>';
 const intro='<section class="section resume-v2-section"><div class="site-container"><div class="section-head"><div><span class="kicker">EXPERTISE</span><h2>From architecture to implementation.</h2><p>I work across business goals, engineering decisions and operational quality. The tools support the solution, not the other way around.</p></div></div><div class="resume-v2-expertise">'+capabilities.map(([name,description],i)=>'<article><span class="resume-v2-id">0'+(i+1)+'</span><h3>'+esc(name)+'</h3><p>'+esc(description)+'</p></article>').join('')+'</div></div></section>';
 const experience='<section class="section resume-v2-experience"><div class="site-container"><div class="section-head"><div><span class="kicker">CAREER</span><h2>Professional experience.</h2><p>Selected roles and responsibilities. Confidential client-specific implementation details are intentionally omitted.</p></div></div><ol class="career-timeline">'+experiences.map(([period,role,org,description])=>'<li><span class="career-date">'+esc(period)+'</span><div class="career-content"><h3>'+esc(role)+'</h3><span class="career-company">'+esc(org)+'</span><p>'+esc(description)+'</p></div></li>').join('')+'</ol></div></section>';
 const last='<section class="section resume-v2-education"><div class="site-container resume-education-grid"><div><span class="kicker">EDUCATION</span><h2>Business context and engineering depth.</h2><p><strong>MBA in Marketing</strong> · City University of Seattle (2010–2012)</p><p>Bachelor degree in Business Administration and Management (2006–2009)</p></div><div class="resume-education-action"><span class="kicker">DOWNLOAD</span><h3>Take the complete CV with you.</h3><p>A concise two-page PDF with the same career history and technical focus.</p><a class="btn btn-primary" data-track-event="resumeDownloadClicked" data-track-id="resumeBottomDownload" data-track-location="resumeEducation" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download Resume (PDF) <span aria-hidden="true">↓</span></a></div></div></section>';
 return shell({title:'Resume',description:'Mayo Racek: Data and AI Solutions Architect with more than 17 years in measurement, BigQuery, data engineering, analytics and automation.',body:hero+intro+experience+last,active:'resume',base,canonical:'/resume/'});
}

function enquiryForm(base='/'){return "<section class=\"section enquiry-section\" id=\"enquiry\"><div class=\"site-container enquiry-layout\"><div class=\"enquiry-intro\"><span class=\"kicker\">A SIMPLE INTRODUCTION</span><h2>What are you working on?</h2><p>Choose a topic and tell me a little about your idea. If none fits, choose <strong>Other</strong>. You don't need a technical specification.</p><p class=\"enquiry-explainer\">This prepares an email draft, not an automatic submission. You review and send it in your own email app.</p></div><div class=\"enquiry-card\"><form id=\"project-brief\"><div class=\"enquiry-field\"><label for=\"brief-need\">What would you like help with?</label><select id=\"brief-need\" name=\"need\" required><option value=\"\">Choose a topic</option><option value=\"collect\">Data collection and measurement</option><option value=\"connect\">Data engineering and analytics</option><option value=\"activate\">Data activation, AI agents and automation</option><option value=\"unsure\">Not sure yet</option><option value=\"other\">Other</option></select></div><div class=\"enquiry-field\"><label for=\"brief-details\">Tell me a little about your idea</label><textarea id=\"brief-details\" name=\"details\" rows=\"4\" minlength=\"8\" maxlength=\"1400\" required placeholder=\"A few sentences about what you want to achieve are enough.\"></textarea><span class=\"enquiry-hint\">Please don't include customer records, passwords or confidential information.</span></div><div class=\"enquiry-actions\"><button class=\"btn btn-primary\" type=\"submit\">Open Email Draft <span aria-hidden=\"true\">↗</span></button><button type=\"button\" id=\"copy-brief\" class=\"enquiry-copy\">Copy Message</button></div><p class=\"enquiry-feedback\" id=\"brief-feedback\" role=\"status\" aria-live=\"polite\"></p><p class=\"enquiry-privacy\">Your message isn't sent or stored by this website. Your email app handles sending when you choose to send it.</p></form></div></div></section>"+'<script defer src="'+path('intake.js',base)+'"></script>';}

export function renderContact(base='/'){
 const hero="<section class=\"page-hero contact-hero contact-new\"><div class=\"site-container\"><span class=\"kicker\">CONTACT</span><h1>Let's talk about <em>your next idea.</em></h1><p>Whether you have a defined project, a question or an idea you're exploring, I'd be glad to hear from you.</p><div class=\"contact-shortcuts\"><a href=\"mailto:me@mayoracek.com\" data-track-event=\"contactMethodSelected\" data-track-id=\"directEmail\" data-track-location=\"contactHero\">Email me directly <span aria-hidden=\"true\">↗</span></a><a href=\"__LINKEDIN__\" target=\"_blank\" rel=\"noopener noreferrer\">Message me on LinkedIn <span aria-hidden=\"true\">↗</span></a></div></div></section>".replaceAll('__LINKEDIN__',esc(profile.linkedin));
 return shell({title:'Contact',description:'Contact Mayo Racek about data collection, cloud data engineering, analytics, AI agents or a new idea. Select a topic or write your own.',body:hero+enquiryForm(base),active:'contact',base,canonical:'/contact/'});
}
export function renderStart(base='/'){
 const body='<section class="page-hero small-hero"><div class="site-container"><span class="kicker">CONTACT</span><h1>Tell me what you <em>have in mind.</em></h1><p>Choose a topic or select Other and describe your idea in a sentence or two.</p></div></section>'+enquiryForm(base);
 return shell({title:'Start a Conversation',description:'Choose a topic or describe your idea to Mayo Racek. The form prepares an email without collecting personal data on the website.',body,active:'contact',base,canonical:'/start/'});
}
export function renderAria(base='/'){
 const body="<section class=\"page-hero small-hero\"><div class=\"site-container\"><a class=\"back-link\" href=\"__WORK__\">← Back to work</a><span class=\"kicker\">ENGINEERING LAB · IN DEVELOPMENT</span><h1>Aria: making GTM operations <em>less repetitive and more controlled.</em></h1><p>The problem is not a shortage of tags. It is the effort and risk involved in reviewing containers, understanding changes and validating releases across complex measurement setups.</p></div></section><section class=\"section\"><div class=\"site-container\"><div class=\"story-steps\"><article><span class=\"tiny-number\">01 / PROBLEM</span><h2>Reviews consume engineering time</h2><p>Routine GTM checks can require manually inspecting tags, triggers, variables, consent dependencies and versions. Repeating those checks makes consistency and traceability harder as implementations grow.</p></article><article><span class=\"tiny-number\">02 / APPROACH</span><h2>Assist the engineer, not bypass them</h2><p>Aria explores structured container inspection, understandable findings and bounded, policy-aware change proposals. The intended workflow keeps high-impact actions under explicit human review and leaves an evidence trail.</p></article><article><span class=\"tiny-number\">03 / QUALITY GATES</span><h2>Evidence before the production label</h2><p>For publication as a finished project, Aria must demonstrate reproducible tests, consent and permissions checks, injection and refusal evaluations, deterministic workflow boundaries, safe rollback and an agreed UAT outcome. Capabilities will be documented only after verification.</p></article><article><span class=\"tiny-number\">04 / CURRENT STATUS</span><h2>Active engineering, not a client case study</h2><p>This is an in-development initiative. No production deployment, financial saving, autonomy level or UAT completion is claimed on this page.</p></article></div><a class=\"text-link\" href=\"__BLOG__\">Read the engineering principles behind the work <span aria-hidden=\"true\">↗</span></a></div></section>".replaceAll('__WORK__',path('projects/',base)).replaceAll('__BLOG__',path('blog/',base));
 return shell({title:'Aria | Engineering Lab',description:'Aria explores governed AI assistance for repetitive Google Tag Manager audits and change-review work. In development.',body,active:'work',base,canonical:'/lab/aria/'});
}

export function renderNotFound(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">404 / PAGE NOT FOUND</span><h1>That page isn't <em>here.</em></h1><p>Try the homepage or head straight to services, work or the blog.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('',base)}">Go home <span aria-hidden="true">↗</span></a></div></div></section>`;
 return shell({title:'Page not found',body,active:'home',base});
}
