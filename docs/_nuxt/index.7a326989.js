import{r as f,e as n,b9 as a,b as _,w as o,g as l,c as d,a as u,t as v,aK as m,o as s,d as i}from"./entry.2c083d03.js";const p={key:0},C={key:1},x=u("div",null,"Clique no botão quando ficar verde o mais rápido o possível",-1),T={key:2},I={meta:{icon:!1,name:"Reflexo"}},h=Object.assign(I,{__name:"index",setup(b){const t=(()=>{const e=m({started:!1,canClick:!1,clickTime:0,clickInterval:!1,start(){e.started=!0,e.canClick=!1,e.clickTime=0,setTimeout(()=>{e.canClick=!0,e.clickInterval=setInterval(()=>{e.clickTime++},0)},Math.round(Math.random()*5e3))},stop(){e.clickInterval&&(clearInterval(e.clickInterval),e.clickInterval=!1),e.started=!1,e.canClick=!1}});return e})();return(e,c)=>{const r=f("v-btn");return s(),n("div",null,[a(t).started?l("",!0):(s(),n("div",p,[_(r,{onClick:c[0]||(c[0]=k=>a(t).start())},{default:o(()=>[i("Clique para começar")]),_:1})])),a(t).started?(s(),n("div",C,[x,a(t).canClick?l("",!0):(s(),d(r,{key:0},{default:o(()=>[i("Atenção")]),_:1})),a(t).canClick?(s(),d(r,{key:1,onClick:c[1]||(c[1]=k=>a(t).stop())},{default:o(()=>[i("Vai!")]),_:1})):l("",!0)])):l("",!0),a(t).clickTime&&!a(t).canClick?(s(),n("div",T,[u("pre",null,"reflexTest: "+v(a(t)),1)])):l("",!0)])}}});export{h as default};