<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null, cubes = []

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
  camera.position.z = 3

  // 创建场景，需要three.js绘制的东西都需要加入到scene中
  scene = new THREE.Scene()


  // 创建一个立方几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  function makeInstance(geometry, color, x) {
    // 创建一个基本的材质并设置它的颜色. 颜色的值可以用css方式和十六进制来表示。
    // MeshBasicMaterial材质不会受到灯光的影响
    // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
    // 我们将他改成会受灯光影响的MeshPhongMaterial材质。
    const material = new THREE.MeshPhongMaterial({ color })
    // 创建一个网格(Mesh)对象，它包含了：
    // 1. 几何体(Geometry)(物体的形状)
    // 2. 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)
    // 3. 对象在场景中相对于他父对象的位置、朝向、和缩放
    const cube = new THREE.Mesh(geometry, material)

    // 将网格添加到场景中
    scene.add(cube)

    cube.position.x = x

    return cube
  }
  cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2),
  ]


  // 效果好了一些但还是很难看出是三维的。我们来添加些光照效果
  // 先创建一盏平行光
  {
    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }
}

/**
 * 检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。
 * @param renderer 
 */
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement
  // 不处理分辨率
  // const width = canvas.clientWidth
  // const height = canvas.clientHeight
  // 
  // 处理分辨率显示--应对HD-DPI显示器
  const pixelRatio = window.devicePixelRatio
  const width = Math.floor(canvas.clientWidth * pixelRatio)
  const height = Math.floor(canvas.clientHeight * pixelRatio)
  const needResize = canvas.width !== width || canvas.height !== height
  if (needResize) {
    renderer.setSize(width, height, false)
  }
  return needResize
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
  cubes = []
  canvasRef.value = null
}

function animate(time) {
  time *= 0.001 // 将时间单位变为秒

  cubes.forEach((cube, index) => {
    // 给每个立方体设置了稍微不同的旋转角度
    const speed = 1 + index * 0.1
    const rot = time * speed
    cube.rotation.x = rot
    cube.rotation.y = rot
  })
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }
  // 将场景和摄像机传递给渲染器来渲染出整个场景
  renderer.render(scene, camera)
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  main()
  requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cleanUp()
})
</script>

<style lang="scss" scoped></style>