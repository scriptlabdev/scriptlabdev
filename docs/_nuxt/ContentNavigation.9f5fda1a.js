import{z as b,D as r,k as m,n as s,a as j,M as N,L as c,N as $,O as y,P as k,e as B,Q as C,q as v,p as S,R as x,S as L,f as A,g as T,U as M,V as o,K as w,W as z,m as H,_ as q}from"./entry.8100cb04.js";import{q as F,h as E,e as U,j as Q,u as W}from"./query.47381b8f.js";import{w as O,s as G,u as K,a as Y}from"./utils.65b7d66e.js";/* empty css                                               */import"./matter.22d1f548.js";import{u as J}from"./ContentDoc.4767ae40.js";import"./ContentList.9f17c86d.js";import"./ContentQuery.98966242.js";import"./ContentRenderer.d051b3d0.js";import"./ContentRendererMarkdown.72696118.js";import"./ContentSlot.53048768.js";import"./DocumentDrivenEmpty.a0395c27.js";import"./DocumentDrivenNotFound.6e69508b.js";import"./Markdown.36487fe8.js";import"./ProseCode.f57ed6be.js";import"./three.module.792bc64d.js";import"./index.68c44503.js";const X=async t=>{const{content:e}=b().public;typeof(t==null?void 0:t.params)!="function"&&(t=F(t));const i=t.params(),u=e.experimental.stripQueryParameters?O(`/navigation/${`${E(i)}.${e.integrity}`}/${U(i)}.json`):O(`/navigation/${E(i)}.${e.integrity}.json`);if(G())return(await r(()=>import("./client-db.c88a1e11.js"),["./client-db.c88a1e11.js","./entry.8100cb04.js","./entry.6917efa6.css","./utils.65b7d66e.js","./query.47381b8f.js","./index.68c44503.js"],import.meta.url).then(l=>l.generateNavigation))(i);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(i),previewToken:K("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={site:()=>r(()=>import("./site.bbf8d0fc.js"),["./site.bbf8d0fc.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t)},Z=m({props:{name:String},async setup(t,e){const i=await I[t.name]().then(u=>u.default||u);return()=>s(i,{},e.slots)}}),tt=m({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=k("_route"),u=i===j()?N():i,a=c(()=>{var n,l;return(l=(n=B(t.name))!=null?n:u.meta.layout)!=null?l:"default"});return()=>{var d;const n=a.value&&a.value in I,l=(d=u.meta.layoutTransition)!=null?d:$;return y(C,n&&l,{default:()=>y(Z,n&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const u=v(null),a=S();return x(n=>{if(!a.isHydrating)return i("error",n),u.value=n,!1}),()=>{var n,l;return u.value?(n=e.error)==null?void 0:n.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),it=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const n=e.fallback||e.placeholder;if(n)return n();const l=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return A(d,i,l)}}}),g=new WeakMap;function nt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...u)=>{var a;if(i.mounted$){const n=t.render(i,...u);return n.children===null||typeof n.children=="string"?T(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):s(n)}else return s("div",(a=i.$attrs)!=null?a:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,u)=>{var n;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,i,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...d)=>{if(a.value){const _=l(...d);return _.children===null||typeof _.children=="string"?T(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):s(_)}else return s("div",u.attrs)})},g.set(t,e),e}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it,createClientOnly:nt},Symbol.toStringTag,{value:"Module"})),ut=m({name:"DevOnly",setup(t,e){return()=>null}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),_t=m({name:"ServerPlaceholder",render(){return A("div")}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),dt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=st({duration:t.duration,throttle:t.throttle}),u=S();return u.hook("page:start",i.start),u.hook("page:finish",i.finish),M(()=>i.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function st(t){const e=v(0),i=v(!1),u=c(()=>1e4/t.duration);let a=null,n=null;function l(){_(),e.value=0,i.value=!0,t.throttle?n=setTimeout(P,t.throttle):P()}function d(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(n),a=null,n=null}function D(V){e.value=Math.min(100,e.value+V)}function R(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function P(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:i,start:l,finish:d,clear:_}}const pt=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),ft=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,u)=>(J(()=>t({...ft(i),...u.attrs},u)),()=>{var a,n;return e?(n=(a=u.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const i={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return u&&(i.children=u),{noscript:[i]}})}),vt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),gt=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),Et=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,n;return{title:((n=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),ct=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Pt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,l;const i={...t},u=(l=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:l.children;return u&&(i.children=u),{style:[i]}})}),yt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,u;return(u=(i=e.slots).default)==null?void 0:u.call(i)}}),Tt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Ot=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ht,Link:vt,Base:gt,Title:Et,Meta:ct,Style:Pt,Head:yt,Html:Tt,Body:Ot},Symbol.toStringTag,{value:"Module"}));o(()=>r(()=>import("./alert.de5e2cdd.js"),["./alert.de5e2cdd.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./calendar.d28ff614.js"),["./calendar.d28ff614.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./dd.ccf14ed5.js"),["./dd.ccf14ed5.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./draggable.ef7160f0.js"),["./draggable.ef7160f0.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.db727205.js"),["./layout.db727205.js","./entry.8100cb04.js","./entry.6917efa6.css","./layout.e428cb53.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./monaco-diff.683caaaa.js"),["./monaco-diff.683caaaa.js","./entry.8100cb04.js","./entry.6917efa6.css","./monaco.c2f31078.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./monaco.c2f31078.js").then(t=>t.m),["./monaco.c2f31078.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./qrcode.e49112e2.js"),["./qrcode.e49112e2.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./scene.4588a10d.js"),["./scene.4588a10d.js","./three.module.792bc64d.js","./matter.22d1f548.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./content.1d8845d9.js"),["./content.1d8845d9.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentDoc.4767ae40.js").then(t=>t.C),["./ContentDoc.4767ae40.js","./entry.8100cb04.js","./entry.6917efa6.css","./ContentRenderer.d051b3d0.js","./ContentRendererMarkdown.72696118.js","./index.68c44503.js","./ContentQuery.98966242.js","./query.47381b8f.js","./utils.65b7d66e.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentList.9f17c86d.js"),["./ContentList.9f17c86d.js","./ContentQuery.98966242.js","./entry.8100cb04.js","./entry.6917efa6.css","./query.47381b8f.js","./utils.65b7d66e.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>Lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentQuery.98966242.js"),["./ContentQuery.98966242.js","./entry.8100cb04.js","./entry.6917efa6.css","./query.47381b8f.js","./utils.65b7d66e.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRenderer.d051b3d0.js"),["./ContentRenderer.d051b3d0.js","./ContentRendererMarkdown.72696118.js","./entry.8100cb04.js","./entry.6917efa6.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRendererMarkdown.72696118.js"),["./ContentRendererMarkdown.72696118.js","./entry.8100cb04.js","./entry.6917efa6.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentSlot.53048768.js"),["./ContentSlot.53048768.js","./utils.65b7d66e.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenEmpty.a0395c27.js"),["./DocumentDrivenEmpty.a0395c27.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenNotFound.6e69508b.js"),["./DocumentDrivenNotFound.6e69508b.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Markdown.36487fe8.js"),["./Markdown.36487fe8.js","./ContentSlot.53048768.js","./utils.65b7d66e.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseA.6b4c045a.js"),["./ProseA.6b4c045a.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseBlockquote.9e7b9d3d.js"),["./ProseBlockquote.9e7b9d3d.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCode.f57ed6be.js"),["./ProseCode.f57ed6be.js","./entry.8100cb04.js","./entry.6917efa6.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCodeInline.f86dbd6f.js"),["./ProseCodeInline.f86dbd6f.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseEm.35775efa.js"),["./ProseEm.35775efa.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH1.e25cacf3.js"),["./ProseH1.e25cacf3.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH2.65f7031c.js"),["./ProseH2.65f7031c.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH3.da9c8ecc.js"),["./ProseH3.da9c8ecc.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH4.09f25d23.js"),["./ProseH4.09f25d23.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH5.d0d5774d.js"),["./ProseH5.d0d5774d.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH6.19b9ebca.js"),["./ProseH6.19b9ebca.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseHr.7f751ca6.js"),["./ProseHr.7f751ca6.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseImg.cff6f44b.js"),["./ProseImg.cff6f44b.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseLi.78ae6718.js"),["./ProseLi.78ae6718.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseOl.1b745448.js"),["./ProseOl.1b745448.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseP.4697422b.js"),["./ProseP.4697422b.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseStrong.190527f6.js"),["./ProseStrong.190527f6.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTable.60bfe9ad.js"),["./ProseTable.60bfe9ad.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTbody.21469853.js"),["./ProseTbody.21469853.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTd.60a1a905.js"),["./ProseTd.60a1a905.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTh.c66a3241.js"),["./ProseTh.c66a3241.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseThead.03243c1a.js"),["./ProseThead.03243c1a.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTr.02d22ffe.js"),["./ProseTr.02d22ffe.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseUl.37fa228a.js"),["./ProseUl.37fa228a.js","./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./welcome.f0cfbe16.js"),["./welcome.f0cfbe16.js","./ContentDoc.4767ae40.js","./entry.8100cb04.js","./entry.6917efa6.css","./ContentRenderer.d051b3d0.js","./ContentRendererMarkdown.72696118.js","./index.68c44503.js","./ContentQuery.98966242.js","./query.47381b8f.js","./utils.65b7d66e.js","./matter.22d1f548.js","./three.module.792bc64d.js","./ContentList.9f17c86d.js","./ContentSlot.53048768.js","./DocumentDrivenEmpty.a0395c27.js","./DocumentDrivenNotFound.6e69508b.js","./Markdown.36487fe8.js","./ProseCode.f57ed6be.js","./ProseCode.e63e49c6.css","./layout.e428cb53.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.8100cb04.js").then(t=>t.ab),["./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>pt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.8100cb04.js").then(t=>t.ac),["./entry.8100cb04.js","./entry.6917efa6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const St=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=w(t),i=c(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!i.value&&z("dd-navigation").value){const{navigation:a}=Y();return{navigation:a}}const{data:u}=await W(`content-navigation-${E(i.value)}`,()=>X(i.value));return{navigation:u}},render(t){const e=H(),{navigation:i}=t,u=l=>s(q,{to:l._path},()=>l.title),a=(l,d)=>s("ul",d?{"data-level":d}:null,l.map(_=>_.children?s("li",null,[u(_),a(_.children,d+1)]):s("li",null,u(_)))),n=l=>a(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):n(i)}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};
