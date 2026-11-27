/** Release gates for the blog-first portfolio. Does not change data-layer v1.1.0. */
import fs from 'node:fs';
import path from 'node:path';
import { posts, articlePreviews } from '../src/lib/site.mjs';
const dist=path.resolve('dist');
const errors=[];
const read=(file)=>fs.readFileSync(file,'utf8');
const must=(html,needle,label)=>{if(!html.includes(needle))errors.push('Missing '+label+': '+needle)};
const absent=(html,needle,label)=>{if(html.includes(needle))errors.push('Unexpected '+label+': '+needle)};
const routes=['','blog/','about/','resume/','contact/',...posts.map(p=>'blog/'+p.slug+'/')];
const pages=new Map();
for(const route of routes){
 const file=path.join(dist,route,'index.html');
 if(!fs.existsSync(file)){errors.push('Page missing: /'+route);continue}
 const html=read(file);
 pages.set(route,html);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push('Expected exactly one H1 at /'+route);
 if((html.match(/"event":"pageViewed"/g)||[]).length!==1)errors.push('Exactly one initial pageViewed at /'+route);
 must(html,'"schemaVersion":"1.1.0"','Unchanged first-party event schema');
 must(html,'type="application/ld+json"','Structured data');
 must(html,'href="https://mayoracek.com/','Canonical URL');
 must(html,'site-analytics.js','First-party data layer script');
 absent(html,'/services/','Sales/service link');
 absent(html,'/projects/','Unfinished work link');
 absent(html,'/lab/aria/','Unfinished lab link');
 absent(html,'lifecycle.js','Unused lifecycle JavaScript');
 if(/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{35}/.test(html))
   errors.push('Potential secret in /'+route);
}
const page=(route)=>pages.get(route)||'';
const home=page('');
const blog=page('blog/');
const post=page('blog/start-with-the-problem/');
const about=page('about/');
const resume=page('resume/');
const contact=page('contact/');
must(home,'Engineering data','Specific engineering headline');
must(home,'AI-driven world.','Approved positioning');
must(home,'MEASUREMENT ARCHITECTURE','Measurement focus');
must(home,'APPLIED AI SOLUTIONS','Applied AI focus');
must(home,'17+ years in data and analytics.','Concise experience statement');
absent(home,'6 years supporting a Fortune 200 organization','Enterprise detail now belongs on About');
must(home,'I write about the technologies, challenges and engineering principles behind them.','Specific blog purpose');
must(home,'Read my blog','Primary blog CTA');
must(home,'About me','Secondary about CTA');
must(home,'heroReadBlog','Stable blog CTA action ID');
must(home,'heroAboutMe','About CTA action ID');
must(home,'Latest from my blog','Latest writing headline');
absent(home,'Ideas and lessons from data engineering','Redundant blog subtitle removed');
absent(home,'<span class="kicker">THE BLOG</span>','Redundant blog eyebrow removed');
must(home,'class="brand-icon"','Visible brand icon');
if(posts.length+articlePreviews.length>3)must(home,'homeAllArticles','Full blog link');
if((home.match(/class="post-card post-preview"/g)||[]).length!==Math.min(articlePreviews.length,Math.max(0,3-posts.length)))errors.push('Incorrect homepage preview count');
if((blog.match(/class="post-card post-preview"/g)||[]).length!==articlePreviews.length)errors.push('Incorrect non-published preview count');
if((blog.match(/data-nosnippet/g)||[]).length!==articlePreviews.length)errors.push('Previews must be excluded from snippets');
if((blog.match(/data-track-event="articleSelected"/g)||[]).length!==posts.length)errors.push('Only real articles may be selected');
must(blog,'"@type":"CollectionPage"','Blog collection schema');
const schemaNodes=(html)=>[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1])['@graph']||[]);
try{
 const nodes=schemaNodes(blog);
 const itemList=nodes.find(n=>n['@type']==='CollectionPage')?.mainEntity?.itemListElement||[];
 const expected=posts.map(p=>'https://mayoracek.com/blog/'+p.slug+'/');
 if(JSON.stringify(itemList.map(n=>n.url))!==JSON.stringify(expected))errors.push('Collection schema contains missing or non-published articles');
 for(const p of posts){
  const route='blog/'+p.slug+'/';
  const article=schemaNodes(page(route)).find(n=>n['@type']==='Article');
  if(!article||article.headline!==p.title||article.mainEntityOfPage!=='https://mayoracek.com/'+route)errors.push('Article schema does not match visible content: '+route);
 }
 for(const [route,html] of pages){
  const canon='<link rel="canonical" href="https://mayoracek.com/'+route+'"';
  must(html,canon,'Exact canonical '+route);
  if(!schemaNodes(html).some(n=>n['@type']==='Person'&&n.sameAs.includes('https://bsky.app/profile/mayoracek.bsky.social')))errors.push('Missing consistent author identity: '+route);
 }
}catch(error){errors.push('Structured data validation failed: '+error.message)}
const sitemapFiles=fs.readdirSync(dist).filter(n=>/^sitemap.*\.xml$/.test(n));
const sitemapXml=sitemapFiles.map(n=>read(path.join(dist,n))).join('\n');
for(const route of routes)must(sitemapXml,'<loc>https://mayoracek.com/'+route+'</loc>','Published route in sitemap');
for(const preview of articlePreviews)absent(sitemapXml,preview.title,'Preview not published');
must(read(path.join(dist,'robots.txt')),'Sitemap: https://mayoracek.com/sitemap-index.xml','Sitemap discovery');
absent(home,'status-label','Duplicate article card status removed');
must(home,'start-with-the-problem','Real published article');
must(home,'fetchpriority="high"','Hero portrait image priority');
must(home,'rel="preload" as="image"','Portrait preload');
must(home,'favicon.svg?v=3','Updated brand-aligned favicon');
const favicon=path.join(dist,'favicon.svg');
if(fs.existsSync(favicon)){const image=read(favicon);must(image,'North Star','Personal north-star favicon');must(image,'#E4C8A0','Favicon matches champagne brand color');absent(image,'M14 44C23','Retired straight-line favicon');} else errors.push('Missing favicon SVG');
must(home,'name="theme-color" content="#191B1F"','Charcoal browser theme');
absent(home,'Explore Services','Outdated sales action');
absent(home,'Full Data Lifecycle','Redundant diagram');
absent(home,'data-life-step','Removed lifecycle');
absent(home,'contact-band','Removed homepage sales CTA');
for(const needle of ['>Blog</a>','>About</a>','>Contact</a>'])must(home,needle,'Small navigation');
absent(home,'>Services</a>','Removed navigation');
if(home.indexOf('>About</a>')>home.indexOf('>Blog</a>'))errors.push('About must precede Blog');
must(blog,'<h1>Blog</h1>','Short blog heading');
absent(blog,'Real engineering questions, design decisions','Redundant blog introduction removed');
must(blog,'post-card','Blog article card');
absent(blog,'contact-band','Removed blog sales CTA');
must(post,'By <strong>Mayo Racek</strong>','Author attribution');
must(post,'class="blog-article"','Semantic long-form article');
must(post,'class="blog-article-header"','Editorial article header');
must(post,'class="blog-article-content"','Article reading column');
must(post,'class="blog-article-deck"','Article summary');
if((post.match(/class="blog-article-section"/g)||[]).length!==6)errors.push('Expected six meaningful article sections');
if((post.match(/<section class="blog-article-section"[^>]*><h2/g)||[]).length!==6)errors.push('Article must have six descriptive H2 headings');
if((post.match(/<p>/g)||[]).length<12)errors.push('Article paragraphs have not been separated for readability');
absent(post,'SECTION 0','Unnecessary numbered section labels removed');
absent(post,'FIELD NOTE','Redundant article type label removed');
absent(post,'class="tiny-number"','Legacy article numbering markup removed');
for(const heading of ['Define the contract before choosing tools','Trace the full system, not just the dashboard','Make verification part of delivery'])must(post,heading,'Meaningful editorial heading');
must(post,'"@type":"Article"','Article JSON-LD');
must(post,'"@type":"BreadcrumbList"','Article breadcrumb JSON-LD');
must(post,'A request is not yet a problem statement','Real full-length article');
absent(post,'contact-band','Removed article sales CTA');
must(about,'father of three','Human About Me');
must(about,'football','Personal interests');
must(about,'astronomy','Personal astronomy interest');
must(about,'Fortune 200','Enterprise experience in About');
if((about.match(/class="about-story-row"/g)||[]).length!==4)errors.push('Expected four alternating About chapters');
must(about,'Family and football','Family chapter heading');
must(about,'A curious mind','Curiosity chapter heading');
absent(about,'class="about-story-index"','Redundant About numbering');
must(about,'What I do','Direct professional heading');
must(about,'Download My CV','About PDF link');
must(about,'"@type":"ProfilePage"','About structured identity');
must(resume,'Download Resume (PDF)','CV download');
must(resume,'career-timeline','Experience timeline');
must(resume,'resumeDownloadClicked','Download intent tracking');
must(contact,'id="project-brief"','Contact form');
must(contact,'class="contact-focus"','Compact contact section');
must(contact,'id="contact-title"','Accessible contact heading');
must(contact,'Get in <em>touch.</em>','Short contact message');
absent(contact,'contact-hero','No duplicate contact banner');
absent(contact,'page-hero','No contact banner');
must(contact,'What is your message about?','Plain language subject field');
must(contact,'Your message</label>','Plain language message field');
must(contact,'General question','General enquiry topic');
must(contact,'value="other"','Flexible Other selection');
must(contact,'Send Message','Single contact action');
absent(contact,'Copy Message','Removed clipboard action');
absent(contact,'id="copy-brief"','Removed unused clipboard control');
must(contact,'You must press Send there','Honest email-app handoff');
must(contact,'contact-network-links','Social links');
for(const href of ['contactLinkedIn','contactGithub','contactX','contactBluesky'])must(contact,href,'Social network intent marker');
absent(contact,'formSubmitted','No false server submission');
const blocked=['services/','services/measurement-architecture/','services/cloud-data-products/',
  'services/applied-ai-systems/','projects/','lab/aria/','start/'];
