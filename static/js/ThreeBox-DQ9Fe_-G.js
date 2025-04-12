import{W as b,P as T,b as y,c as R,D as M,z as j,M as z}from"./three-DttFUdCx.js";import{r as H,o as W,a as A,c as P,b as I}from"./highlight-_NCVw0wD.js";const B=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
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
  cubes = []\r
  canvasRef.value = null\r
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
<\/script>\r
\r
<style lang="scss" scoped></style>`,N=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),S=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
// 导入轨道控制器\r
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'\r
// 导入tween\r
import * as TWEEN from 'three/addons/libs/tween.module.js'\r
// 导入lil-gui\r
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'\r
import { onBeforeUnmount, onMounted, ref } from 'vue'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null, controls = null, gui = null\r
\r
function main() {\r
  // 创建渲染器\r
  renderer = new THREE.WebGLRenderer({\r
    canvas: canvasRef.value,\r
    antialias: true // 抗锯齿\r
  })\r
  // 创建透视相机\r
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)\r
  camera.position.set(2, 2, 5)\r
  camera.lookAt(0, 0, 0)\r
\r
  // 创建场景\r
  scene = new THREE.Scene()\r
\r
  {\r
    // 添加世界坐标辅助器\r
    const axeshelper = new THREE.AxesHelper(5)\r
    scene.add(axeshelper)\r
    // 添加轨道控制器\r
    controls = new OrbitControls(camera, renderer.domElement)\r
  }\r
\r
  const geometry = new THREE.SphereGeometry(1, 32, 32)\r
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })\r
  const cube = new THREE.Mesh(geometry, material)\r
  scene.add(cube)\r
  cube.name = '球体'\r
  cube.position.x = -4\r
\r
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1)\r
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })\r
  const box = new THREE.Mesh(boxGeometry, boxMaterial)\r
  scene.add(box)\r
  box.name = '正方体'\r
  box.position.x = 4\r
\r
  // new TWEEN.Tween(cube.scale)\r
  //   .to({ x: 4, y: 4 }, 1000) // 动画结束位置和时间\r
  //   .easing(TWEEN.Easing.Quadratic.InOut) // 缓动函数\r
  //   .repeat(Infinity) // 无限循环\r
  //   .yoyo(true) // 往返动画\r
  //   .delay(50) // 延迟进行--解决闪烁问题\r
  //   .start() // 开始动画\r
  // new TWEEN.Tween(cube.position)\r
  //   .to({ x: 4 }, 1000) // 动画结束位置和时间\r
  //   .easing(TWEEN.Easing.Quadratic.InOut) // 缓动函数\r
  //   .repeat(Infinity) // 无限循环\r
  //   .yoyo(true) // 往返动画\r
  //   .delay(50) // 延迟进行--解决闪烁问题\r
  //   .start() // 开始动画\r
\r
  // 相机飞行\r
  // camera.lookAt(0, 0, 0)\r
  // new TWEEN.Tween(camera.position)\r
  //   .to({ x: 15, y: 15, z: 15 }, 1000)\r
  //   // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行\r
  //   .onUpdate(function () {\r
  //     camera.lookAt(0, 0, 0)\r
  //   })\r
  //   .start()\r
\r
  // 圆周运动参数\r
  // const radius = 20   // 圆周半径\r
  // // 创建Tween动画\r
  // new TWEEN.Tween({ angle: 0 })\r
  //   .to({ angle: Math.PI * 2 }, 5000) // 5秒完成一圈\r
  //   .easing(TWEEN.Easing.Linear.None) // 线性缓动\r
  //   .onUpdate((obj) => {\r
  //     // 计算相机新位置\r
  //     camera.position.x = radius * Math.cos(obj.angle)\r
  //     camera.position.z = radius * Math.sin(obj.angle)\r
  //     camera.lookAt(0, 0, 0) // 始终看向圆心\r
  //   })\r
  //   .repeat(Infinity) // 无限循环\r
  //   .start()\r
  \r
  // 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态\r
  // pos: 三维向量Vector3，表示动画结束相机位置\r
  // target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点\r
  function createCameraTween(endPos, endTarget) {\r
    new TWEEN.Tween({\r
      // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点\r
      x: camera.position.x,\r
      y: camera.position.y,\r
      z: camera.position.z,\r
      tx: controls.target.x,\r
      ty: controls.target.y,\r
      tz: controls.target.z,\r
    })\r
      .to({\r
        // 动画结束相机位置坐标\r
        x: endPos.x,\r
        y: endPos.y,\r
        z: endPos.z,\r
        // 动画结束相机指向的目标观察点\r
        tx: endTarget.x,\r
        ty: endTarget.y,\r
        tz: endTarget.z,\r
      }, 1000)\r
      .onUpdate(function (obj) {\r
        // 动态改变相机位置\r
        camera.position.set(obj.x, obj.y, obj.z)\r
        // 动态计算相机视线\r
        // camera.lookAt(obj.tx, obj.ty, obj.tz);\r
        controls.target.set(obj.tx, obj.ty, obj.tz)\r
        // controls.update()//内部会执行.lookAt()\r
      })\r
      .start()\r
  }\r
  let eventObj = {\r
    near1: function () {\r
      const A = scene.getObjectByName('球体')\r
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行\r
      const pos = new THREE.Vector3()\r
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标\r
      // 相机飞行到的位置和观察目标拉开一定的距离\r
      const pos2 = pos.clone().addScalar(6)\r
      pos2.x = pos.x - 6\r
      console.log(pos2);\r
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近\r
      createCameraTween(pos2, controls.target)\r
    },\r
    near2: function () {\r
      const A = scene.getObjectByName('正方体')\r
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行\r
      const pos = new THREE.Vector3()\r
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标\r
      // 相机飞行到的位置和观察目标拉开一定的距离\r
      const pos2 = pos.clone().addScalar(6)\r
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近\r
      createCameraTween(pos2, controls.target)\r
    },\r
    near3: function () {\r
      const A = scene.getObjectByName('正方体')\r
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行\r
      const pos = new THREE.Vector3()\r
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标\r
      // 相机飞行到的位置和观察目标拉开一定的距离\r
      const pos2 = pos.clone().addScalar(2)\r
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近\r
      createCameraTween(pos2, pos)\r
    },\r
    near4: function () {\r
      const A = scene.getObjectByName('球体')\r
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行\r
      const pos = new THREE.Vector3()\r
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标\r
      // 相机飞行到的位置和观察目标拉开一定的距离\r
      const pos2 = pos.clone().addScalar(2)\r
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近\r
      createCameraTween(pos2, pos)\r
    },\r
  }\r
  // 创建GUI\r
  gui = new GUI()\r
  // 添加按钮\r
  gui.add(eventObj, 'near1').name('飞行观察球体')\r
  gui.add(eventObj, 'near2').name('飞行观察正方体')\r
  gui.add(eventObj, 'near3').name('靠近放大观察正方体')\r
  gui.add(eventObj, 'near4').name('靠近放大观察球体')\r
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
  gui.destroy() // 销毁GUI\r
  gui = null\r
}\r
\r
function animate() {\r
  controls.update() // 更新控制器\r
  if (resizeRendererToDisplaySize(renderer)) {\r
    const canvas = renderer.domElement\r
    camera.aspect = canvas.clientWidth / canvas.clientHeight\r
    camera.updateProjectionMatrix()\r
  }\r
  TWEEN.update() // 更新tween动画\r
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
<style lang="scss" scoped></style>`,C=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),U={__name:"ThreeBox",setup(_){const d=H(null);let t=null,a=null,o=null,m=null,u=[];function f(){t=new b({canvas:d.value,antialias:!0});const e=75,n=window.innerWidth/window.innerHeight,s=.1,i=1e3;a=new T(e,n,s,i),a.position.z=3,o=new y;const r=new R(1,1,1);function c(l,E,x){const v=new j({color:E}),p=new z(l,v);return o.add(p),p.position.x=x,p}u=[c(r,4500104,0),c(r,8930474,-2),c(r,11176004,2)];{const l=new M(16777215,3);l.position.set(-1,2,4),o.add(l)}}function g(e){const n=e.domElement,s=window.devicePixelRatio,i=Math.floor(n.clientWidth*s),r=Math.floor(n.clientHeight*s),c=n.width!==i||n.height!==r;return c&&e.setSize(i,r,!1),c}const w=()=>{m&&cancelAnimationFrame(m),o.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),t.dispose(),t.forceContextLoss(),t.domElement=null,t=null,o=null,a=null,u=[],d.value=null};function h(e){if(e*=.001,u.forEach((n,s)=>{const i=1+s*.1,r=e*i;n.rotation.x=r,n.rotation.y=r}),g(t)){const n=t.domElement;a.aspect=n.clientWidth/n.clientHeight,a.updateProjectionMatrix()}t.render(o,a),m=requestAnimationFrame(h)}return W(()=>{f(),requestAnimationFrame(h)}),A(()=>{w()}),(e,n)=>(I(),P("canvas",{ref_key:"canvasRef",ref:d},null,512))}},G=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{N as T,C as a,G as b};
