/** Run: node scripts/build-preview.mjs
 *  Generates locally navigable HTML files from the exact render functions used by Astro.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { services, projects, posts, renderHome, renderServices, renderService, renderProjects, renderProject, renderBlog, renderPost, renderAbout, renderContact, renderNotFound } from '../src/lib/site.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'preview');
fs.rmSync(output,{recursive:true,force:true});
fs.mkdirSync(output,{recursive:true});
for(const name of ['styles.css','mayo-portrait.png','mayo-portrait.webp','favicon.svg','robots.txt'])fs.copyFileSync(path.join(root,'public',name),path.join(output,name));
function write(route, fn){
 const level=route?route.split('/').filter(Boolean).length:0;
 const base=level?'../'.repeat(level):'./';
 const dirname=path.join(output,route);
 fs.mkdirSync(dirname,{recursive:true});
 const html=fn(base);
 fs.writeFileSync(path.join(dirname,'index.html'),html,'utf8');
}
write('',renderHome);write('services',renderServices);write('projects',renderProjects);write('blog',renderBlog);write('about',renderAbout);write('contact',renderContact);
for(const s of services)write('services/'+s.slug,b=>renderService(s.slug,b));
for(const p of projects)write('projects/'+p.slug,b=>renderProject(p.slug,b));
for(const p of posts)write('blog/'+p.slug,b=>renderPost(p.slug,b));
write('404',renderNotFound);
console.log('Created',1+5+services.length+projects.length+posts.length+1,'static pages in',output);
