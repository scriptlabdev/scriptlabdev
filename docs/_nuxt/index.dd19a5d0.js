import B from"./alert.de5e2cdd.js";import T from"./layout.db727205.js";import{Y as F,a8 as N,o as d,c as S,b as o,g as j,f,j as z,a9 as D,t as b,F as E,d as e,i as _,r as t}from"./entry.8100cb04.js";/* empty css                                               */const L={methods:{colorClasses(){const c=[],a=["primary","secondary","warning","error","info"],i=[...a,"black","grey","red","pink","purple","deep-purple","indigo","blue","light-blue","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"];for(let l of i){c.push({name:`${l}`,bg:`bg-${l}`,text:`text-${l}`});for(let n of["lighten","darken","accent"])for(let r of[1,2,3,4,5])a.includes(l)&&["lighten","accent"].includes(n)||a.includes(l)&&["darken"].includes(n)&&[2,3,4,5].includes(r)||c.push({name:`${l}-${n}-${r}`,bg:`bg-${l}-${n}-${r}`,text:`text-${l}-${n}-${r}`})}return c}},data(){return{tab:"bg",useClipboard:N()}}},P={class:"d-flex flex-wrap"},U=["onClick"];function Y(c,a,i,l,n,r){const v=t("v-toolbar-title"),p=t("v-btn"),x=t("v-toolbar"),u=t("v-text-field"),g=t("v-textarea"),y=t("v-card-text"),C=t("v-divider"),$=t("v-card-actions"),k=t("v-card"),m=t("v-col"),w=t("v-row"),h=B,V=T;return d(),S(V,null,{drawer:o(()=>[j("div",P,[(d(!0),f(E,null,z(r.colorClasses(),s=>(d(),f("div",{class:D([s.bg,"py-1","px-2"]),onClick:q=>n.useClipboard.copy(s.name)},b(s.bg),11,U))),256))])]),default:o(()=>[e(w,{class:"pa-5"},{default:o(()=>[e(m,{cols:"12",md:"3"},{default:o(()=>[e(k,null,{default:o(()=>[e(x,{density:"compact"},{default:o(()=>[e(v,null,{default:o(()=>[_("Form")]),_:1}),e(p,{icon:"mdi-logout"})]),_:1}),e(y,null,{default:o(()=>[e(u,{label:"Text field"}),e(u,{label:"Password",type:"password"}),e(g,{label:"Textarea"})]),_:1}),e(C),e($,null,{default:o(()=>[e(p,{color:"success"},{default:o(()=>[_("Save")]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{cols:"12",md:"9"},{default:o(()=>[_(" -- ")]),_:1})]),_:1}),e(h,{modelValue:n.useClipboard.copied,"onUpdate:modelValue":a[0]||(a[0]=s=>n.useClipboard.copied=s),type:"snackbar",color:"success"},{default:o(()=>[_(" Texto copiado: "+b(n.useClipboard.text),1)]),_:1},8,["modelValue"])]),_:1})}const J=F(L,[["render",Y]]);export{J as default};