const n=`<template>\r
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
\r
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
  camera.position.set(1, 2, 4)\r
  // 创建场景\r
  scene = new THREE.Scene()\r
\r
  {\r
    // 添加环境光源\r
    const light = new THREE.AmbientLight(0xffffff, 0.5) // 灯光颜色和强度\r
    scene.add(light) // 将灯光添加到场景中\r
    // 添加平行光源\r
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3) // 灯光颜色和强度\r
    directionalLight.position.set(-1, 2, 5) // 灯光位置\r
    scene.add(directionalLight) // 将灯光添加到场景中\r
  }\r
  {\r
    // 添加世界坐标系\r
    const axesHelper = new THREE.AxesHelper(5)\r
    scene.add(axesHelper)\r
    // 添加轨道控制器\r
    controls = new OrbitControls(camera, renderer.domElement)\r
    controls.enableDamping = true // 启用阻尼（惯性）效果\r
    controls.dampingFactor = 0.25 // 阻尼系数\r
    // controls.autoRotate = true // 自动旋转\r
    // controls.autoRotateSpeed = 1.0 // 旋转速度\r
  }\r
  {\r
    const geometry = new THREE.BoxGeometry(1, 1, 1)\r
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })\r
    const cube = new THREE.Mesh(geometry, material)\r
    scene.add(cube)\r
\r
    gui = new GUI()\r
    gui.addColor({ color: 0x44aa88 }, 'color').name('立方体颜色').onChange((value) => {\r
      material.color.set(value)\r
    })\r
    gui.add(material, 'wireframe').name('线框模式')\r
    const folder = gui.addFolder('立方体位置')\r
    folder.add(cube.position, 'x').min(-10).max(10).step(1).name('立方体x轴位置').onChange((val) => {\r
      console.log('立方体x轴位置', val)\r
    })\r
    folder.add(cube.position, 'y').min(-10).max(10).step(1).name('立方体y轴位置').onFinishChange((val) => {\r
      console.log('立方体y轴位置', val)\r
    })\r
    folder.add(cube.position, 'z').min(-10).max(10).step(1).name('立方体z轴位置')\r
    const sizeFolder = gui.addFolder('立方体大小')\r
    sizeFolder.add(cube.scale, 'x').min(0.1).max(10).step(0.01).name('立方体X轴大小').onChange((val) => {\r
      console.log('立方体X轴大小', val)\r
    })\r
    sizeFolder.add(cube.scale, 'y').min(0.1).max(10).step(0.01).name('立方体Y轴大小').onChange((val) => {\r
      console.log('立方体Y轴大小', val)\r
    })\r
    sizeFolder.add(cube.scale, 'z').min(0.1).max(10).step(0.01).name('立方体Z轴大小').onChange((val) => {\r
      console.log('立方体Z轴大小', val)\r
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
\r
function animate() {\r
  controls.update() // 更新控制器\r
  if (resizeRendererToDisplaySize(renderer)) {\r
    const canvas = renderer.domElement\r
    camera.aspect = canvas.clientWidth / canvas.clientHeight\r
    camera.updateProjectionMatrix()\r
  }\r
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
<style lang="scss" scoped></style>`,t=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),r=`<template>\r
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
import { withBase } from '@/utils'\r
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
  {\r
    // 点材质\r
    const radius = 7\r
    const widthSegments = 12\r
    const heightSegments = 8\r
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)\r
    const material = new THREE.PointsMaterial({\r
      color: 'red',\r
      size: 3,     // in world units\r
      sizeAttenuation: false // 指定点的大小是否因相机深度而衰减。\r
    })\r
    const points = new THREE.Points(geometry, material)\r
    addObject(0, -2, points)\r
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
  for (const cube of objects) {\r
    scene.remove(cube)\r
  }\r
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
<style lang="scss" scoped></style>`,o=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),e=`<template>\r
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
<style lang="scss" scoped></style>`,a=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));export{t as G,o as P,a as T};
