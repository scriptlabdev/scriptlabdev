import{i as b,D as r,l as m,q as d,k as j,K as N,G as c,L as $,M as y,N as k,d as B,O as C,s as v,h as S,P as x,Q as L,f as A,e as T,R as w,S as o,E as M,U as z,m as H,_ as F}from"./entry.75e3974d.js";import{q,h as g,e as U,j as Q,u as G}from"./ContentQuery.022d9410.js";import{w as O,s as K,u as W,a as Y}from"./utils.a542d5cc.js";import"./index.7e24678b.js";import"./layout.fc18b579.js";import"./index.a5ca146b.js";import"./matter.f49158da.js";import{u as J}from"./ContentDoc.17b934d9.js";import"./ContentList.e8e194b3.js";import"./ContentRenderer.8458d8af.js";import"./ContentRendererMarkdown.d49cf261.js";import"./ContentSlot.2b9b47fc.js";import"./DocumentDrivenEmpty.28d66dae.js";import"./DocumentDrivenNotFound.7e0f84f2.js";import"./Markdown.3e382c68.js";import"./ProseCode.b8a34ad7.js";import"./index.e1051fb6.js";import"./Bookapp.96409075.js";import"./Calculator.3c4bb1aa.js";import"./info.5bab90c3.js";import"./info.75d63909.js";import"./three.module.71e54c61.js";import"./Pass.76f5b677.js";import"./info.377866b0.js";import"./info.55c89003.js";import"./index.d066c5f0.js";import"./index.411efe3f.js";import"./alert.3d807861.js";import"./index.3f3319de.js";import"./index.2a19f413.js";import"./index.68c44503.js";const X=async t=>{const{content:e}=b().public;typeof(t==null?void 0:t.params)!="function"&&(t=q(t));const i=t.params(),u=e.experimental.stripQueryParameters?O(`/navigation/${`${g(i)}.${e.integrity}`}/${U(i)}.json`):O(`/navigation/${g(i)}.${e.integrity}.json`);if(K())return(await r(()=>import("./client-db.9072ba2d.js"),["./client-db.9072ba2d.js","./entry.75e3974d.js","./entry.873adaa1.css","./utils.a542d5cc.js","./ContentQuery.022d9410.js","./index.68c44503.js"],import.meta.url).then(l=>l.generateNavigation))(i);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(i),previewToken:W("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={site:()=>r(()=>import("./site.20cc3383.js"),["./site.20cc3383.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t)},Z=m({props:{name:String},async setup(t,e){const i=await I[t.name]().then(u=>u.default||u);return()=>d(i,{},e.slots)}}),tt=m({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=k("_route"),u=i===j()?N():i,a=c(()=>{var n,l;return(l=(n=B(t.name))!=null?n:u.meta.layout)!=null?l:"default"});return()=>{var p;const n=a.value&&a.value in I,l=(p=u.meta.layoutTransition)!=null?p:$;return y(C,n&&l,{default:()=>y(Z,n&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const u=v(null),a=S();return x(n=>{if(!a.isHydrating)return i("error",n),u.value=n,!1}),()=>{var n,l;return u.value?(n=e.error)==null?void 0:n.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),it=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const n=e.fallback||e.placeholder;if(n)return n();const l=a.fallback||a.placeholder||"",p=a.fallbackTag||a.placeholderTag||"span";return A(p,i,l)}}}),E=new WeakMap;function nt(t){if(E.has(t))return E.get(t);const e={...t};return e.render?e.render=(i,...u)=>{var a;if(i.mounted$){const n=t.render(i,...u);return n.children===null||typeof n.children=="string"?T(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):d(n)}else return d("div",(a=i.$attrs)!=null?a:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,u)=>{var n;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,i,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...p)=>{if(a.value){const _=l(...p);return _.children===null||typeof _.children=="string"?T(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):d(_)}else return d("div",u.attrs)})},E.set(t,e),e}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it,createClientOnly:nt},Symbol.toStringTag,{value:"Module"})),ut=m({name:"DevOnly",setup(t,e){return()=>null}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),_t=m({name:"ServerPlaceholder",render(){return A("div")}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),pt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=dt({duration:t.duration,throttle:t.throttle}),u=S();return u.hook("page:start",i.start),u.hook("page:finish",i.finish),w(()=>i.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function dt(t){const e=v(0),i=v(!1),u=c(()=>1e4/t.duration);let a=null,n=null;function l(){_(),e.value=0,i.value=!0,t.throttle?n=setTimeout(P,t.throttle):P()}function p(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(n),a=null,n=null}function D(V){e.value=Math.min(100,e.value+V)}function R(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function P(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:i,start:l,finish:p,clear:_}}const st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"})),ft=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,u)=>(J(()=>t({...ft(i),...u.attrs},u)),()=>{var a,n;return e?(n=(a=u.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const i={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return u&&(i.children=u),{noscript:[i]}})}),vt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),Et=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),gt=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,n;return{title:((n=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),ct=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Pt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,l;const i={...t},u=(l=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:l.children;return u&&(i.children=u),{style:[i]}})}),yt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,u;return(u=(i=e.slots).default)==null?void 0:u.call(i)}}),Tt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Ot=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ht,Link:vt,Base:Et,Title:gt,Meta:ct,Style:Pt,Head:yt,Html:Tt,Body:Ot},Symbol.toStringTag,{value:"Module"}));o(()=>r(()=>import("./alert.3d807861.js"),["./alert.3d807861.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./calendar.3c8f8d9d.js"),["./calendar.3c8f8d9d.js","./index.7e24678b.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.c),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./dd.e5ff2947.js"),["./dd.e5ff2947.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./draggable.23a62193.js"),["./draggable.23a62193.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.i),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.K),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.j),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.m),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.A),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.u),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.v),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./marker.d6707ffe.js"),["./marker.d6707ffe.js","./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.w),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./index.a5ca146b.js").then(t=>t.c),["./index.a5ca146b.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.86acb3d5.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.F),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.fc18b579.js").then(t=>t.G),["./layout.fc18b579.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.7e24678b.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentDoc.17b934d9.js").then(t=>t.C),["./ContentDoc.17b934d9.js","./entry.75e3974d.js","./entry.873adaa1.css","./ContentRenderer.8458d8af.js","./ContentRendererMarkdown.d49cf261.js","./index.68c44503.js","./ContentQuery.022d9410.js","./utils.a542d5cc.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentList.e8e194b3.js"),["./ContentList.e8e194b3.js","./ContentQuery.022d9410.js","./entry.75e3974d.js","./entry.873adaa1.css","./utils.a542d5cc.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>Lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentQuery.022d9410.js").then(t=>t.C),["./ContentQuery.022d9410.js","./entry.75e3974d.js","./entry.873adaa1.css","./utils.a542d5cc.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRenderer.8458d8af.js"),["./ContentRenderer.8458d8af.js","./ContentRendererMarkdown.d49cf261.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRendererMarkdown.d49cf261.js"),["./ContentRendererMarkdown.d49cf261.js","./entry.75e3974d.js","./entry.873adaa1.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentSlot.2b9b47fc.js"),["./ContentSlot.2b9b47fc.js","./utils.a542d5cc.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenEmpty.28d66dae.js"),["./DocumentDrivenEmpty.28d66dae.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenNotFound.7e0f84f2.js"),["./DocumentDrivenNotFound.7e0f84f2.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Markdown.3e382c68.js"),["./Markdown.3e382c68.js","./ContentSlot.2b9b47fc.js","./utils.a542d5cc.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseA.f4205ac7.js"),["./ProseA.f4205ac7.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseBlockquote.661f0a59.js"),["./ProseBlockquote.661f0a59.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCode.b8a34ad7.js"),["./ProseCode.b8a34ad7.js","./entry.75e3974d.js","./entry.873adaa1.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCodeInline.bd9ab158.js"),["./ProseCodeInline.bd9ab158.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseEm.25cedaa1.js"),["./ProseEm.25cedaa1.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH1.a6220a43.js"),["./ProseH1.a6220a43.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH2.b5efdc3f.js"),["./ProseH2.b5efdc3f.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH3.d6b856d5.js"),["./ProseH3.d6b856d5.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH4.3bb850b5.js"),["./ProseH4.3bb850b5.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH5.c4bfdefb.js"),["./ProseH5.c4bfdefb.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH6.945b7abc.js"),["./ProseH6.945b7abc.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseHr.719cba42.js"),["./ProseHr.719cba42.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseImg.21afa919.js"),["./ProseImg.21afa919.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseLi.114c337f.js"),["./ProseLi.114c337f.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseOl.23f9cf84.js"),["./ProseOl.23f9cf84.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseP.812590ba.js"),["./ProseP.812590ba.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseStrong.c1e98969.js"),["./ProseStrong.c1e98969.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTable.1e04e777.js"),["./ProseTable.1e04e777.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTbody.d1bb5e2f.js"),["./ProseTbody.d1bb5e2f.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTd.127359ce.js"),["./ProseTd.127359ce.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTh.11f4e117.js"),["./ProseTh.11f4e117.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseThead.1d01f241.js"),["./ProseThead.1d01f241.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTr.5a2b5d9b.js"),["./ProseTr.5a2b5d9b.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseUl.c0ead8bc.js"),["./ProseUl.c0ead8bc.js","./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./welcome.2462019d.js"),["./welcome.2462019d.js","./ContentDoc.17b934d9.js","./entry.75e3974d.js","./entry.873adaa1.css","./ContentRenderer.8458d8af.js","./ContentRendererMarkdown.d49cf261.js","./index.68c44503.js","./ContentQuery.022d9410.js","./utils.a542d5cc.js","./index.7e24678b.js","./layout.fc18b579.js","./index.e1051fb6.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.a5ca146b.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.f49158da.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d066c5f0.js","./index.411efe3f.js","./alert.3d807861.js","./index.3f3319de.js","./index.2a19f413.js","./layout.9ae061b9.css","./ContentList.e8e194b3.js","./ContentSlot.2b9b47fc.js","./DocumentDrivenEmpty.28d66dae.js","./DocumentDrivenNotFound.7e0f84f2.js","./Markdown.3e382c68.js","./ProseCode.b8a34ad7.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.75e3974d.js").then(t=>t.ac),["./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.75e3974d.js").then(t=>t.ad),["./entry.75e3974d.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const St=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),i=c(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!i.value&&z("dd-navigation").value){const{navigation:a}=Y();return{navigation:a}}const{data:u}=await G(`content-navigation-${g(i.value)}`,()=>X(i.value));return{navigation:u}},render(t){const e=H(),{navigation:i}=t,u=l=>d(F,{to:l._path},()=>l.title),a=(l,p)=>d("ul",p?{"data-level":p}:null,l.map(_=>_.children?d("li",null,[u(_),a(_.children,p+1)]):d("li",null,u(_)))),n=l=>a(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):n(i)}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};
