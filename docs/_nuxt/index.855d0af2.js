import{_ as m}from"./alert.e8c233a4.js";import{_ as v,bN as x,r as l,e as f,b as a,a as C,w as c,o as b,d as n}from"./entry.76f46d94.js";const V={props:{text:{type:String,default:""}},computed:{compText(){for(let e of this.cases)if(e.value==this.case)return e.call(this.text);return this.text}},data(){return{useClipboard:x(),case:"uppercase",cases:[{value:"uppercase",title:"Maiúsculo",call:e=>(e||"").toUpperCase()},{value:"lowercase",title:"Minúsculo",call:e=>(e||"").toLowerCase()},{value:"capitalize",title:"Capitalizado",call:e=>(e||"").replace(/\b[a-z]/g,t=>t.toUpperCase())}]}}},y={class:"d-flex"};function T(e,t,k,w,o,s){const p=l("v-select"),u=l("v-textarea"),i=l("v-spacer"),d=l("v-btn"),_=m;return b(),f("div",null,[a(p,{modelValue:o.case,"onUpdate:modelValue":t[0]||(t[0]=r=>o.case=r),label:"Case",items:o.cases},null,8,["modelValue","items"]),a(u,{label:"Resultado","model-value":s.compText,readOnly:""},null,8,["model-value"]),C("div",y,[a(i),a(d,{color:"primary",onClick:t[1]||(t[1]=r=>o.useClipboard.copy(s.compText))},{default:c(()=>[n("Copiar")]),_:1})]),a(_,{type:"snackbar","model-value":o.useClipboard.copied},{default:c(()=>[n(" Texto copiado ")]),_:1},8,["model-value"])])}const z=v(V,[["render",T]]);export{z as default};
