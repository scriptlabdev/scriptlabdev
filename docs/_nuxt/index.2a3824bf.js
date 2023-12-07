import{_ as z,r as k,o as P,c as x,w as E,e as V,b as M,d as L,F as B,i as Y,t as N,a as R}from"./entry.76f46d94.js";import{b as j,V as D,B as X,S as Z,C as F,x as U,a7 as H}from"./three.module.8fae685a.js";const K={props:{modelValue:{type:[Boolean,Number,String,Array,Object,Function],default:!1},activeKey:{type:[Boolean,String],default:!1}},methods:{dataType(l){return Array.isArray(l)?"array":typeof l},dataTypeIs(l,m){return m==this.dataType(l)},dataObjectKeys(l){if(!this.dataTypeIs(l,"object"))return[];let m=[];return Object.keys(l).forEach((e,n)=>{const d=this.dataType(l[e]);m.push({key:e,type:d})}),m}},data(){return{modelValueKey:this.activeKey||(this.dataTypeIs(this.modelValue,"object")?Object.keys(this.modelValue)[0]:!1)}}},q={key:0},Q={class:"pa-2",style:{height:"100%",background:"#222",color:"lime",overflow:"auto"}},I={key:1},G={class:"pa-2",style:{height:"100%",background:"#222",color:"lime",overflow:"auto"}};function W(l,m,e,n,d,a){const p=k("v-list-subheader"),i=k("v-list-item"),h=k("v-list"),u=k("v-col"),g=k("v-row"),b=k("v-card");return P(),x(b,null,{default:E(()=>[a.dataTypeIs(e.modelValue,"object")?(P(),V("div",q,[M(g,null,{default:E(()=>[M(u,{cols:"3"},{default:E(()=>[M(h,null,{default:E(()=>[M(p,null,{default:E(()=>[L("KEYS")]),_:1}),(P(!0),V(B,null,Y(a.dataObjectKeys(e.modelValue),v=>(P(),x(i,{key:v.key,onClick:O=>d.modelValueKey=v.key,active:v.key==d.modelValueKey,"active-color":"success"},{default:E(()=>[L(" ("+N(v.type)+") "+N(v.key),1)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1}),M(u,{cols:"9"},{default:E(()=>[R("pre",Q,N(d.modelValueKey)+": "+N(e.modelValue[d.modelValueKey]),1)]),_:1})]),_:1})])):(P(),V("div",I,[R("pre",G,N(a.dataType(e.modelValue))+": "+N(e.modelValue),1)]))]),_:1})}const J=z(K,[["render",W]]),$=function(l,m){var e=this,n={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM:4,TOUCH_PAN:5};this.object=l,this.domElement=m!==void 0?m:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.noRoll=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new j;var d=new j,a=n.NONE,p=n.NONE,i=new j,h=new j,u=new j,g=new D,b=new D,v=0,O=0,_=new D,c=new D;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var y={type:"change"};function f(t){e.enabled!==!1&&(window.removeEventListener("keydown",f),p=a,a===n.NONE&&(t.keyCode!==e.keys[n.ROTATE]||e.noRotate?t.keyCode!==e.keys[n.ZOOM]||e.noZoom?t.keyCode!==e.keys[n.PAN]||e.noPan||(a=n.PAN):a=n.ZOOM:a=n.ROTATE))}function w(t){e.enabled===!1||(t.preventDefault(),t.stopPropagation(),a!==n.ROTATE||e.noRotate?a!==n.ZOOM||e.noZoom?a!==n.PAN||e.noPan||(c=e.getMouseOnScreen(t.clientX,t.clientY)):b=e.getMouseOnScreen(t.clientX,t.clientY):u=e.getMouseProjectionOnBall(t.clientX,t.clientY))}function C(t){e.enabled!==!1&&(t.preventDefault(),t.stopPropagation(),a=n.NONE,document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C))}function S(t){if(e.enabled!==!1){t.preventDefault(),t.stopPropagation();var o=0;t.wheelDelta?o=t.wheelDelta/40:t.detail&&(o=-t.detail/3),g.y+=.01*o}}this.handleResize=function(){this.domElement===document?(this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight):this.screen=this.domElement.getBoundingClientRect()},this.handleEvent=function(t){typeof this[t.type]=="function"&&this[t.type](t)},this.getMouseOnScreen=function(t,o){return new D((t-e.screen.left)/e.screen.width,(o-e.screen.top)/e.screen.height)},this.getMouseProjectionOnBall=function(t,o){var s=new j((t-.5*e.screen.width-e.screen.left)/(.5*e.screen.width),(.5*e.screen.height+e.screen.top-o)/(.5*e.screen.height),0),r=s.length();e.noRoll?r<Math.SQRT1_2?s.z=Math.sqrt(1-r*r):s.z=.5/r:r>1?s.normalize():s.z=Math.sqrt(1-r*r),i.copy(e.object.position).sub(e.target);var T=e.object.up.clone().setLength(s.y);return T.add(e.object.up.clone().cross(i).setLength(s.x)),T.add(i.setLength(s.z)),T},this.rotateCamera=function(){var t=Math.acos(h.dot(u)/h.length()/u.length());if(t){var o=new j().crossVectors(h,u).normalize(),s=new H;t*=e.rotateSpeed,s.setFromAxisAngle(o,-t),i.applyQuaternion(s),e.object.up.applyQuaternion(s),u.applyQuaternion(s),e.staticMoving?h.copy(u):(s.setFromAxisAngle(o,t*(e.dynamicDampingFactor-1)),h.applyQuaternion(s))}},this.zoomCamera=function(){if(a===n.TOUCH_ZOOM){var t=v/O;v=O,i.multiplyScalar(t)}else{var t=1+(b.y-g.y)*e.zoomSpeed;t!==1&&t>0&&(i.multiplyScalar(t),e.staticMoving?g.copy(b):g.y+=(b.y-g.y)*this.dynamicDampingFactor)}},this.panCamera=function(){var t=c.clone().sub(_);if(t.lengthSq()){t.multiplyScalar(i.length()*e.panSpeed);var o=i.clone().cross(e.object.up).setLength(t.x);o.add(e.object.up.clone().setLength(t.y)),e.object.position.add(o),e.target.add(o),e.staticMoving?_=c:_.add(t.subVectors(c,_).multiplyScalar(e.dynamicDampingFactor))}},this.checkDistances=function(){e.noZoom&&e.noPan||(i.lengthSq()>e.maxDistance*e.maxDistance&&e.object.position.addVectors(e.target,i.setLength(e.maxDistance)),i.lengthSq()<e.minDistance*e.minDistance&&e.object.position.addVectors(e.target,i.setLength(e.minDistance)))},this.update=function(){i.subVectors(e.object.position,e.target),e.noRotate||e.rotateCamera(),e.noZoom||e.zoomCamera(),e.noPan||e.panCamera(),e.object.position.addVectors(e.target,i),e.checkDistances(),e.object.lookAt(e.target),d.distanceToSquared(e.object.position)>0&&(e.dispatchEvent(y),d.copy(e.object.position))},this.reset=function(){a=n.NONE,p=n.NONE,e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.up.copy(e.up0),i.subVectors(e.object.position,e.target),e.object.lookAt(e.target),e.dispatchEvent(y),d.copy(e.object.position)},this.domElement.addEventListener("contextmenu",function(t){t.preventDefault()},!1),this.domElement.addEventListener("mousedown",function(o){e.enabled!==!1&&(o.preventDefault(),o.stopPropagation(),a===n.NONE&&(a=o.button),a!==n.ROTATE||e.noRotate?a!==n.ZOOM||e.noZoom?a!==n.PAN||e.noPan||(_=e.getMouseOnScreen(o.clientX,o.clientY),c.copy(_)):(g=e.getMouseOnScreen(o.clientX,o.clientY),b.copy(g)):(h=e.getMouseProjectionOnBall(o.clientX,o.clientY),u.copy(h)),document.addEventListener("mousemove",w,!1),document.addEventListener("mouseup",C,!1))},!1),this.domElement.addEventListener("mousewheel",S,!1),this.domElement.addEventListener("DOMMouseScroll",S,!1),this.domElement.addEventListener("touchstart",function(o){if(e.enabled!==!1)switch(o.touches.length){case 1:a=n.TOUCH_ROTATE,h=u=e.getMouseProjectionOnBall(o.touches[0].pageX,o.touches[0].pageY);break;case 2:a=n.TOUCH_ZOOM;var s=o.touches[0].pageX-o.touches[1].pageX,r=o.touches[0].pageY-o.touches[1].pageY;O=v=Math.sqrt(s*s+r*r);break;case 3:a=n.TOUCH_PAN,_=c=e.getMouseOnScreen(o.touches[0].pageX,o.touches[0].pageY);break;default:a=n.NONE}},!1),this.domElement.addEventListener("touchend",function(o){if(e.enabled!==!1){switch(o.touches.length){case 1:h=u=e.getMouseProjectionOnBall(o.touches[0].pageX,o.touches[0].pageY);break;case 2:v=O=0;break;case 3:_=c=e.getMouseOnScreen(o.touches[0].pageX,o.touches[0].pageY)}a=n.NONE}},!1),this.domElement.addEventListener("touchmove",function(o){if(e.enabled!==!1)switch(o.preventDefault(),o.stopPropagation(),o.touches.length){case 1:u=e.getMouseProjectionOnBall(o.touches[0].pageX,o.touches[0].pageY);break;case 2:var s=o.touches[0].pageX-o.touches[1].pageX,r=o.touches[0].pageY-o.touches[1].pageY;O=Math.sqrt(s*s+r*r);break;case 3:c=e.getMouseOnScreen(o.touches[0].pageX,o.touches[0].pageY);break;default:a=n.NONE}},!1),window.addEventListener("keydown",f,!1),window.addEventListener("keyup",function(o){e.enabled!==!1&&(a=p,window.addEventListener("keydown",f,!1))},!1),this.handleResize()},ee={data:()=>({game:{options:{fps:60,gridHelper:!0,orbitControls:!0},onCreate({scene:l,camera:m,effectComposer:e}){let n,d=640,a=360,p=null,i=0,h=.03,u={vertexColor:{type:"c",value:[]}},g={amplitude:{type:"f",value:.5}};const b=`
            // uniform float amplitude;
            // attribute float size;
            uniform float amplitude;

            attribute vec3 vertexColor;

            varying vec4 varColor;

            void main()
            {
            varColor = vec4(vertexColor, 1.0);

            vec4 pos = vec4(position, 1.0);
            pos.z *= amplitude;

            vec4 mvPosition = modelViewMatrix * pos;

            gl_PointSize = 1.0;
            gl_Position = projectionMatrix * mvPosition;
            }
          `,v=`
            varying vec4 varColor;

            void main()
            {
            gl_FragColor = varColor;
            }
          `;n=new $(m),n.rotateSpeed=1,n.zoomSpeed=1.2,n.panSpeed=.8,n.noZoom=!1,n.noPan=!0,n.staticMoving=!0,n.dynamicDampingFactor=.3;const O=()=>{const c=document.createElement("img"),y=document.createElement("canvas"),f=y.getContext("2d");c.crossOrigin="Anonymous",c.onload=function(){c.width=y.width=d,c.height=y.height=a,f.fillStyle=f.createPattern(c,"no-repeat"),f.fillRect(0,0,d,a),p=f.getImageData(0,0,d,a).data,_()},c.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/tree_star.jpg"},_=()=>{let c=[.2126,.7152,.0722],y=0,f,w,C,S=400;f=new X,w=d*-.5,C=a*.5,new Z({attributes:u,uniforms:g,vertexShader:b,fragmentShader:v});let t=[];for(var o=0;o<a;o++){for(var s=0;s<d;s++){var r=new F;r.setRGB(p[y]/255,p[y+1]/255,p[y+2]/255),u.vertexColor.value.push(r);var T=r.r*c[0]+r.g*c[1]+r.b*c[2],A=new j;A.x=w,A.y=C,A.z=S*-.5+S*T,t.push(w,C,S*-.5+S*T),y+=4,w++}w=d*-.5,C--}t=new Float32Array(t),f.setAttribute("position",new U(t,3))};O(),this.shaderUniforms=g,this.animationTime=i,this.animationDelta=h},onUpdate({}){const{shaderUniforms:l}=this;l.amplitude.value=Math.sin(this.animationTime),this.animationTime+=this.animationDelta}}})};function te(l,m,e,n,d,a){const p=k("threejs"),i=J,h=k("v-navigation-drawer");return P(),V("div",null,[M(p,{modelValue:l.game,"onUpdate:modelValue":m[0]||(m[0]=u=>l.game=u)},null,8,["modelValue"]),M(h,{"model-value":!1,permanent:"",location:"end",width:"400px"},{default:E(()=>[M(i,{"model-value":l.game},null,8,["model-value"])]),_:1})])}const ae=z(ee,[["render",te]]);export{ae as default};
