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
    "category": "Data engineering",
    "title": "Start with the problem, not the platform",
    "excerpt": "Before choosing a platform, define the decision it needs to support, the data contract and how you will test the result.",
    "status": "Field note",
    "sections": [
      [
        "A request is not yet a problem statement",
        "A team asks for a dashboard, more tracking or an AI agent. That is a proposed solution, not necessarily the underlying need. I start by asking what decision is difficult today, what manual work stands in the way, who is affected and how we would recognize an improvement.\n\n A dashboard is useful if someone acts on it. Automation is useful if it reliably removes a bottleneck. Without this connection, sophisticated engineering can produce very little value."
      ],
      [
        "Define the contract before choosing tools",
        "Once the outcome is clear, I make inputs and outputs explicit. For measurement, that means defining the business action, its event name, permitted properties, identity rules, consent dependencies and acceptance criteria.\n\n For data models, it means specifying grain, metric definitions, freshness expectations and ownership. For AI workflows, it means allowed tasks, authoritative sources, tool permissions, human approvals and failure behavior. A written contract gives engineers and stakeholders something concrete to test."
      ],
      [
        "Trace the full system, not just the dashboard",
        "A website event may travel through the data layer, client-side tagging, a server-side collection endpoint, an analytics platform and an export into a warehouse. Other tools follow different paths.\n\n When reported numbers disagree, I inspect each boundary rather than assume the dashboard is wrong. I check the browser action, request payload, identifiers, consent conditions, delivery timing, deduplication and transformation logic. The same mindset applies to AI: inspect retrieval, instructions, tool calls, execution traces and final actions as one connected workflow."
      ],
      [
        "Make verification part of delivery",
        "Tests should follow real journeys, including failure paths. I want explicit cases for consent choices, missing inputs, duplicate events, navigation changes and late-arriving data.\n\n In the warehouse, reconciliation and freshness monitoring help distinguish expected differences from defects. For agents, evaluations should cover correct outcomes, incorrect tool use, denied actions and escalation to a human. A feature is not delivered simply because the happy-path demo works. A UAT sign-off should reference test cases and evidence, not only a stakeholder impression."
      ],
      [
        "Build automation with boundaries",
        "Repetitive review work is a promising AI use case, but an agent is not automatically safer or faster than a deterministic script.\n\n Start with the simplest reliable mechanism. When reasoning across varied inputs genuinely helps, keep access narrow, record tool operations, validate proposed changes and require approval for consequential actions. Give operators a way to stop, inspect and reverse a workflow. Evaluate the cost of accepted results rather than the number of model calls."
      ],
      [
        "What a successful solution looks like",
        "A good outcome is not a long list of technologies. It is a process someone can explain, evidence that it produces the intended result, and an operating model that survives after the original engineer steps away.\n\n I look for clarity of purpose, privacy and security by design, repeatable tests, understandable ownership and an honest account of limitations. The goal is useful engineering that earns trust."
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
function footer(base){return '<footer class="site-footer"><div class="site-container footer-top"><div><a class="brand" href="'+path('',base)+'"><strong>Mayo Racek</strong></a><p>Data engineering, analytics and AI.</p></div><div class="footer-links"><a href="'+path('blog/',base)+'">Blog</a><a href="'+path('about/',base)+'">About</a><a href="'+path('resume/',base)+'">Resume</a><a href="'+path('contact/',base)+'">Contact</a></div><div class="footer-social">'+external(profile.linkedin,'LinkedIn ↗')+external(profile.github,'GitHub ↗')+external(profile.x,'X ↗')+'</div></div><div class="site-container footer-bottom"><span>© '+new Date().getFullYear()+' Mayo Racek</span><span>Based in Slovakia · Working internationally</span></div></footer>';}
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

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="theme-color" content="#191B1F"/><meta name="description" content="${esc(metaDesc)}"/>${noindex?'<meta name="robots" content="noindex, follow"/>':''}<meta property="og:type" content="${esc(og)}"/><meta property="og:title" content="${esc(fullTitle)}"/><meta property="og:description" content="${esc(metaDesc)}"/><meta property="og:url" content="${esc(fullUrl)}"/><link rel="canonical" href="${esc(fullUrl)}"/>${heroImagePreload}<meta name="twitter:card" content="summary"/><meta name="twitter:creator" content="@MayoRacek"/>${jsonLd}${dataLayerInit}<link rel="icon" href="${path('favicon.svg',base)}?v=3" type="image/svg+xml"/><link rel="stylesheet" href="${path('styles.css',base)}"/><title>${esc(fullTitle)}</title></head><body><a class="skip-link" href="#main-content">Skip to content</a>${header(active,base)}<main id="main-content">${body}</main>${footer(base)}<script defer src="${path('site-analytics.js',base)}"></script><script>(function(){const b=document.querySelector('.menu-toggle');const n=document.querySelector('.site-nav');if(b&&n){const close=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('open')};b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('open',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();b.focus()}});document.addEventListener('click',e=>{if(!b.contains(e.target)&&!n.contains(e.target))close()})}})();</script></body></html>`;
}
function postCard(p,base){return `<a class="post-card" data-track-event="articleSelected" data-track-location="blogGrid" data-track-id="${esc(p.slug)}" href="${path(`blog/${p.slug}/`,base)}"><div class="post-topline"><span>${esc(p.category)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="card-link">Read the article <span aria-hidden="true">↗</span></span></a>`;}
export function renderHome(base='/'){
 const hero='<section class="hero"><div class="hero-shine hero-shine-a"></div><div class="hero-shine hero-shine-b"></div><div class="site-container hero-grid"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-rule"></span>DATA ENGINEERING <span class="mid-dot">·</span> ANALYTICS <span class="mid-dot">·</span> AI</div><h1><span class="headline-desktop">Engineering data <em>you can trust.</em></span><span class="headline-mobile">Engineering data <em>you can trust.</em></span></h1><p class="hero-intro">I design measurement frameworks and cloud data systems. I write about data engineering, analytics and applying AI in practice.</p><div class="hero-actions"><a class="btn btn-primary" data-track-event="ctaClicked" data-track-id="heroReadBlog" data-track-location="hero" href="'+path('blog/',base)+'">Read the Blog <span aria-hidden="true">↗</span></a><a class="btn btn-outline" data-track-event="ctaClicked" data-track-id="heroAboutMe" data-track-location="hero" href="'+path('about/',base)+'">About Me <span aria-hidden="true">↗</span></a></div><div class="hero-signoff"><span class="little-line"></span><p>17+ years in data and analytics.</p></div></div><div class="hero-visual" aria-label="Portrait of Mayo Racek"><div class="orb orb-a"></div><div class="orb orb-b"></div><div class="portrait-orbit orbit-one"></div><div class="portrait-orbit orbit-two"></div><div class="portrait-floor"></div><img class="portrait" src="'+path('mayo-portrait-cropped.webp',base)+'" width="415" height="643" fetchpriority="high" decoding="async" alt="Mayo Racek, data engineer and writer"/></div></div><div class="hero-bottom-fade"></div></section>';
 const writing='<section class="section home-writing" aria-labelledby="latest-writing-title"><div class="site-container"><div class="section-head"><h2 id="latest-writing-title">Latest from my blog</h2></div><div class="post-grid">'+posts.slice(0,2).map(p=>postCard(p,base)).join('')+'</div>'+(posts.length>1?'<a class="text-link home-writing-all" data-track-event="ctaClicked" data-track-id="homeAllArticles" data-track-location="homeWriting" href="'+path('blog/',base)+'">All articles <span aria-hidden="true">↗</span></a>':'')+'</div></section>';
 return shell({title:'Home',description:'Mayo Racek, data and AI solutions architect. Articles on measurement, cloud data engineering, analytics and practical AI.',body:hero+writing,active:'home',base,canonical:'/'});
}
export function renderBlog(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><h1>Blog</h1></div></section><section class="section blog-listing"><div class="site-container"><div class="post-grid">${posts.map(x=>postCard(x,base)).join('')}</div></div></section>`;
 return shell({title:'Blog',description:'Practical articles on measurement, cloud data engineering and trustworthy AI systems by Mayo Racek.',body,active:'blog',base,canonical:'/blog/'});
}
export function renderPost(slug,base='/'){
 const p=posts.find(item=>item.slug===slug);
 if(!p)throw new Error('Unknown post '+slug);
 const sections=p.sections.map(([heading,paragraph])=>{
  const anchor=heading.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-');
  const paragraphs=String(paragraph).split(/\n\s*\n/).filter(Boolean).map(text=>'<p>'+esc(text.trim())+'</p>').join('');
  return '<section class="blog-article-section" aria-labelledby="'+esc(anchor)+'"><h2 id="'+esc(anchor)+'">'+esc(heading)+'</h2>'+paragraphs+'</section>';
 }).join('');
 const articleHeader='<header class="blog-article-header"><div class="site-container"><a class="back-link" href="'+path('blog/',base)+'">← Back to the blog</a><p class="blog-article-category">'+esc(p.category)+'</p><h1>'+esc(p.title)+'</h1><p class="blog-article-deck">'+esc(p.excerpt)+'</p><p class="blog-article-byline">By <strong>Mayo Racek</strong></p></div></header>';
 const articleBody='<div class="site-container"><div class="blog-article-content">'+sections+'<footer class="blog-article-footer"><a class="text-link" href="'+path('blog/',base)+'">← Back to the blog</a></footer></div></div>';
 return shell({title:p.title,description:p.excerpt,body:'<article class="blog-article">'+articleHeader+articleBody+'</article>',active:'blog',base,canonical:'/blog/'+slug+'/',og:'article'});
}

