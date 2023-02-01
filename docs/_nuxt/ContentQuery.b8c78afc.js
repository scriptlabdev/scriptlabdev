import{h as M,s as P,v as O,x as F,y as j,j as z,d as H,z as Q,i as R,A as I,B as K,C as W,D as G,l as J,E as V,G as Y,m as X,q as Z}from"./entry.67b0a077.js";import{w as $,s as ee,u as te}from"./utils.5a440a95.js";const re=()=>null;function se(...n){var h,c,_,k,w,b,S;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,t,e={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(h=e.server)!=null?h:!0,e.default=(c=e.default)!=null?c:re,e.lazy=(_=e.lazy)!=null?_:!1,e.immediate=(k=e.immediate)!=null?k:!0;const i=M(),o=()=>i.isHydrating?i.payload.data[s]:i.static.data[s],u=()=>o()!==void 0;i._asyncData[s]||(i._asyncData[s]={data:P((S=(b=o())!=null?b:(w=e.default)==null?void 0:w.call(e))!=null?S:null),pending:P(!u()),error:P(i.payload._errors[s]?O(i.payload._errors[s]):null)});const a={...i._asyncData[s]};a.refresh=a.execute=(y={})=>{if(i._asyncDataPromises[s]){if(y.dedupe===!1)return i._asyncDataPromises[s];i._asyncDataPromises[s].cancelled=!0}if(y._initial&&u())return o();a.pending.value=!0;const g=new Promise((l,m)=>{try{l(t(i))}catch(C){m(C)}}).then(l=>{if(g.cancelled)return i._asyncDataPromises[s];e.transform&&(l=e.transform(l)),e.pick&&(l=ne(l,e.pick)),a.data.value=l,a.error.value=null}).catch(l=>{var m,C;if(g.cancelled)return i._asyncDataPromises[s];a.error.value=l,a.data.value=H((C=(m=e.default)==null?void 0:m.call(e))!=null?C:null)}).finally(()=>{g.cancelled||(a.pending.value=!1,i.payload.data[s]=a.data.value,a.error.value&&(i.payload._errors[s]=O(a.error.value)),delete i._asyncDataPromises[s])});return i._asyncDataPromises[s]=g,i._asyncDataPromises[s]};const f=()=>a.refresh({_initial:!0}),d=e.server!==!1&&i.payload.serverRendered;{const y=Q();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const l=y._nuxtOnBeforeMountCbs;y&&(F(()=>{l.forEach(m=>{m()}),l.splice(0,l.length)}),j(()=>l.splice(0,l.length)))}d&&i.isHydrating&&u()?a.pending.value=!1:y&&(i.payload.serverRendered&&i.isHydrating||e.lazy)&&e.immediate?y._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&z(e.watch,()=>a.refresh());const g=i.hook("app:data:refresh",l=>{if(!l||l.includes(s))return a.refresh()});y&&j(g)}const p=Promise.resolve(i._asyncDataPromises[s]).then(()=>a);return Object.assign(p,a),p}function ne(n,r){const s={};for(const t of r)s[t]=n[t];return s}const ie={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function ae(n,r={}){r={...ie,...r};const s=T(r);return s.dispatch(n),s.toString()}function T(n){const r=[];let s=[];const t=e=>{r.push(e)};return{toString(){return r.join("")},getContext(){return s},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const i=/\[object (.*)]/i,o=Object.prototype.toString.call(e),u=i.exec(o),a=u?u[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let f=null;if((f=s.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")if(this["_"+a])this["_"+a](e);else{if(n.ignoreUnknown)return t("["+a+"]");throw new Error('Unknown object type "'+a+'"')}else{let d=Object.keys(e);n.unorderedObjects&&(d=d.sort()),n.respectType!==!1&&!A(e)&&d.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(d=d.filter(function(p){return!n.excludeKeys(p)})),t("object:"+d.length+":");for(const p of d)this.dispatch(p),t(":"),n.excludeValues||this.dispatch(e[p]),t(",")}},_array(e,i){if(i=typeof i<"u"?i:n.unorderedArrays!==!1,t("array:"+e.length+":"),!i||e.length<=1){for(const a of e)this.dispatch(a);return}const o=[],u=e.map(a=>{const f=T(n);return f.dispatch(a),o.push(f.getContext()),f.toString()});return s=[...s,...o],u.sort(),this._array(u,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),A(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const i=[...e];return this._array(i,n.unorderedSets!==!1)},_set(e){t("set:");const i=[...e];return this._array(i,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function A(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class x{constructor(r,s){r=this.words=r||[],this.sigBytes=s!==void 0?s:r.length*4}toString(r){return(r||oe).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new x([...this.words])}}const oe={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},ue={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,i=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,u=e<<16|i<<8|o;for(let a=0;a<4&&t*8+a*6<n.sigBytes*8;a++)s.push(r.charAt(u>>>6*(3-a)&63))}return s.join("")}},ce={parse(n){const r=n.length,s=[];for(let t=0;t<r;t++)s[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new x(s,r)}},le={parse(n){return ce.parse(unescape(encodeURIComponent(n)))}};class fe{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new x,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=le.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,e),this._data.sigBytes-=i}return new x(s,i)}}class he extends fe{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const de=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],pe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class ye extends he{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new x([...de])}_doProcessBlock(r,s){const t=this._hash.words;let e=t[0],i=t[1],o=t[2],u=t[3],a=t[4],f=t[5],d=t[6],p=t[7];for(let h=0;h<64;h++){if(h<16)v[h]=r[s+h]|0;else{const y=v[h-15],g=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,l=v[h-2],m=(l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10;v[h]=g+v[h-7]+m+v[h-16]}const c=a&f^~a&d,_=e&i^e&o^i&o,k=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),w=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),b=p+w+c+pe[h]+v[h],S=k+_;p=d,d=f,f=a,a=u+b|0,u=o,o=i,i=e,e=b+S|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+o|0,t[3]=t[3]+u|0,t[4]=t[4]+a|0,t[5]=t[5]+f|0,t[6]=t[6]+d|0,t[7]=t[7]+p|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function _e(n){return new ye().finalize(n).toString(ue)}function D(n,r={}){const s=typeof n=="string"?n:ae(n,r);return _e(s).slice(0,10)}const q=(n,r)=>r.split(".").reduce((s,t)=>s&&s[t],n),N=(n,r)=>Object.keys(n).filter(r).reduce((s,t)=>Object.assign(s,{[t]:n[t]}),{}),ke=n=>r=>Array.isArray(r)?r.map(s=>n(s)):n(r),L=n=>{const r=[],s=[];for(const t of n)["$","_"].includes(t)?r.push(t):s.push(t);return{prefixes:r,properties:s}},Ce=(n=[])=>r=>{if(n.length===0||!r)return r;const{prefixes:s,properties:t}=L(n);return N(r,e=>!t.includes(e)&&!s.includes(e[0]))},Pe=(n=[])=>r=>{if(n.length===0||!r)return r;const{prefixes:s,properties:t}=L(n);return N(r,e=>t.includes(e)||s.includes(e[0]))},De=(n,r)=>{const s=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),t=Object.keys(r).filter(e=>!e.startsWith("$"));for(const e of t)n=n.sort((i,o)=>{const u=[q(i,e),q(o,e)].map(a=>{if(a!==null)return a instanceof Date?a.toISOString():a});return r[e]===-1&&u.reverse(),s.compare(u[0],u[1])});return n},Oe=(n,r="Expected an array")=>{if(!Array.isArray(n))throw new TypeError(r)},B=n=>Array.isArray(n)?n:n?[n]:[],ge=["sort","where","only","without"],me=(n,r)=>{const s={...r};for(const i of ge)s[i]&&(s[i]=B(s[i]));const t=(i,o=u=>u)=>(...u)=>(s[i]=o(...u),e),e={params:()=>s,only:t("only",B),without:t("without",B),where:t("where",i=>[...B(s.where),i]),sort:t("sort",i=>[...B(s.sort),...B(i)]),limit:t("limit",i=>parseInt(String(i),10)),skip:t("skip",i=>parseInt(String(i),10)),find:()=>n(e),findOne:()=>(s.first=!0,n(e)),findSurround:(i,o)=>(s.surround={query:i,...o},n(e)),locale:i=>e.where({_locale:i})};return e};function U(n){return JSON.stringify(n,we)}function we(n,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const be=n=>{let r=U(n);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},ve=()=>async n=>{const{content:r}=R().public,s=n.params(),t=r.experimental.stripQueryParameters?$(`/query/${`${D(s)}.${r.integrity}`}/${be(s)}.json`):$(`/query/${D(s)}.${r.integrity}.json`);if(ee())return(await G(()=>import("./client-db.d7c335a8.js"),["./client-db.d7c335a8.js","./entry.67b0a077.js","./entry.b6f0b5be.css","./utils.5a440a95.js","./index.68c44503.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(n);const e=await $fetch(t,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:U(s),previewToken:te("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function E(n,...r){const{content:s}=R().public,t=me(ve(),typeof n!="string"?n:{});let e;typeof n=="string"&&(e=I(K(n,...r)));const i=t.params;return t.params=()=>{var u,a,f;const o=i();return e&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:W(e)}):o.where.push({_path:new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=o.sort)!=null&&u.length||(o.sort=[{_file:1,$numeric:!0}]),s.locales.length&&((f=(a=o.where)==null?void 0:a.find(p=>p._locale))!=null&&f._locale||(o.where=o.where||[],o.where.push({_locale:s.defaultLocale}))),o},t}const Se=J({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(n){const{path:r,only:s,without:t,where:e,sort:i,limit:o,skip:u,locale:a,find:f}=V(n),d=Y(()=>{var c;return(c=r.value)==null?void 0:c.includes("/_")});z(()=>n,()=>h(),{deep:!0});const{data:p,refresh:h}=await se(`content-query-${D(n)}`,()=>{let c;return r.value?c=E(r.value):c=E(),s.value&&(c=c.only(s.value)),t.value&&(c=c.without(t.value)),e.value&&(c=c.where(e.value)),i.value&&(c=c.sort(i.value)),o.value&&(c=c.limit(o.value)),u.value&&(c=c.skip(u.value)),a.value&&(c=c.where({_locale:a.value})),f.value==="one"?c.findOne():f.value==="surround"?r.value?c.findSurround(r.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),c.find()):c.find()});return{isPartial:d,data:p,refresh:h}},render(n){var w;const r=X(),{data:s,refresh:t,isPartial:e,path:i,only:o,without:u,where:a,sort:f,limit:d,skip:p,locale:h,find:c}=n,_={path:i,only:o,without:u,where:a,sort:f,limit:d,skip:p,locale:h,find:c};if(_.find==="one"){if(!s&&(r==null?void 0:r["not-found"]))return r["not-found"]({props:_,...this.$attrs});if((r==null?void 0:r.empty)&&(s==null?void 0:s._type)==="markdown"&&!((w=s==null?void 0:s.body)!=null&&w.children.length))return r.empty({props:_,...this.$attrs})}else if((!s||!s.length)&&r!=null&&r["not-found"])return r["not-found"]({props:_,...this.$attrs});return r!=null&&r.default?r.default({data:s,refresh:t,isPartial:e,props:_,...this.$attrs}):((b,S)=>Z("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:b,data:S},null,2)))("default",{data:s,props:_,isPartial:e})}}),je=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"}));export{je as C,Se as _,Oe as a,B as b,ke as c,Pe as d,be as e,me as f,q as g,D as h,U as j,E as q,De as s,se as u,Ce as w};