for(const route of blocked)if(fs.existsSync(path.join(dist,route,'index.html')))
  errors.push('Retired public route still generated: /'+route);
const cv=path.join(dist,'Mayo_Racek_CV.pdf');
if(!fs.existsSync(cv))errors.push('CV PDF missing');
else{
 const buffer=fs.readFileSync(cv);
 if(buffer.subarray(0,5).toString()!=='%PDF-'||buffer.length<12000)errors.push('Public CV PDF invalid');
 if(/\+421|Philip Morris|Merkle/.test(buffer.toString('latin1')))errors.push('Potential sensitive CV content');
}
const css=path.join(dist,'styles.css');
if(!fs.existsSync(css))errors.push('Stylesheet missing');
else for(const needle of ['.hero-grid','.home-writing','.post-card','.about-human','.resume-v2-hero','.enquiry-card','.contact-focus-grid','.skip-link'])
  must(read(css),needle,'Blog layout CSS');
for(const [route,html] of pages){
 for(const m of html.matchAll(/\bhref="(\/[^"#?]*)"/g)){
  const target=m[1];
  if(target==='/'||target.startsWith('//'))continue;
  const file=path.join(dist,target.endsWith('/')?target.slice(1)+'index.html':target.slice(1));
  if(!fs.existsSync(file))errors.push('Broken local link from /'+route+': '+target);
 }
}
const jsFiles=['site-analytics.js','intake.js'];
for(const filename of jsFiles){
 const file=path.join(dist,filename);
 if(!fs.existsSync(file)){errors.push('Missing '+filename);continue}
 const js=read(file);
 if(/fetch\s*\(|localStorage|sessionStorage|sendBeacon|XMLHttpRequest|document\.cookie\s*=/.test(js))
   errors.push('Unexpected network/storage in '+filename);
}
const analytics=fs.existsSync(path.join(dist,'site-analytics.js'))?read(path.join(dist,'site-analytics.js')):'';
const supported=['navigationClicked','navigationMenuOpened','ctaClicked','serviceSelected','articleSelected',
 'labProjectSelected','contentLinkClicked','socialLinkClicked','contactMethodSelected','projectBriefStarted',
 'projectBriefNeedSelected','projectBriefEmailPrepared','projectBriefCopied','lifecycleStepSelected',
 'resumeDownloadClicked'];
for(const event of supported)must(analytics,"'"+event+"'","Unchanged supported data-layer event");
must(analytics,"eventName === 'socialLinkClicked'",'Contact social event classification');
must(analytics,"const schemaVersion = '1.1.0'","Schema version");
for(const value of ['activityByEvent','activityByActionId','describeActivity','chooseContactTopic','prepareContactEmail','readBlog'])must(analytics,value,'Human-readable activity');
must(home,'"activity":{"name":"viewPage","category":"navigation","status":"observed"}','Page view activity metadata');
const intake=fs.existsSync(path.join(dist,'intake.js'))?read(path.join(dist,'intake.js')):'';
must(intake,'projectBriefEmailPrepared','Email intent only');
absent(intake,"getElementById('copy-brief')",'Retired clipboard handler');
must(intake,'projectBriefEmailPrepared','Mailto-only intent');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}
else console.log('Blog release passed:',pages.size,'routes, unchanged data-layer contract, author identity, privacy, CV, and internal links.');
