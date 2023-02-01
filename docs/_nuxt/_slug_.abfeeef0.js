import N from"./Analysis.57dcc90e.js";import{W as C,o as n,f as a,a as l,$ as m,c as f,w as u,r as s,F as _,g as h,e,b as c,t as p}from"./entry.67b0a077.js";const q={computed:{analysis(){let o=this.getRattlesRange();return new N(this.lotto.response,o)}},methods:{getRattlesRange(){return this.rattles.response.filter(o=>o.number>=this.params.rangeStart&&o.number<=this.params.rangeFinal)}},data(){return{params:{rangeStart:0,rangeFinal:0},lotto:this.$request({url:`https://raw.githubusercontent.com/labscriptdev/static-api/main/data/loteria/${this.$route.params.slug}/index.json`,autoSubmit:!0,response:!1}),rattles:this.$request({url:`https://raw.githubusercontent.com/labscriptdev/static-api/main/data/loteria/${this.$route.params.slug}/all.json`,autoSubmit:!0,response:[],onResponse:o=>(this.params.rangeStart=1,this.params.rangeFinal=o.length,o.reverse())})}}},A={key:0,class:"text-center py-3"},D={class:"d-flex flex-column",style:{gap:"15px"}},M={key:0},T=e("br",null,null,-1),U={key:1},E=e("br",null,null,-1),L=e("br",null,null,-1),W=e("br",null,null,-1),$=e("colgroup",null,[e("col",{width:"100px"}),e("col",{width:"150px"}),e("col",{width:"*"})],-1),z=e("thead",null,[e("tr",null,[e("th",null,"Sorteio"),e("th",null,"Data"),e("th",null,"N\xFAmeros")])],-1);function G(o,d,H,I,r,v){const S=s("v-progress-circular"),y=s("v-progress-linear"),w=s("v-expansion-panel-text"),F=s("v-expansion-panel"),V=s("v-expansion-panels"),x=s("v-text-field"),k=s("v-card-text"),b=s("v-col"),R=s("v-table"),j=s("v-row");return n(),a("div",null,[r.lotto.response?m("",!0):(n(),a("div",A,[l(S,{indeterminate:"",color:"primary",class:"mx-auto"})])),r.lotto.response?(n(),f(j,{key:1,"no-gutters":""},{default:u(()=>[l(b,{cols:"4"},{default:u(()=>[l(k,null,{default:u(()=>[l(V,{rounded:"0"},{default:u(()=>[(n(!0),a(_,null,h(v.analysis.types,(t,g)=>(n(),f(F,{key:g,title:t.name},{default:u(()=>[l(w,null,{default:u(()=>[e("div",D,[t.goods.length?(n(),a("div",M,[c(" Bons: "),T,c(" "+p(t.goods.map(i=>i.toString().padStart(2,"0")).join(" - ")),1)])):m("",!0),t.bads.length?(n(),a("div",U,[c(" Ruins: "),E,c(" "+p(t.bads.map(i=>i.toString().padStart(2,"0")).join(" - ")),1)])):m("",!0),e("div",null,[c(" Testes: "),(n(!0),a(_,null,h(t.tests,i=>(n(),a(_,null,[L,e("div",null,p(i.name),1),l(y,{"model-value":i.percent,height:"25",striped:"",color:i.percent>50?"success":"error"},{default:u(({value:B})=>[e("div",null,p(B.toFixed(1))+"%",1)]),_:2},1032,["model-value","color"])],64))),256))])])]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1}),W,l(x,{modelValue:r.params.rangeStart,"onUpdate:modelValue":d[0]||(d[0]=t=>r.params.rangeStart=t),modelModifiers:{number:!0},type:"number",label:"Sorteios de",min:1,max:r.params.rangeFinal-1},null,8,["modelValue","max"]),l(x,{modelValue:r.params.rangeFinal,"onUpdate:modelValue":d[1]||(d[1]=t=>r.params.rangeFinal=t),modelModifiers:{number:!0},type:"number",label:"At\xE9",min:r.params.rangeStart+1,max:r.rattles.response.length},null,8,["modelValue","min","max"])]),_:1})]),_:1}),l(b,{cols:"8",class:"pa-4",style:{height:"calc(100vh - 45px)",overflow:"auto"}},{default:u(()=>[l(R,null,{default:u(()=>[$,z,e("tbody",null,[(n(!0),a(_,null,h(v.getRattlesRange(),t=>(n(),a("tr",{key:t.number},[e("td",null,p(t.number.toString().padStart(4,"0")),1),e("td",null,p(o.$filter.dateFormat(t.date)),1),e("td",null,p(t.numbers.map(g=>g.toString().padStart(2,"0")).join(" - ")),1)]))),128))])]),_:1})]),_:1})]),_:1})):m("",!0)])}const O=C(q,[["render",G]]);export{O as default};
