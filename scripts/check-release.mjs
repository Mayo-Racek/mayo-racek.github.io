/** Verify generated pages and privacy-first interactions before releasing. */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const routes = [
  '', 'services/', 'services/measurement-architecture/',
  'services/cloud-data-products/', 'services/applied-ai-systems/',
  'projects/', 'lab/aria/', 'blog/', 'blog/start-with-the-problem/',
  'resume/', 'about/', 'contact/', 'start/'
];
const problems = [];
const pages = [];
const read = file => fs.readFileSync(file, 'utf8');
const has = (html, needle, label) => {
  if (!html.includes(needle)) problems.push(label + ' missing: ' + needle);
};

for (const route of routes) {
  const file = path.join(dist, route, 'index.html');
  if (!fs.existsSync(file)) {
    problems.push('Missing route ' + route);
    continue;
  }
  const html = read(file);
  pages.push([route, html]);
  if (/Ross Abrahams|\bRoss\b/i.test(html)) problems.push('Unrelated name: ' + route);
  if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{35}/.test(html)) {
    problems.push('Possible credential in public page: ' + route);
  }
  if ((html.match(/"event":"pageViewed"/g) || []).length !== 1) problems.push('Expected one pageViewed push: ' + route);
  if (!html.includes('site-analytics.js')) problems.push('Data layer interaction script missing: ' + route);
  if (html.includes('A measurement challenge worth unpacking') || html.includes('Draft outline')) problems.push('Placeholder content: ' + route);
}
const page = route => pages.find(entry => entry[0] === route)?.[1] || '';
const home = page('');
const measure = page('services/measurement-architecture/');
const cloud = page('services/cloud-data-products/');
const ai = page('services/applied-ai-systems/');
const resume = page('resume/');
const start = page('start/');
const aria = page('lab/aria/');
const article = page('blog/start-with-the-problem/');

has(home, 'Engineering data solutions', 'Hero');
has(home, 'Explore Services', 'First hero CTA');
has(home, 'Read My Blog', 'Second hero CTA');
has(home, 'data-track-id="heroExploreServices"', 'Explicit CTA ID');
has(home, 'href="/resume/"', 'Resume navigation');
has(home, 'href="/start/"', 'Project-brief CTA');
has(home, 'Aria', 'In-development project');
has(measure, 'From customer activity', 'Measurement diagram');
has(measure, 'server-side GTM', 'Measurement expertise');
has(measure, 'Dataform', 'Data lifecycle');
has(measure, 'legal-basis', 'Consent');
has(cloud, 'Customer.io', 'Activation');
has(cloud, 'Google Ads', 'Activation');
has(cloud, 'AI-ready data foundations', 'AI-ready data');
has(ai, 'least-privilege', 'Agent security');
has(aria, 'IN DEVELOPMENT', 'Aria status');
has(aria, 'QUALITY GATES', 'Aria validation plan');
has(article, 'A request is not yet a problem statement', 'Real article');
has(article, 'Make verification part of delivery', 'Article QA section');
has(start, 'id="project-brief"', 'Project brief');
has(start, 'Prepare email to Mayo', 'Project brief button');
has(resume, 'Download CV (PDF)', 'Resume link');

for (const old of [
  'projects/measurement-case-study/', 'projects/data-product-case-study/',
  'projects/ai-workflow-case-study/', 'blog/before-you-fix-the-dashboard/',
  'blog/what-a-useful-data-model-needs/', 'blog/ai-agents-need-release-process/'
]) {
  if (fs.existsSync(path.join(dist, old, 'index.html'))) problems.push('Unpublished placeholder still generated: ' + old);
}

const cv = path.join(dist, 'Mayo_Racek_CV.pdf');
if (!fs.existsSync(cv)) problems.push('CV PDF missing');
else {
  const buffer = fs.readFileSync(cv);
  if (buffer.subarray(0, 5).toString() !== '%PDF-') problems.push('Invalid PDF');
  if (/\+421|Philip Morris|Merkle/.test(buffer.toString('latin1'))) problems.push('Sensitive content in public CV');
}
const css = path.join(dist, 'styles.css');
if (!fs.existsSync(css)) problems.push('Stylesheet missing');
else {
  const style = read(css);
  for (const marker of ['.framework-steps', '.resume-timeline', '.lab-feature', 'background:#191b1f!important']) {
    if (!style.includes(marker)) problems.push('Missing CSS: ' + marker);
  }
}

for (const [route, html] of pages) {
  for (const match of html.matchAll(/\bhref="(\/[^"#?]*)"/g)) {
    const target = match[1];
    const local = path.join(dist, target.endsWith('/') ? target + 'index.html' : target.replace(/^\//, ''));
    if (target !== '/' && !fs.existsSync(local)) problems.push('Broken link: ' + route + ' => ' + target);
  }
}
const intake = path.join(dist, 'intake.js');
if (!fs.existsSync(intake)) problems.push('Intake script missing');
else {
  const code = read(intake);
  if (!code.includes('mailto:me@mayoracek.com') ||
      !code.includes('projectBriefEmailPrepared') ||
      !code.includes('projectBriefCopied') ||
      /fetch\s*\(|localStorage|sendBeacon|XMLHttpRequest/.test(code)) {
    problems.push('Unexpected lead-intake behavior');
  }
}
const analytics = path.join(dist, 'site-analytics.js');
if (!fs.existsSync(analytics)) problems.push('Interaction script missing');
else {
  const code = read(analytics);
  for (const eventName of ['navigationClicked', 'ctaClicked', 'serviceSelected',
    'articleSelected', 'labProjectSelected', 'projectBriefStarted',
    'projectBriefEmailPrepared', 'projectBriefCopied']) {
    if (!code.includes(eventName)) problems.push('Missing data layer event: ' + eventName);
  }
  if (/fetch\s*\(|localStorage|sessionStorage|sendBeacon|XMLHttpRequest|document\.cookie\s*=/.test(code)) {
    problems.push('Data layer script must not transmit or persist visitor data');
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Release verification passed:', pages.length,
    'pages; meaningful CTA routes; local-only data layer; no published placeholders.');
}
