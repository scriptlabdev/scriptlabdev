import{a as b,l as S,r as a,p as V,q as k,o as n,c as s,w as o,s as d,n as u,g as _,j as c,e as i,b as p,i as z,t as N,v as C}from"./entry.792d237c.js";const H={props:{title:{type:[Boolean,String],default:!1},drawerShow:{type:Boolean,default:!0},drawerWidth:{type:[Number],default:300},fluid:{type:Boolean,default:!0}},methods:{slotBind(){return{}},onResize(){this.headerHeight=this.$refs.header.$el.offsetHeight}},data:()=>({useDisplay:S(),showDrawer:!0,headerHeight:50})},x={class:"d-flex align-center flex-grow-1 px-2",style:{gap:"10px"}};function R(e,r,t,P,U,l){const h=a("v-navigation-drawer"),w=a("v-btn"),m=a("v-app-bar-title"),f=a("v-container"),y=a("v-app-bar"),g=a("v-main"),B=a("v-layout"),D=V("resize");return k((n(),s(B,null,{default:o(()=>[t.drawerShow?(n(),s(h,{key:0,modelValue:e.showDrawer,"onUpdate:modelValue":r[0]||(r[0]=v=>e.showDrawer=v),width:t.drawerWidth,elevation:"1"},{default:o(()=>[d(e.$slots,"drawer",u(_(l.slotBind())))]),_:3},8,["modelValue","width"])):c("",!0),i(y,{elevation:"1",ref:"header"},{default:o(()=>[i(f,{fluid:t.fluid,class:"pa-0"},{default:o(()=>[p("div",x,[!e.useDisplay.lgAndUp&&t.drawerShow?(n(),s(w,{key:0,icon:"mdi-menu",onClick:r[1]||(r[1]=v=>e.showDrawer=!0)})):c("",!0),t.title?(n(),s(m,{key:1},{default:o(()=>[z(N(t.title),1)]),_:1})):c("",!0),d(e.$slots,"header",u(_(l.slotBind())))])]),_:3},8,["fluid"])]),_:3},512),i(g,null,{default:o(()=>[p("div",{class:"pa-3",style:C(`height:calc(100vh - ${e.headerHeight}px); overflow:auto;`)},[i(f,{fluid:t.fluid,class:"pa-0"},{default:o(()=>[d(e.$slots,"default",u(_(l.slotBind())))]),_:3},8,["fluid"])],4)]),_:3})]),_:3})),[[D,l.onResize]])}const j=b(H,[["render",R]]);export{j as _};
