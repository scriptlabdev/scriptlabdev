import{_ as B}from"./monaco.b5e80ef8.js";import{_ as U}from"./layout.a85e9545.js";import{Bookapp as N}from"./Bookapp.96409075.js";import{_ as E}from"./lodash.2706437d.js";import{a as T,c as R,w as n,o as f,e,m as A,f as p,b as l,l as z,j as H,t as h,p as c,r as a}from"./entry.a48b6200.js";const O={mounted(){this.iframeRefresh()},methods:{browserTest(){const i=window.open("","_blank","width=600,height=600");i.document.write('<!DOCTYPE html><html lang="en"><head></head><body><script>'+this.app.build()+"(true);<\/script></body></html>"),i.focus()},onDrop(i){let t=i.dataTransfer.getData("text/plain");console.log(t)},iframeRefresh:E.debounce(function(){this.$refs.iframe.src="javascript:"+this.app.build()+".run()",console.log(this.$refs.iframe.src)},1e3)},data(){return{app:new N({dependencies:[{tag:"script",url:"https://unpkg.com/axios@1.2.0/dist/axios.min.js"},{tag:"script",url:"https://unpkg.com/vue@3.2.45/dist/vue.global.prod.js"},{tag:"script",url:"https://cdn.jsdelivr.net/npm/vuetify@3.0.3/dist/vuetify.min.js"},{tag:"link",url:"https://cdn.jsdelivr.net/npm/vuetify@3.0.3/dist/vuetify.min.css"},{tag:"link",url:"https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css"}],source:["customElements.define('the-app', Vue.defineCustomElement({","   styles: [","     '@import url(https://cdn.jsdelivr.net/npm/vuetify@3.0.5/dist/vuetify.min.css);',","     '@import url(https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css);',","   ],","   setup() {","     const app = Vue.createApp();","     app.use(Vuetify.createVuetify());","     Object.assign(Vue.getCurrentInstance(), {","       appContext: app._context,","       provides: app._context.provides,","     });","   },","",'   data: () => ({ test: "Hello World" }),',"   template: `<div>",'     <v-text-field v-model="test" label="Hello"></v-text-field>',"     <pre>{{ $data }}</pre>","   </div>`,","}));","","document.body.appendChild(document.createElement('the-app'));"].join(`
`)})}}},P={class:"d-flex align-center",style:{gap:"20px"}},F=l("div",null,"Arraste para sua \xE1rea de bookmarks: ",-1),I=l("br",null,null,-1),L=l("br",null,null,-1),M=l("br",null,null,-1),S={src:"about:blank",ref:"iframe",style:{width:"100%",height:"100%",border:"none"},class:"elevation-5 rounded"},W={class:"mx-auto",style:{width:"600px","max-width":"95vw"}},Y={key:0,class:"text-center pa-3"},q={class:"d-flex align-center my-3"},G={class:"handle pa-2"},J={class:"flex-grow-1"},K={class:"pa-2"};function Q(i,t,X,Z,s,g){const d=a("v-btn"),u=B,m=a("v-col"),b=a("v-row"),_=a("v-text-field"),x=a("v-combobox"),V=a("vv-draggable"),v=a("v-card-text"),y=a("v-divider"),k=a("v-spacer"),w=a("v-card-actions"),j=a("v-card"),C=a("v-dialog"),D=U;return f(),R(D,{title:"Bookapp"},{drawer:n(()=>[e(v,null,{default:n(()=>[e(_,{modelValue:s.app.name,"onUpdate:modelValue":t[4]||(t[4]=o=>s.app.name=o),label:"Nome"},null,8,["modelValue"]),e(C,null,{activator:n(({props:o})=>[e(d,A({block:""},o,{ref:"dependsBtn"}),{default:n(()=>[p("Dependencias")]),_:2},1040)]),default:n(()=>[l("div",W,[e(j,null,{default:n(()=>[e(v,{style:{"max-height":"80vh",overflow:"auto"}},{default:n(()=>[s.app.dependencies.length==0?(f(),z("div",Y," Nenhuma depend\xEAncia criada ")):H("",!0),e(V,{modelValue:s.app.dependencies,"onUpdate:modelValue":t[5]||(t[5]=o=>s.app.dependencies=o),handle:".handle"},{item:n(({element:o})=>[l("div",q,[l("div",G,[e(d,{flat:"",size:"small",icon:"mdi-dots-grid"})]),l("div",null,[e(x,{modelValue:o.tag,"onUpdate:modelValue":r=>o.tag=r,label:"Tipo",items:["script","link"],"hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),l("div",J,[e(_,{modelValue:o.url,"onUpdate:modelValue":r=>o.url=r,label:"URL","hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),l("div",K,[e(d,{flat:"",size:"small",icon:"mdi-close",onClick:r=>s.app.dependencyRemove(o)},null,8,["onClick"])])])]),_:1},8,["modelValue"]),l("pre",null,h(s.app),1)]),_:1}),e(y),e(w,null,{default:n(()=>[e(d,{color:"primary",onClick:t[6]||(t[6]=o=>s.app.dependencyAdd())},{default:n(()=>[p("Criar")]),_:1}),e(k),e(d,{onClick:t[7]||(t[7]=o=>i.$refs.dependsBtn.$el.click())},{default:n(()=>[p("Fechar")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),default:n(()=>[l("div",P,[F,e(d,{href:`javascript:${s.app.build()}`},{default:n(()=>[p(h(s.app.name||"Bookapp"),1)]),_:1},8,["href"])]),I,l("div",{class:"py-5 text-center border",onDrop:t[0]||(t[0]=c(o=>g.onDrop(o),["prevent"])),onDragenter:t[1]||(t[1]=c(()=>{},["prevent"])),onDragover:t[2]||(t[2]=c(()=>{},["prevent"]))}," Drop here ",32),L,e(b,null,{default:n(()=>[e(m,{cols:"12",md:"7"},{default:n(()=>[e(u,{modelValue:s.app.source,"onUpdate:modelValue":t[3]||(t[3]=o=>s.app.source=o),language:"javascript"},null,8,["modelValue"]),M,e(u,{"model-value":s.app.build(),language:"javascript",style:{height:"400px"},"word-wrap":"on"},null,8,["model-value"])]),_:1}),e(m,{cols:"12",md:"5"},{default:n(()=>[l("iframe",S,null,512)]),_:1})]),_:1})]),_:1})}const le=T(O,[["render",Q]]);export{le as default};