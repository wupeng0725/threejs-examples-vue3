const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/GUI-Bl8gqrHd.js","static/js/three-CHQxvHK2.js","static/js/OrbitControls-1Wg6WgN6.js","static/js/highlight-CPa5cjrO.js","static/js/PrimitivesGeometry-BuOtU6dV.js","static/js/Texture-QNA4kC9J.js"])))=>i.map(i=>d[i]);
import{r as _,c as w,d as b,b as f,e as g,F as q,f as z,u as A,n as U,t as T,g as k,h as D,i as W,j as $,k as F,l as V,m as N,p as J,q as K,s as X,v as Y,w as Q,x as Z,y as ee,z as ne,A as re,B as te,C as ae,D as oe,E as ie,G as se,H as le,I as ce,J as de,K as ue,L as me,M as pe,N as he,O as ge,P as fe,Q as ve,R as we,S as Ee,T as _e,U as Re,V as Le,W as ye,X as xe,Y as y,Z as j,_ as Te,$ as He,a0 as S,a1 as Me,a2 as E,a3 as be,a4 as Pe,a5 as Se,a6 as Ce,o as Ie,a as qe}from"./highlight-CPa5cjrO.js";import{W as je,P as Ge,S as Oe,l as Be,k as ze,U as Ae,e as Ue}from"./three-CHQxvHK2.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const ke="modulepreload",De=function(e){return"/threejs-examples-vue3/"+e},C={},m=function(c,r,l){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(r.map(d=>{if(d=De(d),d in C)return;C[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":ke,u||(s.as="script"),s.crossOrigin="",s.href=d,a&&s.setAttribute("nonce",a),document.head.appendChild(s),u)return new Promise((t,h)=>{s.addEventListener("load",t),s.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return n.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return c().catch(o)})},We="/threejs-examples-vue3/github.svg",$e=[{title:"三个基础盒子",value:"ThreeBox",type:"demo"},{title:"几何体汇总",value:"PrimitivesGeometry",type:"demo"},{title:"轨道控制器",value:"OrbitControls",type:"demo"},{title:"lil-gui调试器",value:"GUI",type:"demo"},{title:"纹理贴图",value:"Texture",type:"demo"},{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],P=(e,c)=>{const r=e.__vccOpts||e;for(const[l,n]of c)r[l]=n;return r},Fe={key:0,id:"panel"},Ve=["onClick"],Ne={__name:"Panel",emits:["componentChange"],setup(e,{emit:c}){const r=c,l=_(""),n=a=>{a.type==="demo"?(l.value=a.value,r("componentChange",a)):o(a.value)},o=a=>{window.open(`https://wupeng0725.github.io/${a}/`,"_blank")},i=_(!0);return(a,d)=>i.value?(f(),w("div",Fe,[d[0]||(d[0]=g("div",{class:"panel-header"},[g("span",{class:"title"},"Threejs 样例"),g("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[g("img",{src:We,alt:"Github源码"})])],-1)),(f(!0),w(q,null,z(A($e),(u,p)=>(f(),w("div",{class:U(["panel-item",u.value===l.value&&"selected"]),key:u.value,onClick:s=>n(u)},T(p+1)+" - "+T(u.title),11,Ve))),128))])):b("",!0)}},Je=P(Ne,[["__scopeId","data-v-89821aa2"]]),Ke={},Xe={class:"empty"};function Ye(e,c){return f(),w("div",Xe," Select an example from the sidebar ")}const Qe=P(Ke,[["render",Ye],["__scopeId","data-v-0f616578"]]);var M,I;function Ze(){if(I)return M;I=1;var e=k();return e.registerLanguage("xml",D()),e.registerLanguage("bash",W()),e.registerLanguage("c",$()),e.registerLanguage("cpp",F()),e.registerLanguage("csharp",V()),e.registerLanguage("css",N()),e.registerLanguage("markdown",J()),e.registerLanguage("diff",K()),e.registerLanguage("ruby",X()),e.registerLanguage("go",Y()),e.registerLanguage("graphql",Q()),e.registerLanguage("ini",Z()),e.registerLanguage("java",ee()),e.registerLanguage("javascript",ne()),e.registerLanguage("json",re()),e.registerLanguage("kotlin",te()),e.registerLanguage("less",ae()),e.registerLanguage("lua",oe()),e.registerLanguage("makefile",ie()),e.registerLanguage("perl",se()),e.registerLanguage("objectivec",le()),e.registerLanguage("php",ce()),e.registerLanguage("php-template",de()),e.registerLanguage("plaintext",ue()),e.registerLanguage("python",me()),e.registerLanguage("python-repl",pe()),e.registerLanguage("r",he()),e.registerLanguage("rust",ge()),e.registerLanguage("scss",fe()),e.registerLanguage("shell",ve()),e.registerLanguage("sql",we()),e.registerLanguage("swift",Ee()),e.registerLanguage("yaml",_e()),e.registerLanguage("typescript",Re()),e.registerLanguage("vbnet",Le()),e.registerLanguage("wasm",ye()),e.HighlightJS=e,e.default=e,M=e,M}Ze();const en={class:"model-header"},nn={class:"model-title"},rn={class:"model-tag-box"},tn={class:"model-content"},an={__name:"CodeModel",props:{modelData:Object},setup(e){const c=e,r=_(!1),l=_("复制原文"),n=async()=>{try{await navigator.clipboard.writeText(c.modelData.code),l.value="复制成功"}catch{l.value="复制失败"}setTimeout(()=>{l.value="复制原文"},1500)},o=_(null),i=()=>{var a;(a=o.value)==null||a.requestFullscreen()};return(a,d)=>{const u=xe("highlightjs");return f(),w(q,null,[(f(),y(Te,{to:"body"},[r.value?(f(),w("div",{key:0,class:"modal",ref_key:"modelRef",ref:o},[g("div",en,[g("div",nn,"源码："+T(e.modelData.title),1),g("div",rn,[g("span",{class:"model-tag-copy",onClick:n},T(l.value),1),g("span",{class:"model-tag-fullscreen",onClick:i},"全屏"),g("span",{class:"model-tag-close",onClick:d[0]||(d[0]=p=>r.value=!1)},"×")])]),g("div",tn,[j(u,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):b("",!0)])),g("span",{onClick:d[1]||(d[1]=p=>r.value=!0),class:"checkcode"},"查看源码")],64)}}},on=P(an,[["__scopeId","data-v-103f8c73"]]),sn=async e=>{try{const c=Object.assign({"/src/views/GUI.vue":()=>m(()=>import("./ThreeBox-C-YB9BlA.js").then(n=>n.G),[]),"/src/views/OrbitControls.vue":()=>m(()=>Promise.resolve().then(()=>mn),void 0),"/src/views/PointLight.vue":()=>m(()=>Promise.resolve().then(()=>hn),void 0),"/src/views/PrimitivesGeometry.vue":()=>m(()=>import("./ThreeBox-C-YB9BlA.js").then(n=>n.P),[]),"/src/views/SpotLight.vue":()=>m(()=>Promise.resolve().then(()=>fn),void 0),"/src/views/Texture.vue":()=>m(()=>Promise.resolve().then(()=>wn),void 0),"/src/views/ThreeBox.vue":()=>m(()=>import("./ThreeBox-C-YB9BlA.js").then(n=>n.T),[])}),r=`/src/views/${e}.vue`;if(!c[r])throw new Error(`路径不存在: ${r}`);return(await c[r]()).default}catch{return""}};function yn(e){return"/threejs-examples-vue3/"+e.replace(/^\//,"")}const ln={id:"wrapper"},cn={id:"viewer"},dn={__name:"App",setup(e){const c=E(()=>m(()=>import("./GUI-Bl8gqrHd.js").then(t=>t.P),__vite__mapDeps([0,1,2,3]))),r=E(()=>m(()=>import("./GUI-Bl8gqrHd.js").then(t=>t.S),__vite__mapDeps([0,1,2,3]))),l=E(()=>m(()=>Promise.resolve().then(()=>_n),void 0)),n=E(()=>m(()=>import("./OrbitControls-1Wg6WgN6.js").then(t=>t.a),__vite__mapDeps([2,1,3]))),o=E(()=>m(()=>import("./PrimitivesGeometry-BuOtU6dV.js"),__vite__mapDeps([4,1,3]))),i=E(()=>m(()=>import("./GUI-Bl8gqrHd.js").then(t=>t.G),__vite__mapDeps([0,1,2,3]))),a=E(()=>m(()=>import("./Texture-QNA4kC9J.js"),__vite__mapDeps([5,1,2,3,0]))),d=He({code:"",title:""}),u={PointLight:c,SpotLight:r,ThreeBox:l,PrimitivesGeometry:o,OrbitControls:n,GUI:i,Texture:a},p=_(""),s=async({value:t,title:h})=>{p.value=t,d.code=await sn(t),d.title=h};return(t,h)=>(f(),w("div",ln,[j(Je,{onComponentChange:s}),g("div",cn,[p.value?(f(),y(Pe,{key:0},{fallback:S(()=>h[0]||(h[0]=[be(" Loading... ")])),default:S(()=>[(f(),y(Me(u[p.value])))]),_:1})):(f(),y(Qe,{key:1})),p.value?(f(),y(on,{key:2,modelData:d},null,8,["modelData"])):b("",!0)])]))}};Se(dn).use(Ce).mount("#app");const un=`<template>\r
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
<style lang="scss" scoped></style>`,mn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),pn=`<template>\r
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
</style>`,hn=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"})),gn=`<template>\r
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
<style></style>`,fn=Object.freeze(Object.defineProperty({__proto__:null,default:gn},Symbol.toStringTag,{value:"Module"})),vn=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
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
import { withBase } from '../utils'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null,\r
  controls = null, gui = null, rgbeLoader = null\r
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
    // 创建纹理加载器\r
    const textureLoader = new THREE.TextureLoader()\r
    // 加载纹理图片\r
    const texture = textureLoader.load(withBase('/texture/door/color.jpg'))\r
    texture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间为sRGB\r
    // 加载ao贴图\r
    const aoMap = textureLoader.load(withBase('/texture/door/ambientOcclusion.jpg'))\r
    // 加载透明度贴图\r
    const alphaMap = textureLoader.load(withBase('/texture/door/alpha.jpg'))\r
    // 加载光照贴图\r
    // const lightMap = textureLoader.load(withBase('/texture/colors.png'))\r
    // 加载高光贴图\r
    const specularMap = textureLoader.load(withBase('/texture/door/specular.jpg'))\r
\r
    const plane = new THREE.PlaneGeometry(1, 1)\r
    const material = new THREE.MeshBasicMaterial({\r
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
    })\r
    const mesh = new THREE.Mesh(plane, material)\r
    scene.add(mesh)\r
\r
    // RGBELoader 加载hdr贴图\r
    rgbeLoader = new RGBELoader()\r
    rgbeLoader.load(withBase('/texture/Alex_Hart-Nature_Lab_Bones_2k.hdr'), (envMap) => {\r
      // 设置球形映射\r
      envMap.mapping = THREE.EquirectangularReflectionMapping\r
      // 设置背景贴图\r
      scene.background = envMap\r
      // 设置环境贴图-若该值不为null，则该纹理贴图将会被设为场景中所有物理材质的环境贴图\r
      // 可以模拟环境光\r
      scene.environment = envMap\r
      // 设置plane的环境贴图\r
      material.envMap = envMap\r
    })\r
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
<style lang="scss" scoped></style>`,wn=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"})),En={__name:"ThreeBox",setup(e){const c=_(null);let r=null,l=null,n=null,o=null,i=[];function a(){r=new je({canvas:c.value,antialias:!0});const s=75,t=window.innerWidth/window.innerHeight,h=.1,R=1e3;l=new Ge(s,t,h,R),l.position.z=3,n=new Oe;const v=new Be(1,1,1);function L(x,G,O){const B=new Ae({color:G}),H=new Ue(x,B);return n.add(H),H.position.x=O,H}i=[L(v,4500104,0),L(v,8930474,-2),L(v,11176004,2)];{const x=new ze(16777215,3);x.position.set(-1,2,4),n.add(x)}}function d(s){const t=s.domElement,h=window.devicePixelRatio,R=Math.floor(t.clientWidth*h),v=Math.floor(t.clientHeight*h),L=t.width!==R||t.height!==v;return L&&s.setSize(R,v,!1),L}const u=()=>{o&&cancelAnimationFrame(o),n.traverse(s=>{s.isMesh&&(s.geometry.dispose(),s.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement=null,r=null,n=null,l=null,i=[],c.value=null};function p(s){if(s*=.001,i.forEach((t,h)=>{const R=1+h*.1,v=s*R;t.rotation.x=v,t.rotation.y=v}),d(r)){const t=r.domElement;l.aspect=t.clientWidth/t.clientHeight,l.updateProjectionMatrix()}r.render(n,l),o=requestAnimationFrame(p)}return Ie(()=>{a(),requestAnimationFrame(p)}),qe(()=>{u()}),(s,t)=>(f(),w("canvas",{ref_key:"canvasRef",ref:c},null,512))}},_n=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"}));export{yn as w};
