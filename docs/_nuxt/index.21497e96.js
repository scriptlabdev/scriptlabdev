import{a as y,c as d,w as i,r,o as m,e as c,i as h,f as w,h as k,F,A as M,t as $}from"./entry.792d237c.js";const A={data(){return{lottoTypes:this.$request({url:"https://raw.githubusercontent.com/labscriptdev/static-api/main/data/loteria/index.json",autoSubmit:!0,response:[]}),lotto:{numberStart:1,numberFinal:60,numberLines:10,betMin:4,betMax:6,bets:[]}}},methods:{lottoBetToggle(o){const s=this.lotto.bets.indexOf(o);s>=0?this.lotto.bets.splice(s,1):this.lotto.bets.push(o)},calculate(){let o=this.lotto.betMax,s=this.lotto.numberFinal,u=this.lotto.bets.length;const t=n=>n<0?0:n==0||n==1?1:n*t(n-1),e=t(s)/t(s-o);console.log(e);const a=e/t(o);console.log(a);const l=t(u)/(t(o)*t(u-o));console.log(l)}},computed:{lottoNumbers(){const o=(t=0,e=10,a=1)=>Array.from({length:Math.ceil((e-t+1)/a)},(l,n)=>n*a+t),s=(t,e)=>Array.from({length:Math.ceil(t.length/e)},(a,l)=>t.slice(l*e,l*e+e));let u=o(this.lotto.numberStart,this.lotto.numberFinal).map(t=>{const e=this.lotto.bets.indexOf(t)>=0;return{number:t,selected:e}});return s(u,this.lotto.numberLines)}}};function B(o,s,u,t,e,a){const l=r("v-card-title"),n=r("v-divider"),p=r("v-list-item"),b=r("v-list"),f=r("v-navigation-drawer"),v=M,g=r("v-main"),x=r("v-layout");return m(),d(x,null,{default:i(()=>[c(f,{"model-value":!0,permanent:!0,width:"300"},{default:i(()=>[c(l,null,{default:i(()=>[h("Loteria")]),_:1}),c(n),c(b,null,{default:i(()=>[(m(!0),w(F,null,k(e.lottoTypes.response,_=>(m(),d(p,{key:_.id,to:`/tool/lotto/${_.id}`},{default:i(()=>[h($(_.name),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),c(g,{style:{height:"100vh",overflow:"auto"}},{default:i(()=>[c(v)]),_:1})]),_:1})}const N=y(A,[["render",B]]);export{N as default};
