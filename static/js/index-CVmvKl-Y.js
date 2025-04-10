const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/Texture-CyWsguo1.js","static/js/three-DQzz9mVt.js","static/js/OrbitControls-xyzZVKfS.js","static/js/highlight-DQLS5q9Z.js","static/css/Texture-0kP2CA5y.css","static/js/PrimitivesGeometry-Dblpd0It.js"])))=>i.map(i=>d[i]);
import{r as j,c as G,e as K,b as T,d as x,F as oe,f as le,u as ce,n as de,t as $,g as ue,h as me,i as pe,j as he,k as ge,l as fe,m as ve,p as Ee,q as _e,s as we,v as Re,w as Le,x as ye,y as xe,z as Te,A as be,B as Me,C as He,D as Se,E as Pe,G as Ce,H as Ie,I as Ge,J as ke,K as Be,L as je,M as Ae,N as De,O as Oe,P as ze,Q as qe,R as Ue,S as Fe,T as Ve,U as We,V as $e,W as Ne,X as Ye,Y as q,Z as ie,_ as Je,$ as Xe,a0 as re,a1 as Ke,a2 as B,a3 as Qe,a4 as Ze,a5 as er,a6 as rr,o as nr,a as tr}from"./highlight-DQLS5q9Z.js";import{aa as ar,ab as V,ac as Y,ad as W,a7 as or,ae as ne,af as ir,W as sr,P as lr,b as cr,c as dr,D as ur,z as mr,M as pr}from"./three-DQzz9mVt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}})();const hr="modulepreload",gr=function(e){return"/threejs-examples-vue3/"+e},te={},L=function(s,a,l){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(a.map(f=>{if(f=gr(f),f in te)return;te[f]=!0;const R=f.endsWith(".css"),b=R?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${b}`))return;const d=document.createElement("link");if(d.rel=R?"stylesheet":hr,R||(d.as="script"),d.crossOrigin="",d.href=f,i&&d.setAttribute("nonce",i),document.head.appendChild(d),R)return new Promise((E,p)=>{d.addEventListener("load",E),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${f}`)))})}))}function c(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return r.then(n=>{for(const i of n||[])i.status==="rejected"&&c(i.reason);return s().catch(c)})},fr="/threejs-examples-vue3/github.svg",vr=[{title:"三个基础盒子",value:"ThreeBox",type:"demo"},{title:"几何体汇总",value:"PrimitivesGeometry",type:"demo"},{title:"轨道控制器",value:"OrbitControls",type:"demo"},{title:"lil-gui调试器",value:"GUI",type:"demo"},{title:"纹理贴图",value:"Texture",type:"demo"},{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],Q=(e,s)=>{const a=e.__vccOpts||e;for(const[l,r]of s)a[l]=r;return a},Er={key:0,id:"panel"},_r=["onClick"],wr={__name:"Panel",emits:["componentChange"],setup(e,{emit:s}){const a=s,l=j(""),r=i=>{i.type==="demo"?(l.value=i.value,a("componentChange",i)):c(i.value)},c=i=>{window.open(`https://wupeng0725.github.io/${i}/`,"_blank")},n=j(!0);return(i,f)=>n.value?(T(),G("div",Er,[f[0]||(f[0]=x("div",{class:"panel-header"},[x("span",{class:"title"},"Threejs 样例"),x("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[x("img",{src:fr,alt:"Github源码"})])],-1)),(T(!0),G(oe,null,le(ce(vr),(R,b)=>(T(),G("div",{class:de(["panel-item",R.value===l.value&&"selected"]),key:R.value,onClick:d=>r(R)},$(b+1)+" - "+$(R.title),11,_r))),128))])):K("",!0)}},Rr=Q(wr,[["__scopeId","data-v-89821aa2"]]),Lr={},yr={class:"empty"};function xr(e,s){return T(),G("div",yr," Select an example from the sidebar ")}const Tr=Q(Lr,[["render",xr],["__scopeId","data-v-0f616578"]]);var J,ae;function br(){if(ae)return J;ae=1;var e=ue();return e.registerLanguage("xml",me()),e.registerLanguage("bash",pe()),e.registerLanguage("c",he()),e.registerLanguage("cpp",ge()),e.registerLanguage("csharp",fe()),e.registerLanguage("css",ve()),e.registerLanguage("markdown",Ee()),e.registerLanguage("diff",_e()),e.registerLanguage("ruby",we()),e.registerLanguage("go",Re()),e.registerLanguage("graphql",Le()),e.registerLanguage("ini",ye()),e.registerLanguage("java",xe()),e.registerLanguage("javascript",Te()),e.registerLanguage("json",be()),e.registerLanguage("kotlin",Me()),e.registerLanguage("less",He()),e.registerLanguage("lua",Se()),e.registerLanguage("makefile",Pe()),e.registerLanguage("perl",Ce()),e.registerLanguage("objectivec",Ie()),e.registerLanguage("php",Ge()),e.registerLanguage("php-template",ke()),e.registerLanguage("plaintext",Be()),e.registerLanguage("python",je()),e.registerLanguage("python-repl",Ae()),e.registerLanguage("r",De()),e.registerLanguage("rust",Oe()),e.registerLanguage("scss",ze()),e.registerLanguage("shell",qe()),e.registerLanguage("sql",Ue()),e.registerLanguage("swift",Fe()),e.registerLanguage("yaml",Ve()),e.registerLanguage("typescript",We()),e.registerLanguage("vbnet",$e()),e.registerLanguage("wasm",Ne()),e.HighlightJS=e,e.default=e,J=e,J}br();const Mr={class:"model-header"},Hr={class:"model-title"},Sr={class:"model-tag-box"},Pr={class:"model-content"},Cr={__name:"CodeModel",props:{modelData:Object},setup(e){const s=e,a=j(!1),l=j("复制原文"),r=async()=>{try{await navigator.clipboard.writeText(s.modelData.code),l.value="复制成功"}catch{l.value="复制失败"}setTimeout(()=>{l.value="复制原文"},1500)},c=j(null),n=()=>{var i;(i=c.value)==null||i.requestFullscreen()};return(i,f)=>{const R=Ye("highlightjs");return T(),G(oe,null,[(T(),q(Je,{to:"body"},[a.value?(T(),G("div",{key:0,class:"modal",ref_key:"modelRef",ref:c},[x("div",Mr,[x("div",Hr,"源码："+$(e.modelData.title),1),x("div",Sr,[x("span",{class:"model-tag-copy",onClick:r},$(l.value),1),x("span",{class:"model-tag-fullscreen",onClick:n},"全屏"),x("span",{class:"model-tag-close",onClick:f[0]||(f[0]=b=>a.value=!1)},"×")])]),x("div",Pr,[ie(R,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):K("",!0)])),x("span",{onClick:f[1]||(f[1]=b=>a.value=!0),class:"checkcode"},"查看源码")],64)}}},Ir=Q(Cr,[["__scopeId","data-v-103f8c73"]]),Gr=async e=>{try{const s=Object.assign({"/src/views/GUI.vue":()=>L(()=>import("./ThreeBox-Dg2u5zpM.js").then(r=>r.G),[]),"/src/views/OrbitControls.vue":()=>L(()=>Promise.resolve().then(()=>qr),void 0),"/src/views/PointLight.vue":()=>L(()=>Promise.resolve().then(()=>Fr),void 0),"/src/views/PrimitivesGeometry.vue":()=>L(()=>import("./ThreeBox-Dg2u5zpM.js").then(r=>r.P),[]),"/src/views/SpotLight.vue":()=>L(()=>Promise.resolve().then(()=>Wr),void 0),"/src/views/Texture.vue":()=>L(()=>Promise.resolve().then(()=>Nr),void 0),"/src/views/ThreeBox.vue":()=>L(()=>import("./ThreeBox-Dg2u5zpM.js").then(r=>r.T),[])}),a=`/src/views/${e}.vue`;if(!s[a])throw new Error(`路径不存在: ${a}`);return(await s[a]()).default}catch{return""}};function kr(e){return"/threejs-examples-vue3/"+e.replace(/^\//,"")}class Br extends ar{constructor(s){super(s),this.type=V}parse(s){const n=function(t,u){switch(t){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(u||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(u||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(u||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(u||""))}},b=`
`,d=function(t,u,h){u=u||1024;let _=t.pos,v=-1,o=0,w="",m=String.fromCharCode.apply(null,new Uint16Array(t.subarray(_,_+128)));for(;0>(v=m.indexOf(b))&&o<u&&_<t.byteLength;)w+=m,o+=m.length,_+=128,m+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(_,_+128)));return-1<v?(t.pos+=o+v+1,w+m.slice(0,v)):!1},E=function(t){const u=/^#\?(\S+)/,h=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,g=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,_=/^\s*FORMAT=(\S+)\s*$/,v=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,o={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let w,m;for((t.pos>=t.byteLength||!(w=d(t)))&&n(1,"no header found"),(m=w.match(u))||n(3,"bad initial token"),o.valid|=1,o.programtype=m[1],o.string+=w+`
`;w=d(t),w!==!1;){if(o.string+=w+`
`,w.charAt(0)==="#"){o.comments+=w+`
`;continue}if((m=w.match(h))&&(o.gamma=parseFloat(m[1])),(m=w.match(g))&&(o.exposure=parseFloat(m[1])),(m=w.match(_))&&(o.valid|=2,o.format=m[1]),(m=w.match(v))&&(o.valid|=4,o.height=parseInt(m[1],10),o.width=parseInt(m[2],10)),o.valid&2&&o.valid&4)break}return o.valid&2||n(3,"missing format specifier"),o.valid&4||n(3,"missing image size specifier"),o},p=function(t,u,h){const g=u;if(g<8||g>32767||t[0]!==2||t[1]!==2||t[2]&128)return new Uint8Array(t);g!==(t[2]<<8|t[3])&&n(3,"wrong scanline width");const _=new Uint8Array(4*u*h);_.length||n(4,"unable to allocate buffer space");let v=0,o=0;const w=4*g,m=new Uint8Array(4),O=new Uint8Array(w);let Z=h;for(;Z>0&&o<t.byteLength;){o+4>t.byteLength&&n(1),m[0]=t[o++],m[1]=t[o++],m[2]=t[o++],m[3]=t[o++],(m[0]!=2||m[1]!=2||(m[2]<<8|m[3])!=g)&&n(3,"bad rgbe scanline format");let z=0,P;for(;z<w&&o<t.byteLength;){P=t[o++];const C=P>128;if(C&&(P-=128),(P===0||z+P>w)&&n(3,"bad scanline data"),C){const I=t[o++];for(let ee=0;ee<P;ee++)O[z++]=I}else O.set(t.subarray(o,o+P),z),z+=P,o+=P}const se=g;for(let C=0;C<se;C++){let I=0;_[v]=O[C+I],I+=g,_[v+1]=O[C+I],I+=g,_[v+2]=O[C+I],I+=g,_[v+3]=O[C+I],v+=4}Z--}return _},y=function(t,u,h,g){const _=t[u+3],v=Math.pow(2,_-128)/255;h[g+0]=t[u+0]*v,h[g+1]=t[u+1]*v,h[g+2]=t[u+2]*v,h[g+3]=1},M=function(t,u,h,g){const _=t[u+3],v=Math.pow(2,_-128)/255;h[g+0]=W.toHalfFloat(Math.min(t[u+0]*v,65504)),h[g+1]=W.toHalfFloat(Math.min(t[u+1]*v,65504)),h[g+2]=W.toHalfFloat(Math.min(t[u+2]*v,65504)),h[g+3]=W.toHalfFloat(1)},H=new Uint8Array(s);H.pos=0;const S=E(H),U=S.width,F=S.height,A=p(H.subarray(H.pos),U,F);let k,N,D;switch(this.type){case Y:D=A.length/4;const t=new Float32Array(D*4);for(let h=0;h<D;h++)y(A,h*4,t,h*4);k=t,N=Y;break;case V:D=A.length/4;const u=new Uint16Array(D*4);for(let h=0;h<D;h++)M(A,h*4,u,h*4);k=u,N=V;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:U,height:F,data:k,header:S.string,gamma:S.gamma,exposure:S.exposure,type:N}}setDataType(s){return this.type=s,this}load(s,a,l,r){function c(n,i){switch(n.type){case Y:case V:n.colorSpace=or,n.minFilter=ne,n.magFilter=ne,n.generateMipmaps=!1,n.flipY=!0;break}a&&a(n,i)}return super.load(s,c,l,r)}}const X={},jr=e=>{const s=new ir,a=new Br;return Promise.all(e.map(l=>X[l]?Promise.resolve():new Promise((r,c)=>{(l.includes("hdr")?a:s).load(kr(l),i=>{X[l]=i,r()},void 0,i=>c(i))})))},Qr=e=>X[e],Ar={id:"wrapper"},Dr={id:"viewer"},Or={__name:"App",setup(e){const s=B(()=>L(()=>import("./Texture-CyWsguo1.js").then(p=>p.P),__vite__mapDeps([0,1,2,3,4]))),a=B(()=>L(()=>import("./Texture-CyWsguo1.js").then(p=>p.S),__vite__mapDeps([0,1,2,3,4]))),l=B(()=>L(()=>Promise.resolve().then(()=>Jr),void 0)),r=B(()=>L(()=>import("./OrbitControls-xyzZVKfS.js").then(p=>p.a),__vite__mapDeps([2,1,3]))),c=B(()=>L(()=>import("./PrimitivesGeometry-Dblpd0It.js"),__vite__mapDeps([5,1,3]))),n=B(()=>L(()=>import("./Texture-CyWsguo1.js").then(p=>p.G),__vite__mapDeps([0,1,2,3,4]))),i=B(()=>L(()=>import("./Texture-CyWsguo1.js").then(p=>p.T),__vite__mapDeps([0,1,2,3,4])));jr(["/texture/door/color.jpg","/texture/door/ambientOcclusion.jpg","/texture/door/alpha.jpg","/texture/door/specular.jpg"]).catch(p=>{});const R=Xe({code:"",title:""}),b={PointLight:s,SpotLight:a,ThreeBox:l,PrimitivesGeometry:c,OrbitControls:r,GUI:n,Texture:i},d=j(""),E=async({value:p,title:y})=>{d.value=p,R.code=await Gr(p),R.title=y};return(p,y)=>(T(),G("div",Ar,[ie(Rr,{onComponentChange:E}),x("div",Dr,[d.value?(T(),q(Ze,{key:0},{fallback:re(()=>y[0]||(y[0]=[Qe(" Loading... ")])),default:re(()=>[(T(),q(Ke(b[d.value])))]),_:1})):(T(),q(Tr,{key:1})),d.value?(T(),q(Ir,{key:2,modelData:R},null,8,["modelData"])):K("",!0)])]))}};er(Or).use(rr).mount("#app");const zr=`<template>\r
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
<style lang="scss" scoped></style>`,qr=Object.freeze(Object.defineProperty({__proto__:null,default:zr},Symbol.toStringTag,{value:"Module"})),Ur=`<template>\r
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
  renderer = new THREE.WebGLRenderer()\r
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
</style>`,Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Ur},Symbol.toStringTag,{value:"Module"})),Vr=`<template>\r
  <div id="container" ref="containerRef"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted, onBeforeUnmount, ref } from 'vue'\r
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
     * 目标：聚光灯\r
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
  // camera.position.z = 5\r
  // camera.position.y = 2\r
  // camera.position.x = 2\r
  camera.position.set(0, 0, 10)\r
  // 设置相机看向位置（默认原点）\r
  camera.lookAt(0, 0, 0)\r
  // 创建渲染器\r
  renderer = new THREE.WebGLRenderer()\r
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
  // 渲染函数\r
  function animate() {\r
    animationId = requestAnimationFrame(animate)\r
    controls.update()\r
    // 渲染\r
    renderer.render(scene, camera)\r
  }\r
\r
  animate()\r
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
  // 聚光灯\r
  const spotLight = new THREE.SpotLight(0xffffff, 0.5)\r
  spotLight.position.set(5, 5, 5)\r
  spotLight.castShadow = true\r
  // 光照强度\r
  spotLight.intensity = 2\r
\r
  // 设置阴影模糊度\r
  spotLight.shadow.radius = 20\r
  // 设置阴影的分辨率\r
  spotLight.shadow.mapSize.set(1024, 1024)\r
\r
  // 设置透视相机的属性\r
  // spotLight.shadow.camera.near = 1\r
  // spotLight.shadow.camera.far = 1000\r
  // spotLight.shadow.camera.fov = 15\r
\r
  // 设置光源目标\r
  spotLight.target = sphere\r
  // scene.add(spotLight.target)\r
  // 光线照射范围的角度。默认值为 Math.PI/3。\r
  spotLight.angle = Math.PI / 6\r
  // 光源照射的最大距离。默认值为 0（无限远）。\r
  spotLight.distance = 0\r
  // 聚光锥的半影衰减百分比。默认值为 0。\r
  spotLight.penumbra = 0\r
  // 沿着光照距离的衰减量\r
  spotLight.decay = 0\r
\r
  scene.add(spotLight)\r
\r
  gui.add(sphere.position, "x").min(-5).max(5).step(0.1)\r
  gui.add(spotLight, "angle").min(0).max(Math.PI / 2).step(0.01)\r
  gui.add(spotLight, "distance").min(0).max(10).step(0.01)\r
  gui.add(spotLight, "penumbra").min(0).max(1).step(0.01)\r
  gui.add(spotLight, "decay").min(0).max(5).step(0.01)\r
\r
  const shadowHelper = new THREE.CameraHelper(spotLight.shadow.camera)\r
  scene.add(shadowHelper)\r
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
  gui.destroy()\r
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
<style></style>`,Wr=Object.freeze(Object.defineProperty({__proto__:null,default:Vr},Symbol.toStringTag,{value:"Module"})),$r=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
  <div v-if="isHDRLoaded" class="loading-text">HDR贴图加载较为缓慢，请稍等片刻</div>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
// 导入轨道控制器\r
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'\r
// 导入lil-gui\r
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'\r
// 导入hdr加载器\r
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'\r
import { ref, onMounted, onBeforeUnmount } from 'vue'\r
import { getTexture } from '@/utils/textureLoader'\r
import { withBase } from '@/utils'\r
\r
const canvasRef = ref(null)\r
const isHDRLoaded = ref(true)\r
\r
let renderer = null, camera = null, scene = null, animationId = null,\r
  controls = null, gui = null\r
\r
// 释放资源\r
class ResourceTracker {\r
\r
  constructor() {\r
\r
    this.resources = new Set()\r
\r
  }\r
  track(resource) {\r
\r
    if (!resource) {\r
\r
      return resource\r
\r
    }\r
\r
    // handle children and when material is an array of materials or\r
    // uniform is array of textures\r
    if (Array.isArray(resource)) {\r
\r
      resource.forEach(resource => this.track(resource))\r
      return resource\r
\r
    }\r
\r
    if (resource.dispose || resource instanceof THREE.Object3D) {\r
\r
      this.resources.add(resource)\r
\r
    }\r
\r
    if (resource instanceof THREE.Object3D) {\r
\r
      this.track(resource.geometry)\r
      this.track(resource.material)\r
      this.track(resource.children)\r
\r
    } else if (resource instanceof THREE.Material) {\r
\r
      // We have to check if there are any textures on the material\r
      for (const value of Object.values(resource)) {\r
\r
        if (value instanceof THREE.Texture) {\r
\r
          this.track(value)\r
\r
        }\r
\r
      }\r
\r
      // We also have to check if any uniforms reference textures or arrays of textures\r
      if (resource.uniforms) {\r
\r
        for (const value of Object.values(resource.uniforms)) {\r
\r
          if (value) {\r
\r
            const uniformValue = value.value\r
            if (uniformValue instanceof THREE.Texture ||\r
              Array.isArray(uniformValue)) {\r
\r
              this.track(uniformValue)\r
\r
            }\r
\r
          }\r
\r
        }\r
\r
      }\r
\r
    }\r
\r
    return resource\r
\r
  }\r
  untrack(resource) {\r
\r
    this.resources.delete(resource)\r
\r
  }\r
  dispose() {\r
\r
    for (const resource of this.resources) {\r
\r
      if (resource instanceof THREE.Object3D) {\r
\r
        if (resource.parent) {\r
\r
          resource.parent.remove(resource)\r
\r
        }\r
\r
      }\r
\r
      if (resource.dispose) {\r
\r
        resource.dispose()\r
\r
      }\r
\r
    }\r
\r
    this.resources.clear()\r
\r
  }\r
\r
}\r
const resTracker = new ResourceTracker()\r
\r
function main() {\r
  // 添加渲染器\r
  renderer = new THREE.WebGLRenderer({\r
    canvas: canvasRef.value,\r
    antialias: true // 抗锯齿\r
  })\r
  // 创建透视相机\r
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)\r
  camera.position.set(1, 2, 4)\r
  // 创建场景\r
  scene = new THREE.Scene()\r
  {\r
    // 添加轨道控制器\r
    controls = new OrbitControls(camera, renderer.domElement)\r
    controls.enableDamping = true // 启用阻尼（惯性）效果\r
    const axesHelper = new THREE.AxesHelper(5)\r
    scene.add(axesHelper) // 添加坐标轴辅助器\r
  }\r
  {\r
    const track = resTracker.track.bind(resTracker)\r
\r
    // 创建纹理加载器\r
    // const textureLoader = new THREE.TextureLoader()\r
    // 加载纹理图片\r
    // const texture = track(textureLoader.load(withBase('/texture/door/color.jpg')))\r
    const texture = track(getTexture('/texture/door/color.jpg'))\r
    texture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间为sRGB\r
    // 加载ao贴图\r
    // const aoMap = track(textureLoader.load(withBase('/texture/door/ambientOcclusion.jpg')))\r
    const aoMap = track(getTexture('/texture/door/ambientOcclusion.jpg'))\r
    // 加载透明度贴图\r
    // const alphaMap = track(textureLoader.load(withBase('/texture/door/alpha.jpg')))\r
    const alphaMap = track(getTexture('/texture/door/alpha.jpg'))\r
    // 加载光照贴图\r
    // const lightMap = track(textureLoader.load(withBase('/texture/colors.png')))\r
    // 加载高光贴图\r
    // const specularMap = track(textureLoader.load(withBase('/texture/door/specular.jpg')))\r
    const specularMap = track(getTexture('/texture/door/specular.jpg'))\r
\r
    const plane = track(new THREE.PlaneGeometry(1, 1))\r
    const material = track(new THREE.MeshBasicMaterial({\r
      color: 0xffffff,\r
      map: texture, // 设置纹理贴图\r
      aoMap: aoMap, // 设置ao贴图\r
      aoMapIntensity: 1, // 设置ao贴图强度\r
      alphaMap: alphaMap, // 设置透明度贴图\r
      transparent: true, // 开启透明度\r
      // lightMap: lightMap, // 设置光照贴图\r
      // lightMapIntensity: 1, // 设置光照贴图强度\r
      specularMap: specularMap, // 设置高光贴图\r
      reflectivity: 1, // 环境贴图对表面的影响程度\r
    }))\r
    const mesh = track(new THREE.Mesh(plane, material))\r
    scene.add(mesh)\r
\r
    // RGBELoader 加载hdr贴图\r
    const rgbeLoader = new RGBELoader()\r
    track(rgbeLoader.load(withBase('/texture/Alex_Hart-Nature_Lab_Bones_2k.hdr'), (envMap) => {\r
      // 设置球形映射\r
      envMap.mapping = THREE.EquirectangularReflectionMapping\r
      // 设置背景贴图\r
      scene.background = envMap\r
      // 设置环境贴图-若该值不为null，则该纹理贴图将会被设为场景中所有物理材质的环境贴图\r
      // 可以模拟环境光\r
      scene.environment = envMap\r
      // 设置plane的环境贴图\r
      material.envMap = envMap\r
      isHDRLoaded.value = false // hdr贴图加载完成\r
    }))\r
\r
    gui = new GUI()\r
    gui.add(material, 'aoMapIntensity').min(0).max(1).name('ao贴图强度')\r
    gui.add(material, 'reflectivity').min(0).max(1).name('反射强度')\r
    gui.add(material, 'transparent').name('开启透明度').onChange(() => {\r
      material.needsUpdate = true // 更新材质\r
    })\r
    gui.add(texture, 'colorSpace', {\r
      sRGB: THREE.SRGBColorSpace,\r
      Linear: THREE.LinearSRGBColorSpace,\r
    }).onChange(() => {\r
      texture.needsUpdate = true\r
    })\r
  }\r
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
// 清理资源\r
const cleanUp = () => {\r
  // 1. 停止动画循环\r
  if (animationId) cancelAnimationFrame(animationId)\r
\r
  // 2. 释放Three.js资源\r
  resTracker.dispose() // 释放资源\r
  // scene.traverse(child => {\r
  //   if (child.isMesh) {\r
  //     child.geometry.dispose()\r
  //     child.material.dispose()\r
  //     // texture.dispose()   // 释放纹理（如果有）\r
  //   }\r
  // })\r
\r
  // 3. 销毁渲染器\r
  renderer.dispose()\r
  renderer.forceContextLoss()\r
  renderer.domElement = null\r
  renderer = null\r
\r
  // 4. 销毁GUI和控制器\r
  controls.dispose() // 释放控制器资源\r
  controls = null\r
  gui.destroy() // 销毁GUI实例\r
  gui = null\r
\r
  // 4. 清理引用\r
  scene = null\r
  camera = null\r
  canvasRef.value = null\r
}\r
function animate() {\r
\r
  if (resizeRendererToDisplaySize(renderer)) {\r
    const canvas = renderer.domElement\r
    camera.aspect = canvas.clientWidth / canvas.clientHeight\r
    camera.updateProjectionMatrix()\r
  }\r
  // 将场景和摄像机传递给渲染器来渲染出整个场景\r
  renderer.render(scene, camera)\r
  animationId = requestAnimationFrame(animate)\r
}\r
onMounted(() => {\r
  main()\r
  requestAnimationFrame(animate)\r
})\r
\r
onBeforeUnmount(() => {\r
  cleanUp()\r
})\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.loading-text {\r
  position: fixed;\r
  top: 0;\r
  font-size: 20px;\r
  color: #fff;\r
  text-align: center;\r
  z-index: 9998; /* 确保文本在其他元素之上 */\r
}\r
</style>`,Nr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Yr={__name:"ThreeBox",setup(e){const s=j(null);let a=null,l=null,r=null,c=null,n=[];function i(){a=new sr({canvas:s.value,antialias:!0});const d=75,E=window.innerWidth/window.innerHeight,p=.1,y=1e3;l=new lr(d,E,p,y),l.position.z=3,r=new cr;const M=new dr(1,1,1);function H(S,U,F){const A=new mr({color:U}),k=new pr(S,A);return r.add(k),k.position.x=F,k}n=[H(M,4500104,0),H(M,8930474,-2),H(M,11176004,2)];{const S=new ur(16777215,3);S.position.set(-1,2,4),r.add(S)}}function f(d){const E=d.domElement,p=window.devicePixelRatio,y=Math.floor(E.clientWidth*p),M=Math.floor(E.clientHeight*p),H=E.width!==y||E.height!==M;return H&&d.setSize(y,M,!1),H}const R=()=>{c&&cancelAnimationFrame(c),r.traverse(d=>{d.isMesh&&(d.geometry.dispose(),d.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement=null,a=null,r=null,l=null,n=[],s.value=null};function b(d){if(d*=.001,n.forEach((E,p)=>{const y=1+p*.1,M=d*y;E.rotation.x=M,E.rotation.y=M}),f(a)){const E=a.domElement;l.aspect=E.clientWidth/E.clientHeight,l.updateProjectionMatrix()}a.render(r,l),c=requestAnimationFrame(b)}return nr(()=>{i(),requestAnimationFrame(b)}),tr(()=>{R()}),(d,E)=>(T(),G("canvas",{ref_key:"canvasRef",ref:s},null,512))}},Jr=Object.freeze(Object.defineProperty({__proto__:null,default:Yr},Symbol.toStringTag,{value:"Module"}));export{Br as R,Q as _,Qr as g,kr as w};
