import{Y as r,o as i,f as a}from"./entry.8100cb04.js";const s={props:{modelValue:{type:[String],default:""}},watch:{modelValue(e){document.activeElement!=this.$el&&(this.$refs.content.innerHTML=e)}},methods:{onChange(e){this.$emit("update:modelValue",e.target.innerHTML)}},mounted(){this.$refs.content.innerHTML=this.modelValue}};function l(e,t,m,u,c,n){return i(),a("div",{ref:"content",contenteditable:"true",onKeyup:t[0]||(t[0]=o=>n.onChange(o)),style:{outline:"0!important","min-width":"20px","min-height":"20px"}}," \xA0 ",544)}const p=r(s,[["render",l]]);export{p as default};
