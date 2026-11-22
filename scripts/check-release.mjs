/** Production checks for the concise portfolio and local-only data layer. */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const routes = [
  '', 'services/', 'services/measurement-architecture/',
  'services/cloud-data-products/', 'services/applied-ai-systems/',
  'projects/', 'lab/aria/', 'blog/', 'blog/start-with-the-problem/',
  'resume/', 'about/', 'contact/', 'start/'
];
const errors = [];
const pages = new Map();
const must = (html, text, label) => { if (!html.includes(text)) errors.push('Missing ' + label + ': ' + text); };
const absent = (html, text, label) => { if (html.includes(text)) errors.push('Unexpected ' + label + ': ' + text); };
const read = file => fs.readFileSync(file, 'utf8');

for (const route of routes) {
  const file = path.join(dist, route, 'index.html');
  if (!fs.existsSync(file)) { errors.push('Missing page: /' + route); continue; }
  const html = read(file);
  pages.set(route, html);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push('Expected exactly one H1: /' + route);
  if ((html.match(/"event":"pageViewed"/g) || []).length !== 1) errors.push('Expected one pageViewed: /' + route);
  if (!html.includes('"schemaVersion":"1.1.0"')) errors.push('Expected data layer schema 1.1.0: /' + route);
  if (!html.includes('type="application/ld+json"')) errors.push('JSON-LD missing: /' + route);
  if (!html.includes('href="https://mayoracek.com/')) errors.push('Canonical missing: /' + route);
  if (!html.includes('site-analytics.js')) errors.push('Data layer script missing: /' + route);
  if (/Ross Abrahams|\bRoss\b|A measurement challenge worth unpacking|Draft outline/i.test(html)) errors.push('Unverified template content: /' + route);
  if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{35}/.test(html)) errors.push('Possible credential: /' + route);
}
const page = route => pages.get(route) || '';
const home = page('');
const services = page('services/');
const measure = page('services/measurement-architecture/');
const cloud = page('services/cloud-data-products/');
const ai = page('services/applied-ai-systems/');
const lab = page('lab/aria/');
const work = page('projects/');
const article = page('blog/start-with-the-problem/');
const start = page('start/');
const resume = page('resume/');
const about = page('about/');
const contact = page('contact/');

