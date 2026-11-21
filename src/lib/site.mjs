/** Mayo Racek site content and HTML renderers.
 *  Single source of truth: edit the service, project and article arrays below.
 *  No published outcomes, client names, testimonials or invented dates.
 */
export const profile = {
  name: 'Mayo Racek',
  role: 'Data Engineer & AI Architect',
  location: 'Slovakia · Working remotely with international teams',
  linkedin: 'https://sk.linkedin.com/in/mayoracek',
  github: 'https://github.com/Mayo-Racek',
  x: 'https://x.com/MayoRacek',
};

export const services = [
  {
    slug: 'measurement-architecture', number: '01', icon: 'measure',
    name: 'Web & App measurement', short: 'Design tracking properly from day one, or improve and govern what is already running.',
    teaser: 'Launching a website or app without tracking, or improving an existing implementation? I design measurement plans, event specifications and web and server-side collection that teams can maintain and trust.',
    eyebrow: 'From measurement strategy to reliable reporting',
    headline: 'Web & App measurement built to last.',
    intro: 'Start with what the business needs to understand. I design Web & App measurement from scratch, improve unreliable implementations and build reusable enterprise frameworks for international teams. That includes shared event standards, server-side collection where appropriate, consent, QA and a clear path into reliable reporting.',
    problemTitle: 'Starting fresh or improving tracking?',
    problems: [
      ['Reports disagree', 'GA4, advertising platforms and internal systems tell different stories, and nobody is quite sure which one to use.'],
      ['Tracking breaks quietly', 'Changes to the website, consent flow or tag setup create gaps that are only noticed weeks later.'],
      ['No clear measurement foundation', 'A new website or app is ready to launch, but the events, identities, consent rules and success measures have not been designed.'],
    ],
    helpTitle: 'Where I can help',
    offerings: [
      ['Measurement strategy and implementation', 'Plan what to measure for a new Web & App experience, or audit and improve a live setup. Define events, goals, ownership and acceptance checks.'],
      ['Event and data layer design', 'Define the events, parameters, identifiers and business rules before adding more tags.'],
      ['GTM, server-side GTM and GA4', 'Design a practical collection path, from the data layer through client-side and server-side tagging to analytics and downstream destinations.'],
      ['Enterprise measurement frameworks', 'Set shared event standards and governance across brands, countries and product teams, with controlled local extensions, consent and repeatable QA.'],
      ['Quality and governance', 'Put validation, change control, monitoring and clear ownership around the setup so it stays reliable.'],
    ],
    process: [
      ['Define the need', 'Clarify business questions, important customer journeys and any existing collection gaps. New implementations start with the same discovery.'],
      ['Agree what good looks like', 'Document event definitions, collection rules, identity constraints and a testable tracking plan.'],
      ['Build with the team', 'Implement or guide changes in the right place: product, data layer, tag manager, server or data warehouse.'],
      ['Prove it works', 'Test real user journeys, reconcile data where possible and hand over clear QA evidence and ownership.'],
    ],
    deliverables: ['Measurement strategy, audit or implementation plan', 'Event taxonomy, data layer and consent specification', 'Web and server-side tracking implementation or guidance', 'Global framework and local market governance where needed', 'QA evidence, monitoring and handover'],
    fit: 'For product, marketing and data teams that need to stop debating the measurement and start using it.',
  },
  {
    slug: 'cloud-data-products', number: '02', icon: 'cloud',
    name: 'Data engineering & reporting', short: 'Turn scattered sources into trusted reporting, reusable models and answers your team can act on.',
    teaser: 'If useful information is spread across tools, exports and one-off SQL, I can help turn it into reliable, maintainable data products.',
    eyebrow: 'From raw records to dependable answers',
    headline: 'Bring your data together. Find answers faster.',
    intro: 'Customer, sales, marketing and operational information often live in different systems. Teams spend hours exporting spreadsheets and checking whose figures are right. I build the pipelines and data models that bring those sources together and make reporting more consistent.',
    problemTitle: 'The usual signs',
    problems: [
      ['The same metric has five definitions', 'Each team joins and filters raw data differently, so agreeing on a number takes longer than producing it.'],
      ['Pipelines need constant babysitting', 'Late inputs, schema changes and undocumented dependencies keep breaking the reporting layer.'],
      ['Every new request is a rebuild', 'The data warehouse stores records, but it does not yet provide reusable business-ready models.'],
    ],
    helpTitle: 'Where I can help',
    offerings: [
      ['BigQuery architecture', 'Plan datasets, access patterns, partitioning, costs and a structure that matches the questions people need to answer.'],
      ['ELT and transformation', 'Build maintainable Dataform / SQL transformations and the checks around them.'],
      ['Trusted analytical models', 'Define identity, grains, metrics and reporting-ready marts with assumptions made explicit.'],
      ['Reliability and cost control', 'Add freshness checks, reconciliation, sensible scheduling and visibility into expensive workloads.'],
    ],
    process: [
      ['Start with decisions', 'Understand who uses the data, what they need and why the existing process falls short.'],
      ['Inspect the sources', 'Check the shape, quality, timing, ownership and limitations of the data already available.'],
      ['Model and build', 'Design the smallest useful data product, implement transformations and document business logic.'],
      ['Check and hand over', 'Reconcile against source systems, add tests and make the operating model clear.'],
    ],
    deliverables: ['Source and model design', 'BigQuery / Dataform datasets and transformations', 'Metric definitions and documented assumptions', 'Validation checks and operating guidance'],
    fit: 'For teams that have outgrown manual reports, duplicated SQL and brittle data handoffs.',
  },
  {
    slug: 'applied-ai-systems', number: '03', icon: 'spark',
    name: 'Practical AI & automation', short: 'Reduce repetitive work with AI workflows that can be checked, monitored and controlled.',
    teaser: 'I look for repeatable tasks where AI can genuinely help, then build practical workflows with the controls, evidence and human oversight they need.',
    eyebrow: 'Useful automation, with controls from day one',
    headline: 'Spend less time on work that can be automated.',
    intro: 'There is no shortage of impressive demos. The harder part is connecting an AI workflow to real systems, deciding what it may change, checking its work and knowing what happens when it fails. That is the work I am interested in.',
    problemTitle: 'Where teams get stuck',
    problems: [
      ['The demo never becomes a workflow', 'An idea looks promising, but it has no dependable data access, clear task boundary or operating owner.'],
      ['Nobody can verify the output', 'Answers look plausible, but there is no evidence trail or safe way to catch mistakes.'],
      ['Automation feels too risky', 'A system could save time, but access, approvals, rollback and monitoring are not defined.'],
    ],
    helpTitle: 'Where I can help',
    offerings: [
      ['Use-case selection', 'Pick a narrow, measurable workflow with clear inputs, outputs and a sensible human fallback.'],
      ['Agent and workflow design', 'Connect models, tools, APIs and structured data with explicit permissions and task boundaries.'],
      ['Evaluation and safety', 'Define what success looks like, test failure cases and keep consequential actions reviewable.'],
      ['Practical deployment', 'Add logging, monitoring, cost visibility and operating rules before treating a prototype as production.'],
    ],
    process: [
      ['Find the friction', 'Map the repeated work, its costs, failure points and the decisions a person still needs to make.'],
      ['Prove the narrow case', 'Build a small end-to-end workflow and check it against real, permitted examples.'],
      ['Put boundaries around it', 'Add tool permissions, validation, review gates, observability and a way to stop or reverse actions.'],
      ['Measure usefulness', 'Assess accuracy, time saved and operational effort before expanding its scope.'],
    ],
    deliverables: ['Use-case and risk assessment', 'Working workflow or limited-scope agent', 'Evaluation cases and human approval points', 'Runbook, observability and cost considerations'],
    fit: 'For teams with repetitive operational work that might benefit from AI, but need more than a chatbot experiment.',
  },
];

