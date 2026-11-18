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
    name: 'Web & app measurement architecture', short: 'Design tracking from the ground up for websites and apps, or make existing setups more dependable.',
    teaser: 'Launching a website or app without tracking, or improving an existing implementation? I design measurement plans, event specifications and web and server-side collection that teams can maintain and trust.',
    eyebrow: 'From browser events to business decisions',
    headline: 'Make measurement reliable enough to guide decisions.',
    intro: 'Good measurement begins before the first tag is added. Whether a site or app is being built from scratch, or an established setup needs improvement, I help define what matters, design the tracking architecture and verify that the resulting data answers real business questions.',
    problemTitle: 'Does any of this sound familiar?',
    problems: [
      ['Reports disagree', 'GA4, advertising platforms and internal systems tell different stories, and nobody is quite sure which one to use.'],
      ['Tracking breaks quietly', 'Changes to the website, consent flow or tag setup create gaps that are only noticed weeks later.'],
      ['No clear measurement foundation', 'A new website or app is ready to launch, but the events, identities, consent rules and success measures have not been designed.'],
    ],
    helpTitle: 'Where I can help',
    offerings: [
      ['Measurement audit', 'Trace key journeys from the website through collection, transport and reporting. Separate implementation gaps from expected differences.'],
      ['Event and data layer design', 'Define the events, parameters, identifiers and business rules before adding more tags.'],
      ['GTM, GA4 and server-side tracking', 'Design and improve web and server-side collection with consent and first-party considerations built in.'],
      ['Quality and governance', 'Put validation, change control, monitoring and clear ownership around the setup so it stays reliable.'],
    ],
    process: [
      ['Find the real issue', 'Review the business questions, key journeys, existing implementation and the numbers that are in dispute.'],
      ['Agree what good looks like', 'Document event definitions, collection rules, identity constraints and a testable tracking plan.'],
      ['Build with the team', 'Implement or guide changes in the right place: product, data layer, tag manager, server or data warehouse.'],
      ['Prove it works', 'Test real user journeys, reconcile data where possible and hand over clear QA evidence and ownership.'],
    ],
    deliverables: ['Measurement audit and prioritised findings', 'Event taxonomy and tracking specification', 'Implementation or technical guidance', 'QA evidence, monitoring recommendations and handover'],
    fit: 'For product, marketing and data teams that need to stop debating the measurement and start using it.',
  },
  {
    slug: 'cloud-data-products', number: '02', icon: 'cloud',
    name: 'Cloud data products', short: 'Turn scattered sources into reliable pipelines, useful data models and reporting-ready datasets.',
    teaser: 'If useful information is spread across tools, exports and one-off SQL, I can help turn it into reliable, maintainable data products.',
    eyebrow: 'From raw records to dependable answers',
    headline: 'Build data products your team can use with confidence.',
    intro: 'Teams often have plenty of data but no dependable way to use it. The same metric is recreated in several reports. A pipeline fails quietly. Analysts spend their time reconciling instead of analysing. I focus on the foundations that make that work simpler.',
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
    name: 'Applied AI systems', short: 'Reduce repetitive work with AI systems that are practical, testable and under control.',
    teaser: 'I look for repeatable tasks where AI can genuinely help, then build practical workflows with the controls, evidence and human oversight they need.',
    eyebrow: 'Useful automation, with controls from day one',
    headline: 'AI automation should be useful, measurable and under control.',
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
function header(active,base){return `<header class="site-header"><div class="site-container header-inner"><a href="${path('',base)}" class="brand" aria-label="Mayo Racek, home"><strong>Mayo Racek</strong></a><nav class="site-nav" id="primary-navigation" aria-label="Main navigation">${navLink('', 'Home',active,base)}${navLink('services/','Services',active,base)}${navLink('projects/','Work',active,base)}${navLink('blog/','Blog',active,base)}${navLink('about/','About',active,base)}<a class="nav-contact" href="${path('contact/',base)}">Let’s talk <span aria-hidden="true">↗</span></a></nav><button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button></div></header>`;}
function footer(base){return `<footer class="site-footer"><div class="site-container footer-top"><div><a class="brand" href="${path('',base)}"><strong>Mayo Racek</strong></a><p>Good systems make good decisions easier.</p></div><div class="footer-links"><a href="${path('services/',base)}">Services</a><a href="${path('projects/',base)}">Work</a><a href="${path('blog/',base)}">Blog</a><a href="${path('about/',base)}">About</a></div><div class="footer-social">${external(profile.linkedin,'LinkedIn ↗')}${external(profile.github,'GitHub ↗')}${external(profile.x,'X ↗')}</div></div><div class="site-container footer-bottom"><span>© ${new Date().getFullYear()} Mayo Racek · Made with care, not clutter.</span><span>Based in Slovakia · Working internationally</span></div></footer>`;}
function contactCta(base,{compact=false}={}){return `<section class="contact-band ${compact?'compact':''}" id="contact"><div class="site-container contact-band-inner"><div><span class="kicker">LET’S WORK THROUGH IT</span><h2>Need to make your data or processes more dependable?</h2><p>Tell me what needs to improve. We can work out whether the answer is more reliable measurement, a cleaner data model or a carefully scoped automation.</p></div><a class="btn btn-primary" href="${path('contact/',base)}">Start a conversation <span aria-hidden="true">↗</span></a></div></section>`;}
function shell({title,description,body,active='home',base='/',canonical='',og='website'}){
  const fullTitle= title==='Home'?'Mayo Racek | Data Engineer & AI Architect':`${title} | Mayo Racek`;
  const metaDesc=description||'Measurement architecture, cloud data products and practical AI systems. Thoughtful engineering for real problems.';
  const fullUrl=`https://mayoracek.com${canonical||'/'}`;
  const noindex = /^\/(?:blog|projects)\/[^/]+\/$/.test(canonical);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="theme-color" content="#071325"/><meta name="description" content="${esc(metaDesc)}"/>${noindex?'<meta name="robots" content="noindex, follow"/>':''}<meta property="og:type" content="${esc(og)}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(metaDesc)}"/><meta property="og:url" content="${esc(fullUrl)}"/><link rel="canonical" href="${esc(fullUrl)}"/><link rel="icon" href="${path('favicon.svg',base)}" type="image/svg+xml"/><link rel="stylesheet" href="${path('styles.css',base)}"/><title>${esc(fullTitle)}</title></head><body>${header(active,base)}<main id="main-content">${body}</main>${footer(base)}<script>(function(){const b=document.querySelector('.menu-toggle');const n=document.querySelector('.site-nav');if(b&&n){b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('open',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')}))}})();</script></body></html>`;
}
function serviceCard(s,base){return `<a class="service-card" href="${path(`services/${s.slug}/`,base)}"><div class="service-icon">${icon(s.icon)}</div><div class="service-number">${s.number}</div><h3>${esc(s.name)}</h3><p>${esc(s.short)}</p><span class="card-link">Explore this service <span aria-hidden="true">↗</span></span></a>`;}
function projectCard(p,base){return `<a class="project-card" href="${path(`projects/${p.slug}/`,base)}"><div class="project-art art-${p.theme}"><span class="art-serial">${p.number} / WORK</span><span class="art-glyph" aria-hidden="true">${p.theme==='cyan'?'◌':p.theme==='blue'?'▧':'✳'}</span><span class="project-category">${esc(p.category)}</span></div><div class="project-card-body"><span class="status-label">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="card-link">See what’s planned <span aria-hidden="true">↗</span></span></div></a>`;}
function postCard(p,base){return `<a class="post-card" href="${path(`blog/${p.slug}/`,base)}"><div class="post-topline"><span>${esc(p.category)}</span><span class="status-label">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="card-link">See the outline <span aria-hidden="true">↗</span></span></a>`;}
function sectionHead(kicker,title,sub='',link='',linkText='',base='/'){return `<div class="section-head"><div><span class="kicker">${esc(kicker)}</span><h2>${title}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div>${link?`<a class="section-link" href="${path(link,base)}">${esc(linkText)} <span aria-hidden="true">↗</span></a>`:''}</div>`;}
export function renderHome(base='/'){
 const body=`<section class="hero"><div class="hero-shine hero-shine-a"></div><div class="hero-shine hero-shine-b"></div><div class="site-container hero-grid"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-rule"></span>SENIOR DATA ENGINEER <span class="mid-dot">·</span> AI ARCHITECT</div><h1>Engineering the data behind <em>better decisions.</em></h1><p class="hero-intro">When tracking is unreliable, data is scattered or routine work takes too much time, I help teams find the cause and build systems they can depend on. My work spans measurement, cloud data engineering and practical AI.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('services/',base)}">Explore my work <span aria-hidden="true">↗</span></a><a class="btn btn-outline" href="${path('blog/',base)}">Read my blog <span aria-hidden="true">↗</span></a></div><div class="hero-signoff"><span class="little-line"></span><p>Nearly two decades working at the point where data, engineering and business decisions meet.</p></div></div><div class="hero-visual" aria-label="Portrait of Mayo Racek"><div class="orb orb-a"></div><div class="orb orb-b"></div><div class="portrait-orbit orbit-one"></div><div class="portrait-orbit orbit-two"></div><div class="portrait-floor"></div><img class="portrait" src="${path('mayo-portrait-clean.webp',base)}" width="415" height="643" alt="Mayo Racek, portrait"/></div></div><div class="hero-bottom-fade"></div></section>
 <section class="section services-section" id="services"><div class="site-container">${sectionHead('WHAT I DO','Across the full data lifecycle','From collecting the right signals to producing reliable answers and automating repeatable work, the aim is always the same: make information easier to trust and use.','services/','Explore services',base)}<div class="service-grid">${services.map(s=>serviceCard(s,base)).join('')}</div></div></section>
 <section class="section work-section"><div class="site-container">${sectionHead('SELECTED WORK','Selected projects','Three case-study spaces are ready. I will replace them with finished projects and the evidence behind them.','projects/','All projects',base)}<div class="project-grid">${projects.map(p=>projectCard(p,base)).join('')}</div></div></section>
 <section class="section approach-section"><div class="site-container approach-grid"><div><span class="kicker">HOW I WORK</span><h2>Understand the real need. Build the simplest solution <em>that actually works.</em></h2></div><div class="approach-copy"><p>First, understand the decision the team needs to make, the data they already have, and the time currently wasted on workarounds.</p><p>Then build for that specific need. Make it useful, testable and simple enough to maintain.</p><a class="text-link" href="${path('about/',base)}">A bit more about my approach <span aria-hidden="true">↗</span></a></div></div></section>
 <section class="section blog-section"><div class="site-container">${sectionHead('FROM THE BLOG','Writing about the work behind reliable data.','Practical writing on data, measurement and AI systems. These three outlines will be replaced with finished articles.','blog/','Visit the blog',base)}<div class="post-grid">${posts.map(p=>postCard(p,base)).join('')}</div></div></section>${contactCta(base)}`;
 return shell({title:'Home',description:'Mayo Racek helps teams solve measurement problems, build trusted cloud data products and develop practical AI workflows.',body,active:'home',base});
}
export function renderServices(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">SERVICES</span><h1>Solve the data problems that <em>slow your team down.</em></h1><p>When reports disagree, pipelines need constant fixes or teams spend hours on manual tasks, I help uncover the cause and make the underlying systems more dependable.</p></div></section><section class="section"><div class="site-container"><div class="service-grid">${services.map(s=>serviceCard(s,base)).join('')}</div><div class="service-detail-previews">${services.map(s=>`<article class="service-preview"><div><span class="eyebrow-mini">${s.number} / ${esc(s.name)}</span><h2>${esc(s.short)}</h2><p>${esc(s.teaser)}</p></div><div><span class="preview-label">Typical work</span><ul class="compact-list">${s.offerings.map(x=>`<li>${esc(x[0])}</li>`).join('')}</ul><a class="text-link" href="${path('services/'+s.slug+'/',base)}">How I approach this <span aria-hidden="true">↗</span></a></div></article>`).join('')}</div></div></section>${contactCta(base)}`;
 return shell({title:'Services',description:'Explore measurement architecture, cloud data products and applied AI systems services by Mayo Racek.',body,active:'services',base,canonical:'/services/'});
}
export function renderService(slug,base='/'){
 const s=services.find(x=>x.slug===slug);if(!s)throw new Error('Unknown service '+slug);
 const body=`<section class="page-hero service-page-hero"><div class="site-container"><a class="back-link" href="${path('services/',base)}">← All services</a><span class="kicker">${s.number} / ${esc(s.name.toUpperCase())}</span><h1>${esc(s.headline)}</h1><p>${esc(s.intro)}</p><div class="hero-actions"><a class="btn btn-primary" href="${path('contact/',base)}">Talk through your challenge <span aria-hidden="true">↗</span></a></div></div></section><section class="section"><div class="site-container">${sectionHead('THE PROBLEM',esc(s.problemTitle))}<div class="problem-grid">${s.problems.map(([t,d],i)=>`<div class="problem-item"><span class="tiny-number">0${i+1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section><section class="section section-muted"><div class="site-container">${sectionHead('THE WORK',esc(s.helpTitle),'Specific help, depending on where the bottleneck sits.')}<div class="offer-grid">${s.offerings.map(([t,d])=>`<div class="offer-item"><span class="bullet-glow"></span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section><section class="section"><div class="site-container">${sectionHead('THE PROCESS','A practical way through it.','No mystery framework. Clear decisions, checks and handover.')}<div class="steps-grid">${s.process.map(([t,d],i)=>`<div class="step"><div class="step-no">0${i+1}</div><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section><section class="section section-muted"><div class="site-container deliverable-grid"><div><span class="kicker">WHAT YOU GET</span><h2>Something your team can own.</h2><p>${esc(s.fit)}</p></div><ul class="check-list">${s.deliverables.map(x=>`<li><span aria-hidden="true">✓</span> ${esc(x)}</li>`).join('')}</ul></div></section>${contactCta(base,{compact:true})}`;
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
 const body=`<section class="page-hero about-hero"><div class="site-container about-hero-grid"><div><span class="kicker">ABOUT</span><h1>I work where data, systems and <em>decisions meet.</em></h1><p>I'm Mayo, a data engineer and consultant based in Slovakia. I've spent nearly two decades working with digital measurement, analytics and the engineering that makes both useful. Increasingly, that includes careful, practical AI automation.</p><p>I enjoy the point where a technical question turns out to be a business question: what are we measuring, why does it matter and what needs to change?</p></div><div class="about-photo"><img src="${path('mayo-portrait-clean.webp',base)}" alt="Portrait of Mayo Racek"/></div></div></section><section class="section"><div class="site-container"><div class="approach-grid"><div><span class="kicker">HOW I THINK</span><h2>Clear decisions. Work you can verify.</h2></div><div class="approach-copy"><p>I prefer a clear problem statement, real evidence and an implementation someone else can understand after I leave. I ask awkward questions about definitions, consent, ownership, reliability and cost because those details usually decide whether the solution lasts.</p><p>Most of my work lives around Google Cloud, BigQuery, Dataform, GTM, GA4, Python and the connections between them. I use AI tools where they help, but not as a substitute for engineering judgment.</p></div></div></div></section><section class="section section-muted"><div class="site-container">${sectionHead('FOCUS','What I spend my time on')}<div class="service-grid">${services.map(s=>serviceCard(s,base)).join('')}</div></div></section>${contactCta(base,{compact:true})}`;
 return shell({title:'About',description:'Mayo Racek is a Slovakia-based Data Engineer and AI Architect focused on measurement, BigQuery and practical AI systems.',body,active:'about',base,canonical:'/about/'});
}
export function renderContact(base='/'){
 const body=`<section class="page-hero contact-hero"><div class="site-container"><span class="kicker">CONTACT</span><h1>Tell me what you need to <em>improve.</em></h1><p>It does not need to be a perfectly formed brief. A recurring tracking issue, a messy data handoff or a manual task you wish you could stop doing is enough to start the conversation.</p><div class="contact-options"><a class="contact-option" href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer"><span>BEST PLACE TO REACH ME</span><strong>Message me on LinkedIn</strong><span class="option-arrow">↗</span></a><a class="contact-option" href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer"><span>SEE MY CODE</span><strong>Find me on GitHub</strong><span class="option-arrow">↗</span></a></div><p class="contact-footnote">Based in Slovakia. Happy to discuss remote collaboration with teams elsewhere.</p></div></section>`;
 return shell({title:'Contact',description:'Start a conversation with Mayo Racek about a real measurement, data engineering or AI automation problem.',body,active:'contact',base,canonical:'/contact/'});
}
export function renderNotFound(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">404 / PAGE NOT FOUND</span><h1>That page isn't <em>here.</em></h1><p>Try the homepage or head straight to services, work or the blog.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('',base)}">Go home <span aria-hidden="true">↗</span></a></div></div></section>`;
 return shell({title:'Page not found',body,active:'home',base});
}