export function renderAbout(base='/'){
 const hero='<section class="page-hero about-hero about-new"><div class="site-container about-hero-grid"><div class="about-new-copy"><span class="kicker">ABOUT ME</span><h1>Hi, I’m <em>Mayo.</em></h1><p>I am a data and AI solutions architect based in Slovakia, working with international teams. My focus is designing data systems that businesses can rely on.</p><p>I started this blog to share my experience, explore new ideas and learn from others working in data and AI.</p><div class="hero-actions"><a class="btn btn-primary" data-track-event="resumeDownloadClicked" data-track-id="aboutDownloadResume" data-track-location="aboutHero" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download My CV <span aria-hidden="true">↓</span></a><a class="btn btn-outline" href="'+path('resume/',base)+'">View My Experience <span aria-hidden="true">↗</span></a></div></div><div class="about-photo"><img src="'+path('mayo-portrait-cropped.webp',base)+'" alt="Portrait of Mayo Racek" width="415" height="643"/></div></div></section>';
 const chapters=[
  ['My background','My career began in digital marketing and measurement. Over time, it expanded into analytics architecture, cloud data engineering and automation. What has stayed constant is my interest in understanding how systems work and how to make them better.'],
  ['What I do','I have more than 17 years of experience in data and analytics, including six years supporting global measurement and analytics for a Fortune 200 company as a consultant. My work spans measurement frameworks, consent-aware tracking, cloud data platforms, data quality, analytics and activation. I am also developing AI agents and exploring how to evaluate, secure and operate them responsibly.'],
  ['Family and football','I am a husband and father of three. Family comes first, and football has been a lifelong passion. I enjoy the game itself, the discipline behind it and the way it brings people together.'],
  ['A curious mind','Astronomy has fascinated me for years. I enjoy learning about the universe as much as I enjoy exploring new technologies. I value continuous learning and sharing knowledge, especially when something I have learned can help someone else.']
 ];
 const story='<section class="section about-story" aria-label="More about Mayo"><div class="site-container">'+chapters.map(([title,description])=>'<article class="about-story-row"><div class="about-story-heading"><h2>'+esc(title)+'</h2></div><div class="about-story-copy"><p>'+esc(description)+'</p></div></article>').join('')+'<div class="about-story-ending"><p>Questions, feedback or ideas are always welcome.</p><a class="text-link" href="'+path('contact/',base)+'">Get in touch <span aria-hidden="true">↗</span></a><a class="text-link" href="'+path('blog/',base)+'">Read the blog <span aria-hidden="true">↗</span></a></div></div></section>';
 return shell({title:'About Me',description:'Meet Mayo Racek, a data engineering professional from Slovakia with 17+ years of experience, six years supporting a Fortune 200 company, and interests in family, football, astronomy and AI.',body:hero+story,active:'about',base,canonical:'/about/'});
}

