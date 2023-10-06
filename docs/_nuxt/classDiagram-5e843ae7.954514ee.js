import{p as N,d as M,s as W}from"./styles-88ad4441.4f278edb.js";import{c as S,l as i,i as u,j as H}from"./index.995ab903.js";import{G as X,l as Y}from"./layout.07d4e07f.js";import{s as l}from"./svgDraw-5d8a058e.97c6fdb2.js";import"./entry.2c083d03.js";import"./index.c7a941bd.js";import"./index.d0e39486.js";import"./index.91336184.js";import"./index.0d90c395.js";import"./Bookapp.ab6c422f.js";import"./Calculator.266d9ea7.js";import"./index.6b466124.js";import"./info.1e4bb3a9.js";import"./info.66f5a8a6.js";import"./three.module.8fae685a.js";import"./matter.fde04bf7.js";import"./scene-gltf.a0ddc4a0.js";import"./index.80f58acf.js";import"./index.3a61fd70.js";import"./index.7a326989.js";import"./index.b8d1a0b3.js";import"./index.7b5b2137.js";import"./index.697a8e40.js";import"./index.eacdf2b6.js";import"./___vite-browser-external.8f066153.js";import"./index.c7eca150.js";import"./index.67a65277.js";import"./index.990633ad.js";import"./info.72a08ec4.js";import"./info.bfb3dcff.js";import"./info.78333159.js";import"./info.72d8a16d.js";import"./info.71ed9620.js";import"./info.a88b74e6.js";import"./alert.0618cca2.js";import"./index.d278d699.js";import"https://cdn.skypack.dev/dat.gui@0.7.9";import"./index.dab0189b.js";import"./line.fe2b3719.js";import"./array.9f3ba611.js";import"./path.53f90ab3.js";let g={};const f=20,p=function(e){const d=Object.entries(g).find(k=>k[1].label===e);if(d)return d[0]},Z=function(e){e.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),e.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},D=function(e,d,k,a){const m=S().class;g={},i.info("Rendering diagram "+e);const L=S().securityLevel;let y;L==="sandbox"&&(y=u("#i"+d));const x=L==="sandbox"?u(y.nodes()[0].contentDocument.body):u("body"),o=x.select(`[id='${d}']`);Z(o);const r=new X({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});const h=a.db.getClasses(),$=Object.keys(h);for(const t of $){const n=h[t],s=l.drawClass(o,n,m,a);g[s.id]=s,r.setNode(s.id,s),i.info("Org height: "+s.height)}a.db.getRelations().forEach(function(t){i.info("tjoho"+p(t.id1)+p(t.id2)+JSON.stringify(t)),r.setEdge(p(t.id1),p(t.id2),{relation:t},t.title||"DEFAULT")}),a.db.getNotes().forEach(function(t){i.debug(`Adding note: ${JSON.stringify(t)}`);const n=l.drawNote(o,t,m,a);g[n.id]=n,r.setNode(n.id,n),t.class&&t.class in h&&r.setEdge(t.id,p(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),Y(r),r.nodes().forEach(function(t){t!==void 0&&r.node(t)!==void 0&&(i.debug("Node "+t+": "+JSON.stringify(r.node(t))),x.select("#"+(a.db.lookUpDomId(t)||t)).attr("transform","translate("+(r.node(t).x-r.node(t).width/2)+","+(r.node(t).y-r.node(t).height/2)+" )"))}),r.edges().forEach(function(t){t!==void 0&&r.edge(t)!==void 0&&(i.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(r.edge(t))),l.drawEdge(o,r.edge(t),r.edge(t).relation,m,a))});const c=o.node().getBBox(),E=c.width+f*2,b=c.height+f*2;H(o,b,E,m.useMaxWidth);const w=`${c.x-f} ${c.y-f} ${E} ${b}`;i.debug(`viewBox ${w}`),o.attr("viewBox",w)},B={draw:D},Mt={parser:N,db:M,renderer:B,styles:W,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,M.clear()}};export{Mt as diagram};