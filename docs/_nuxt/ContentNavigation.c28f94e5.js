import{q as f,h as p,e as v,j as l,u as d}from"./query.1a3d9d7c.js";import{bO as g,bB as h,M as _,b5 as y,y as C,bR as b,bf as w,a5 as r,bS as $}from"./entry.6543d036.js";import{w as m,s as N,u as P,a as j}from"./utils.1f6b92cd.js";import"./index.17a7ea7e.js";const T=async e=>{const{content:t}=g().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await h(()=>import("./client-db.931886c3.js"),["./client-db.931886c3.js","./entry.6543d036.js","./entry.bd2acceb.css","./utils.1f6b92cd.js","./index.17a7ea7e.js","./query.1a3d9d7c.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:P("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},R=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=C(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&b("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=w(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{R as default};