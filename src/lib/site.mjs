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

// Public writing. Publish only completed, reviewed articles.
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
const path=(s,base='/')=>{const clean=String(s).replace(/^\//,''); const offline=base!=='/'; const target=offline&&(clean===''||clean.endsWith('/'))?clean+'index.html':clean; return base.replace(/\/$/,'')+'/'+target;};
const navLink=(href,name,active,base)=>`<a class="nav-link ${active===name.toLowerCase()?'is-active':''}" data-track-event="navigationClicked" data-track-location="header" data-track-id="${esc(name.toLowerCase())}" href="${path(href,base)}">${name}</a>`;
function header(active,base){return '<header class="site-header"><div class="site-container header-inner"><a href="'+path('',base)+'" class="brand" aria-label="Mayo Racek, homepage"><strong>Mayo Racek</strong></a><nav class="site-nav" id="primary-navigation" aria-label="Main navigation">'+navLink('blog/','Blog',active,base)+navLink('about/','About',active,base)+navLink('contact/','Contact',active,base)+'</nav><button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button></div></header>';}
function footer(base){return '<footer class="site-footer"><div class="site-container footer-top"><div><a class="brand" href="'+path('',base)+'"><strong>Mayo Racek</strong></a><p>Notes on data engineering, analytics and practical AI.</p></div><div class="footer-links"><a href="'+path('blog/',base)+'">Blog</a><a href="'+path('about/',base)+'">About</a><a href="'+path('resume/',base)+'">Resume</a><a href="'+path('contact/',base)+'">Contact</a></div><div class="footer-social">'+external(profile.linkedin,'LinkedIn ↗')+external(profile.github,'GitHub ↗')+external(profile.x,'X ↗')+'</div></div><div class="site-container footer-bottom"><span>© '+new Date().getFullYear()+' Mayo Racek</span><span>Based in Slovakia · Working internationally</span></div></footer>';}
function shell({title,description,body,active='home',base='/',canonical='',og='website'}){
  const fullTitle= title==='Home'?'Mayo Racek | Data Engineering, Analytics & AI Blog':`${title} | Mayo Racek`;
  const metaDesc=description||'Notes and technical articles by Mayo Racek on data engineering, measurement, analytics and responsible AI.';
  const fullUrl=`https://mayoracek.com${title==='Page not found'?'/404/':canonical||'/'}`;
  const noindex = title==='Page not found';
  const pagePath = title==='Page not found'?'/404/':canonical||'/';
  const segments = pagePath.split('/').filter(Boolean);
  const pageType = title==='Page not found' ? 'notFound' : !segments.length ? 'home' : segments[0] === 'blog' && segments.length > 1 ? 'article' : segments[0];
  const pageEvent = {event:'pageViewed',schemaVersion:'1.1.0',page:{pageType,pagePath,pageTitle:title,language:'en',canonicalUrl:fullUrl},activity:{name:'viewPage',category:'navigation',status:'observed'}};
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
  const heroImagePreload=title==='Home'?'<link rel="preload" as="image" href="'+path('mayo-portrait-cropped.webp',base)+'" fetchpriority="high"/>':'';

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="theme-color" content="#191B1F"/><meta name="description" content="${esc(metaDesc)}"/>${noindex?'<meta name="robots" content="noindex, follow"/>':''}<meta property="og:type" content="${esc(og)}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(metaDesc)}"/><meta property="og:url" content="${esc(fullUrl)}"/><link rel="canonical" href="${esc(fullUrl)}"/>${heroImagePreload}<meta name="twitter:card" content="summary"/><meta name="twitter:creator" content="@MayoRacek"/>${jsonLd}${dataLayerInit}<link rel="icon" href="${path('favicon.svg',base)}?v=2" type="image/svg+xml"/><link rel="stylesheet" href="${path('styles.css',base)}"/><title>${esc(fullTitle)}</title></head><body><a class="skip-link" href="#main-content">Skip to content</a>${header(active,base)}<main id="main-content">${body}</main>${footer(base)}<script defer src="${path('site-analytics.js',base)}"></script><script>(function(){const b=document.querySelector('.menu-toggle');const n=document.querySelector('.site-nav');if(b&&n){const close=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')};b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('open',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();b.focus()}});document.addEventListener('click',e=>{if(!b.contains(e.target)&&!n.contains(e.target))close()})}})();</script></body></html>`;
}
function postCard(p,base){return `<a class="post-card" data-track-event="articleSelected" data-track-location="blogGrid" data-track-id="${esc(p.slug)}" href="${path(`blog/${p.slug}/`,base)}"><div class="post-topline"><span>${esc(p.category)}</span><span class="status-label">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="card-link">Read the article <span aria-hidden="true">↗</span></span></a>`;}
export function renderHome(base='/'){
 const hero='<section class="hero"><div class="hero-shine hero-shine-a"></div><div class="hero-shine hero-shine-b"></div><div class="site-container hero-grid"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-rule"></span>DATA ENGINEERING <span class="mid-dot">·</span> ANALYTICS <span class="mid-dot">·</span> AI</div><h1><span class="headline-desktop">Designing data solutions. <em>Sharing what works.</em></span><span class="headline-mobile">Designing data solutions. <em>Sharing what works.</em></span></h1><p class="hero-intro">I design and engineer data solutions, from measurement and cloud platforms to analytics. Here I share practical lessons, design decisions and what I’m learning about AI.</p><div class="hero-actions"><a class="btn btn-primary" data-track-event="ctaClicked" data-track-id="heroReadBlog" data-track-location="hero" href="'+path('blog/',base)+'">Read the Blog <span aria-hidden="true">↗</span></a><a class="btn btn-outline" data-track-event="ctaClicked" data-track-id="heroAboutMe" data-track-location="hero" href="'+path('about/',base)+'">About Me <span aria-hidden="true">↗</span></a></div><div class="hero-signoff"><span class="little-line"></span><p>17+ years designing and engineering data solutions.</p></div></div><div class="hero-visual" aria-label="Portrait of Mayo Racek"><div class="orb orb-a"></div><div class="orb orb-b"></div><div class="portrait-orbit orbit-one"></div><div class="portrait-orbit orbit-two"></div><div class="portrait-floor"></div><img class="portrait" src="'+path('mayo-portrait-cropped.webp',base)+'" width="415" height="643" fetchpriority="high" decoding="async" alt="Mayo Racek, data engineer and writer"/></div></div><div class="hero-bottom-fade"></div></section>';
 const writing='<section class="section home-writing" aria-labelledby="latest-writing-title"><div class="site-container"><div class="section-head"><div><span class="kicker">LATEST WRITING</span><h2 id="latest-writing-title">Notes from the work.</h2><p>Technical articles on data engineering, measurement and using AI responsibly.</p></div></div><div class="post-grid">'+posts.slice(0,2).map(p=>postCard(p,base)).join('')+'</div><a class="text-link home-writing-all" data-track-event="ctaClicked" data-track-id="homeAllArticles" data-track-location="homeWriting" href="'+path('blog/',base)+'">All articles <span aria-hidden="true">↗</span></a></div></section>';
 return shell({title:'Home',description:'Mayo Racek shares practical engineering lessons from 17+ years designing data solutions, measurement systems and analytics, with a growing focus on AI.',body:hero+writing,active:'home',base,canonical:'/'});
}
export function renderBlog(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">BLOG</span><h1>Writing about the <em>work behind the systems.</em></h1><p>Notes on data engineering, measurement, analytics and practical AI. Real engineering questions, design decisions and lessons learned.</p></div></section><section class="section blog-listing"><div class="site-container"><div class="post-grid">${posts.map(x=>postCard(x,base)).join('')}</div></div></section>`;
 return shell({title:'Blog',description:'Practical articles on measurement, cloud data engineering and trustworthy AI systems by Mayo Racek.',body,active:'blog',base,canonical:'/blog/'});
}
export function renderPost(slug,base='/'){
 const p=posts.find(x=>x.slug===slug);if(!p)throw new Error('Unknown post '+slug);
 const body=`<section class="page-hero small-hero"><div class="site-container"><a class="back-link" href="${path('blog/',base)}">← All writing</a><span class="kicker">${esc(p.category.toUpperCase())} / FIELD NOTE</span><h1>${esc(p.title)}</h1><p>${esc(p.excerpt)}</p></div></section><section class="section"><div class="site-container article-shell"><p class="article-byline">By Mayo Racek · Engineering field note</p>${p.sections.map(([t,d],i)=>`<section class="article-outline"><span class="tiny-number">SECTION 0${i+1}</span><h2>${esc(t)}</h2><p>${esc(d)}</p></section>`).join('')}<a class="text-link" href="${path('blog/',base)}">← Return to the blog</a></div></section>`;
 return shell({title:p.title,description:p.excerpt,body,active:'blog',base,canonical:'/blog/'+slug+'/',og:'article'});
}
export function renderAbout(base='/'){
 const hero='<section class="page-hero about-hero about-new"><div class="site-container about-hero-grid"><div class="about-new-copy"><span class="kicker">ABOUT ME</span><h1>Hi, I’m Mayo. <em>Welcome.</em></h1><p>I’m a data and AI solutions architect based in Slovakia. For more than 17 years, I’ve worked in digital measurement, data engineering and analytics. I enjoy solving technical problems, understanding what makes systems reliable and sharing the lessons from that work.</p><p>These days I’m also exploring practical AI agents, evaluation and governance. I write about what I’m learning, including the challenges and trade-offs, not just the successes.</p><div class="hero-actions"><a class="btn btn-primary" data-track-event="resumeDownloadClicked" data-track-id="aboutDownloadResume" data-track-location="aboutHero" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download My CV <span aria-hidden="true">↓</span></a><a class="btn btn-outline" href="'+path('resume/',base)+'">View My Experience <span aria-hidden="true">↗</span></a></div></div><div class="about-photo"><img src="'+path('mayo-portrait-cropped.webp',base)+'" alt="Portrait of Mayo Racek" width="415" height="643"/></div></div></section>';
 const personal='<section class="section about-human"><div class="site-container about-human-grid"><div><span class="kicker">BEYOND THE SCREEN</span><h2>Family, football and a curious mind.</h2></div><div><p>I’m a husband and father of three. Family comes first, and football has always been a big part of my life. I value teamwork, steady improvement and supporting people whenever I can.</p><p>I like learning, sharing knowledge and finding better ways to work. This blog is one way to keep those conversations going.</p><p><a class="text-link" href="'+path('blog/',base)+'">Read the Blog <span aria-hidden="true">↗</span></a></p></div></div></section>';
 return shell({title:'About Me',description:'Meet Mayo Racek, a data engineering and analytics professional from Slovakia, father of three, football enthusiast and author of practical technical articles.',body:hero+personal,active:'about',base,canonical:'/about/'});
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

function enquiryForm(base='/'){return "<section class=\"contact-focus\" id=\"enquiry\" aria-labelledby=\"contact-title\"><div class=\"site-container contact-focus-grid\"><div class=\"contact-focus-intro\"><span class=\"kicker\">CONTACT</span><h1 id=\"contact-title\">Get in <em>touch.</em></h1><p>A question about an article, data engineering, AI or an idea? Send me a short note.</p><a class=\"contact-direct-link\" href=\"mailto:me@mayoracek.com\" data-track-event=\"contactMethodSelected\" data-track-id=\"directEmail\" data-track-location=\"contactIntro\">Email me directly <span aria-hidden=\"true\">↗</span></a></div><div class=\"enquiry-card contact-focus-form\"><form id=\"project-brief\"><div class=\"enquiry-field\"><label for=\"brief-need\">What is your message about?</label><select id=\"brief-need\" name=\"need\" required><option value=\"\">Select a topic</option><option value=\"collect\">Measurement or tracking</option><option value=\"connect\">Data engineering or analytics</option><option value=\"activate\">AI and automation</option><option value=\"unsure\">General question</option><option value=\"other\">Other</option></select></div><div class=\"enquiry-field\"><label for=\"brief-details\">Your message</label><textarea id=\"brief-details\" name=\"details\" rows=\"3\" minlength=\"8\" maxlength=\"1400\" required placeholder=\"Tell me briefly what is on your mind.\"></textarea></div><div class=\"enquiry-actions\"><button class=\"btn btn-primary\" type=\"submit\">Open Email Draft <span aria-hidden=\"true\">↗</span></button><button type=\"button\" id=\"copy-brief\" class=\"enquiry-copy\">Copy Message</button></div><p class=\"enquiry-feedback\" id=\"brief-feedback\" role=\"status\" aria-live=\"polite\"></p><p class=\"enquiry-privacy\">This opens a draft in your email app. Nothing is sent or stored by this website. Please avoid confidential information.</p></form></div></div></section>"+'<script defer src="'+path('intake.js',base)+'"></script>';}

export function renderContact(base='/'){
 return shell({title:'Contact',description:'Contact Mayo Racek about data engineering, analytics, digital measurement, practical AI or an article. Choose a topic and prepare a short email.',body:enquiryForm(base),active:'contact',base,canonical:'/contact/'});
}

export function renderNotFound(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">404 / PAGE NOT FOUND</span><h1>That page isn't <em>here.</em></h1><p>Try the homepage or browse the blog for recent writing.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('',base)}">Go home <span aria-hidden="true">↗</span></a></div></div></section>`;
 return shell({title:'Page not found',body,active:'home',base});
}
