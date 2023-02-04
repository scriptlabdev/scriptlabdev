import Y from"./calendar.ea5cd97f.js";import H from"./layout.6e674618.js";import{h as p,a3 as O,a4 as E,W as N,o as _,c as D,w as a,f as x,a as s,e as n,t as m,F as T,$ as F,a1 as R,b as y,a5 as q,g as S,a0 as W,r as c}from"./entry.ae266843.js";import{_ as z}from"./lodash.9a09f0b5.js";/* empty css                                               */const L="YYYY-MM-DD",K="HH:mm:ss.000z",P=`${L}T${K}`;class X{constructor(e={}){const{$dayjs:l}=p();this.ready=!1,this.date=e.date||l().format("YYYY-MM-DD"),this.storage=O("clockify",{token:"",amountPerHour:13,amountCurrency:"BRL",amountGoal:1e3,currencyFrom:"AUD",currencyTo:"BRL"}),this.workingItem=!1,this.user=!1,this.workspace={loading:!1,item:!1,items:[]},this.timeEntry={loading:!1,items:[]},this.currency={loading:!1,params:{from:"AUD",to:"BRL"},items:[]}}destroy(){this.interval&&clearInterval(this.interval)}async init(){this.ready=!1,await this.userLoad(),await this.workspaceLoad(),await this.timeEntryLoad(),await this.currenciesLoad(),this.ready=!0,this.interval&&clearInterval(this.interval),this.interval=setInterval(async()=>{const{$dayjs:e}=p();parseInt(e().format("s"))==0&&(await this.timeEntryLoad(),await this.currenciesLoad()),this.timeEntryInterval()},1e3)}async request(e){return E.request({...e,url:["https://api.clockify.me/api/v1",e.url.replace(/^\/|\/$/g,"")].join("/"),headers:{"X-Api-Key":this.storage.token}})}async userLoad(){const{data:e}=await this.request({url:"/user"});this.user={id:e.id,email:e.email,name:e.name,profilePicture:e.profilePicture}}async workspaceLoad(){this.workspace.loading=!0;const{data:e}=await this.request({url:"/workspaces"});this.workspace.items=e,this.workspace.items.length==1&&(this.workspace.item=this.workspace.items[0]),this.workspace.loading=!1}async timeEntryLoad(){const{$dayjs:e}=p();this.timeEntry.loading&&clearTimeout(this.timeEntry.loading),this.timeEntry.loading=setTimeout(async()=>{if(!this.user||!this.workspace.item)return;const{data:l}=await this.request({url:`/workspaces/${this.workspace.item.id}/user/${this.user.id}/time-entries`,params:{start:e(this.date).startOf("month").format(P),end:e(this.date).endOf("month").format(P)}});this.timeEntry.items=l.map(r=>(r.workedMinutes=(()=>{if(!r.timeInterval.end)return 0;let t=e(r.timeInterval.start).diff(r.timeInterval.end);return Math.max(t,t*-1)/1e3/60})(),r)),this.timeEntry.loading=!1},1e3)}getDays(){const{$dayjs:e}=p(),l=e(this.date);let r=[];for(let t=1;t<=e(this.date).daysInMonth();t++){const i=e(this.date).set("date",t),k=i.format("ddd"),h=i.format(L),u=i.isAfter(l),d=i.isBefore(l),g=this.timeEntry.items.filter(v=>v.timeInterval.start.startsWith(h));r.push({day:t,date:h,weekday:k,isFuture:u,isPast:d,entries:g})}return r}async timeEntryInterval(){const{$dayjs:e}=p(),l=e();this.workingItem=!1,this.timeEntry.items.forEach(r=>{if(r.timeInterval.end)return;const t=l.diff(r.timeInterval.start)/1e3/60;r.workedMinutes=t,this.workingItem=r})}async currenciesLoad(){this.currency.loading=!0;const{data:e}=await E.get(`https://api.exchangerate.host/latest?base=${this.storage.currencyFrom}`);this.currency.items=Object.entries(e.rates).map(([l,r])=>({code:l,value:r})),this.currency.loading=!1}currencyConverted(e,l=null){const r=z.head(this.currency.items.filter(t=>t.code==this.storage.currencyTo))||{code:"000",value:1};return e*r.value}result(){const{$dayjs:e}=p(),l=this.timeEntry.items.reduce((u,d)=>u+d.workedMinutes,0),r=this.storage.amountPerHour*(l/60),t=r/this.storage.amountGoal*100,i=e().date()/e().daysInMonth()*100,k=(()=>{const u=Math.max(1,e().daysInMonth()-e().date()),g=(this.storage.amountGoal-r)/this.storage.amountPerHour;return Math.ceil(g/u)})(),h=this.getDays();return{workedMinutes:l,amount:r,amountGoalPercent:t,amountDaysPercent:i,goalWorkDaysAvg:k,days:h}}}const J={meta:{active:!0,icon:"mdi-alarm-check",name:"Clockify",description:"Gerenciamento e c\xE1lculo de horas trabalhadas utilizando o app Clockify"},mounted(){this.clockify.init()},beforeUnmount(){this.clockify.destroy()},computed:{result(){return this.clockify.result()}},data(){return{calendarDisplay:"range",clockify:new X}}},Q={class:"bg-grey-lighten-4"},Z={class:"text-h6 text-center py-4"},$={class:"d-flex flex-column justify-end bg-grey-lighten-3",style:{height:"300px",gap:"2px"}},ee={class:"text-center"},te={class:"fw-bold"},oe={style:{width:"90vw","max-width":"600px!important",margin:"0 auto"}},se=n("a",{href:"https://app.clockify.me/user/settings",target:"_blank"},"here",-1),re=n("br",null,null,-1),ae=n("br",null,null,-1),ne={class:"d-flex align-center mb-6",style:{gap:"15px"}},le={class:"d-flex flex-column",style:{gap:"15px"}},ie=n("div",null,"Em andamento:",-1),ce={class:"text-uppercase"};function ue(f,e,l,r,t,i){const k=c("v-select"),h=Y,u=c("v-card-text"),d=c("v-divider"),g=c("v-icon"),v=c("v-btn"),w=c("v-text-field"),M=c("v-autocomplete"),C=c("v-spacer"),A=c("v-card-actions"),G=c("v-card"),U=c("v-dialog"),V=c("v-progress-linear"),I=c("v-alert"),j=H;return _(),D(j,{title:"Clockify","container-width":"100%"},{drawer:a(()=>[t.clockify.ready?(_(),x(T,{key:0},[s(u,null,{default:a(()=>[n("div",te,m(t.clockify.user.name),1)]),_:1}),s(d)],64)):F("",!0),s(u,null,{default:a(()=>[s(U,null,{activator:a(({props:o})=>[s(v,R({block:""},o,{ref:"settings"}),{default:a(()=>[s(g,{class:"me-2"},{default:a(()=>[y("mdi-cog")]),_:1}),y(" Settings ")]),_:2},1040)]),default:a(()=>[n("div",oe,[s(G,null,{default:a(()=>[s(u,null,{default:a(()=>[y(" Get your access token "),se,y(". "),re,ae,s(w,{label:"Token",modelValue:t.clockify.storage.token,"onUpdate:modelValue":e[2]||(e[2]=o=>t.clockify.storage.token=o)},null,8,["modelValue"]),n("div",ne,[s(w,{label:"Converter de",modelValue:t.clockify.storage.amountPerHour,"onUpdate:modelValue":e[3]||(e[3]=o=>t.clockify.storage.amountPerHour=o),modelModifiers:{number:!0},type:"number","hide-details":!0},null,8,["modelValue"]),s(M,{modelValue:t.clockify.storage.currencyFrom,"onUpdate:modelValue":e[4]||(e[4]=o=>t.clockify.storage.currencyFrom=o),items:t.clockify.currency.items.map(o=>o.code),"hide-details":!0,style:{width:"150px"}},null,8,["modelValue","items"]),s(M,{label:"Para",modelValue:t.clockify.storage.currencyTo,"onUpdate:modelValue":e[5]||(e[5]=o=>t.clockify.storage.currencyTo=o),items:t.clockify.currency.items.map(o=>o.code),"hide-details":!0,style:{width:"150px"}},null,8,["modelValue","items"])]),s(w,{label:`Meta (${t.clockify.storage.currencyFrom})`,modelValue:t.clockify.storage.amountGoal,"onUpdate:modelValue":e[6]||(e[6]=o=>t.clockify.storage.amountGoal=o),modelModifiers:{number:!0},type:"number","hide-details":!0,suffix:`${f.$filter.numberFormat(t.clockify.currencyConverted(t.clockify.storage.amountGoal))} ${t.clockify.storage.currencyTo}`},null,8,["label","modelValue","suffix"])]),_:1}),s(d),s(A,null,{default:a(()=>[s(C),s(v,{onClick:e[7]||(e[7]=o=>{f.$refs.settings.$el.click(),t.clockify.init()})},{default:a(()=>[y("Ok")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),s(d),s(u,null,{default:a(()=>[s(h,{modelValue:t.clockify.date,"onUpdate:modelValue":[e[8]||(e[8]=o=>t.clockify.date=o),e[9]||(e[9]=o=>t.clockify.timeEntryLoad())]},null,8,["modelValue"])]),_:1}),s(d),s(u,null,{default:a(()=>[s(w,{label:`\xC0 receber (${t.clockify.storage.currencyFrom})`,"model-value":f.$filter.numberFormat(i.result.amount),suffix:`${f.$filter.numberFormat(t.clockify.currencyConverted(i.result.amount))} ${t.clockify.storage.currencyTo}`,readonly:""},null,8,["label","model-value","suffix"]),n("div",le,[s(V,{"model-value":i.result.amountGoalPercent,color:i.result.amountGoalPercent>i.result.amountDaysPercent?"success":"error",height:"22"},{default:a(()=>[y("Meta: "+m(f.$filter.numberFormat(t.clockify.storage.amountGoal))+" "+m(t.clockify.storage.currencyFrom),1)]),_:1},8,["model-value","color"]),s(V,{"model-value":i.result.amountDaysPercent,color:"success",height:"22"},{default:a(()=>[y("Fim do m\xEAs")]),_:1},8,["model-value"]),s(I,null,{default:a(()=>[y("Voc\xEA precisa trabalhar "),n("strong",null,m(i.result.goalWorkDaysAvg)+" horas por dia",1),y(" para bater a meta.")]),_:1}),t.clockify.workingItem?(_(),D(I,{key:0,icon:"mdi-clock-outline",color:"success"},{default:a(()=>[ie,n("div",ce,[n("strong",null,m(t.clockify.workingItem.description),1)]),n("div",null,[n("small",null,m(f.$filter.dateTimeago(t.clockify.workingItem.workedMinutes*60)),1)])]),_:1})):F("",!0)])]),_:1})]),default:a(()=>[s(k,{label:"Display",modelValue:t.calendarDisplay,"onUpdate:modelValue":e[0]||(e[0]=o=>t.calendarDisplay=o),items:["year","month","week","range"]},null,8,["modelValue"]),s(h,{modelValue:t.clockify.date,"onUpdate:modelValue":e[1]||(e[1]=o=>t.clockify.date=o),layout:t.calendarDisplay,dates:t.clockify.timeEntry.items.map(o=>({date:o.timeInterval.start,...o}))},q({_:2},[t.calendarDisplay=="range"?{name:"day",fn:a(o=>[n("div",Q,[n("div",Z,m(o.day),1),n("div",$,[(_(!0),x(T,null,S(o.dates,b=>(_(),x("div",{style:W(`height: ${b.workedMinutes/1440*100}%; background:red;`),class:"bg-grey-lighten-2"},[n("pre",null,m((b.workedMinutes/60%60).toFixed(2))+"hs",1)],4))),256))]),n("div",ee,m((o.dates.reduce((b,B)=>b+B.workedMinutes,0)/60).toFixed(2))+"hs ",1)])]),key:"0"}:void 0]),1032,["modelValue","layout","dates"])]),_:1})}const pe=N(J,[["render",ue]]);export{pe as default};
