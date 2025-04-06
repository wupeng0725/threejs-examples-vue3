const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/SpotLight-BlhdwSjc.js","static/js/three-BfqiCbPW.js","static/js/highlight-pu3k_pXi.js"])))=>i.map(i=>d[i]);
import{r as v,c as g,b as p,d as c,F as R,e as j,t as y,n as H,f as q,g as k,h as M,i as O,j as z,k as I,l as G,m as $,p as D,q as A,s as B,u as V,v as U,w as W,x as F,y as N,z as J,A as X,B as K,C as Y,D as Q,E as Z,G as ee,H as ne,I as re,J as te,K as oe,L as ae,M as ie,N as se,O as le,P as ce,Q as de,R as pe,S as ue,T as me,U as ge,V as he,W as f,X as P,Y as T,Z as fe,_ as ve,$ as L,a0 as ye,a1 as E,a2 as we,a3 as _e,a4 as Le,a5 as Ee}from"./highlight-pu3k_pXi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const xe="modulepreload",be=function(e){return"/threejs-examples-vue3/"+e},x={},m=function(s,i,l){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(i.map(a=>{if(a=be(a),a in x)return;x[a]=!0;const d=a.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":xe,d||(u.as="script"),u.crossOrigin="",u.href=a,n&&u.setAttribute("nonce",n),document.head.appendChild(u),d)return new Promise((S,C)=>{u.addEventListener("load",S),u.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${a}`)))})}))}function t(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return r.then(o=>{for(const n of o||[])n.status==="rejected"&&t(n.reason);return s().catch(t)})},Re="/threejs-examples-vue3/github.svg",_=(e,s)=>{const i=e.__vccOpts||e;for(const[l,r]of s)i[l]=r;return i},Pe={id:"panel"},Te=["onClick"],Se={__name:"Panel",emits:["componentChange"],setup(e,{emit:s}){const i=s,l=[{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],r=v(""),t=n=>{n.type==="demo"?(r.value=n.value,i("componentChange",n)):o(n.value)},o=n=>{window.open(`https://wupeng0725.github.io/${n}/`,"_blank")};return(n,a)=>(p(),g("div",Pe,[a[0]||(a[0]=c("div",{class:"panel-header"},[c("span",{class:"title"},"Threejs 样例"),c("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[c("img",{src:Re,alt:"Github源码"})])],-1)),(p(),g(R,null,j(l,(d,h)=>c("div",{class:H(["panel-item",d.value===r.value&&"selected"]),key:d.value,onClick:u=>t(d)},y(h+1)+" - "+y(d.title),11,Te)),64))]))}},Ce=_(Se,[["__scopeId","data-v-60070b25"]]),je={},He={class:"empty"};function qe(e,s){return p(),g("div",He," Select an example from the sidebar ")}const ke=_(je,[["render",qe],["__scopeId","data-v-0f616578"]]);var w,b;function Me(){if(b)return w;b=1;var e=q();return e.registerLanguage("xml",k()),e.registerLanguage("bash",M()),e.registerLanguage("c",O()),e.registerLanguage("cpp",z()),e.registerLanguage("csharp",I()),e.registerLanguage("css",G()),e.registerLanguage("markdown",$()),e.registerLanguage("diff",D()),e.registerLanguage("ruby",A()),e.registerLanguage("go",B()),e.registerLanguage("graphql",V()),e.registerLanguage("ini",U()),e.registerLanguage("java",W()),e.registerLanguage("javascript",F()),e.registerLanguage("json",N()),e.registerLanguage("kotlin",J()),e.registerLanguage("less",X()),e.registerLanguage("lua",K()),e.registerLanguage("makefile",Y()),e.registerLanguage("perl",Q()),e.registerLanguage("objectivec",Z()),e.registerLanguage("php",ee()),e.registerLanguage("php-template",ne()),e.registerLanguage("plaintext",re()),e.registerLanguage("python",te()),e.registerLanguage("python-repl",oe()),e.registerLanguage("r",ae()),e.registerLanguage("rust",ie()),e.registerLanguage("scss",se()),e.registerLanguage("shell",le()),e.registerLanguage("sql",ce()),e.registerLanguage("swift",de()),e.registerLanguage("yaml",pe()),e.registerLanguage("typescript",ue()),e.registerLanguage("vbnet",me()),e.registerLanguage("wasm",ge()),e.HighlightJS=e,e.default=e,w=e,w}Me();const Oe={class:"model-header"},ze={class:"model-title"},Ie={class:"model-tag-box"},Ge={class:"model-content"},$e={__name:"CodeModel",props:{modelData:Object},setup(e){const s=e,i=v(!1),l=v("复制原文"),r=async()=>{try{await navigator.clipboard.writeText(s.modelData.code),l.value="复制成功"}catch{l.value="复制失败"}setTimeout(()=>{l.value="复制原文"},1500)},t=v(null),o=()=>{var n;(n=t.value)==null||n.requestFullscreen()};return(n,a)=>{const d=he("highlightjs");return p(),g(R,null,[(p(),f(fe,{to:"body"},[i.value?(p(),g("div",{key:0,class:"modal",ref_key:"modelRef",ref:t},[c("div",Oe,[c("div",ze,"源码："+y(e.modelData.title),1),c("div",Ie,[c("span",{class:"model-tag-copy",onClick:r},y(l.value),1),c("span",{class:"model-tag-fullscreen",onClick:o},"全屏"),c("span",{class:"model-tag-close",onClick:a[0]||(a[0]=h=>i.value=!1)},"×")])]),c("div",Ge,[T(d,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):P("",!0)])),c("span",{onClick:a[1]||(a[1]=h=>i.value=!0),class:"checkcode"},"查看源码")],64)}}},De=_($e,[["__scopeId","data-v-103f8c73"]]),Ae=async e=>{try{const s=Object.assign({"/src/components/CodeModel.vue":()=>m(()=>Promise.resolve().then(()=>Fe),void 0),"/src/components/Empty.vue":()=>m(()=>Promise.resolve().then(()=>Je),void 0),"/src/components/HelloWorld.vue":()=>m(()=>Promise.resolve().then(()=>Ke),void 0),"/src/components/Panel.vue":()=>m(()=>Promise.resolve().then(()=>Qe),void 0),"/src/components/PointLight.vue":()=>m(()=>Promise.resolve().then(()=>en),void 0),"/src/components/SpotLight.vue":()=>m(()=>Promise.resolve().then(()=>rn),void 0),"/src/components/ThreeBox.vue":()=>m(()=>Promise.resolve().then(()=>on),void 0)}),i=`/src/components/${e}.vue`;if(!s[i])throw new Error(`路径不存在: ${i}`);return(await s[i]()).default}catch{return""}},Be={id:"wrapper"},Ve={id:"viewer"},Ue={__name:"App",setup(e){const s=E(()=>m(()=>import("./SpotLight-BlhdwSjc.js").then(n=>n.P),__vite__mapDeps([0,1,2]))),i=E(()=>m(()=>import("./SpotLight-BlhdwSjc.js").then(n=>n.S),__vite__mapDeps([0,1,2]))),l=ve({code:"",title:""}),r={PointLight:s,SpotLight:i},t=v(""),o=async({value:n,title:a})=>{t.value=n,l.code=await Ae(n),l.title=a};return(n,a)=>(p(),g("div",Be,[T(Ce,{onComponentChange:o}),c("div",Ve,[t.value?(p(),f(_e,{key:0},{fallback:L(()=>a[0]||(a[0]=[we(" Loading... ")])),default:L(()=>[(p(),f(ye(r[t.value])))]),_:1})):(p(),f(ke,{key:1})),t.value?(p(),f(De,{key:2,modelData:l},null,8,["modelData"])):P("",!0)])]))}};Le(Ue).use(Ee).mount("#app");const We=`<template>\r
  <Teleport to="body">\r
    <div v-if="open" class="modal" ref="modelRef">\r
      <div class="model-header">\r
        <div class="model-title">源码：{{ modelData.title }}</div>\r
\r
        <div class="model-tag-box">\r
          <span class="model-tag-copy" @click="onCopy">{{ copyText }}</span>\r
          <span class="model-tag-fullscreen" @click="onFullScreen">全屏</span>\r
          <span class="model-tag-close" @click="open = false">×</span>\r
        </div>\r
      </div>\r
      <div class="model-content">\r
        <highlightjs language="XML" :autodetect="false" :code="modelData.code"></highlightjs>\r
      </div>\r
    </div>\r
  </Teleport>\r
  <span @click="open = true" class="checkcode">查看源码</span>\r
</template>\r
\r
<script setup>\r
import 'highlight.js/lib/common'\r
import { ref } from 'vue'\r
const props = defineProps({\r
  modelData: Object\r
})\r
\r
const open = ref(false)\r
\r
const copyText = ref('复制原文')\r
const onCopy = async () => {\r
  try {\r
    await navigator.clipboard.writeText(props.modelData.code)\r
    copyText.value = '复制成功'\r
  } catch (error) {\r
    console.log('无法复制内容到剪切板', error)\r
    copyText.value = '复制失败'\r
  }\r
  setTimeout(() => {\r
    copyText.value = '复制原文'\r
  }, 1500)\r
}\r
\r
const modelRef = ref(null)\r
const onFullScreen = () => {\r
  modelRef.value?.requestFullscreen()\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
@mixin model-tag {\r
  cursor: pointer;\r
\r
  &:hover {\r
    color: aquamarine;\r
  }\r
}\r
\r
.modal {\r
  position: fixed;\r
  z-index: 9999;\r
  top: 10%;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  width: 80%;\r
  min-height: 500px;\r
  box-shadow: 7px 7px 15px 0 #ccc;\r
  padding: 20px;\r
  background-color: #fff;\r
}\r
\r
.model-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
\r
  .model-title {\r
    font-weight: 700;\r
    font-size: 20px;\r
  }\r
  .model-tag-box {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    width: 15%;\r
    font-size: 14px;\r
  }\r
\r
  .model-tag-close {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    width: 20px;\r
    height: 20px;\r
    font-size: 28px;\r
    padding-bottom: 3px;\r
    @include model-tag;\r
  }\r
  .model-tag-copy {\r
    @include model-tag;\r
  }\r
  .model-tag-fullscreen {\r
    @include model-tag;\r
  }\r
}\r
\r
.model-content {\r
  max-height: 600px;\r
  overflow: auto;\r
}\r
\r
.checkcode {\r
  position: fixed;\r
  bottom: 10px;\r
  left: 310px;\r
  color: #fff;\r
  cursor: pointer;\r
\r
  &:hover {\r
    color: aquamarine;\r
  }\r
}\r
</style>`,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"})),Ne=`<template>\r
  <div class="empty">\r
    Select an example from the sidebar\r
  </div>\r
</template>\r
\r
<script setup>\r
\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.empty {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  height: 100%;\r
}\r
</style>`,Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),Xe=`<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
<\/script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
`,Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"})),Ye=`<template>\r
  <div id="panel">\r
    <div class="panel-header">\r
      <span class="title">Threejs 样例</span>\r
      <a href="https://github.com/wupeng0725/threejs-examples-vue3" target="_blank" title="Github源码">\r
        <img src="/github.svg" alt="Github源码">\r
      </a>\r
    </div>\r
    <div class="panel-item" :class="item.value === currentPanel && 'selected'" v-for="(item, index) in panelList"\r
      :key="item.value" @click="onClickPanel(item)">\r
      {{ index + 1 }} - {{ item.title }}\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup>\r
\r
import { ref } from 'vue'\r
\r
const emit = defineEmits(['componentChange'])\r
\r
const panelList = [\r
  {\r
    title: '点光源',\r
    value: 'PointLight',\r
    type: 'demo'\r
  },\r
  {\r
    title: '聚光灯',\r
    value: 'SpotLight',\r
    type: 'demo'\r
  },\r
  {\r
    title: '3D圣诞贺卡',\r
    value: 'christmas-card',\r
    type: 'link'\r
  }\r
]\r
\r
const currentPanel = ref('')\r
\r
const onClickPanel = (item) => {\r
  if (item.type === 'demo') {\r
    currentPanel.value = item.value\r
    emit('componentChange', item)\r
  } else {\r
    jumpGitHub(item.value)\r
  }\r
}\r
\r
const jumpGitHub = (path) => {\r
  window.open(\`https://wupeng0725.github.io/\${path}/\`, '_blank')\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
#panel {\r
  position: fixed;\r
  z-index: 100;\r
  left: 0px;\r
  width: 300px;\r
  height: 100%;\r
  overflow: auto;\r
  border-right: 1px solid #e8e8e8;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.panel-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  border-bottom: 2px solid #ccc;\r
}\r
\r
.title {\r
  padding: 20px;\r
  color: aqua;\r
  font-size: 30px;\r
  font-weight: 700;\r
}\r
a {\r
  padding-right: 10px;\r
  img {\r
    width: 30px;\r
  }\r
}\r
\r
@mixin panel-item {\r
  background-color: #ccc;\r
  color: aquamarine;\r
}\r
\r
.panel-item {\r
  padding: 10px 20px;\r
  border-bottom: 1px solid #ccc;\r
  cursor: pointer;\r
\r
  &:hover {\r
    @include panel-item;\r
  }\r
\r
  &.selected {\r
    @include panel-item;\r
  }\r
}\r
</style>`,Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"})),Ze=`<template>\r
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
</style>`,en=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),nn=`<template>\r
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
<style></style>`,rn=Object.freeze(Object.defineProperty({__proto__:null,default:nn},Symbol.toStringTag,{value:"Module"})),tn=`<template>\r
  <div>\r
\r
  </div>\r
</template>\r
\r
<script setup>\r
\r
<\/script>\r
\r
<style lang="scss" scoped>\r
\r
</style>`,on=Object.freeze(Object.defineProperty({__proto__:null,default:tn},Symbol.toStringTag,{value:"Module"}));