// Editorial placeholders. Never display as completed client work.
export const projects = [
  { slug:'measurement-case-study', number:'01', theme:'cyan', category:'Measurement', title:'A measurement challenge worth unpacking', summary:'A place for a real case study on event design, tracking quality or attribution. The finished version will show the problem, constraints, decisions and evidence.', status:'Case study coming soon', detail:'I will use this space for a finished, shareable example of how a tracking problem was approached and validated. No client names, results or implementation claims will be added without confirmation.', sections:[['The starting point','What was not working, who it affected and why it mattered.'],['The approach','How the problem was traced, the trade-offs and the implementation choices.'],['The evidence','What was checked, what changed and what remained uncertain.']] },
  { slug:'data-product-case-study', number:'02', theme:'blue', category:'Data engineering', title:'Turning raw data into something teams can use', summary:'A future case study about building a useful model or pipeline: definitions, trade-offs, tests and the everyday work it made easier.', status:'Case study coming soon', detail:'This entry is reserved for a completed data-engineering project. It will document decisions and limitations as well as the technical solution.', sections:[['The need','What question or operational problem made the work necessary.'],['The design','Source systems, grain, modelling, quality checks and key trade-offs.'],['The result','Verified outputs, operating requirements and lessons learned.']] },
  { slug:'ai-workflow-case-study', number:'03', theme:'violet', category:'Applied AI', title:'An AI workflow with a job to do', summary:'A place for a practical automation project, including what the agent can and cannot do, review points, testing and operational controls.', status:'Case study coming soon', detail:'A future write-up of an AI system with real tasks, bounded permissions, testable outcomes and a clear operator experience. Aria may be featured when the relevant work is ready to show.', sections:[['The task','What a person currently has to do and the limits of automation.'],['The build','Tool access, workflow steps, evaluation and human controls.'],['The checks','Evidence, failure handling, cost and what still requires human judgment.']] },
];

