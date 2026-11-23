/** Release gates for the blog-first portfolio. Does not change data-layer v1.1.0. */
import fs from 'node:fs';
import path from 'node:path';
const dist=path.resolve('dist');
const errors=[];
const read=(file)=>fs.readFileSync(file,'utf8');
const must=(html,needle,label)=>{if(!html.includes(needle))errors.push('Missing '+label+': '+needle)};
const absent=(html,needle,label)=>{if(html.includes(needle))errors.push('Unexpected '+label+': '+needle)};
const routes=['','blog/','blog/start-with-the-problem/','about/','resume/','contact/'];
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
must(home,'Designing data solutions.','Blog-first headline');
must(home,'17+ years designing and engineering data solutions.','Clear experience statement');
must(home,'Sharing what works.','Blog-first promise');
must(home,'Read the Blog','Primary blog CTA');
must(home,'About Me','Secondary about CTA');
must(home,'heroReadBlog','Stable blog CTA action ID');
must(home,'heroAboutMe','About CTA action ID');
must(home,'LATEST WRITING','Latest writing');
must(home,'start-with-the-problem','Real published article');
must(home,'fetchpriority="high"','Hero portrait image priority');
must(home,'rel="preload" as="image"','Portrait preload');
must(home,'favicon.svg?v=2','Brand-aligned favicon');
must(home,'name="theme-color" content="#191B1F"','Charcoal browser theme');
absent(home,'Explore Services','Outdated sales action');
absent(home,'Full Data Lifecycle','Redundant diagram');
absent(home,'data-life-step','Removed lifecycle');
absent(home,'contact-band','Removed homepage sales CTA');
for(const needle of ['>Blog</a>','>About</a>','>Contact</a>'])must(home,needle,'Small navigation');
absent(home,'>Services</a>','Removed navigation');
must(blog,'Writing about the','Blog description');
must(blog,'post-card','Blog article card');
absent(blog,'contact-band','Removed blog sales CTA');
must(post,'By Mayo Racek','Author attribution');
must(post,'"@type":"Article"','Article JSON-LD');
must(post,'"@type":"BreadcrumbList"','Article breadcrumb JSON-LD');
must(post,'A request is not yet a problem statement','Real full-length article');
absent(post,'contact-band','Removed article sales CTA');
must(about,'father of three','Human About Me');
must(about,'football','Personal interests');
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
must(contact,'Open Email Draft','Honest email handoff');
must(contact,'Copy Message','Copy fallback');
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
must(analytics,"const schemaVersion = '1.1.0'","Schema version");
for(const value of ['activityByEvent','activityByActionId','describeActivity','chooseContactTopic','prepareContactEmail','readBlog'])must(analytics,value,'Human-readable activity');
must(home,'"activity":{"name":"viewPage","category":"navigation","status":"observed"}','Page view activity metadata');
const intake=fs.existsSync(path.join(dist,'intake.js'))?read(path.join(dist,'intake.js')):'';
must(intake,'projectBriefEmailPrepared','Email intent only');
must(intake,'projectBriefCopied','Clipboard intent only');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}
else console.log('Blog release passed:',pages.size,'routes, unchanged data-layer contract, author identity, privacy, CV, and internal links.');