must(home,'Designing data solutions to','Homepage headline');
must(home,'empower your goals','Homepage promise');
must(home,'Explore Services','Hero action');
must(home,'Read My Blog','Hero action');
must(home,'heroExploreServices','CTA ID');
must(home,'name="theme-color" content="#191B1F"','Browser theme color');
must(home,'favicon.svg?v=2','Updated browser favicon');
const favicon=path.join(dist,'favicon.svg');
if(!fs.existsSync(favicon))errors.push('Favicon missing');
else{
 const icon=read(favicon);
 if(!icon.includes('#191B1F')||!icon.includes('#E4C8A0'))errors.push('Favicon colors do not match theme');
 if(/#3F89FD|#29E1DD|#946FFF/i.test(icon))errors.push('Outdated blue favicon still present');
}

must(home,'heroReadBlog','CTA ID');
must(home,'life-steps','Interactive lifecycle');
must(home,'life-path-desktop','Curved lifecycle SVG');
must(home,'lifecycle.js','Interactive lifecycle script');
if ((home.match(/data-life-step=/g) || []).length !== 6) errors.push('Expected six lifecycle stages');
must(home,'data-life-panel','Lifecycle explanation panels');
if ((home.match(/class="life-viz life-viz--/g) || []).length !== 6) errors.push('Six distinct lifecycle illustrations expected');
for (const id of ['collect','connect','transform','analyze','activate','automate']) must(home,'life-viz--'+id,'Stage visual');
must(home,'fetchpriority="high"','Hero portrait loading priority');
must(home,'rel="preload" as="image"','Hero image preload');
absent(home,'lifecycle-track','Expanded lifecycle on homepage');
absent(home,'work-section','Unfinished project showcase on homepage');
absent(home,'blog-section','Repeated blog cards on homepage');
absent(home,'Discuss your project','Retired CTA');

for (const service of ['Collect &amp; Measure','Connect &amp; Analyze','Activate &amp; Automate']) {
  must(home,service,'Lifecycle service destinations');
  must(services,service,'Services landing page');
}
for (const route of ['services/measurement-architecture/','services/cloud-data-products/','services/applied-ai-systems/']) {
  const html=page(route);
  must(html,'A clear path from idea to delivery.','Service process heading');
  must(html,'process-timeline','Service visual timeline');
  must(html,'capability-grid','Service capability cards');
  must(html,'Start a Conversation','Service contact CTA');
  absent(html,'Best suited for:','Restrictive service qualifier');
  must(html,'"@type":"Service"','Service JSON-LD');
  must(html,'"@type":"BreadcrumbList"','Breadcrumb JSON-LD');
  absent(html,'problem-grid','Old long-form service');
}
must(measure,'GTM','Measurement scope');
must(cloud,'BigQuery','Cloud engineering scope');
must(ai,'AI agents &amp; automation','Agentic automation scope');
must(lab,'IN DEVELOPMENT','Aria status');
must(lab,'QUALITY GATES','Aria verification conditions');
must(work,'name="robots" content="noindex, follow"','Unfinished work noindex');
must(lab,'name="robots" content="noindex, follow"','Aria lab noindex');
must(article,'"@type":"Article"','Article JSON-LD');
must(article,'A request is not yet a problem statement','Substantive article');
must(start,'id="project-brief"','Legacy contact alias form');
must(start,'name="robots" content="noindex, follow"','Legacy form alias noindex');
must(contact,'id="project-brief"','Contact form');
must(contact,'id="brief-need"','Dropdown topic selector');
must(contact,'value="other"','Other topic choice');
must(contact,'id="brief-details"','Simple optional explanation');
must(contact,'Open Email Draft','Honest mailto CTA');
must(contact,'Copy Message','Clipboard fallback');
must(about,'father of three','Human About Me copy');
must(about,'football','Human interests');
must(about,'Download My CV','About CV action');
must(about,'"@type":"ProfilePage"','About profile schema');
must(about,'resumeDownloadClicked','CV intent tracking');
must(resume,'Download Resume (PDF)','CV download');
must(resume,'resume-v2-hero','Visual resume hero');
must(resume,'career-timeline','Professional timeline');
must(resume,'2023 - Present','Recent professional experience');
must(resume,'Data &amp; AI Solutions Architect','Professional positioning');
must(home,'life-panel','Interactive lifecycle detail panel');
must(home,'Automate','AI automation lifecycle');
absent(home,'Share Your Goal','Retired CTA');
const cv=path.join(dist,'Mayo_Racek_CV.pdf');
if(!fs.existsSync(cv))errors.push('Public CV PDF missing');
else {
  const buffer=fs.readFileSync(cv);
  if(buffer.subarray(0,5).toString()!=='%PDF-')errors.push('Invalid CV PDF');
  if(buffer.length < 12000)errors.push('CV PDF was not regenerated using the styled template');
  if(/\+421|Philip Morris|Merkle/.test(buffer.toString('latin1')))errors.push('Sensitive CV content');
}
const style=path.join(dist,'styles.css');
if(!fs.existsSync(style))errors.push('CSS missing');
else {
  const css=read(style);
  for(const name of ['.process-timeline','.capability-grid','.life-step','.life-path-mobile','.life-viz--connect','.life-growth','display:grid!important','prefers-reduced-motion','.enquiry-card','.about-human','.resume-v2-hero','.career-timeline','.skip-link','.service-grid','background:#191b1f!important'])must(css,name,'Stylesheet');
}
for(const [route,html] of pages) {
  for(const m of html.matchAll(/\bhref="(\/[^"#?]*)"/g)) {
    const target=m[1];
    const local=path.join(dist,target.endsWith('/')?target+'index.html':target.slice(1));
    if(target!=='/'&&!fs.existsSync(local))errors.push('Broken link: '+route+' => '+target);
  }
}
for(const route of ['projects/measurement-case-study/','projects/data-product-case-study/','projects/ai-workflow-case-study/','blog/before-you-fix-the-dashboard/','blog/what-a-useful-data-model-needs/','blog/ai-agents-need-release-process/']){
  if(fs.existsSync(path.join(dist,route,'index.html')))errors.push('Placeholder route still generated: '+route);
}
for(const file of ['site-analytics.js','intake.js','lifecycle.js']) {
  const abs=path.join(dist,file);
  if(!fs.existsSync(abs)){errors.push('Script missing: '+file);continue;}
  const js=read(abs);
  if(/fetch\s*\(|localStorage|sessionStorage|sendBeacon|XMLHttpRequest|document\.cookie\s*=/.test(js))errors.push('Unexpected network or browser storage: '+file);
}
const intake=fs.existsSync(path.join(dist,'intake.js'))?read(path.join(dist,'intake.js')):'';
must(intake,'projectBriefEmailPrepared','Email intent tracking');
must(intake,'projectBriefCopied','Copy intent tracking');
must(intake,'mailto:me@mayoracek.com','Email draft destination');
must(intake,'needLabels','Approved dropdown categories');
const analytics=read(path.join(dist,'site-analytics.js'));
for (const eventName of ['lifecycleStepSelected','resumeDownloadClicked','projectBriefNeedSelected']) must(analytics,eventName,'New data layer event');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log('Portfolio release checks passed:',pages.size,'routes, SEO schema, minimal service layout, local data layer, privacy and links.');