export const posts = [
  { slug:'before-you-fix-the-dashboard', category:'Measurement', title:'Before you fix the dashboard, check the journey', excerpt:'A working outline on where reporting differences come from and how to investigate without immediately blaming the tags.', status:'Draft outline', sections:[['A number is not the full story','The difference between the business action, the event, the session and the report.'],['Follow one journey end to end','A practical inspection path from browser to tag manager, collection and warehouse.'],['Explain the gap honestly','How to separate expected platform differences from data loss or implementation bugs.']] },
  { slug:'what-a-useful-data-model-needs', category:'Data engineering', title:'A useful data model needs more than correct SQL', excerpt:'A draft about grains, identity, data freshness, reconciliation and why business definitions matter more than clever queries.', status:'Draft outline', sections:[['Start with the question','Clarify the decision and who will rely on it.'],['Define what one row means','Identity, grain and counting rules before dashboard design.'],['Build trust into the model','Tests, freshness, documentation and source reconciliation.']] },
  { slug:'ai-agents-need-release-process', category:'Applied AI', title:'AI agents need a release process, not just a prompt', excerpt:'A working outline on useful agents, permissions, evaluation, evidence and why a human approval point is part of the design.', status:'Draft outline', sections:[['A demo is not a deployment','Where integration, error handling and permissions become the actual product.'],['Make actions inspectable','Test cases, evidence, traces and boundaries for tool use.'],['Earn trust gradually','Human review, rollback and measured expansion of scope.']] },
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
const navLink=(href,name,active,base)=>`<a class="nav-link ${active===name.toLowerCase()?'is-active':''}" href="${path(href,base)}">${name}</a>`;
function header(active,base){return `<header class="site-header"><div class="site-container header-inner"><a href="${path('',base)}" class="brand" aria-label="Mayo Racek, home"><strong>Mayo Racek</strong></a><nav class="site-nav" id="primary-navigation" aria-label="Main navigation">${navLink('', 'Home',active,base)}${navLink('services/','Services',active,base)}${navLink('projects/','Work',active,base)}${navLink('blog/','Blog',active,base)}${navLink('about/','About',active,base)}${navLink('resume/','Resume',active,base)}<a class="nav-contact" href="${path('contact/',base)}">Let’s talk <span aria-hidden="true">↗</span></a></nav><button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button></div></header>`;}
function footer(base){return `<footer class="site-footer"><div class="site-container footer-top"><div><a class="brand" href="${path('',base)}"><strong>Mayo Racek</strong></a><p>Practical data and analytics solutions for real business needs.</p></div><div class="footer-links"><a href="${path('services/',base)}">Services</a><a href="${path('projects/',base)}">Work</a><a href="${path('blog/',base)}">Blog</a><a href="${path('about/',base)}">About</a><a href="${path('resume/',base)}">Resume</a></div><div class="footer-social">${external(profile.linkedin,'LinkedIn ↗')}${external(profile.github,'GitHub ↗')}${external(profile.x,'X ↗')}</div></div><div class="site-container footer-bottom"><span>© ${new Date().getFullYear()} Mayo Racek · Made with care, not clutter.</span><span>Based in Slovakia · Working internationally</span></div></footer>`;}
function contactCta(base,{compact=false}={}){return `<section class="contact-band ${compact?'compact':''}" id="contact"><div class="site-container contact-band-inner"><div><span class="kicker">LET’S WORK THROUGH IT</span><h2>Have a data problem or a new idea worth exploring?</h2><p>Tell me what you are trying to achieve. I can help work out whether you need better website tracking, more useful reporting or practical automation.</p></div><a class="btn btn-primary" href="${path('contact/',base)}">Start a conversation <span aria-hidden="true">↗</span></a></div></section>`;}
function shell({title,description,body,active='home',base='/',canonical='',og='website'}){
  const fullTitle= title==='Home'?'Mayo Racek | Data Solutions for Business Goals':`${title} | Mayo Racek`;
  const metaDesc=description||'Measurement architecture, cloud data products and practical AI systems. Thoughtful engineering for real problems.';
  const fullUrl=`https://mayoracek.com${canonical||'/'}`;
  const noindex = /^\/(?:blog|projects)\/[^/]+\/$/.test(canonical);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="theme-color" content="#071325"/><meta name="description" content="${esc(metaDesc)}"/>${noindex?'<meta name="robots" content="noindex, follow"/>':''}<meta property="og:type" content="${esc(og)}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(metaDesc)}"/><meta property="og:url" content="${esc(fullUrl)}"/><link rel="canonical" href="${esc(fullUrl)}"/><link rel="icon" href="${path('favicon.svg',base)}" type="image/svg+xml"/><link rel="stylesheet" href="${path('styles.css',base)}"/><title>${esc(fullTitle)}</title></head><body>${header(active,base)}<main id="main-content">${body}</main>${footer(base)}<script>(function(){const b=document.querySelector('.menu-toggle');const n=document.querySelector('.site-nav');if(b&&n){const close=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')};b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('open',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();b.focus()}});document.addEventListener('click',e=>{if(!b.contains(e.target)&&!n.contains(e.target))close()})}})();</script></body></html>`;
}
function serviceCard(s,base){return `<a class="service-card" href="${path(`services/${s.slug}/`,base)}"><div class="service-icon">${icon(s.icon)}</div><div class="service-number">${s.number}</div><h3>${esc(s.name)}</h3><p>${esc(s.short)}</p><span class="card-link">Explore this service <span aria-hidden="true">↗</span></span></a>`;}
function projectCard(p,base){return `<a class="project-card" href="${path(`projects/${p.slug}/`,base)}"><div class="project-art art-${p.theme}"><span class="art-serial">${p.number} / WORK</span><span class="art-glyph" aria-hidden="true">${p.theme==='cyan'?'◌':p.theme==='blue'?'▧':'✳'}</span><span class="project-category">${esc(p.category)}</span></div><div class="project-card-body"><span class="status-label">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="card-link">See what’s planned <span aria-hidden="true">↗</span></span></div></a>`;}
function postCard(p,base){return `<a class="post-card" href="${path(`blog/${p.slug}/`,base)}"><div class="post-topline"><span>${esc(p.category)}</span><span class="status-label">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="card-link">See the outline <span aria-hidden="true">↗</span></span></a>`;}
function sectionHead(kicker,title,sub='',link='',linkText='',base='/'){return `<div class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${title}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div>${link?`<a class="section-link" href="${path(link,base)}">${esc(linkText)} <span aria-hidden="true">↗</span></a>`:''}</div>`;}
export function renderHome(base='/'){
 const body=`<section class="hero"><div class="hero-shine hero-shine-a"></div><div class="hero-shine hero-shine-b"></div><div class="site-container hero-grid"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-rule"></span>DATA ENGINEERING <span class="mid-dot">·</span> ANALYTICS <span class="mid-dot">·</span> PRACTICAL AI</div><h1><span class="headline-desktop">Data solutions built around <em>your goals.</em></span><span class="headline-mobile">Data solutions for <em>your goals.</em></span></h1><p class="hero-intro">I help businesses measure customer journeys, connect scattered information and make reporting more useful. From enterprise Web & App tracking to data pipelines and practical AI automation, I build around the problem you need to solve.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('contact/',base)}">Discuss your project <span aria-hidden="true">↗</span></a><a class="btn btn-outline" href="${path('services/',base)}">Explore services <span aria-hidden="true">↗</span></a></div><div class="hero-signoff"><span class="little-line"></span><p>17+ years helping teams turn measurement, analytics and complex data into work they can rely on.</p></div></div><div class="hero-visual" aria-label="Portrait of Mayo Racek"><div class="orb orb-a"></div><div class="orb orb-b"></div><div class="portrait-orbit orbit-one"></div><div class="portrait-orbit orbit-two"></div><div class="portrait-floor"></div><img class="portrait" src="${path('mayo-portrait-cropped.webp',base)}" width="415" height="643" alt="Mayo Racek, portrait"/></div></div><div class="hero-bottom-fade"></div></section>
 <section class="section services-section" id="services"><div class="site-container">${sectionHead('HOW I CAN HELP','What would you like to improve?','Starting from scratch, managing enterprise measurement or struggling with disconnected data? Choose the service closest to your goal.','services/','All services',base)}<div class="service-grid">${services.map(s=>serviceCard(s,base)).join('')}</div></div></section>
 <section class="section work-section"><div class="site-container">${sectionHead('SELECTED WORK','Selected projects','Three case-study spaces are ready. I will replace them with finished projects and the evidence behind them.','projects/','All projects',base)}<div class="project-grid">${projects.map(p=>projectCard(p,base)).join('')}</div></div></section>
 <section class="section approach-section"><div class="site-container approach-grid"><div><span class="kicker">HOW I WORK</span><h2>Understand the real need. Build the simplest solution <em>that actually works.</em></h2></div><div class="approach-copy"><p>First, understand the decision the team needs to make, the data they already have, and the time currently wasted on workarounds.</p><p>Then build for that specific need. Make it useful, testable and simple enough to maintain.</p><a class="text-link" href="${path('about/',base)}">A bit more about my approach <span aria-hidden="true">↗</span></a></div></div></section>
 <section class="section blog-section"><div class="site-container">${sectionHead('FROM THE BLOG','Writing about the work behind reliable data.','Practical writing on data, measurement and AI systems. These three outlines will be replaced with finished articles.','blog/','Visit the blog',base)}<div class="post-grid">${posts.map(p=>postCard(p,base)).join('')}</div></div></section>${contactCta(base)}`;
 return shell({title:'Home',description:'Mayo Racek designs Web & App measurement, reliable reporting and practical AI workflows around business goals.',body,active:'home',base});
}
export function renderServices(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">SERVICES</span><h1>Build what you need. <em>Improve what holds you back.</em></h1><p>Whether you are launching a new website, trying to get reporting under control or exploring useful automation, I help turn the business need into a practical solution your team can rely on.</p></div></section><section class="section"><div class="site-container"><div class="service-grid">${services.map(s=>serviceCard(s,base)).join('')}</div><div class="service-detail-previews">${services.map(s=>`<article class="service-preview"><div><span class="eyebrow-mini">${s.number} / ${esc(s.name)}</span><h2>${esc(s.short)}</h2><p>${esc(s.teaser)}</p></div><div><span class="preview-label">Typical work</span><ul class="compact-list">${s.offerings.map(x=>`<li>${esc(x[0])}</li>`).join('')}</ul><a class="text-link" href="${path('services/'+s.slug+'/',base)}">How I approach this <span aria-hidden="true">↗</span></a></div></article>`).join('')}</div></div></section>${contactCta(base)}`;
 return shell({title:'Services',description:'Explore measurement architecture, cloud data products and applied AI systems services by Mayo Racek.',body,active:'services',base,canonical:'/services/'});
}

function measurementFramework(){
 const steps=[
  ['01','Define','Business questions, KPIs and consent requirements'],
  ['02','Instrument','Web & App events, data layer and GTM'],
  ['03','Collect','Server-side GTM when appropriate, then GA4'],
  ['04','Export','GA4 data in BigQuery'],
  ['05','Model','Dataform transformations, tested data products'],
  ['06','Use','Dashboards, governed conversational analytics and activation']
 ];
 return '<section class="section framework-section" aria-labelledby="measurement-flow-title"><div class="site-container"><span class="kicker">EXAMPLE ARCHITECTURE</span><div class="framework-intro"><div><h2 id="measurement-flow-title">From customer activity to something your team can use.</h2><p>An enterprise framework should connect the whole measurement journey, not just a few tags. The stages below are illustrative and adapt to your stack and privacy requirements.</p></div></div><ol class="framework-steps">'+steps.map(([n,title,sub])=>'<li class="framework-step"><span class="framework-n">'+n+'</span><strong>'+title+'</strong><span>'+sub+'</span></li>').join('')+'</ol><p class="framework-note"><strong>Built-in controls:</strong> consent, identity, data quality, monitoring and clear ownership. Marketing destinations may connect directly at collection time; reporting and conversational analysis use governed, validated data. Server-side GTM is used only where suitable.</p></div></section>';
}

export function renderService(slug,base='/'){
 const s=services.find(x=>x.slug===slug);if(!s)throw new Error('Unknown service '+slug);
 const body=`<section class="page-hero service-page-hero"><div class="site-container"><a class="back-link" href="${path('services/',base)}">← All services</a><span class="kicker">${s.number} / ${esc(s.name.toUpperCase())}</span><h1>${esc(s.headline)}</h1><p>${esc(s.intro)}</p><div class="hero-actions"><a class="btn btn-primary" href="${path('contact/',base)}">Talk through your challenge <span aria-hidden="true">↗</span></a></div></div></section><section class="section"><div class="site-container">${sectionHead('THE PROBLEM',esc(s.problemTitle))}<div class="problem-grid">${s.problems.map(([t,d],i)=>`<div class="problem-item"><span class="tiny-number">0${i+1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section><section class="section section-muted"><div class="site-container">${sectionHead('THE WORK',esc(s.helpTitle),'Specific help, depending on where the bottleneck sits.')}<div class="offer-grid">${s.offerings.map(([t,d])=>`<div class="offer-item"><span class="bullet-glow"></span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section>${s.slug==='measurement-architecture'?measurementFramework():''}<section class="section"><div class="site-container">${sectionHead('THE PROCESS','A practical way through it.','No mystery framework. Clear decisions, checks and handover.')}<div class="steps-grid">${s.process.map(([t,d],i)=>`<div class="step"><div class="step-no">0${i+1}</div><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section><section class="section section-muted"><div class="site-container deliverable-grid"><div><span class="kicker">WHAT YOU GET</span><h2>Something your team can own.</h2><p>${esc(s.fit)}</p></div><ul class="check-list">${s.deliverables.map(x=>`<li><span aria-hidden="true">✓</span> ${esc(x)}</li>`).join('')}</ul></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:s.name,description:s.teaser,body,active:'services',base,canonical:'/services/'+slug+'/'});
}
export function renderProjects(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">SELECTED WORK</span><h1>Real work deserves <em>real evidence.</em></h1><p>This section is ready for three finished projects. For now, these are clearly marked placeholders, not claims of completed client work.</p></div></section><section class="section"><div class="site-container"><div class="project-grid">${projects.map(x=>projectCard(x,base)).join('')}</div></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:'Selected work',description:'Project case study placeholders for Mayo Racek, to be replaced with completed and verified projects.',body,active:'work',base,canonical:'/projects/'});
}
export function renderProject(slug,base='/'){
 const p=projects.find(x=>x.slug===slug);if(!p)throw new Error('Unknown project '+slug);
 const body=`<section class="page-hero small-hero"><div class="site-container"><a class="back-link" href="${path('projects/',base)}">← All projects</a><span class="kicker">PROJECT ${p.number} / ${esc(p.category.toUpperCase())}</span><div class="banner-label">${esc(p.status)}</div><h1>${esc(p.title)}</h1><p>${esc(p.detail)}</p></div></section><section class="section"><div class="site-container"><div class="placeholder-note"><strong>Reserved for a verified case study.</strong><p>The headings below are an editorial structure only. There are no invented results, clients or performance claims on this page.</p></div><div class="story-steps">${p.sections.map(([t,d],i)=>`<article><span class="tiny-number">0${i+1}</span><h2>${esc(t)}</h2><p>${esc(d)}</p></article>`).join('')}</div><a class="text-link" href="${path('projects/',base)}">← Back to selected work</a></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:p.title,description:p.summary,body,active:'work',base,canonical:'/projects/'+slug+'/'});
}
export function renderBlog(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">BLOG</span><h1>What I’m <em>working through.</em></h1><p>Notes on measurement, data engineering and AI systems. The three entries below are draft outlines, not published articles. Their full versions are coming later.</p></div></section><section class="section"><div class="site-container"><div class="post-grid">${posts.map(x=>postCard(x,base)).join('')}</div></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:'Blog',description:'Practical writing on measurement, cloud data engineering and AI agents by Mayo Racek. Draft outlines available.',body,active:'blog',base,canonical:'/blog/'});
}
export function renderPost(slug,base='/'){
 const p=posts.find(x=>x.slug===slug);if(!p)throw new Error('Unknown post '+slug);
 const body=`<section class="page-hero small-hero"><div class="site-container"><a class="back-link" href="${path('blog/',base)}">← All writing</a><span class="kicker">${esc(p.category.toUpperCase())} / DRAFT OUTLINE</span><h1>${esc(p.title)}</h1><p>${esc(p.excerpt)}</p></div></section><section class="section"><div class="site-container article-shell"><div class="placeholder-note"><strong>This is a working outline, not a finished article.</strong><p>The full article will replace this draft when it is ready. No publication date or reading time has been invented.</p></div>${p.sections.map(([t,d],i)=>`<section class="article-outline"><span class="tiny-number">SECTION 0${i+1}</span><h2>${esc(t)}</h2><p>${esc(d)}</p></section>`).join('')}<a class="text-link" href="${path('blog/',base)}">← Return to the blog</a></div></section>${contactCta(base,{compact:true})}`;
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
 const body=`<section class="page-hero contact-hero"><div class="site-container"><span class="kicker">CONTACT</span><h1>Tell me what you want to <em>achieve.</em></h1><p>Starting something new? Trying to understand your customers, improve reporting or reduce manual work? You do not need a technical brief. Tell me what you want to change and we can discuss the options.</p><div class="contact-options"><a class="contact-option" href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer"><span>BEST PLACE TO REACH ME</span><strong>Message me on LinkedIn</strong><span class="option-arrow">↗</span></a><a class="contact-option" href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer"><span>SEE MY CODE</span><strong>Find me on GitHub</strong><span class="option-arrow">↗</span></a><a class="contact-option" href="${path('resume/',base)}"><span>PROFESSIONAL BACKGROUND</span><strong>View resume and download CV</strong><span class="option-arrow">↗</span></a></div><p class="contact-footnote">Based in Slovakia. Happy to discuss remote collaboration with teams elsewhere.</p></div></section>`;
 return shell({title:'Contact',description:'Start a conversation with Mayo Racek about a real measurement, data engineering or AI automation problem.',body,active:'contact',base,canonical:'/contact/'});
}
export function renderNotFound(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">404 / PAGE NOT FOUND</span><h1>That page isn't <em>here.</em></h1><p>Try the homepage or head straight to services, work or the blog.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('',base)}">Go home <span aria-hidden="true">↗</span></a></div></div></section>`;
 return shell({title:'Page not found',body,active:'home',base});
}
