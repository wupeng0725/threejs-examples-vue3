const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/Texture-DVr0X6LZ.js","static/js/three-BrqDlLjI.js","static/js/RaycasterBox-nn2Kzmyr.js","static/js/highlight-DQLS5q9Z.js","static/css/Texture-ByHcGuB0.css","static/js/PrimitivesGeometry-BR5NG19r.js","static/js/GltfLoaderBox-DIcU7u3r.js","static/css/GltfLoaderBox-DlF2Hwfz.css"])))=>i.map(i=>d[i]);
import{r as C,c as H,e as K,b,d as T,F as oe,f as ce,u as le,n as ue,t as W,g as de,h as me,i as pe,j as he,k as ge,l as _e,m as fe,p as ve,q as Ee,s as Re,v as we,w as ye,x as xe,y as Le,z as Te,A as be,B as Me,C as Pe,D as ke,E as Be,G as Se,H as De,I as Ie,J as He,K as Ge,L as Ce,M as Ae,N as Oe,O as qe,P as je,Q as Ve,R as Fe,S as ze,T as Ue,U as $e,V as We,W as Ne,X as Ye,Y as V,Z as se,_ as Je,$ as Xe,a0 as re,a1 as Ke,a2 as I,a3 as Qe,a4 as Ze,a5 as er,a6 as rr,o as nr,a as tr}from"./highlight-DQLS5q9Z.js";import{aR as ar,aS as U,aT as Y,aU as $,Q as or,a9 as ne,a1 as sr,W as ir,P as cr,b as lr,c as ur,D as dr,z as mr,M as pr}from"./three-BrqDlLjI.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=a(r);fetch(r.href,l)}})();const hr="modulepreload",gr=function(e){return"/threejs-examples-vue3/"+e},te={},w=function(i,a,c){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),s=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(a.map(_=>{if(_=gr(_),_ in te)return;te[_]=!0;const y=_.endsWith(".css"),M=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${M}`))return;const u=document.createElement("link");if(u.rel=y?"stylesheet":hr,y||(u.as="script"),u.crossOrigin="",u.href=_,s&&u.setAttribute("nonce",s),document.head.appendChild(u),y)return new Promise((v,L)=>{u.addEventListener("load",v),u.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return r.then(n=>{for(const s of n||[])s.status==="rejected"&&l(s.reason);return i().catch(l)})},_r="/threejs-examples-vue3/github.svg",fr=[{title:"三个基础盒子",value:"ThreeBox",type:"demo"},{title:"几何体汇总",value:"PrimitivesGeometry",type:"demo"},{title:"轨道控制器",value:"OrbitControls",type:"demo"},{title:"lil-gui调试器",value:"GUI",type:"demo"},{title:"纹理贴图",value:"Texture",type:"demo"},{title:"GLTFLoader",value:"GltfLoaderBox",type:"demo"},{title:"光线投射",value:"RaycasterBox",type:"demo"},{title:"点光源",value:"PointLight",type:"demo"},{title:"聚光灯",value:"SpotLight",type:"demo"},{title:"3D圣诞贺卡",value:"christmas-card",type:"link"}],Q=(e,i)=>{const a=e.__vccOpts||e;for(const[c,r]of i)a[c]=r;return a},vr={key:0,id:"panel"},Er=["onClick"],Rr={__name:"Panel",emits:["componentChange"],setup(e,{emit:i}){const a=i,c=C(""),r=s=>{s.type==="demo"?(c.value=s.value,a("componentChange",s)):l(s.value)},l=s=>{window.open(`https://wupeng0725.github.io/${s}/`,"_blank")},n=C(!0);return(s,_)=>n.value?(b(),H("div",vr,[_[0]||(_[0]=T("div",{class:"panel-header"},[T("span",{class:"title"},"Threejs 样例"),T("a",{href:"https://github.com/wupeng0725/threejs-examples-vue3",target:"_blank",title:"Github源码"},[T("img",{src:_r,alt:"Github源码"})])],-1)),(b(!0),H(oe,null,ce(le(fr),(y,M)=>(b(),H("div",{class:ue(["panel-item",y.value===c.value&&"selected"]),key:y.value,onClick:u=>r(y)},W(M+1)+" - "+W(y.title),11,Er))),128))])):K("",!0)}},wr=Q(Rr,[["__scopeId","data-v-89821aa2"]]),yr={},xr={class:"empty"};function Lr(e,i){return b(),H("div",xr," Select an example from the sidebar ")}const Tr=Q(yr,[["render",Lr],["__scopeId","data-v-0f616578"]]);var J,ae;function br(){if(ae)return J;ae=1;var e=de();return e.registerLanguage("xml",me()),e.registerLanguage("bash",pe()),e.registerLanguage("c",he()),e.registerLanguage("cpp",ge()),e.registerLanguage("csharp",_e()),e.registerLanguage("css",fe()),e.registerLanguage("markdown",ve()),e.registerLanguage("diff",Ee()),e.registerLanguage("ruby",Re()),e.registerLanguage("go",we()),e.registerLanguage("graphql",ye()),e.registerLanguage("ini",xe()),e.registerLanguage("java",Le()),e.registerLanguage("javascript",Te()),e.registerLanguage("json",be()),e.registerLanguage("kotlin",Me()),e.registerLanguage("less",Pe()),e.registerLanguage("lua",ke()),e.registerLanguage("makefile",Be()),e.registerLanguage("perl",Se()),e.registerLanguage("objectivec",De()),e.registerLanguage("php",Ie()),e.registerLanguage("php-template",He()),e.registerLanguage("plaintext",Ge()),e.registerLanguage("python",Ce()),e.registerLanguage("python-repl",Ae()),e.registerLanguage("r",Oe()),e.registerLanguage("rust",qe()),e.registerLanguage("scss",je()),e.registerLanguage("shell",Ve()),e.registerLanguage("sql",Fe()),e.registerLanguage("swift",ze()),e.registerLanguage("yaml",Ue()),e.registerLanguage("typescript",$e()),e.registerLanguage("vbnet",We()),e.registerLanguage("wasm",Ne()),e.HighlightJS=e,e.default=e,J=e,J}br();const Mr={class:"model-header"},Pr={class:"model-title"},kr={class:"model-tag-box"},Br={class:"model-content"},Sr={__name:"CodeModel",props:{modelData:Object},setup(e){const i=e,a=C(!1),c=C("复制原文"),r=async()=>{try{await navigator.clipboard.writeText(i.modelData.code),c.value="复制成功"}catch{c.value="复制失败"}setTimeout(()=>{c.value="复制原文"},1500)},l=C(null),n=()=>{var s;(s=l.value)==null||s.requestFullscreen()};return(s,_)=>{const y=Ye("highlightjs");return b(),H(oe,null,[(b(),V(Je,{to:"body"},[a.value?(b(),H("div",{key:0,class:"modal",ref_key:"modelRef",ref:l},[T("div",Mr,[T("div",Pr,"源码："+W(e.modelData.title),1),T("div",kr,[T("span",{class:"model-tag-copy",onClick:r},W(c.value),1),T("span",{class:"model-tag-fullscreen",onClick:n},"全屏"),T("span",{class:"model-tag-close",onClick:_[0]||(_[0]=M=>a.value=!1)},"×")])]),T("div",Br,[se(y,{language:"XML",autodetect:!1,code:e.modelData.code},null,8,["code"])])],512)):K("",!0)])),T("span",{onClick:_[1]||(_[1]=M=>a.value=!0),class:"checkcode"},"查看源码")],64)}}},Dr=Q(Sr,[["__scopeId","data-v-103f8c73"]]),Ir=async e=>{try{const i=Object.assign({"/src/views/GUI.vue":()=>w(()=>import("./SpotLight-cCgZQGTg.js").then(r=>r.G),[]),"/src/views/GltfLoaderBox.vue":()=>w(()=>import("./ThreeBox-CpEsBlfF.js").then(r=>r.G),[]),"/src/views/OrbitControls.vue":()=>w(()=>Promise.resolve().then(()=>Vr),void 0),"/src/views/PointLight.vue":()=>w(()=>import("./SpotLight-cCgZQGTg.js").then(r=>r.P),[]),"/src/views/PrimitivesGeometry.vue":()=>w(()=>import("./ThreeBox-CpEsBlfF.js").then(r=>r.P),[]),"/src/views/RaycasterBox.vue":()=>w(()=>import("./SpotLight-cCgZQGTg.js").then(r=>r.R),[]),"/src/views/SpotLight.vue":()=>w(()=>import("./SpotLight-cCgZQGTg.js").then(r=>r.S),[]),"/src/views/Texture.vue":()=>w(()=>Promise.resolve().then(()=>zr),void 0),"/src/views/ThreeBox.vue":()=>w(()=>import("./ThreeBox-CpEsBlfF.js").then(r=>r.T),[])}),a=`/src/views/${e}.vue`;if(!i[a])throw new Error(`路径不存在: ${a}`);return(await i[a]()).default}catch{return""}};function Hr(e){return"/threejs-examples-vue3/"+e.replace(/^\//,"")}class Gr extends ar{constructor(i){super(i),this.type=U}parse(i){const n=function(t,m){switch(t){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(m||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(m||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(m||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(m||""))}},M=`
`,u=function(t,m,h){m=m||1024;let E=t.pos,f=-1,o=0,R="",p=String.fromCharCode.apply(null,new Uint16Array(t.subarray(E,E+128)));for(;0>(f=p.indexOf(M))&&o<m&&E<t.byteLength;)R+=p,o+=p.length,E+=128,p+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(E,E+128)));return-1<f?(t.pos+=o+f+1,R+p.slice(0,f)):!1},v=function(t){const m=/^#\?(\S+)/,h=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,g=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,f=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,o={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let R,p;for((t.pos>=t.byteLength||!(R=u(t)))&&n(1,"no header found"),(p=R.match(m))||n(3,"bad initial token"),o.valid|=1,o.programtype=p[1],o.string+=R+`
`;R=u(t),R!==!1;){if(o.string+=R+`
`,R.charAt(0)==="#"){o.comments+=R+`
`;continue}if((p=R.match(h))&&(o.gamma=parseFloat(p[1])),(p=R.match(g))&&(o.exposure=parseFloat(p[1])),(p=R.match(E))&&(o.valid|=2,o.format=p[1]),(p=R.match(f))&&(o.valid|=4,o.height=parseInt(p[1],10),o.width=parseInt(p[2],10)),o.valid&2&&o.valid&4)break}return o.valid&2||n(3,"missing format specifier"),o.valid&4||n(3,"missing image size specifier"),o},L=function(t,m,h){const g=m;if(g<8||g>32767||t[0]!==2||t[1]!==2||t[2]&128)return new Uint8Array(t);g!==(t[2]<<8|t[3])&&n(3,"wrong scanline width");const E=new Uint8Array(4*m*h);E.length||n(4,"unable to allocate buffer space");let f=0,o=0;const R=4*g,p=new Uint8Array(4),q=new Uint8Array(R);let Z=h;for(;Z>0&&o<t.byteLength;){o+4>t.byteLength&&n(1),p[0]=t[o++],p[1]=t[o++],p[2]=t[o++],p[3]=t[o++],(p[0]!=2||p[1]!=2||(p[2]<<8|p[3])!=g)&&n(3,"bad rgbe scanline format");let j=0,B;for(;j<R&&o<t.byteLength;){B=t[o++];const S=B>128;if(S&&(B-=128),(B===0||j+B>R)&&n(3,"bad scanline data"),S){const D=t[o++];for(let ee=0;ee<B;ee++)q[j++]=D}else q.set(t.subarray(o,o+B),j),j+=B,o+=B}const ie=g;for(let S=0;S<ie;S++){let D=0;E[f]=q[S+D],D+=g,E[f+1]=q[S+D],D+=g,E[f+2]=q[S+D],D+=g,E[f+3]=q[S+D],f+=4}Z--}return E},P=function(t,m,h,g){const E=t[m+3],f=Math.pow(2,E-128)/255;h[g+0]=t[m+0]*f,h[g+1]=t[m+1]*f,h[g+2]=t[m+2]*f,h[g+3]=1},d=function(t,m,h,g){const E=t[m+3],f=Math.pow(2,E-128)/255;h[g+0]=$.toHalfFloat(Math.min(t[m+0]*f,65504)),h[g+1]=$.toHalfFloat(Math.min(t[m+1]*f,65504)),h[g+2]=$.toHalfFloat(Math.min(t[m+2]*f,65504)),h[g+3]=$.toHalfFloat(1)},x=new Uint8Array(i);x.pos=0;const k=v(x),F=k.width,z=k.height,A=L(x.subarray(x.pos),F,z);let G,N,O;switch(this.type){case Y:O=A.length/4;const t=new Float32Array(O*4);for(let h=0;h<O;h++)P(A,h*4,t,h*4);G=t,N=Y;break;case U:O=A.length/4;const m=new Uint16Array(O*4);for(let h=0;h<O;h++)d(A,h*4,m,h*4);G=m,N=U;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:F,height:z,data:G,header:k.string,gamma:k.gamma,exposure:k.exposure,type:N}}setDataType(i){return this.type=i,this}load(i,a,c,r){function l(n,s){switch(n.type){case Y:case U:n.colorSpace=or,n.minFilter=ne,n.magFilter=ne,n.generateMipmaps=!1,n.flipY=!0;break}a&&a(n,s)}return super.load(i,l,c,r)}}const X={},Cr=e=>{const i=new sr,a=new Gr;return Promise.all(e.map(c=>X[c]?Promise.resolve():new Promise((r,l)=>{(c.includes("hdr")?a:i).load(Hr(c),s=>{X[c]=s,r()},void 0,s=>l(s))})))},Yr=e=>X[e],Ar={id:"wrapper"},Or={id:"viewer"},qr={__name:"App",setup(e){const i=I(()=>w(()=>import("./Texture-DVr0X6LZ.js").then(d=>d.P),__vite__mapDeps([0,1,2,3,4]))),a=I(()=>w(()=>import("./Texture-DVr0X6LZ.js").then(d=>d.S),__vite__mapDeps([0,1,2,3,4]))),c=I(()=>w(()=>Promise.resolve().then(()=>$r),void 0)),r=I(()=>w(()=>import("./RaycasterBox-nn2Kzmyr.js").then(d=>d.a),__vite__mapDeps([2,1,3]))),l=I(()=>w(()=>import("./PrimitivesGeometry-BR5NG19r.js"),__vite__mapDeps([5,1,3]))),n=I(()=>w(()=>import("./Texture-DVr0X6LZ.js").then(d=>d.G),__vite__mapDeps([0,1,2,3,4]))),s=I(()=>w(()=>import("./Texture-DVr0X6LZ.js").then(d=>d.T),__vite__mapDeps([0,1,2,3,4]))),_=I(()=>w(()=>import("./GltfLoaderBox-DIcU7u3r.js"),__vite__mapDeps([6,1,2,3,7]))),y=I(()=>w(()=>import("./RaycasterBox-nn2Kzmyr.js").then(d=>d.R),__vite__mapDeps([2,1,3])));Cr(["/texture/door/color.jpg","/texture/door/ambientOcclusion.jpg","/texture/door/alpha.jpg","/texture/door/specular.jpg"]).catch(d=>{});const u=Xe({code:"",title:""}),v={PointLight:i,SpotLight:a,ThreeBox:c,PrimitivesGeometry:l,OrbitControls:r,GUI:n,Texture:s,GltfLoaderBox:_,RaycasterBox:y},L=C(""),P=async({value:d,title:x})=>{L.value=d,u.code=await Ir(d),u.title=x};return(d,x)=>(b(),H("div",Ar,[se(wr,{onComponentChange:P}),T("div",Or,[L.value?(b(),V(Ze,{key:0},{fallback:re(()=>x[0]||(x[0]=[Qe(" Loading... ")])),default:re(()=>[(b(),V(Ke(v[L.value])))]),_:1})):(b(),V(Tr,{key:1})),L.value?(b(),V(Dr,{key:2,modelData:u},null,8,["modelData"])):K("",!0)])]))}};er(qr).use(rr).mount("#app");const jr=`<template>\r
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
<style lang="scss" scoped></style>`,Vr=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Fr=`<template>\r
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
  z-index: 9998;\r
  /* 确保文本在其他元素之上 */\r
}\r
</style>`,zr=Object.freeze(Object.defineProperty({__proto__:null,default:Fr},Symbol.toStringTag,{value:"Module"})),Ur={__name:"ThreeBox",setup(e){const i=C(null);let a=null,c=null,r=null,l=null,n=[];function s(){a=new ir({canvas:i.value,antialias:!0});const u=75,v=window.innerWidth/window.innerHeight,L=.1,P=1e3;c=new cr(u,v,L,P),c.position.z=3,r=new lr;const d=new ur(1,1,1);function x(k,F,z){const A=new mr({color:F}),G=new pr(k,A);return r.add(G),G.position.x=z,G}n=[x(d,4500104,0),x(d,8930474,-2),x(d,11176004,2)];{const k=new dr(16777215,3);k.position.set(-1,2,4),r.add(k)}}function _(u){const v=u.domElement,L=window.devicePixelRatio,P=Math.floor(v.clientWidth*L),d=Math.floor(v.clientHeight*L),x=v.width!==P||v.height!==d;return x&&u.setSize(P,d,!1),x}const y=()=>{l&&cancelAnimationFrame(l),r.traverse(u=>{u.isMesh&&(u.geometry.dispose(),u.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement=null,a=null,r=null,c=null,n=[],i.value=null};function M(u){if(u*=.001,n.forEach((v,L)=>{const P=1+L*.1,d=u*P;v.rotation.x=d,v.rotation.y=d}),_(a)){const v=a.domElement;c.aspect=v.clientWidth/v.clientHeight,c.updateProjectionMatrix()}a.render(r,c),l=requestAnimationFrame(M)}return nr(()=>{s(),requestAnimationFrame(M)}),tr(()=>{y()}),(u,v)=>(b(),H("canvas",{ref_key:"canvasRef",ref:i},null,512))}},$r=Object.freeze(Object.defineProperty({__proto__:null,default:Ur},Symbol.toStringTag,{value:"Module"}));export{Gr as R,Q as _,Yr as g,Hr as w};
