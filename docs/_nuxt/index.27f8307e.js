import{a as C,c as p,w as t,r as o,o as m,e,b as _,m as F,l as $,s as B,F as N,f as c,z as L,t as v}from"./entry.5d33167f.js";import O from"./info.9de835c4.js";import S from"./info.ccb895ac.js";import q from"./info.6c234bc7.js";import D from"./info.a653fff0.js";import E from"./info.8adc1d54.js";import H from"./info.f11c35d1.js";import I from"./info.fcad4444.js";import J from"./info.57a98115.js";import P from"./info.50bef3bc.js";import T from"./info.ab3208d8.js";import U from"./info.e135ec6f.js";import A from"./info.f3461275.js";import G from"./info.41474e46.js";import K from"./info.b2685d9e.js";import M from"./info.92bc21ee.js";import Q from"./info.5647ae0b.js";import R from"./info.077c7c0d.js";import W from"./info.6d26a570.js";import X from"./info.11f9efbd.js";import Y from"./info.808cb72b.js";import Z from"./info.5380e8ac.js";const ee={methods:{itemsFilter(){let s=this.filter.toLowerCase();return this.items.filter(i=>JSON.stringify(i).toLowerCase().includes(s))}},data(){return{filter:"",items:(()=>{const s=this.$dev;let i=Object.entries(Object.assign({"./index/base/info.js":O,"./index/bookapp/info.js":S,"./index/calcdiv/info.js":q,"./index/clockify/info.js":D,"./index/clone/info.js":E,"./index/diff/info.js":H,"./index/enable3d/info.js":I,"./index/filesize-generator/info.js":J,"./index/laramake/info.js":P,"./index/lotto/info.js":T,"./index/map/info.js":U,"./index/mbti/info.js":A,"./index/meme/info.js":G,"./index/openapi/info.js":K,"./index/paste/info.js":M,"./index/print3d/info.js":Q,"./index/qrcode/info.js":R,"./index/search/info.js":W,"./index/text/info.js":X,"./index/vuetify/info.js":Y,"./index/whatsapp/info.js":Z}));return i=i.map(([r,d])=>({active:!1,icon:!1,name:"",description:"",to:"/lab/"+r.replace(/.+index\/(.+?)\/info.js/g,"$1"),...d})),i.filter(r=>s?!0:r.active)})()}}},te={style:{position:"fixed",bottom:"30px",right:"30px","z-index":"999!important"}},oe={class:"mb-4",style:{width:"350px","max-width":"90vh"}},ie={class:"pa-2",style:{"max-height":"calc(70vh - 70px)",overflow:"auto"}},_e={class:"text-center"},ne=_("div",{class:"my-1"},null,-1),se={style:{"font-size":"8px","white-space":"normal"}},re=_("span",{class:"ms-3"},"Current page source",-1),le=_("span",{class:"ms-3"},"Home",-1);function ae(s,i,r,d,f,u){const x=L,b=o("v-text-field"),g=o("v-divider"),a=o("v-icon"),l=o("v-btn"),h=o("v-col"),j=o("v-row"),y=o("v-card"),w=o("v-img"),k=o("v-avatar"),z=o("v-menu"),V=o("v-layout");return m(),p(V,{class:"bg-grey-lighten-3"},{default:t(()=>[e(x),_("div",te,[e(z,{"close-on-content-click":!1},{activator:t(({props:n})=>[e(l,F(n,{icon:"",size:"55",flat:""}),{default:t(()=>[e(k,{size:"50"},{default:t(()=>[e(w,{src:"/assets/labscript.dev.png"})]),_:1})]),_:2},1040)]),default:t(()=>[_("div",oe,[e(y,null,{default:t(()=>[e(b,{modelValue:f.filter,"onUpdate:modelValue":i[0]||(i[0]=n=>f.filter=n),label:"Filtro","hide-details":!0,class:"ma-2"},null,8,["modelValue"]),e(g),_("div",ie,[e(j,{"no-gutters":""},{default:t(()=>[(m(!0),$(N,null,B(u.itemsFilter(),n=>(m(),p(h,{cols:"6",md:"4",class:"pa-1"},{default:t(()=>[e(l,{block:"",style:{height:"100px"},to:n.to},{default:t(()=>[_("div",_e,[e(a,null,{default:t(()=>[c(v(n.icon),1)]),_:2},1024),ne,_("small",se,v(n.name),1)])]),_:2},1032,["to"])]),_:2},1024))),256))]),_:1})]),e(l,{block:"",href:`https://github.com/labscriptdev/labscriptdev.github.io/tree/main/pages/demo/index/${s.$route.path.replace("/demo/","")}`,target:"_blank",color:"primary",rounded:"0"},{default:t(()=>[e(a,null,{default:t(()=>[c("mdi-xml")]),_:1}),re]),_:1},8,["href"]),e(l,{block:"",to:"/",rounded:"0"},{default:t(()=>[e(a,null,{default:t(()=>[c("mdi-home")]),_:1}),le]),_:1})]),_:1})])]),_:1})])]),_:1})}const Le=C(ee,[["render",ae]]);export{Le as default};
