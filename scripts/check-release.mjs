/** Validate generated public pages before publishing; not repository-history secret scanning. */
import fs from 'node:fs';
import path from 'node:path';
const dist=path.resolve('dist');
const routes=['','services/','services/measurement-architecture/','services/cloud-data-products/','services/applied-ai-systems/','projects/','blog/','resume/','about/','contact/','projects/measurement-case-study/','projects/data-product-case-study/','projects/ai-workflow-case-study/','blog/before-you-fix-the-dashboard/','blog/what-a-useful-data-model-needs/','blog/ai-agents-need-release-process/'];
const problems=[],pages=[];
for(const route of routes){
 const file=path.join(dist,route,'index.html');
 if(!fs.existsSync(file)){problems.push('Missing route '+route);continue;}
 const html=fs.readFileSync(file,'utf8');pages.push([route,html]);
 if(/Ross Abrahams|\bRoss\b/i.test(html))problems.push('Unrelated name '+route);
 if(/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{35}/.test(html))problems.push('Possible token '+route);
}
const home=pages.find(x=>x[0]==='')?.[1]||'';
const measure=pages.find(x=>x[0]==='services/measurement-architecture/')?.[1]||'';
const resume=pages.find(x=>x[0]==='resume/')?.[1]||'';
if(!home.includes('Data solutions built around')||!home.includes('Discuss your project'))problems.push('Homepage headline or CTA missing');
if(!home.includes('href="/resume/"'))problems.push('Resume link missing in navigation');
if(!measure.includes('From customer activity')||!/server-side GTM/i.test(measure)||!measure.includes('Dataform'))problems.push('Measurement framework missing');
if(!resume.includes('Download CV (PDF)'))problems.push('Resume PDF download missing');
const pdf=path.join(dist,'Mayo_Racek_CV.pdf');
if(!fs.existsSync(pdf))problems.push('Public CV missing');
else{
 const data=fs.readFileSync(pdf);
 if(data.subarray(0,5).toString()!=='%PDF-')problems.push('Public CV is not PDF');
 if(/\+421|Philip Morris|Merkle/.test(data.toString('latin1')))problems.push('Sensitive text found in public CV');
}
const cssFile=path.join(dist,'styles.css');
if(!fs.existsSync(cssFile))problems.push('Stylesheet missing');
else{
 const css=fs.readFileSync(cssFile,'utf8');
 if(!css.includes('.framework-steps')||!css.includes('.resume-timeline'))problems.push('New styles missing');
 if(!css.includes('background:#191b1f!important'))problems.push('Charcoal menu override missing');
}
for(const [route,html] of pages){
 for(const m of html.matchAll(/\bhref="(\/[^"#?]*)"/g)){
  const target=m[1], resolved=path.join(dist,target.endsWith('/')?target+'index.html':target.replace(/^\//,''));
  if(target!=='/'&&!fs.existsSync(resolved))problems.push('Broken local link: '+route+' => '+target);
 }
}
if(problems.length){console.error(problems.join('\n'));process.exit(1);}
console.log('Public portfolio QA passed:',pages.length,'routes, resume PDF, local links and selected secret patterns.');
