const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/SpotLight-BitGuZN8.js","static/js/three-BATBy_j0.js","static/js/highlight-Cy1Eq7GY.js","static/js/PrimitivesGeometry-DHNyFe2o.js"])))=>i.map(i=>d[i]);
import{r as v,c as f,b as m,d as u,F as M,e as z,u as O,n as G,t as y,f as B,g as A,h as D,i as $,j as U,k as W,l as F,m as V,p as N,q as J,s as K,v as X,w as Y,x as Z,y as Q,z as ee,A as ne,B as re,C as te,D as ae,E as oe,G as se,H as ie,I as le,J as ce,K as de,L as ue,M as me,N as pe,O as he,P as ge,Q as fe,R as ve,S as we,T as Ee,U as _e,V as Le,W as ye,X as E,Y as C,Z as q,_ as Re,$ as xe,a0 as P,a1 as Te,a2 as L,a3 as be,a4 as Pe,a5 as He,a6 as Se,o as Me,a as Ce}from"./highlight-Cy1Eq7GY.js";import{W as qe,P as je,b as Ie,c as ke,D as ze,x as Oe,M as Ge}from"./three-BATBy_j0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();const Be="modulepreload",Ae=function(e){return"/threejs-examples-vue3/"+e},H={},h=function(r,a,s){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(l=>{if(l=Ae(l),l in H)return;H[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Be,c||(p.as="script"),p.crossOrigin="",p.href=l,i&&p.setAttribute("nonce",i),document.head.appendChild(p),c)return new Promise((w,g)=>{p.addEventListener("load",w),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function t(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return n.then(o=>{for(const i of o||[])i.status==="rejected"&&t(i.reason);return r().catch(t)})},De="/threejs-examples-vue3/github.svg",$e=[{title:"三个基础盒子",value:"ThreeBox",type:"demo"},{title:"几何体汇总",value:"PrimitivesGeometry",type:"demo"},{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],b=(e,r)=>{const a=e.__vccOpts||e;for(const[s,n]of r)a[s]=n;return a},Ue={id:"panel"},We=["onClick"],Fe={__name:"Panel",emits:["componentChange"],setup(e,{emit:r}){const a=r,s=v(""),n=o=>{o.type==="demo"?(s.value=o.value,a("componentChange",o)):t(o.value)},t=o=>{window.open(`https://wupeng0725.github.io/${o}/`,"_blank")};return(o,i)=>(m(),f("div",Ue,[i[0]||(i[0]=u("div",{class:"panel-header"},[u("span",{class:"title"},"Threejs 样例"),u("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[u("img",{src:De,alt:"Github源码"})])],-1)),(m(!0),f(M,null,z(O($e),(l,c)=>(m(),f("div",{class:G(["panel-item",l.value===s.value&&"selected"]),key:l.value,onClick:d=>n(l)},y(c+1)+" - "+y(l.title),11,We))),128))]))}},Ve=b(Fe,[["__scopeId","data-v-37687f00"]]),Ne={},Je={class:"empty"};function Ke(e,r){return m(),f("div",Je," Select an example from the sidebar ")}const Xe=b(Ne,[["render",Ke],["__scopeId","data-v-0f616578"]]);var T,S;function Ye(){if(S)return T;S=1;var e=B();return e.registerLanguage("xml",A()),e.registerLanguage("bash",D()),e.registerLanguage("c",$()),e.registerLanguage("cpp",U()),e.registerLanguage("csharp",W()),e.registerLanguage("css",F()),e.registerLanguage("markdown",V()),e.registerLanguage("diff",N()),e.registerLanguage("ruby",J()),e.registerLanguage("go",K()),e.registerLanguage("graphql",X()),e.registerLanguage("ini",Y()),e.registerLanguage("java",Z()),e.registerLanguage("javascript",Q()),e.registerLanguage("json",ee()),e.registerLanguage("kotlin",ne()),e.registerLanguage("less",re()),e.registerLanguage("lua",te()),e.registerLanguage("makefile",ae()),e.registerLanguage("perl",oe()),e.registerLanguage("objectivec",se()),e.registerLanguage("php",ie()),e.registerLanguage("php-template",le()),e.registerLanguage("plaintext",ce()),e.registerLanguage("python",de()),e.registerLanguage("python-repl",ue()),e.registerLanguage("r",me()),e.registerLanguage("rust",pe()),e.registerLanguage("scss",he()),e.registerLanguage("shell",ge()),e.registerLanguage("sql",fe()),e.registerLanguage("swift",ve()),e.registerLanguage("yaml",we()),e.registerLanguage("typescript",Ee()),e.registerLanguage("vbnet",_e()),e.registerLanguage("wasm",Le()),e.HighlightJS=e,e.default=e,T=e,T}Ye();const Ze={class:"model-header"},Qe={class:"model-title"},en={class:"model-tag-box"},nn={class:"model-content"},rn={__name:"CodeModel",props:{modelData:Object},setup(e){const r=e,a=v(!1),s=v("复制原文"),n=async()=>{try{await navigator.clipboard.writeText(r.modelData.code),s.value="复制成功"}catch{s.value="复制失败"}setTimeout(()=>{s.value="复制原文"},1500)},t=v(null),o=()=>{var i;(i=t.value)==null||i.requestFullscreen()};return(i,l)=>{const c=ye("highlightjs");return m(),f(M,null,[(m(),E(Re,{to:"body"},[a.value?(m(),f("div",{key:0,class:"modal",ref_key:"modelRef",ref:t},[u("div",Ze,[u("div",Qe,"源码："+y(e.modelData.title),1),u("div",en,[u("span",{class:"model-tag-copy",onClick:n},y(s.value),1),u("span",{class:"model-tag-fullscreen",onClick:o},"全屏"),u("span",{class:"model-tag-close",onClick:l[0]||(l[0]=d=>a.value=!1)},"×")])]),u("div",nn,[q(c,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):C("",!0)])),u("span",{onClick:l[1]||(l[1]=d=>a.value=!0),class:"checkcode"},"查看源码")],64)}}},tn=b(rn,[["__scopeId","data-v-103f8c73"]]),an=async e=>{try{const r=Object.assign({"/src/views/Home.vue":()=>h(()=>Promise.resolve().then(()=>dn),void 0),"/src/views/PointLight.vue":()=>h(()=>Promise.resolve().then(()=>mn),void 0),"/src/views/PrimitivesGeometry.vue":()=>h(()=>import("./PrimitivesGeometry-CX9tQfUL.js"),[]),"/src/views/SpotLight.vue":()=>h(()=>Promise.resolve().then(()=>hn),void 0),"/src/views/ThreeBox.vue":()=>h(()=>Promise.resolve().then(()=>fn),void 0)}),a=`/src/views/${e}.vue`;if(!r[a])throw new Error(`路径不存在: ${a}`);return(await r[a]()).default}catch{return""}},on={id:"wrapper"},sn={id:"viewer"},ln={__name:"App",setup(e){const r=L(()=>h(()=>import("./SpotLight-BitGuZN8.js").then(c=>c.P),__vite__mapDeps([0,1,2]))),a=L(()=>h(()=>import("./SpotLight-BitGuZN8.js").then(c=>c.S),__vite__mapDeps([0,1,2]))),s=L(()=>h(()=>Promise.resolve().then(()=>Ln),void 0)),n=L(()=>h(()=>import("./PrimitivesGeometry-DHNyFe2o.js"),__vite__mapDeps([3,1,2]))),t=xe({code:"",title:""}),o={PointLight:r,SpotLight:a,ThreeBox:s,PrimitivesGeometry:n},i=v(""),l=async({value:c,title:d})=>{i.value=c,t.code=await an(c),t.title=d};return(c,d)=>(m(),f("div",on,[q(Ve,{onComponentChange:l}),u("div",sn,[i.value?(m(),E(Pe,{key:0},{fallback:P(()=>d[0]||(d[0]=[be(" Loading... ")])),default:P(()=>[(m(),E(Te(o[i.value])))]),_:1})):(m(),E(Xe,{key:1})),i.value?(m(),E(tn,{key:2,modelData:t},null,8,["modelData"])):C("",!0)])]))}};He(ln).use(Se).mount("#app");const cn="",dn=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"})),un=`<template>\r
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
  gui?.destroy()\r
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
</style>`,mn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),pn=`<template>\r
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
  gui?.destroy()\r
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
<style></style>`,hn=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"})),gn=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
import { handleResize, cleanUp } from '../utils/commonThree'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null, cubes = []\r
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
  camera.position.z = 3\r
\r
  // 创建场景，需要three.js绘制的东西都需要加入到scene中\r
  scene = new THREE.Scene()\r
\r
\r
  // 创建一个立方几何体\r
  const geometry = new THREE.BoxGeometry(1, 1, 1)\r
  function makeInstance(geometry, color, x) {\r
    // 创建一个基本的材质并设置它的颜色. 颜色的值可以用css方式和十六进制来表示。\r
    // MeshBasicMaterial材质不会受到灯光的影响\r
    // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })\r
    // 我们将他改成会受灯光影响的MeshPhongMaterial材质。\r
    const material = new THREE.MeshPhongMaterial({ color })\r
    // 创建一个网格(Mesh)对象，它包含了：\r
    // 1. 几何体(Geometry)(物体的形状)\r
    // 2. 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)\r
    // 3. 对象在场景中相对于他父对象的位置、朝向、和缩放\r
    const cube = new THREE.Mesh(geometry, material)\r
\r
    // 将网格添加到场景中\r
    scene.add(cube)\r
\r
    cube.position.x = x\r
\r
    return cube\r
  }\r
  cubes = [\r
    makeInstance(geometry, 0x44aa88, 0),\r
    makeInstance(geometry, 0x8844aa, -2),\r
    makeInstance(geometry, 0xaa8844, 2),\r
  ]\r
\r
\r
  // 效果好了一些但还是很难看出是三维的。我们来添加些光照效果\r
  // 先创建一盏平行光\r
  {\r
    const light = new THREE.DirectionalLight(0xffffff, 3)\r
    light.position.set(-1, 2, 4)\r
    scene.add(light)\r
  }\r
}\r
\r
function animate(time) {\r
  time *= 0.001 // 将时间单位变为秒\r
\r
  cubes.forEach((cube, index) => {\r
    // 给每个立方体设置了稍微不同的旋转角度\r
    const speed = 1 + index * 0.1\r
    const rot = time * speed\r
    cube.rotation.x = rot\r
    cube.rotation.y = rot\r
  })\r
  handleResize(renderer, camera)\r
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
  cleanUp(renderer, scene, camera, canvasRef, animationId)\r
})\r
<\/script>\r
\r
<style lang="scss" scoped></style>`,fn=Object.freeze(Object.defineProperty({__proto__:null,default:gn},Symbol.toStringTag,{value:"Module"}));function vn(e){if(!e)return!1;const r=e.domElement,a=window.devicePixelRatio,s=Math.floor(r.clientWidth*a),n=Math.floor(r.clientHeight*a),t=r.width!==s||r.height!==n;return t&&e.setSize(s,n,!1),t}function wn(e,r){if(vn(e)){const a=e.domElement;r.aspect=a.clientWidth/a.clientHeight,r.updateProjectionMatrix()}}const En=(e,r,a,s,n)=>{n&&cancelAnimationFrame(n),r.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement=null,e=null,r=null,s.value=null},_n={__name:"ThreeBox",setup(e){const r=v(null);let a=null,s=null,n=null,t=null,o=[];function i(){a=new qe({canvas:r.value,antialias:!0});const c=75,d=window.innerWidth/window.innerHeight,p=.1,w=1e3;s=new je(c,d,p,w),s.position.z=3,n=new Ie;const g=new ke(1,1,1);function R(_,j,I){const k=new Oe({color:j}),x=new Ge(_,k);return n.add(x),x.position.x=I,x}o=[R(g,4500104,0),R(g,8930474,-2),R(g,11176004,2)];{const _=new ze(16777215,3);_.position.set(-1,2,4),n.add(_)}}function l(c){c*=.001,o.forEach((d,p)=>{const w=1+p*.1,g=c*w;d.rotation.x=g,d.rotation.y=g}),wn(a,s),a.render(n,s),t=requestAnimationFrame(l)}return Me(()=>{i(),requestAnimationFrame(l)}),Ce(()=>{En(a,n,s,r,t)}),(c,d)=>(m(),f("canvas",{ref_key:"canvasRef",ref:r},null,512))}},Ln=Object.freeze(Object.defineProperty({__proto__:null,default:_n},Symbol.toStringTag,{value:"Module"}));
