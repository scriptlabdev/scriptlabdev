import{D as s}from"./entry.8100cb04.js";import{_ as l,e as n}from"./monaco.c2f31078.js";const m={extends:l,props:{modified:{type:String,default:""}},watch:{$props:{deep:!0,handler(o){this.setModel(o.modelValue,o.modified),this.editorResize()}}},methods:{async monacoInit(){const t=await(await s(()=>import("./index.4139d8aa.js"),[],import.meta.url).then(e=>e==null?void 0:e.default)).init();n(t,["html","php"]);let d=t.editor.createModel(this.modelValue,this.language),r=t.editor.createModel(this.modified,this.language);const i=t.editor.createDiffEditor(this.$refs.monaco);i.setModel({original:d,modified:r}),this.setModel=(e,a)=>{e=t.editor.createModel(e,this.language),a=t.editor.createModel(a,this.language),i.setModel({original:e,modified:a})},this.getEditor=()=>i}}};export{m as default};
