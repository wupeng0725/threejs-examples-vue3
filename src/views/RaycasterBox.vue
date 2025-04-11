<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null, cubes = [],
  controls = null, cameraPole = null

function main() {
  // 创建渲染器
  // 渲染器负责将你提供的所有数据渲染绘制到canvas上
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true // 抗锯齿
  })

  // 创建透视相机，近大远小
  const fov = 75 // fov是视野范围(field of view)的缩写，默认值50
  const aspect = window.innerWidth / window.innerHeight  // aspect指画布的宽高比，默认值1
  // near和far代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。
  const near = 0.1 // 默认值0.1
  const far = 1000 // 默认值2000
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  // 摄像机默认指向Z轴负方向，上方向朝向Y轴正方向。
  // 我们将会把立方体放置在坐标原点，所以我们需要往后移一下摄像机才能显示出物体。
  camera.position.z = 30

  // 创建场景，需要three.js绘制的东西都需要加入到scene中
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#999')

  // 把摄像机放到自拍杆上 (把它添加为一个对象的子元素)
  // 如此，我们就能通过旋转自拍杆，来移动摄像机
  cameraPole = new THREE.Object3D()
  scene.add(cameraPole)
  cameraPole.add(camera)
  {
    // 添加环境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // 灯光颜色和强度
    scene.add(ambientLight) // 将灯光添加到场景中
    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }
  {
    // 添加轨道控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true // 启用阻尼（惯性）效果
  }

  // 生成100个立方体，每个立方体的颜色，位置，朝向，缩放都随机。
  const geometry = new THREE.BoxGeometry(1, 1, 1)

  function rand(min, max) {
    if (max === undefined) {
      max = min
      min = 0
    }
    return min + (max - min) * Math.random()
  }

  function randomColor() {
    return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`
  }

  const numObjects = 100
  for (let i = 0; i < numObjects; ++i) {
    const material = new THREE.MeshPhongMaterial({
      color: randomColor(),
    })

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    cube.position.set(rand(-20, 20), rand(-20, 20), rand(-20, 20))
    cube.rotation.set(rand(Math.PI), rand(Math.PI), 0)
    cube.scale.set(rand(3, 6), rand(3, 6), rand(3, 6))
  }

}
class PickHelper {
  constructor() {
    this.raycaster = new THREE.Raycaster()
    this.pickedObject = null
    this.pickedObjectSavedColor = 0
  }
  pick(normalizedPosition, scene, camera, time) {
    // 恢复上一个被拾取对象的颜色
    if (this.pickedObject) {
      this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor)
      this.pickedObject = undefined
    }

    // 发出射线
    this.raycaster.setFromCamera(normalizedPosition, camera)
    // 获取与射线相交的对象
    const intersectedObjects = this.raycaster.intersectObjects(scene.children)
    if (intersectedObjects.length) {
      // 找到第一个对象，它是离鼠标最近的对象
      this.pickedObject = intersectedObjects[0].object
      // 保存它的颜色
      this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex()
      // 设置它的发光为 黄色/红色闪烁
      this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFF00 : 0xFF0000)
    }
  }
}
const pickHelper = new PickHelper()
function getCanvasRelativePosition(event) {
  const rect = canvasRef.value.getBoundingClientRect()
  return {
    x: (event.clientX - rect.left) * canvasRef.value.width / rect.width,
    y: (event.clientY - rect.top) * canvasRef.value.height / rect.height,
  }
}

const pickPosition = { x: 0, y: 0 }
clearPickPosition()
function setPickPosition(event) {
  const pos = getCanvasRelativePosition(event)
  pickPosition.x = (pos.x / canvasRef.value.width) * 2 - 1
  pickPosition.y = (pos.y / canvasRef.value.height) * -2 + 1  // note we flip Y
}

function clearPickPosition() {
  // 对于触屏，不像鼠标总是能有一个位置坐标，
  // 如果用户不在触摸屏幕，我们希望停止拾取操作。
  // 因此，我们选取一个特别的值，表明什么都没选中
  pickPosition.x = -100000
  pickPosition.y = -100000
}

/**
 * 检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。
 * @param renderer 
 */
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement
  // 不处理分辨率
  const width = canvas.clientWidth
  const height = canvas.clientHeight
  // 
  // 处理分辨率显示--应对HD-DPI显示器
  // const pixelRatio = window.devicePixelRatio
  // const width = Math.floor(canvas.clientWidth * pixelRatio)
  // const height = Math.floor(canvas.clientHeight * pixelRatio)
  const needResize = canvas.width !== width || canvas.height !== height
  if (needResize) {
    renderer.setSize(width, height, false)
  }
  return needResize
}

function animate(time) {
  time *= 0.001 // 将时间单位变为秒

  cameraPole.rotation.y = time * .1

  pickHelper.pick(pickPosition, scene, camera, time)
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }
  // 将场景和摄像机传递给渲染器来渲染出整个场景
  renderer.render(scene, camera)
  animationId = requestAnimationFrame(animate)
}


// 清理资源
const cleanUp = () => {
  // 1. 停止动画循环
  if (animationId) cancelAnimationFrame(animationId)

  // 2. 释放Three.js资源
  scene.traverse(child => {
    if (child.isMesh) {
      child.geometry.dispose()
      child.material.dispose()
      // texture.dispose()   // 释放纹理（如果有）
    }
  })

  // 3. 销毁渲染器
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement = null
  renderer = null

  // 4. 清理引用
  scene = null
  camera = null
  cameraPole = null
  canvasRef.value = null
}

onMounted(() => {
  main()
  requestAnimationFrame(animate)

  window.addEventListener('mousemove', setPickPosition)
  window.addEventListener('mouseout', clearPickPosition)
  window.addEventListener('mouseleave', clearPickPosition)
})

onBeforeUnmount(() => {
  cleanUp()
  window.removeEventListener('mousemove', setPickPosition)
  window.removeEventListener('mouseout', clearPickPosition)
  window.removeEventListener('mouseleave', clearPickPosition)
})
</script>

<style lang="scss" scoped></style>