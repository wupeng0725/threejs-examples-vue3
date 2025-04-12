const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/ThreeBox-DQ9Fe_-G.js","static/js/three-DttFUdCx.js","static/js/highlight-_NCVw0wD.js","static/js/Texture-B55BT441.js","static/js/BoundingBox-DQUfF6hG.js","static/css/Texture-ByHcGuB0.css","static/js/PrimitivesGeometry-Bb5IfsfT.js","static/js/GltfLoaderBox-D-JH13hk.js","static/css/GltfLoaderBox-Bin1-vTB.css","static/js/TweenBox-Dvo7s9AX.js"])))=>i.map(i=>d[i]);
import{r as F,c as z,e as Q,b as C,d as k,F as se,f as de,u as ue,n as me,w as pe,t as Y,v as he,g as ve,h as ge,i as fe,j as _e,k as we,l as Ee,m as Re,p as ye,q as Le,s as Pe,x as be,y as xe,z as Te,A as ke,B as Oe,C as Ce,D as Se,E as He,G as Me,H as je,I as Be,J as Ie,K as De,L as Ae,M as ze,N as Ge,O as Fe,P as qe,Q as Ue,R as Ve,S as $e,T as We,U as Ne,V as Ye,W as Xe,X as Je,Y as Ke,Z as Ze,_ as $,$ as ce,a0 as Qe,a1 as en,a2 as te,a3 as nn,a4 as H,a5 as rn,a6 as tn,a7 as an,a8 as on,o as sn,a as cn}from"./highlight-_NCVw0wD.js";import{aS as ln,aT as W,aU as X,aV as N,X as dn,ab as ae,a3 as un,W as mn,P as pn,b as hn,D as vn,c as gn,z as fn,M as _n,aM as wn}from"./three-DttFUdCx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const En="modulepreload",Rn=function(e){return"/threejs-examples-vue3/"+e},oe={},v=function(r,i,l){let n=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(i.map(d=>{if(d=Rn(d),d in oe)return;oe[d]=!0;const g=d.endsWith(".css"),O=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${O}`))return;const L=document.createElement("link");if(L.rel=g?"stylesheet":En,g||(L.as="script"),L.crossOrigin="",L.href=d,o&&L.setAttribute("nonce",o),document.head.appendChild(L),g)return new Promise((_,w)=>{L.addEventListener("load",_),L.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return r().catch(s)})},yn="/threejs-examples-vue3/github.svg",Ln=[{title:"三个基础盒子",value:"ThreeBox",type:"demo"},{title:"几何体汇总",value:"PrimitivesGeometry",type:"demo"},{title:"轨道控制器",value:"OrbitControls",type:"demo"},{title:"lil-gui调试器",value:"GUI",type:"demo"},{title:"纹理贴图",value:"Texture",type:"demo"},{title:"GLTFLoader",value:"GltfLoaderBox",type:"demo"},{title:"光线投射",value:"RaycasterBox",type:"demo"},{title:"离屏渲染",value:"OffscreenCanvas",type:"demo"},{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"Tween动画",value:"TweenBox",type:"demo"},{title:"包围盒与包围球",value:"BoundingBox",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],ee=(e,r)=>{const i=e.__vccOpts||e;for(const[l,n]of r)i[l]=n;return i},Pn={key:0,id:"panel"},bn=["onClick"],xn={class:"panel-item-context"},Tn={class:"panel-item-tag"},kn={__name:"Panel",emits:["componentChange"],setup(e,{emit:r}){const i=r,l=F(""),n=o=>{o.type==="demo"?(l.value=o.value,i("componentChange",o)):s(o.value)},s=o=>{window.open(`https://wupeng0725.github.io/${o}/`,"_blank")},a=F(!0);return(o,d)=>a.value?(C(),z("div",Pn,[d[0]||(d[0]=k("div",{class:"panel-header"},[k("span",{class:"title"},"Threejs 样例"),k("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[k("img",{src:yn,alt:"Github源码"})])],-1)),(C(!0),z(se,null,de(ue(Ln),(g,O)=>(C(),z("div",{class:me(["panel-item",g.value===l.value&&"selected"]),key:g.value,onClick:L=>n(g)},[k("div",xn,Y(O+1)+" - "+Y(g.title),1),pe(k("div",Tn,"3D案例",512),[[he,g.type==="link"]])],10,bn))),128))])):Q("",!0)}},On=ee(kn,[["__scopeId","data-v-a7781c7a"]]),Cn={},Sn={class:"empty"};function Hn(e,r){return C(),z("div",Sn," Select an example from the sidebar ")}const Mn=ee(Cn,[["render",Hn],["__scopeId","data-v-0f616578"]]);var J,ie;function jn(){if(ie)return J;ie=1;var e=ve();return e.registerLanguage("xml",ge()),e.registerLanguage("bash",fe()),e.registerLanguage("c",_e()),e.registerLanguage("cpp",we()),e.registerLanguage("csharp",Ee()),e.registerLanguage("css",Re()),e.registerLanguage("markdown",ye()),e.registerLanguage("diff",Le()),e.registerLanguage("ruby",Pe()),e.registerLanguage("go",be()),e.registerLanguage("graphql",xe()),e.registerLanguage("ini",Te()),e.registerLanguage("java",ke()),e.registerLanguage("javascript",Oe()),e.registerLanguage("json",Ce()),e.registerLanguage("kotlin",Se()),e.registerLanguage("less",He()),e.registerLanguage("lua",Me()),e.registerLanguage("makefile",je()),e.registerLanguage("perl",Be()),e.registerLanguage("objectivec",Ie()),e.registerLanguage("php",De()),e.registerLanguage("php-template",Ae()),e.registerLanguage("plaintext",ze()),e.registerLanguage("python",Ge()),e.registerLanguage("python-repl",Fe()),e.registerLanguage("r",qe()),e.registerLanguage("rust",Ue()),e.registerLanguage("scss",Ve()),e.registerLanguage("shell",$e()),e.registerLanguage("sql",We()),e.registerLanguage("swift",Ne()),e.registerLanguage("yaml",Ye()),e.registerLanguage("typescript",Xe()),e.registerLanguage("vbnet",Je()),e.registerLanguage("wasm",Ke()),e.HighlightJS=e,e.default=e,J=e,J}jn();const Bn={class:"model-header"},In={class:"model-title"},Dn={class:"model-tag-box"},An={class:"model-content"},zn={__name:"CodeModel",props:{modelData:Object},setup(e){const r=e,i=F(!1),l=F("复制原文"),n=async()=>{try{await navigator.clipboard.writeText(r.modelData.code),l.value="复制成功"}catch{l.value="复制失败"}setTimeout(()=>{l.value="复制原文"},1500)},s=F(null),a=()=>{var o;(o=s.value)==null||o.requestFullscreen()};return(o,d)=>{const g=Ze("highlightjs");return C(),z(se,null,[(C(),$(Qe,{to:"body"},[i.value?(C(),z("div",{key:0,class:"modal",ref_key:"modelRef",ref:s},[k("div",Bn,[k("div",In,"源码："+Y(e.modelData.title),1),k("div",Dn,[k("span",{class:"model-tag-copy",onClick:n},Y(l.value),1),k("span",{class:"model-tag-fullscreen",onClick:a},"全屏"),k("span",{class:"model-tag-close",onClick:d[0]||(d[0]=O=>i.value=!1)},"×")])]),k("div",An,[ce(g,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):Q("",!0)])),k("span",{onClick:d[1]||(d[1]=O=>i.value=!0),class:"checkcode"},"查看源码")],64)}}},Gn=ee(zn,[["__scopeId","data-v-103f8c73"]]),Fn=async e=>{try{const r=Object.assign({"/src/views/BoundingBox.vue":()=>v(()=>import("./Texture-CObU_Dzb.js").then(n=>n.B),[]),"/src/views/GUI.vue":()=>v(()=>import("./SpotLight-CGAQIIil.js").then(n=>n.G),[]),"/src/views/GltfLoaderBox.vue":()=>v(()=>import("./Texture-CObU_Dzb.js").then(n=>n.G),[]),"/src/views/OffscreenCanvas.vue":()=>v(()=>Promise.resolve().then(()=>Xn),void 0),"/src/views/OrbitControls.vue":()=>v(()=>Promise.resolve().then(()=>Kn),void 0),"/src/views/PointLight.vue":()=>v(()=>Promise.resolve().then(()=>Qn),void 0),"/src/views/PrimitivesGeometry.vue":()=>v(()=>import("./SpotLight-CGAQIIil.js").then(n=>n.P),[]),"/src/views/RaycasterBox.vue":()=>v(()=>Promise.resolve().then(()=>nr),void 0),"/src/views/SpotLight.vue":()=>v(()=>import("./SpotLight-CGAQIIil.js").then(n=>n.S),[]),"/src/views/Texture.vue":()=>v(()=>import("./Texture-CObU_Dzb.js").then(n=>n.T),[]),"/src/views/ThreeBox.vue":()=>v(()=>import("./ThreeBox-DQ9Fe_-G.js").then(n=>n.T),__vite__mapDeps([0,1,2])),"/src/views/TweenBox.vue":()=>v(()=>import("./ThreeBox-DQ9Fe_-G.js").then(n=>n.a),__vite__mapDeps([0,1,2]))}),i=`/src/views/${e}.vue`;if(!r[i])throw new Error(`路径不存在: ${i}`);return(await r[i]()).default}catch{return""}};function qn(e){return"/threejs-examples-vue3/"+e.replace(/^\//,"")}class Un extends ln{constructor(r){super(r),this.type=W}parse(r){const a=function(t,u){switch(t){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(u||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(u||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(u||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(u||""))}},O=`
`,L=function(t,u,h){u=u||1024;let R=t.pos,E=-1,c=0,y="",p=String.fromCharCode.apply(null,new Uint16Array(t.subarray(R,R+128)));for(;0>(E=p.indexOf(O))&&c<u&&R<t.byteLength;)y+=p,c+=p.length,R+=128,p+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(R,R+128)));return-1<E?(t.pos+=c+E+1,y+p.slice(0,E)):!1},_=function(t){const u=/^#\?(\S+)/,h=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,E=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let y,p;for((t.pos>=t.byteLength||!(y=L(t)))&&a(1,"no header found"),(p=y.match(u))||a(3,"bad initial token"),c.valid|=1,c.programtype=p[1],c.string+=y+`
`;y=L(t),y!==!1;){if(c.string+=y+`
`,y.charAt(0)==="#"){c.comments+=y+`
`;continue}if((p=y.match(h))&&(c.gamma=parseFloat(p[1])),(p=y.match(f))&&(c.exposure=parseFloat(p[1])),(p=y.match(R))&&(c.valid|=2,c.format=p[1]),(p=y.match(E))&&(c.valid|=4,c.height=parseInt(p[1],10),c.width=parseInt(p[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||a(3,"missing format specifier"),c.valid&4||a(3,"missing image size specifier"),c},w=function(t,u,h){const f=u;if(f<8||f>32767||t[0]!==2||t[1]!==2||t[2]&128)return new Uint8Array(t);f!==(t[2]<<8|t[3])&&a(3,"wrong scanline width");const R=new Uint8Array(4*u*h);R.length||a(4,"unable to allocate buffer space");let E=0,c=0;const y=4*f,p=new Uint8Array(4),q=new Uint8Array(y);let ne=h;for(;ne>0&&c<t.byteLength;){c+4>t.byteLength&&a(1),p[0]=t[c++],p[1]=t[c++],p[2]=t[c++],p[3]=t[c++],(p[0]!=2||p[1]!=2||(p[2]<<8|p[3])!=f)&&a(3,"bad rgbe scanline format");let V=0,B;for(;V<y&&c<t.byteLength;){B=t[c++];const I=B>128;if(I&&(B-=128),(B===0||V+B>y)&&a(3,"bad scanline data"),I){const D=t[c++];for(let re=0;re<B;re++)q[V++]=D}else q.set(t.subarray(c,c+B),V),V+=B,c+=B}const le=f;for(let I=0;I<le;I++){let D=0;R[E]=q[I+D],D+=f,R[E+1]=q[I+D],D+=f,R[E+2]=q[I+D],D+=f,R[E+3]=q[I+D],E+=4}ne--}return R},G=function(t,u,h,f){const R=t[u+3],E=Math.pow(2,R-128)/255;h[f+0]=t[u+0]*E,h[f+1]=t[u+1]*E,h[f+2]=t[u+2]*E,h[f+3]=1},U=function(t,u,h,f){const R=t[u+3],E=Math.pow(2,R-128)/255;h[f+0]=N.toHalfFloat(Math.min(t[u+0]*E,65504)),h[f+1]=N.toHalfFloat(Math.min(t[u+1]*E,65504)),h[f+2]=N.toHalfFloat(Math.min(t[u+2]*E,65504)),h[f+3]=N.toHalfFloat(1)},M=new Uint8Array(r);M.pos=0;const j=_(M),m=j.width,P=j.height,x=w(M.subarray(M.pos),m,P);let T,S,b;switch(this.type){case X:b=x.length/4;const t=new Float32Array(b*4);for(let h=0;h<b;h++)G(x,h*4,t,h*4);T=t,S=X;break;case W:b=x.length/4;const u=new Uint16Array(b*4);for(let h=0;h<b;h++)U(x,h*4,u,h*4);T=u,S=W;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:m,height:P,data:T,header:j.string,gamma:j.gamma,exposure:j.exposure,type:S}}setDataType(r){return this.type=r,this}load(r,i,l,n){function s(a,o){switch(a.type){case X:case W:a.colorSpace=dn,a.minFilter=ae,a.magFilter=ae,a.generateMipmaps=!1,a.flipY=!0;break}i&&i(a,o)}return super.load(r,s,l,n)}}const K={},Vn=e=>{const r=new un,i=new Un;return Promise.all(e.map(l=>K[l]?Promise.resolve():new Promise((n,s)=>{(l.includes("hdr")?i:r).load(qn(l),o=>{K[l]=o,n()},void 0,o=>s(o))})))},sr=e=>K[e],$n={id:"wrapper"},Wn={id:"viewer"},Nn={__name:"App",setup(e){const r=H(()=>v(()=>import("./Texture-B55BT441.js").then(m=>m.P),__vite__mapDeps([3,1,4,2,5]))),i=H(()=>v(()=>import("./Texture-B55BT441.js").then(m=>m.S),__vite__mapDeps([3,1,4,2,5]))),l=H(()=>v(()=>import("./ThreeBox-DQ9Fe_-G.js").then(m=>m.b),__vite__mapDeps([0,1,2]))),n=H(()=>v(()=>import("./BoundingBox-DQUfF6hG.js").then(m=>m.a),__vite__mapDeps([4,1,2]))),s=H(()=>v(()=>import("./PrimitivesGeometry-Bb5IfsfT.js"),__vite__mapDeps([6,1,2]))),a=H(()=>v(()=>import("./Texture-B55BT441.js").then(m=>m.G),__vite__mapDeps([3,1,4,2,5]))),o=H(()=>v(()=>import("./Texture-B55BT441.js").then(m=>m.T),__vite__mapDeps([3,1,4,2,5]))),d=H(()=>v(()=>import("./GltfLoaderBox-D-JH13hk.js"),__vite__mapDeps([7,1,4,2,8]))),g=H(()=>v(()=>import("./BoundingBox-DQUfF6hG.js").then(m=>m.R),__vite__mapDeps([4,1,2]))),O=H(()=>v(()=>Promise.resolve().then(()=>ar),void 0)),L=H(()=>v(()=>import("./TweenBox-Dvo7s9AX.js"),__vite__mapDeps([9,1,4,2,3,5]))),_=H(()=>v(()=>import("./BoundingBox-DQUfF6hG.js").then(m=>m.B),__vite__mapDeps([4,1,2])));Vn(["/texture/door/color.jpg","/texture/door/ambientOcclusion.jpg","/texture/door/alpha.jpg","/texture/door/specular.jpg"]).catch(m=>{});const G=en({code:"",title:""}),U={PointLight:r,SpotLight:i,ThreeBox:l,PrimitivesGeometry:s,OrbitControls:n,GUI:a,Texture:o,GltfLoaderBox:d,RaycasterBox:g,OffscreenCanvas:O,TweenBox:L,BoundingBox:_},M=F(""),j=async({value:m,title:P})=>{M.value=m,G.code=await Fn(m),G.title=P};return(m,P)=>(C(),z("div",$n,[ce(On,{onComponentChange:j}),k("div",Wn,[M.value?(C(),$(tn,{key:0},{fallback:te(()=>P[0]||(P[0]=[rn(" Loading... ")])),default:te(()=>[(C(),$(nn(U[M.value])))]),_:1})):(C(),$(Mn,{key:1})),M.value?(C(),$(Gn,{key:2,modelData:G},null,8,["modelData"])):Q("",!0)])]))}};an(Nn).use(on).mount("#app");const Yn=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
import { state, init, pickPosition } from '@/workers/shared-picking.js'\r
\r
const canvasRef = ref(null)\r
\r
let worker\r
\r
function startWorker() {\r
  const offscreen = canvasRef.value.transferControlToOffscreen()\r
  worker = new Worker(new URL('@/workers/offscreencanvas-cubes.js', import.meta.url), { type: 'module' })\r
  worker.postMessage({ type: 'init', canvas: offscreen }, [offscreen])\r
  window.addEventListener('resize', sendSize)\r
  sendSize()\r
}\r
function sendMouse(x, y) {\r
  if (canvasRef.value.transferControlToOffscreen) {\r
    worker.postMessage({\r
      type: 'mouse',\r
      x,\r
      y,\r
    })\r
  } else {\r
    pickPosition.x = x\r
    pickPosition.y = y\r
  }\r
}\r
function sendSize() {\r
  if (canvasRef.value.transferControlToOffscreen) {\r
    worker.postMessage({\r
      type: 'size',\r
      width: canvasRef.value.clientWidth,\r
      height: canvasRef.value.clientHeight,\r
    })\r
  } else {\r
    state.width = canvasRef.value.clientWidth\r
    state.height = canvasRef.value.clientHeight\r
  }\r
}\r
\r
function startMainPage() {\r
  init({ canvas: canvasRef.value })\r
  window.addEventListener('resize', sendSize)\r
  sendSize()\r
}\r
function getCanvasRelativePosition(event) {\r
\r
  const rect = canvasRef.value.getBoundingClientRect()\r
  return {\r
    x: (event.clientX - rect.left) * canvasRef.value.width / rect.width,\r
    y: (event.clientY - rect.top) * canvasRef.value.height / rect.height,\r
  }\r
\r
}\r
\r
function setPickPosition(event) {\r
\r
  const pos = getCanvasRelativePosition(event)\r
  sendMouse(\r
    (pos.x / canvasRef.value.width) * 2 - 1,\r
    (pos.y / canvasRef.value.height) * - 2 + 1) // note we flip Y\r
\r
}\r
\r
function clearPickPosition() {\r
\r
  // unlike the mouse which always has a position\r
  // if the user stops touching the screen we want\r
  // to stop picking. For now we just pick a value\r
  // unlikely to pick something\r
  sendMouse(- 100000, - 100000)\r
\r
}\r
function main() {\r
  if (canvasRef.value.transferControlToOffscreen) {\r
    startWorker()\r
  } else {\r
    startMainPage()\r
  }\r
  clearPickPosition()\r
\r
  window.addEventListener('mousemove', setPickPosition)\r
  window.addEventListener('mouseout', clearPickPosition)\r
  window.addEventListener('mouseleave', clearPickPosition)\r
}\r
\r
// 清理资源\r
const cleanUp = () => {\r
  canvasRef.value = null\r
\r
  if (worker) {\r
    worker.terminate()\r
  }\r
\r
}\r
\r
onMounted(() => {\r
  main()\r
})\r
\r
onBeforeUnmount(() => {\r
  cleanUp()\r
  window.removeEventListener('resize', sendSize)\r
  window.removeEventListener('mousemove', setPickPosition)\r
  window.removeEventListener('mouseout', clearPickPosition)\r
  window.removeEventListener('mouseleave', clearPickPosition)\r
})\r
<\/script>\r
\r
<style lang="scss" scoped></style>`,Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Yn},Symbol.toStringTag,{value:"Module"})),Jn=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
// 导入轨道控制器\r
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null, controls = null\r
\r
function main() {\r
  // 创建渲染器\r
  renderer = new THREE.WebGLRenderer({\r
    canvas: canvasRef.value,\r
    antialias: true // 抗锯齿\r
  })\r
  // 创建透视相机\r
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)\r
  camera.position.set(3, 3, 3)\r
  // 创建场景\r
  scene = new THREE.Scene()\r
\r
  // 添加世界坐标系\r
  const axesHelper = new THREE.AxesHelper(5)\r
  scene.add(axesHelper)\r
  // 添加轨道控制器\r
  controls = new OrbitControls(camera, renderer.domElement)\r
  controls.enableDamping = true // 启用阻尼（惯性）效果\r
  controls.dampingFactor = 0.25 // 阻尼系数\r
  // controls.autoRotate = true // 自动旋转\r
  // controls.autoRotateSpeed = 1.0 // 旋转速度\r
  \r
\r
  const geometry = new THREE.BoxGeometry(1, 1, 1)\r
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })\r
  const cube = new THREE.Mesh(geometry, material)\r
  scene.add(cube)\r
}\r
\r
/**\r
 * 检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。\r
 * @param renderer \r
 */\r
function resizeRendererToDisplaySize(renderer) {\r
  const canvas = renderer.domElement\r
  // 不处理分辨率\r
  // const width = canvas.clientWidth\r
  // const height = canvas.clientHeight\r
  // \r
  // 处理分辨率显示--应对HD-DPI显示器\r
  const pixelRatio = window.devicePixelRatio\r
  const width = Math.floor(canvas.clientWidth * pixelRatio)\r
  const height = Math.floor(canvas.clientHeight * pixelRatio)\r
  const needResize = canvas.width !== width || canvas.height !== height\r
  if (needResize) {\r
    renderer.setSize(width, height, false)\r
  }\r
  return needResize\r
}\r
// 清理资源\r
const cleanUp = () => {\r
  // 1. 停止动画循环\r
  if (animationId) cancelAnimationFrame(animationId)\r
\r
  // 2. 释放Three.js资源\r
  scene.traverse(child => {\r
    if (child.isMesh) {\r
      child.geometry.dispose()\r
      child.material.dispose()\r
      // texture.dispose()   // 释放纹理（如果有）\r
    }\r
  })\r
\r
  // 3. 销毁渲染器\r
  renderer.dispose()\r
  renderer.forceContextLoss()\r
  renderer.domElement = null\r
  renderer = null\r
\r
  // 4. 销毁控制器\r
  controls.dispose()\r
  controls = null\r
\r
  // 5. 清理引用\r
  scene = null\r
  camera = null\r
  canvasRef.value = null\r
}\r
\r
function animate() {\r
  controls.update() // 更新控制器\r
  if (resizeRendererToDisplaySize(renderer)) {\r
    const canvas = renderer.domElement\r
    camera.aspect = canvas.clientWidth / canvas.clientHeight\r
    camera.updateProjectionMatrix()\r
  }\r
  // 将场景和摄像机传递给渲染器来渲染出整个场景\r
  renderer.render(scene, camera)\r
  animationId = requestAnimationFrame(animate)\r
}\r
\r
onMounted(() => {\r
  main()\r
  requestAnimationFrame(animate)\r
})\r
\r
onBeforeUnmount(() => {\r
  cleanUp()\r
})\r
\r
<\/script>\r
\r
<style lang="scss" scoped></style>`,Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"})),Zn=`<template>\r
  <div id="container" ref="containerRef"></div>\r
</template>\r
\r
<script setup>\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
// 导入threejs\r
import * as THREE from 'three'\r
// 导入轨道控制器\r
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'\r
// 导入lil.gui\r
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'\r
\r
const containerRef = ref(null)\r
\r
let renderer, scene, camera, animationId, gui\r
\r
const initScene = () => {\r
  /**\r
   * 目标：点光源\r
   */\r
\r
  // 创建场景\r
  scene = new THREE.Scene()\r
\r
  // 创建相机\r
  camera = new THREE.PerspectiveCamera(\r
    45, // fov视角范围(field 0f view)\r
    window.innerWidth / window.innerHeight, // aspect画布宽高比，默认是300/150=2\r
    0.1, // near近平面\r
    1000 // far远平面\r
  )\r
  // 设置相机位置\r
  camera.position.z = 10\r
  camera.position.y = 2\r
  camera.position.x = 2\r
  // camera.position.set(0, 0, 10)\r
  // 设置相机看向位置（默认原点）\r
  camera.lookAt(0, 0, 0)\r
\r
  // 创建渲染器\r
  renderer = new THREE.WebGLRenderer({ antialias: true })\r
  // 设置渲染器的尺寸\r
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)\r
  // 开启场景中的阴影贴图\r
  renderer.shadowMap.enabled = true\r
  renderer.shadowMap.type = THREE.PCFSoftShadowMap // 柔和阴影\r
\r
  // 将画布添加到body中\r
  containerRef.value.appendChild(renderer.domElement)\r
\r
  // 添加世界坐标辅助器\r
  const axeshelper = new THREE.AxesHelper(5)\r
  scene.add(axeshelper)\r
\r
  // 添加轨道控制器\r
  const controls = new OrbitControls(camera, renderer.domElement)\r
\r
  // 设置时钟\r
  const clock = new THREE.Clock()\r
\r
  // 创建GUI\r
  gui = new GUI()\r
\r
  // 创建球形几何体\r
  const sphereGeometry = new THREE.SphereGeometry(1, 20, 20)\r
  const material = new THREE.MeshStandardMaterial()\r
  const sphere = new THREE.Mesh(sphereGeometry, material)\r
  // 投射阴影\r
  sphere.castShadow = true\r
  scene.add(sphere)\r
\r
  // 创建平面\r
  const planeGeometry = new THREE.PlaneGeometry(50, 50)\r
  const plane = new THREE.Mesh(planeGeometry, material)\r
  plane.position.set(0, -1, 0)\r
  plane.rotation.x = -Math.PI / 2\r
  // 接收阴影\r
  plane.receiveShadow = true\r
  scene.add(plane)\r
\r
  // 灯光\r
  // 环境光\r
  const light = new THREE.AmbientLight(0xffffff, 0.5) // 柔和的白光\r
  scene.add(light)\r
\r
  // 创建一个小球代替点光源\r
  const smallBall = new THREE.Mesh(\r
    new THREE.SphereGeometry(0.1, 20, 20),\r
    new THREE.MeshBasicMaterial({ color: 0xff0000 })\r
  )\r
  smallBall.position.set(2, 2, 2)\r
\r
  // 点光源\r
  const pointLight = new THREE.PointLight(0xff0000, 0.5)\r
  // pointLight.position.set(2, 2, 2)\r
  pointLight.castShadow = true\r
  // 光照强度\r
  pointLight.intensity = 2\r
\r
  // 设置阴影模糊度\r
  pointLight.shadow.radius = 20\r
  // 设置阴影的分辨率\r
  pointLight.shadow.mapSize.set(1024, 1024)\r
\r
  // 设置透视相机的属性\r
  // pointLight.shadow.camera.near = 1\r
  // pointLight.shadow.camera.far = 1000\r
  // pointLight.shadow.camera.fov = 15\r
\r
  // 沿着光照距离的衰减量\r
  pointLight.decay = 0\r
\r
  smallBall.add(pointLight)\r
  scene.add(smallBall)\r
\r
  gui.add(sphere.position, "x").min(-5).max(5).step(0.1)\r
  gui.add(pointLight, "distance").min(0).max(10).step(0.01)\r
  gui.add(pointLight, "decay").min(0).max(5).step(0.01)\r
\r
  // const shadowHelper = new THREE.CameraHelper(pointLight.shadow.camera)\r
  // scene.add(shadowHelper);\r
  function animate() {\r
    let time = clock.getElapsedTime()\r
    smallBall.position.x = Math.sin(time) * 3\r
    smallBall.position.z = Math.cos(time) * 3\r
    smallBall.position.y = 2 + Math.sin(time * 10) / 2\r
\r
    controls.update()\r
    // 渲染\r
    renderer.render(scene, camera)\r
    animationId = requestAnimationFrame(animate)\r
  }\r
  animate()\r
}\r
\r
// 窗口resize处理\r
const handleResize = () => {\r
  // 重置渲染器高度比\r
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)\r
  // 重置相机宽高比\r
  camera.aspect = window.innerWidth / window.innerHeight\r
  // 更新相机投影矩阵\r
  camera.updateProjectionMatrix()\r
}\r
\r
// 清理资源\r
const cleanUp = () => {\r
  containerRef.value.removeChild(renderer.domElement)\r
  gui.destroy() // 销毁GUI实例\r
  // 1. 停止动画循环\r
  if (animationId) cancelAnimationFrame(animationId)\r
\r
  // 2. 移除事件监听\r
  window.removeEventListener('resize', handleResize)\r
\r
  // 3. 释放Three.js资源\r
  scene.traverse(child => {\r
    if (child.isMesh) {\r
      child.geometry.dispose()\r
      child.material.dispose()\r
      // texture.dispose()   // 释放纹理（如果有）\r
    }\r
  })\r
\r
  // 4. 销毁渲染器\r
  renderer.dispose()\r
  renderer.forceContextLoss()\r
  renderer.domElement = null\r
  renderer = null\r
\r
  // 5. 清理引用\r
  scene = null\r
  camera = null\r
  gui = null\r
}\r
\r
onMounted(() => {\r
  initScene()\r
  window.addEventListener('resize', handleResize)\r
})\r
\r
\r
\r
onBeforeUnmount(() => {\r
  cleanUp()\r
})\r
\r
<\/script>\r
\r
<style>\r
</style>`,Qn=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"})),er=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
// 导入轨道控制器\r
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null, cubes = [],\r
  controls = null, cameraPole = null\r
\r
function main() {\r
  // 创建渲染器\r
  // 渲染器负责将你提供的所有数据渲染绘制到canvas上\r
  renderer = new THREE.WebGLRenderer({\r
    canvas: canvasRef.value,\r
    antialias: true // 抗锯齿\r
  })\r
\r
  // 创建透视相机，近大远小\r
  const fov = 75 // fov是视野范围(field of view)的缩写，默认值50\r
  const aspect = window.innerWidth / window.innerHeight  // aspect指画布的宽高比，默认值1\r
  // near和far代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。\r
  const near = 0.1 // 默认值0.1\r
  const far = 1000 // 默认值2000\r
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far)\r
  // 摄像机默认指向Z轴负方向，上方向朝向Y轴正方向。\r
  // 我们将会把立方体放置在坐标原点，所以我们需要往后移一下摄像机才能显示出物体。\r
  camera.position.z = 30\r
\r
  // 创建场景，需要three.js绘制的东西都需要加入到scene中\r
  scene = new THREE.Scene()\r
  scene.background = new THREE.Color('#999')\r
\r
  // 把摄像机放到自拍杆上 (把它添加为一个对象的子元素)\r
  // 如此，我们就能通过旋转自拍杆，来移动摄像机\r
  cameraPole = new THREE.Object3D()\r
  scene.add(cameraPole)\r
  cameraPole.add(camera)\r
  {\r
    // 添加环境光源\r
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // 灯光颜色和强度\r
    scene.add(ambientLight) // 将灯光添加到场景中\r
    const light = new THREE.DirectionalLight(0xffffff, 3)\r
    light.position.set(-1, 2, 4)\r
    scene.add(light)\r
  }\r
  {\r
    // 添加轨道控制器\r
    controls = new OrbitControls(camera, renderer.domElement)\r
    controls.enableDamping = true // 启用阻尼（惯性）效果\r
  }\r
\r
  // 生成100个立方体，每个立方体的颜色，位置，朝向，缩放都随机。\r
  const geometry = new THREE.BoxGeometry(1, 1, 1)\r
\r
  function rand(min, max) {\r
    if (max === undefined) {\r
      max = min\r
      min = 0\r
    }\r
    return min + (max - min) * Math.random()\r
  }\r
\r
  function randomColor() {\r
    return \`hsl(\${rand(360) | 0}, \${rand(50, 100) | 0}%, 50%)\`\r
  }\r
\r
  const numObjects = 100\r
  for (let i = 0; i < numObjects; ++i) {\r
    const material = new THREE.MeshPhongMaterial({\r
      color: randomColor(),\r
    })\r
\r
    const cube = new THREE.Mesh(geometry, material)\r
    scene.add(cube)\r
\r
    cube.position.set(rand(-20, 20), rand(-20, 20), rand(-20, 20))\r
    cube.rotation.set(rand(Math.PI), rand(Math.PI), 0)\r
    cube.scale.set(rand(3, 6), rand(3, 6), rand(3, 6))\r
  }\r
\r
}\r
class PickHelper {\r
  constructor() {\r
    this.raycaster = new THREE.Raycaster()\r
    this.pickedObject = null\r
    this.pickedObjectSavedColor = 0\r
  }\r
  pick(normalizedPosition, scene, camera, time) {\r
    // 恢复上一个被拾取对象的颜色\r
    if (this.pickedObject) {\r
      this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor)\r
      this.pickedObject = undefined\r
    }\r
\r
    // 发出射线\r
    this.raycaster.setFromCamera(normalizedPosition, camera)\r
    // 获取与射线相交的对象\r
    const intersectedObjects = this.raycaster.intersectObjects(scene.children)\r
    if (intersectedObjects.length) {\r
      // 找到第一个对象，它是离鼠标最近的对象\r
      this.pickedObject = intersectedObjects[0].object\r
      // 保存它的颜色\r
      this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex()\r
      // 设置它的发光为 黄色/红色闪烁\r
      this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFF00 : 0xFF0000)\r
    }\r
  }\r
}\r
const pickHelper = new PickHelper()\r
function getCanvasRelativePosition(event) {\r
  const rect = canvasRef.value.getBoundingClientRect()\r
  return {\r
    x: (event.clientX - rect.left) * canvasRef.value.width / rect.width,\r
    y: (event.clientY - rect.top) * canvasRef.value.height / rect.height,\r
  }\r
}\r
\r
const pickPosition = { x: 0, y: 0 }\r
clearPickPosition()\r
function setPickPosition(event) {\r
  const pos = getCanvasRelativePosition(event)\r
  pickPosition.x = (pos.x / canvasRef.value.width) * 2 - 1\r
  pickPosition.y = (pos.y / canvasRef.value.height) * -2 + 1  // note we flip Y\r
}\r
\r
function clearPickPosition() {\r
  // 对于触屏，不像鼠标总是能有一个位置坐标，\r
  // 如果用户不在触摸屏幕，我们希望停止拾取操作。\r
  // 因此，我们选取一个特别的值，表明什么都没选中\r
  pickPosition.x = -100000\r
  pickPosition.y = -100000\r
}\r
\r
/**\r
 * 检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。\r
 * @param renderer \r
 */\r
function resizeRendererToDisplaySize(renderer) {\r
  const canvas = renderer.domElement\r
  // 不处理分辨率\r
  const width = canvas.clientWidth\r
  const height = canvas.clientHeight\r
  // \r
  // 处理分辨率显示--应对HD-DPI显示器\r
  // const pixelRatio = window.devicePixelRatio\r
  // const width = Math.floor(canvas.clientWidth * pixelRatio)\r
  // const height = Math.floor(canvas.clientHeight * pixelRatio)\r
  const needResize = canvas.width !== width || canvas.height !== height\r
  if (needResize) {\r
    renderer.setSize(width, height, false)\r
  }\r
  return needResize\r
}\r
\r
function animate(time) {\r
  time *= 0.001 // 将时间单位变为秒\r
\r
  cameraPole.rotation.y = time * .1\r
\r
  pickHelper.pick(pickPosition, scene, camera, time)\r
  if (resizeRendererToDisplaySize(renderer)) {\r
    const canvas = renderer.domElement\r
    camera.aspect = canvas.clientWidth / canvas.clientHeight\r
    camera.updateProjectionMatrix()\r
  }\r
  // 将场景和摄像机传递给渲染器来渲染出整个场景\r
  renderer.render(scene, camera)\r
  animationId = requestAnimationFrame(animate)\r
}\r
\r
\r
// 清理资源\r
const cleanUp = () => {\r
  // 1. 停止动画循环\r
  if (animationId) cancelAnimationFrame(animationId)\r
\r
  // 2. 释放Three.js资源\r
  scene.traverse(child => {\r
    if (child.isMesh) {\r
      child.geometry.dispose()\r
      child.material.dispose()\r
      // texture.dispose()   // 释放纹理（如果有）\r
    }\r
  })\r
\r
  // 3. 销毁渲染器\r
  renderer.dispose()\r
  renderer.forceContextLoss()\r
  renderer.domElement = null\r
  renderer = null\r
\r
  // 4. 清理引用\r
  scene = null\r
  camera = null\r
  cameraPole = null\r
  canvasRef.value = null\r
}\r
\r
onMounted(() => {\r
  main()\r
  requestAnimationFrame(animate)\r
\r
  window.addEventListener('mousemove', setPickPosition)\r
  window.addEventListener('mouseout', clearPickPosition)\r
  window.addEventListener('mouseleave', clearPickPosition)\r
})\r
\r
onBeforeUnmount(() => {\r
  cleanUp()\r
  window.removeEventListener('mousemove', setPickPosition)\r
  window.removeEventListener('mouseout', clearPickPosition)\r
  window.removeEventListener('mouseleave', clearPickPosition)\r
})\r
<\/script>\r
\r
<style lang="scss" scoped></style>`,nr=Object.freeze(Object.defineProperty({__proto__:null,default:er},Symbol.toStringTag,{value:"Module"})),A={width:300,height:150},Z={x:0,y:0};function rr(e){const{canvas:r}=e,i=new mn({antialias:!0,canvas:r});A.width=r.width,A.height=r.height;const l=75,n=2,s=.1,a=100,o=new pn(l,n,s,a);o.position.z=4;const d=new hn;{const T=new vn(16777215,1);T.position.set(-1,2,4),d.add(T)}const g=1,O=1,L=1,_=new gn(g,O,L);function w(P,x,T){const S=new fn({color:x}),b=new _n(P,S);return d.add(b),b.position.x=T,b}const G=[w(_,4500104,0),w(_,8930474,-2),w(_,11176004,2)];class U{constructor(){this.raycaster=new wn,this.pickedObject=null,this.pickedObjectSavedColor=0}pick(x,T,S,b){this.pickedObject&&(this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor),this.pickedObject=void 0),this.raycaster.setFromCamera(x,S);const t=this.raycaster.intersectObjects(T.children);t.length&&(this.pickedObject=t[0].object,this.pickedObjectSavedColor=this.pickedObject.material.emissive.getHex(),this.pickedObject.material.emissive.setHex(b*8%2>1?16776960:16711680))}}const M=new U;function j(P){const x=P.domElement,T=A.width,S=A.height,b=x.width!==T||x.height!==S;return b&&P.setSize(T,S,!1),b}function m(P){P*=.001,j(i)&&(o.aspect=A.width/A.height,o.updateProjectionMatrix()),G.forEach((x,T)=>{const S=1+T*.1,b=P*S;x.rotation.x=b,x.rotation.y=b}),M.pick(Z,d,o,P),i.render(d,o),requestAnimationFrame(m)}requestAnimationFrame(m)}const tr={__name:"OffscreenCanvas",setup(e){const r=F(null);let i;function l(){const _=r.value.transferControlToOffscreen();i=new Worker(new URL("/threejs-examples-vue3/assets/offscreencanvas-cubes-DwbHxogP.js",import.meta.url),{type:"module"}),i.postMessage({type:"init",canvas:_},[_]),window.addEventListener("resize",s),s()}function n(_,w){r.value.transferControlToOffscreen?i.postMessage({type:"mouse",x:_,y:w}):(Z.x=_,Z.y=w)}function s(){r.value.transferControlToOffscreen?i.postMessage({type:"size",width:r.value.clientWidth,height:r.value.clientHeight}):(A.width=r.value.clientWidth,A.height=r.value.clientHeight)}function a(){rr({canvas:r.value}),window.addEventListener("resize",s),s()}function o(_){const w=r.value.getBoundingClientRect();return{x:(_.clientX-w.left)*r.value.width/w.width,y:(_.clientY-w.top)*r.value.height/w.height}}function d(_){const w=o(_);n(w.x/r.value.width*2-1,w.y/r.value.height*-2+1)}function g(){n(-1e5,-1e5)}function O(){r.value.transferControlToOffscreen?l():a(),g(),window.addEventListener("mousemove",d),window.addEventListener("mouseout",g),window.addEventListener("mouseleave",g)}const L=()=>{r.value=null,i&&i.terminate()};return sn(()=>{O()}),cn(()=>{L(),window.removeEventListener("resize",s),window.removeEventListener("mousemove",d),window.removeEventListener("mouseout",g),window.removeEventListener("mouseleave",g)}),(_,w)=>(C(),z("canvas",{ref_key:"canvasRef",ref:r},null,512))}},ar=Object.freeze(Object.defineProperty({__proto__:null,default:tr},Symbol.toStringTag,{value:"Module"}));export{Un as R,ee as _,sr as g,qn as w};
