const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/SpotLight-BitGuZN8.js","static/js/three-BATBy_j0.js","static/js/highlight-Cy1Eq7GY.js","static/js/PrimitivesGeometry-CgvrjpMX.js"])))=>i.map(i=>d[i]);
import{r as y,c as f,b as u,d as m,F as P,e as I,u as O,n as B,t as R,f as k,g as A,h as D,i as U,j as F,k as W,l as $,m as V,p as N,q as J,s as K,v as Y,w as X,x as Z,y as Q,z as ee,A as ne,B as re,C as te,D as ae,E as oe,G as se,H as ie,I as ce,J as le,K as de,L as me,M as ue,N as he,O as pe,P as ge,Q as fe,R as ye,S as ve,T as Ee,U as we,V as xe,W as Re,X as E,Y as G,Z as C,_ as Te,$ as be,a0 as S,a1 as Le,a2 as x,a3 as _e,a4 as Se,a5 as He,a6 as Me,o as Pe,a as Ge}from"./highlight-Cy1Eq7GY.js";import{W as Ce,P as je,b as ze,c as qe,D as Ie,x as Oe,M as Be}from"./three-BATBy_j0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();const ke="modulepreload",Ae=function(e){return"/threejs-examples-vue3/"+e},H={},p=function(r,a,s){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(c=>{if(c=Ae(c),c in H)return;H[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":ke,l||(h.as="script"),h.crossOrigin="",h.href=c,i&&h.setAttribute("nonce",i),document.head.appendChild(h),l)return new Promise((v,g)=>{h.addEventListener("load",v),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return n.then(o=>{for(const i of o||[])i.status==="rejected"&&t(i.reason);return r().catch(t)})},De="/threejs-examples-vue3/github.svg",Ue=[{title:"三个基础盒子",value:"ThreeBox",type:"demo"},{title:"几何体汇总",value:"PrimitivesGeometry",type:"demo"},{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],_=(e,r)=>{const a=e.__vccOpts||e;for(const[s,n]of r)a[s]=n;return a},Fe={id:"panel"},We=["onClick"],$e={__name:"Panel",emits:["componentChange"],setup(e,{emit:r}){const a=r,s=y(""),n=o=>{o.type==="demo"?(s.value=o.value,a("componentChange",o)):t(o.value)},t=o=>{window.open(`https://wupeng0725.github.io/${o}/`,"_blank")};return(o,i)=>(u(),f("div",Fe,[i[0]||(i[0]=m("div",{class:"panel-header"},[m("span",{class:"title"},"Threejs 样例"),m("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[m("img",{src:De,alt:"Github源码"})])],-1)),(u(!0),f(P,null,I(O(Ue),(c,l)=>(u(),f("div",{class:B(["panel-item",c.value===s.value&&"selected"]),key:c.value,onClick:d=>n(c)},R(l+1)+" - "+R(c.title),11,We))),128))]))}},Ve=_($e,[["__scopeId","data-v-37687f00"]]),Ne={},Je={class:"empty"};function Ke(e,r){return u(),f("div",Je," Select an example from the sidebar ")}const Ye=_(Ne,[["render",Ke],["__scopeId","data-v-0f616578"]]);var L,M;function Xe(){if(M)return L;M=1;var e=k();return e.registerLanguage("xml",A()),e.registerLanguage("bash",D()),e.registerLanguage("c",U()),e.registerLanguage("cpp",F()),e.registerLanguage("csharp",W()),e.registerLanguage("css",$()),e.registerLanguage("markdown",V()),e.registerLanguage("diff",N()),e.registerLanguage("ruby",J()),e.registerLanguage("go",K()),e.registerLanguage("graphql",Y()),e.registerLanguage("ini",X()),e.registerLanguage("java",Z()),e.registerLanguage("javascript",Q()),e.registerLanguage("json",ee()),e.registerLanguage("kotlin",ne()),e.registerLanguage("less",re()),e.registerLanguage("lua",te()),e.registerLanguage("makefile",ae()),e.registerLanguage("perl",oe()),e.registerLanguage("objectivec",se()),e.registerLanguage("php",ie()),e.registerLanguage("php-template",ce()),e.registerLanguage("plaintext",le()),e.registerLanguage("python",de()),e.registerLanguage("python-repl",me()),e.registerLanguage("r",ue()),e.registerLanguage("rust",he()),e.registerLanguage("scss",pe()),e.registerLanguage("shell",ge()),e.registerLanguage("sql",fe()),e.registerLanguage("swift",ye()),e.registerLanguage("yaml",ve()),e.registerLanguage("typescript",Ee()),e.registerLanguage("vbnet",we()),e.registerLanguage("wasm",xe()),e.HighlightJS=e,e.default=e,L=e,L}Xe();const Ze={class:"model-header"},Qe={class:"model-title"},en={class:"model-tag-box"},nn={class:"model-content"},rn={__name:"CodeModel",props:{modelData:Object},setup(e){const r=e,a=y(!1),s=y("复制原文"),n=async()=>{try{await navigator.clipboard.writeText(r.modelData.code),s.value="复制成功"}catch{s.value="复制失败"}setTimeout(()=>{s.value="复制原文"},1500)},t=y(null),o=()=>{var i;(i=t.value)==null||i.requestFullscreen()};return(i,c)=>{const l=Re("highlightjs");return u(),f(P,null,[(u(),E(Te,{to:"body"},[a.value?(u(),f("div",{key:0,class:"modal",ref_key:"modelRef",ref:t},[m("div",Ze,[m("div",Qe,"源码："+R(e.modelData.title),1),m("div",en,[m("span",{class:"model-tag-copy",onClick:n},R(s.value),1),m("span",{class:"model-tag-fullscreen",onClick:o},"全屏"),m("span",{class:"model-tag-close",onClick:c[0]||(c[0]=d=>a.value=!1)},"×")])]),m("div",nn,[C(l,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):G("",!0)])),m("span",{onClick:c[1]||(c[1]=d=>a.value=!0),class:"checkcode"},"查看源码")],64)}}},tn=_(rn,[["__scopeId","data-v-103f8c73"]]),an=async e=>{try{const r=Object.assign({"/src/views/Home.vue":()=>p(()=>Promise.resolve().then(()=>dn),void 0),"/src/views/PointLight.vue":()=>p(()=>Promise.resolve().then(()=>un),void 0),"/src/views/PrimitivesGeometry.vue":()=>p(()=>Promise.resolve().then(()=>pn),void 0),"/src/views/SpotLight.vue":()=>p(()=>Promise.resolve().then(()=>fn),void 0),"/src/views/ThreeBox.vue":()=>p(()=>Promise.resolve().then(()=>vn),void 0)}),a=`/src/views/${e}.vue`;if(!r[a])throw new Error(`路径不存在: ${a}`);return(await r[a]()).default}catch{return""}};function _n(e){return"/threejs-examples-vue3/"+e.replace(/^\//,"")}const on={id:"wrapper"},sn={id:"viewer"},cn={__name:"App",setup(e){const r=x(()=>p(()=>import("./SpotLight-BitGuZN8.js").then(l=>l.P),__vite__mapDeps([0,1,2]))),a=x(()=>p(()=>import("./SpotLight-BitGuZN8.js").then(l=>l.S),__vite__mapDeps([0,1,2]))),s=x(()=>p(()=>Promise.resolve().then(()=>Tn),void 0)),n=x(()=>p(()=>import("./PrimitivesGeometry-CgvrjpMX.js"),__vite__mapDeps([3,1,2]))),t=be({code:"",title:""}),o={PointLight:r,SpotLight:a,ThreeBox:s,PrimitivesGeometry:n},i=y(""),c=async({value:l,title:d})=>{i.value=l,t.code=await an(l),t.title=d};return(l,d)=>(u(),f("div",on,[C(Ve,{onComponentChange:c}),m("div",sn,[i.value?(u(),E(Se,{key:0},{fallback:S(()=>d[0]||(d[0]=[_e(" Loading... ")])),default:S(()=>[(u(),E(Le(o[i.value])))]),_:1})):(u(),E(Ye,{key:1})),i.value?(u(),E(tn,{key:2,modelData:t},null,8,["modelData"])):G("",!0)])]))}};He(cn).use(Me).mount("#app");const ln="",dn=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"})),mn=`<template>\r
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
</style>`,un=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"})),hn=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
import { FontLoader } from 'three/addons/loaders/FontLoader.js'\r
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js'\r
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'\r
import { withBase } from '../utils/index'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null, objects = []\r
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
  const fov = 40 // fov是视野范围(field of view)的缩写，默认值50\r
  const aspect = window.innerWidth / window.innerHeight  // aspect指画布的宽高比，默认值1\r
  // near和far代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。\r
  const near = 0.1 // 默认值0.1\r
  const far = 1000 // 默认值2000\r
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far)\r
  // 摄像机默认指向Z轴负方向，上方向朝向Y轴正方向。\r
  // 我们将会把立方体放置在坐标原点，所以我们需要往后移一下摄像机才能显示出物体。\r
  camera.position.z = 120\r
\r
  // 创建场景，需要three.js绘制的东西都需要加入到scene中\r
  scene = new THREE.Scene()\r
  // 设置创建的背景--略浅的灰色\r
  scene.background = new THREE.Color(0xaaaaaa)\r
\r
  // 效果好了一些但还是很难看出是三维的。我们来添加些光照效果\r
  // 先创建一盏平行光\r
  {\r
    const light = new THREE.DirectionalLight(0xffffff, 3)\r
    light.position.set(-1, 2, 4)\r
    scene.add(light)\r
  }\r
\r
  const spread = 15\r
\r
  function addObject(x, y, obj) {\r
    obj.position.x = x * spread\r
    obj.position.y = y * spread\r
\r
    scene.add(obj)\r
    objects.push(obj)\r
  }\r
\r
  function createMaterial() {\r
    const material = new THREE.MeshPhongMaterial({\r
      side: THREE.DoubleSide,\r
    })\r
\r
    const hue = Math.random()\r
    const saturation = 1\r
    const luminance = .5\r
    material.color.setHSL(hue, saturation, luminance)\r
\r
    return material\r
  }\r
\r
  function addSolidGeometry(x, y, geometry) {\r
    const mesh = new THREE.Mesh(geometry, createMaterial())\r
    addObject(x, y, mesh)\r
  }\r
  function addLineGeometry(x, y, geometry) {\r
    const material = new THREE.LineBasicMaterial({ color: 0x000000 })\r
    const mesh = new THREE.LineSegments(geometry, material)\r
    addObject(x, y, mesh)\r
\r
  }\r
\r
  {\r
    // 立方体\r
    const width = 8\r
    const height = 8\r
    const depth = 8\r
    addSolidGeometry(-2, 2, new THREE.BoxGeometry(width, height, depth))\r
  }\r
  {\r
    // 圆形\r
    const radius = 7\r
    const segments = 24\r
    addSolidGeometry(- 1, 2, new THREE.CircleGeometry(radius, segments))\r
  }\r
  {\r
    // 圆锥体\r
    const radius = 6\r
    const height = 8\r
    const segments = 16\r
    addSolidGeometry(0, 2, new THREE.ConeGeometry(radius, height, segments))\r
  }\r
  {\r
    // 圆柱\r
    const radiusTop = 4\r
    const radiusBottom = 4\r
    const height = 8\r
    const radialSegments = 12\r
    addSolidGeometry(1, 2, new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments))\r
  }\r
  {\r
    // 12面体\r
    const radius = 7\r
    addSolidGeometry(2, 2, new THREE.DodecahedronGeometry(radius))\r
  }\r
  {\r
    // 挤压几何体\r
    const shape = new THREE.Shape()\r
    const x = - 2.5\r
    const y = - 5\r
    shape.moveTo(x + 2.5, y + 2.5)\r
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)\r
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)\r
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)\r
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)\r
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)\r
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)\r
\r
    const extrudeSettings = {\r
      steps: 2,\r
      depth: 2,\r
      bevelEnabled: true,\r
      bevelThickness: 1,\r
      bevelSize: 1,\r
      bevelSegments: 2,\r
    }\r
\r
    addSolidGeometry(- 2, 1, new THREE.ExtrudeGeometry(shape, extrudeSettings))\r
  }\r
  {\r
    // 20面体\r
    const radius = 7\r
    addSolidGeometry(- 1, 1, new THREE.IcosahedronGeometry(radius))\r
\r
  }\r
  {\r
    // 车削几何体\r
    const points = []\r
    for (let i = 0; i < 10; ++i) {\r
\r
      points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * .8))\r
\r
    }\r
\r
    addSolidGeometry(0, 1, new THREE.LatheGeometry(points))\r
  }\r
  {\r
    // 八面体\r
    const radius = 7\r
    addSolidGeometry(1, 1, new THREE.OctahedronGeometry(radius))\r
  }\r
  {\r
    // 参数化几何体\r
    function klein(v, u, target) {\r
\r
      u *= Math.PI\r
      v *= 2 * Math.PI\r
      u = u * 2\r
\r
      let x\r
      let z\r
\r
      if (u < Math.PI) {\r
\r
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v)\r
        z = - 8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v)\r
\r
      } else {\r
\r
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI)\r
        z = - 8 * Math.sin(u)\r
\r
      }\r
\r
      const y = - 2 * (1 - Math.cos(u) / 2) * Math.sin(v)\r
\r
      target.set(x, y, z).multiplyScalar(0.75)\r
\r
    }\r
\r
    const slices = 25\r
    const stacks = 25\r
    addSolidGeometry(2, 1, new ParametricGeometry(klein, slices, stacks))\r
  }\r
  {\r
    // 平面\r
    const width = 9\r
    const height = 9\r
    const widthSegments = 2\r
    const heightSegments = 2\r
    addSolidGeometry(- 2, 0, new THREE.PlaneGeometry(width, height, widthSegments, heightSegments))\r
  }\r
  {\r
    // 多面几何体\r
    const verticesOfCube = [\r
      - 1, - 1, - 1, 1, - 1, - 1, 1, 1, - 1, - 1, 1, - 1,\r
      - 1, - 1, 1, 1, - 1, 1, 1, 1, 1, - 1, 1, 1,\r
    ]\r
    const indicesOfFaces = [\r
      2, 1, 0, 0, 3, 2,\r
      0, 4, 7, 7, 3, 0,\r
      0, 1, 5, 5, 4, 0,\r
      1, 2, 6, 6, 5, 1,\r
      2, 3, 7, 7, 6, 2,\r
      4, 5, 6, 6, 7, 4,\r
    ]\r
    const radius = 7\r
    const detail = 2\r
    addSolidGeometry(- 1, 0, new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, radius, detail))\r
  }\r
  {\r
    // 圆环\r
    const innerRadius = 2\r
    const outerRadius = 7\r
    const segments = 18\r
    addSolidGeometry(0, 0, new THREE.RingGeometry(innerRadius, outerRadius, segments))\r
  }\r
  {\r
    // 形状--爱心\r
    const shape = new THREE.Shape()\r
    const x = - 2.5\r
    const y = - 5\r
    shape.moveTo(x + 2.5, y + 2.5)\r
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)\r
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)\r
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)\r
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)\r
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)\r
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)\r
    addSolidGeometry(1, 0, new THREE.ShapeGeometry(shape))\r
  }\r
  {\r
    // 球\r
    const radius = 7\r
    const widthSegments = 32\r
    const heightSegments = 16\r
    addSolidGeometry(2, 0, new THREE.SphereGeometry(radius, widthSegments, heightSegments))\r
  }\r
  {\r
    // 四面体\r
    const radius = 7\r
    addSolidGeometry(- 2, - 1, new THREE.TetrahedronGeometry(radius))\r
  }\r
  {\r
    // 文本几何体\r
    const loader = new FontLoader()\r
    // promisify font loading\r
    function loadFont(url) {\r
\r
      return new Promise((resolve, reject) => {\r
\r
        loader.load(url, resolve, undefined, reject)\r
\r
      })\r
\r
    }\r
\r
    async function doit() {\r
\r
      const font = await loadFont(withBase('/fonts/helvetiker_regular.typeface.json'))\r
      const geometry = new TextGeometry('three.js', {\r
        font: font,\r
        size: 3.0,\r
        depth: .2,\r
        curveSegments: 12,\r
        bevelEnabled: true,\r
        bevelThickness: 0.15,\r
        bevelSize: .3,\r
        bevelSegments: 5,\r
      })\r
      const mesh = new THREE.Mesh(geometry, createMaterial())\r
      geometry.computeBoundingBox()\r
      geometry.boundingBox.getCenter(mesh.position).multiplyScalar(- 1)\r
\r
      const parent = new THREE.Object3D()\r
      parent.add(mesh)\r
\r
      addObject(- 1, - 1, parent)\r
\r
    }\r
\r
    doit()\r
\r
  }\r
  {\r
    // 圆环几何体\r
    const radius = 5\r
    const tubeRadius = 2\r
    const radialSegments = 8\r
    const tubularSegments = 24\r
    addSolidGeometry(0, - 1, new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments))\r
\r
  }\r
  {\r
    // 圆环扭结几何体\r
    const radius = 3.5\r
    const tube = 1.5\r
    const radialSegments = 8\r
    const tubularSegments = 64\r
    const p = 2\r
    const q = 3\r
    addSolidGeometry(1, - 1, new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q))\r
  }\r
  {\r
    // 管道\r
    class CustomSinCurve extends THREE.Curve {\r
\r
      constructor(scale) {\r
\r
        super()\r
        this.scale = scale\r
\r
      }\r
      getPoint(t) {\r
\r
        const tx = t * 3 - 1.5\r
        const ty = Math.sin(2 * Math.PI * t)\r
        const tz = 0\r
        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale)\r
\r
      }\r
    }\r
\r
    const path = new CustomSinCurve(4)\r
    const tubularSegments = 20\r
    const radius = 1\r
    const radialSegments = 8\r
    const closed = false\r
    addSolidGeometry(2, - 1, new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed))\r
  }\r
  {\r
    // 边缘几何体\r
    const width = 8\r
    const height = 8\r
    const depth = 8\r
    const thresholdAngle = 1\r
    addLineGeometry(- 1, - 2, new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth), thresholdAngle))\r
  }\r
  {\r
    // 线框几何体\r
    const width = 8\r
    const height = 8\r
    const depth = 8\r
    addLineGeometry(1, - 2, new THREE.WireframeGeometry(new THREE.BoxGeometry(width, height, depth)))\r
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
\r
function animate(time) {\r
  time *= 0.001 // 将时间单位变为秒\r
\r
  objects.forEach((obj, ndx) => {\r
\r
    const speed = .1 + ndx * .05\r
    const rot = time * speed\r
    obj.rotation.x = rot\r
    obj.rotation.y = rot\r
\r
  })\r
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
  objects = []\r
  canvasRef.value = null\r
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
<\/script>\r
\r
<style lang="scss" scoped></style>`,pn=Object.freeze(Object.defineProperty({__proto__:null,default:hn},Symbol.toStringTag,{value:"Module"})),gn=`<template>\r
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
<style></style>`,fn=Object.freeze(Object.defineProperty({__proto__:null,default:gn},Symbol.toStringTag,{value:"Module"})),yn=`<template>\r
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
<style lang="scss" scoped></style>`,vn=Object.freeze(Object.defineProperty({__proto__:null,default:yn},Symbol.toStringTag,{value:"Module"}));function En(e){if(!e)return!1;const r=e.domElement,a=window.devicePixelRatio,s=Math.floor(r.clientWidth*a),n=Math.floor(r.clientHeight*a),t=r.width!==s||r.height!==n;return t&&e.setSize(s,n,!1),t}function wn(e,r){if(En(e)){const a=e.domElement;r.aspect=a.clientWidth/a.clientHeight,r.updateProjectionMatrix()}}const xn=(e,r,a,s,n)=>{n&&cancelAnimationFrame(n),r.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement=null,e=null,r=null,s.value=null},Rn={__name:"ThreeBox",setup(e){const r=y(null);let a=null,s=null,n=null,t=null,o=[];function i(){a=new Ce({canvas:r.value,antialias:!0});const l=75,d=window.innerWidth/window.innerHeight,h=.1,v=1e3;s=new je(l,d,h,v),s.position.z=3,n=new ze;const g=new qe(1,1,1);function T(w,j,z){const q=new Oe({color:j}),b=new Be(w,q);return n.add(b),b.position.x=z,b}o=[T(g,4500104,0),T(g,8930474,-2),T(g,11176004,2)];{const w=new Ie(16777215,3);w.position.set(-1,2,4),n.add(w)}}function c(l){l*=.001,o.forEach((d,h)=>{const v=1+h*.1,g=l*v;d.rotation.x=g,d.rotation.y=g}),wn(a,s),a.render(n,s),t=requestAnimationFrame(c)}return Pe(()=>{i(),requestAnimationFrame(c)}),Ge(()=>{xn(a,n,s,r,t)}),(l,d)=>(u(),f("canvas",{ref_key:"canvasRef",ref:r},null,512))}},Tn=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"}));export{_n as w};
