import{b as g}from"./utils.65b7d66e.js";import{k as h,m as y,L as c,n as p,y as m}from"./entry.8100cb04.js";const S=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:u}=m(),{between:o,default:l}=y(),i=c(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:o,parent:u}},render({use:n,unwrap:u,fallbackSlot:o,between:l,tags:i,parent:e}){var f;try{let s=n;if(typeof n=="string"&&(s=(e==null?void 0:e.slots[n])||((f=e==null?void 0:e.parent)==null?void 0:f.slots[n]),console.warn(`Please set :use="$slots.${n}" in <ContentSlot> component to enable reactivity`)),!s)return o?o():p("div");if(!u)return[s()];const{flatUnwrap:d}=g(),a=d(s(),i);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{S as default};
