const r=`<template>\r
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
let renderer = null, camera = null, scene = null, animationId = null, controls = null, cubes = []\r
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
  const geometry = new THREE.BoxGeometry(1, 1, 1)\r
  function makeInstance(geometry, color, x) {\r
    const material = new THREE.MeshBasicMaterial({ color })\r
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
    makeInstance(geometry, 0xaa8844, 2)\r
  ]\r
\r
\r
  // 设置三个正方体的包围盒\r
  let box = new THREE.Box3()\r
  for (let i = 0; i < cubes.length; i++) {\r
    const cube = cubes[i]\r
    let box3 = new THREE.Box3().setFromObject(cube)\r
    box.union(box3) // 合并包围盒\r
\r
    // 设置每个正方体的包围球\r
    cube.geometry.computeBoundingSphere() // 计算包围球\r
    // 计算包围球的中心和半径\r
    let sphere = cube.geometry.boundingSphere\r
    sphere.applyMatrix4(cube.matrixWorld) // 将包围球应用到正方体的世界矩阵上\r
    // 创建包围球辅助器\r
    let sphereHelper = new THREE.SphereGeometry(sphere.radius, 16, 16) // 创建包围球几何体\r
    let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }) // 创建包围球材质\r
    let sphereMesh = new THREE.Mesh(sphereHelper, sphereMaterial) // 创建包围球网格\r
    sphereMesh.position.copy(sphere.center) // 设置包围球的位置为包围球的中心\r
    scene.add(sphereMesh) // 将包围球网格添加到场景中\r
  }\r
  // 设置包围盒可视化辅助器\r
  let helper = new THREE.Box3Helper(box, 0xffff00) // 创建包围盒辅助器\r
  scene.add(helper)\r
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
  cubes = []\r
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
<style lang="scss" scoped></style>`,t=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),n=`<template>\r
  <canvas ref="canvasRef"></canvas>\r
</template>\r
\r
<script setup>\r
// 引入threejs\r
import * as THREE from 'three'\r
// 导入轨道控制器\r
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'\r
// 导入gltf加载器\r
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'\r
// 导入draco解码器\r
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'\r
import { ref, onMounted, onBeforeUnmount } from 'vue'\r
import { withBase } from '@/utils'\r
\r
const canvasRef = ref(null)\r
\r
let renderer = null, camera = null, scene = null, animationId = null,\r
  controls = null\r
\r
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
\r
    // 创建场景fog\r
    scene.fog = new THREE.Fog(0x999999, 0.1, 50)\r
    // 创建场景指数fog\r
    // scene.fog = new THREE.FogExp2(0x999999, 0.1)\r
    scene.background = new THREE.Color(0x999999)\r
\r
    // 实例化gltf加载器\r
    const gltfLoader = new GLTFLoader()\r
    gltfLoader.load(\r
      // 模型路径\r
      withBase('/model/Duck.glb'),\r
      // 加载完成回调\r
      (gltf) => {\r
        scene.add(gltf.scene)\r
      }\r
    )\r
    // 实例化draco加载器\r
    const dracoLoader = new DRACOLoader()\r
    // 设置draco路径\r
    dracoLoader.setDecoderPath(withBase('/draco/'))\r
    // 设置gltf加载器 draco解码器\r
    gltfLoader.setDRACOLoader(dracoLoader)\r
\r
    gltfLoader.load(\r
      // 模型路径\r
      withBase('/model/city.glb'),\r
      // 加载完成回调\r
      (gltf) => {\r
        scene.add(gltf.scene)\r
      }\r
    )\r
\r
    // 添加环境光源\r
    const light = new THREE.AmbientLight(0xffffff, 0.5) // 灯光颜色和强度\r
    scene.add(light) // 将灯光添加到场景中\r
    // 添加平行光源\r
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3) // 灯光颜色和强度\r
    directionalLight.position.set(-1, 2, 5) // 灯光位置\r
    scene.add(directionalLight) // 将灯光添加到场景中\r
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
</style>`,a=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),e=`<template>\r
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
</style>`,o=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));export{t as B,a as G,o as T};
