/** Run: node scripts/build-preview.mjs
 * Generate locally navigable HTML using the same page renderers as Astro.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts, renderHome, renderBlog, renderPost, renderAbout, renderContact, renderResume, renderNotFound } from '../src/lib/site.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'preview');
fs.rmSync(output,{recursive:true,force:true});
fs.mkdirSync(output,{recursive:true});
for (const name of ['styles.css','site-analytics.js','intake.js','mayo-portrait-cropped.webp','favicon.svg','robots.txt','Mayo_Racek_CV.pdf']) {
  fs.copyFileSync(path.join(root,'public',name),path.join(output,name));
}
function write(route, fn) {
  const level=route?route.split('/').filter(Boolean).length:0;
  const base=level?'../'.repeat(level):'./';
  const dirname=path.join(output,route);
  fs.mkdirSync(dirname,{recursive:true});
  fs.writeFileSync(path.join(dirname,'index.html'),fn(base),'utf8');
}
write('',renderHome);
write('blog',renderBlog);
write('about',renderAbout);
write('contact',renderContact);
write('resume',renderResume);
for (const post of posts) write('blog/'+post.slug,base=>renderPost(post.slug,base));
write('404',renderNotFound);
console.log('Created',posts.length+6,'blog-focused pages in',output);