export function renderResume(base='/'){
 const experiences=[
  ['2023 - Present','Founder & Senior Data Consultant','Powerful Data s.r.o.','Independent consultancy across measurement architecture, cloud data engineering, attribution, analytics and reporting.'],
  ['2021 - Present','Senior Technical Data Analyst & Analytics Lead','International consulting','Global measurement and analytics delivery for a Fortune 200 organization, including consent controls, QA, data engineering and cross-team technical leadership.'],
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
 const hero='<section class="resume-v2-hero"><div class="site-container resume-v2-hero-inner"><div class="resume-v2-copy"><span class="kicker">PROFESSIONAL RESUME</span><h1>Mayo Racek</h1><p class="resume-v2-role">Data &amp; AI Solutions Architect</p><p class="resume-v2-intro">Data and analytics consultant with experience in measurement architecture, cloud data engineering and analytics. Six years supporting global analytics for a Fortune 200 organization through consulting.</p><div class="resume-v2-meta"><span>17+ years in data and analytics</span><span>Slovakia · International collaboration</span></div><div class="hero-actions"><a class="btn btn-primary" data-track-event="resumeDownloadClicked" data-track-id="resumeHeroDownload" data-track-location="resumeHero" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download Resume (PDF) <span aria-hidden="true">↓</span></a><a class="btn btn-outline" href="'+profile.linkedin+'" target="_blank" rel="noopener noreferrer">LinkedIn Profile <span aria-hidden="true">↗</span></a></div></div><div class="resume-v2-photo"><img src="'+path('mayo-portrait-cropped.webp',base)+'" alt="Portrait of Mayo Racek" width="415" height="643"/></div></div></section>';
 const intro='<section class="section resume-v2-section"><div class="site-container"><div class="section-head"><div><h2>Technical expertise</h2></div></div><div class="resume-v2-expertise">'+capabilities.map(([name,description],i)=>'<article><span class="resume-v2-id">0'+(i+1)+'</span><h3>'+esc(name)+'</h3><p>'+esc(description)+'</p></article>').join('')+'</div></div></section>';
 const experience='<section class="section resume-v2-experience"><div class="site-container"><div class="section-head"><div><h2>Professional experience</h2></div></div><ol class="career-timeline">'+experiences.map(([period,role,org,description])=>'<li><span class="career-date">'+esc(period)+'</span><div class="career-content"><h3>'+esc(role)+'</h3><span class="career-company">'+esc(org)+'</span><p>'+esc(description)+'</p></div></li>').join('')+'</ol></div></section>';
 const last='<section class="section resume-v2-education"><div class="site-container resume-education-grid"><div><h2>Education</h2><p><strong>MBA in Marketing</strong> · City University of Seattle (2010–2012)</p><p>Bachelor degree in Business Administration and Management (2006–2009)</p></div><div class="resume-education-action"><h3>Download my CV</h3><a class="btn btn-primary" data-track-event="resumeDownloadClicked" data-track-id="resumeBottomDownload" data-track-location="resumeEducation" href="'+path('Mayo_Racek_CV.pdf',base)+'" download="Mayo_Racek_CV.pdf">Download Resume (PDF) <span aria-hidden="true">↓</span></a></div></div></section>';
 return shell({title:'Resume',description:'Mayo Racek: Data and AI Solutions Architect with more than 17 years in measurement, BigQuery, data engineering, analytics and automation.',body:hero+intro+experience+last,active:'resume',base,canonical:'/resume/'});
}

function enquiryForm(base='/'){const html="<section class=\"contact-focus\" id=\"enquiry\" aria-labelledby=\"contact-title\"><div class=\"site-container contact-focus-grid\"><div class=\"contact-focus-intro\"><span class=\"kicker\">LET'S CONNECT</span><h1 id=\"contact-title\">Get in <em>touch.</em></h1><p>If you have a question about data or AI, want to discuss a project or have feedback on an article, I would be happy to hear from you. Feel free to connect with me on LinkedIn, GitHub or X.</p><a class=\"contact-direct-link\" href=\"mailto:me@mayoracek.com\" data-track-event=\"contactMethodSelected\" data-track-id=\"directEmail\" data-track-location=\"contactIntro\">Email me directly <span aria-hidden=\"true\">↗</span></a></div><div class=\"enquiry-card contact-focus-form\"><form id=\"project-brief\"><div class=\"enquiry-field\"><label for=\"brief-need\">What is your message about?</label><select id=\"brief-need\" name=\"need\" required><option value=\"\">Select a topic</option><option value=\"collect\">Measurement or tracking</option><option value=\"connect\">Data engineering or analytics</option><option value=\"activate\">AI and automation</option><option value=\"unsure\">General question</option><option value=\"other\">Other</option></select></div><div class=\"enquiry-field\"><label for=\"brief-details\">Your message</label><textarea id=\"brief-details\" name=\"details\" rows=\"3\" minlength=\"8\" maxlength=\"1400\" required placeholder=\"How can I help?\"></textarea></div><div class=\"enquiry-actions\"><button class=\"btn btn-primary\" type=\"submit\">Send Message <span aria-hidden=\"true\">↗</span></button></div><p class=\"enquiry-feedback\" id=\"brief-feedback\" role=\"status\" aria-live=\"polite\"></p><p class=\"enquiry-privacy\">Opens your email app with a draft. You must press Send there. This site does not transmit or save your message. Please avoid confidential information.</p></form></div><div class=\"contact-networks\"><span class=\"contact-networks-label\">Or connect on</span><nav class=\"contact-network-links\" aria-label=\"Connect with Mayo on social media\"><a href=\"__LINKEDIN__\" data-track-event=\"socialLinkClicked\" data-track-id=\"contactLinkedIn\" data-track-location=\"contactSocial\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn <span aria-hidden=\"true\">↗</span></a><a href=\"__GITHUB__\" data-track-event=\"socialLinkClicked\" data-track-id=\"contactGithub\" data-track-location=\"contactSocial\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub <span aria-hidden=\"true\">↗</span></a><a href=\"__X__\" data-track-event=\"socialLinkClicked\" data-track-id=\"contactX\" data-track-location=\"contactSocial\" target=\"_blank\" rel=\"noopener noreferrer\">X <span aria-hidden=\"true\">↗</span></a></nav></div></div></section>";return html.replaceAll('__LINKEDIN__',esc(profile.linkedin)).replaceAll('__GITHUB__',esc(profile.github)).replaceAll('__X__',esc(profile.x))+'<script defer src="'+path('intake.js',base)+'"></script>';}

export function renderContact(base='/'){
 return shell({title:'Contact',description:'Contact Mayo Racek about data engineering, analytics, digital measurement, practical AI or an article. Choose a topic and prepare a short email.',body:enquiryForm(base),active:'contact',base,canonical:'/contact/'});
}

export function renderNotFound(base='/'){
 const body=`<section class="page-hero small-hero"><div class="site-container"><span class="kicker">404 / PAGE NOT FOUND</span><h1>That page isn't <em>here.</em></h1><p>Try the homepage or browse the blog for recent writing.</p><div class="hero-actions"><a class="btn btn-primary" href="${path('',base)}">Go home <span aria-hidden="true">↗</span></a></div></div></section>`;
 return shell({title:'Page not found',body,active:'home',base});
}
