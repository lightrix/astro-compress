import{deepmerge as p}from"deepmerge-ts";import i from"./lib/pipe-all.js";import e from"./options/index.js";import n from"./lib/forward-slash-it.js";var m=(r={})=>{for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&r[o]===!0&&(r[o]=e[o]);const t=p(e,r);return{name:"astro-compress",hooks:{"astro:config:done":async o=>{t.path=t.path?t.path:o.config.outDir.toString()},"astro:build:done":async()=>{let o=new Set;if(typeof t.path<"u")if(t.path instanceof Array||t.path instanceof Set)for(const a of t.path)o.add(n(a));else o.add(n(t.path));for(const a of o)await i(a,t,t.logger)}}}};export{m as default};
