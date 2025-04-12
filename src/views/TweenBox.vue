<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 导入tween
import * as TWEEN from 'three/addons/libs/tween.module.js'
// 导入lil-gui
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null, controls = null, gui = null

function main() {
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true // 抗锯齿
  })
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(2, 2, 5)
  camera.lookAt(0, 0, 0)

  // 创建场景
  scene = new THREE.Scene()

  {
    // 添加世界坐标辅助器
    const axeshelper = new THREE.AxesHelper(5)
    scene.add(axeshelper)
    // 添加轨道控制器
    controls = new OrbitControls(camera, renderer.domElement)
  }

  const geometry = new THREE.SphereGeometry(1, 32, 32)
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  cube.name = '球体'
  cube.position.x = -4

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const box = new THREE.Mesh(boxGeometry, boxMaterial)
  scene.add(box)
  box.name = '正方体'
  box.position.x = 4

  // new TWEEN.Tween(cube.scale)
  //   .to({ x: 4, y: 4 }, 1000) // 动画结束位置和时间
  //   .easing(TWEEN.Easing.Quadratic.InOut) // 缓动函数
  //   .repeat(Infinity) // 无限循环
  //   .yoyo(true) // 往返动画
  //   .delay(50) // 延迟进行--解决闪烁问题
  //   .start() // 开始动画
  // new TWEEN.Tween(cube.position)
  //   .to({ x: 4 }, 1000) // 动画结束位置和时间
  //   .easing(TWEEN.Easing.Quadratic.InOut) // 缓动函数
  //   .repeat(Infinity) // 无限循环
  //   .yoyo(true) // 往返动画
  //   .delay(50) // 延迟进行--解决闪烁问题
  //   .start() // 开始动画

  // 相机飞行
  // camera.lookAt(0, 0, 0)
  // new TWEEN.Tween(camera.position)
  //   .to({ x: 15, y: 15, z: 15 }, 1000)
  //   // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行
  //   .onUpdate(function () {
  //     camera.lookAt(0, 0, 0)
  //   })
  //   .start()

  // 圆周运动参数
  // const radius = 20   // 圆周半径
  // // 创建Tween动画
  // new TWEEN.Tween({ angle: 0 })
  //   .to({ angle: Math.PI * 2 }, 5000) // 5秒完成一圈
  //   .easing(TWEEN.Easing.Linear.None) // 线性缓动
  //   .onUpdate((obj) => {
  //     // 计算相机新位置
  //     camera.position.x = radius * Math.cos(obj.angle)
  //     camera.position.z = radius * Math.sin(obj.angle)
  //     camera.lookAt(0, 0, 0) // 始终看向圆心
  //   })
  //   .repeat(Infinity) // 无限循环
  //   .start()
  
  // 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态
  // pos: 三维向量Vector3，表示动画结束相机位置
  // target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点
  function createCameraTween(endPos, endTarget) {
    new TWEEN.Tween({
      // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
      tx: controls.target.x,
      ty: controls.target.y,
      tz: controls.target.z,
    })
      .to({
        // 动画结束相机位置坐标
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        // 动画结束相机指向的目标观察点
        tx: endTarget.x,
        ty: endTarget.y,
        tz: endTarget.z,
      }, 1000)
      .onUpdate(function (obj) {
        // 动态改变相机位置
        camera.position.set(obj.x, obj.y, obj.z)
        // 动态计算相机视线
        // camera.lookAt(obj.tx, obj.ty, obj.tz);
        controls.target.set(obj.tx, obj.ty, obj.tz)
        // controls.update()//内部会执行.lookAt()
      })
      .start()
  }
  let eventObj = {
    near1: function () {
      const A = scene.getObjectByName('球体')
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行
      const pos = new THREE.Vector3()
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标
      // 相机飞行到的位置和观察目标拉开一定的距离
      const pos2 = pos.clone().addScalar(6)
      pos2.x = pos.x - 6
      console.log(pos2);
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
      createCameraTween(pos2, controls.target)
    },
    near2: function () {
      const A = scene.getObjectByName('正方体')
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行
      const pos = new THREE.Vector3()
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标
      // 相机飞行到的位置和观察目标拉开一定的距离
      const pos2 = pos.clone().addScalar(6)
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
      createCameraTween(pos2, controls.target)
    },
    near3: function () {
      const A = scene.getObjectByName('正方体')
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行
      const pos = new THREE.Vector3()
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标
      // 相机飞行到的位置和观察目标拉开一定的距离
      const pos2 = pos.clone().addScalar(2)
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
      createCameraTween(pos2, pos)
    },
    near4: function () {
      const A = scene.getObjectByName('球体')
      // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行
      const pos = new THREE.Vector3()
      A.getWorldPosition(pos) //获取三维场景中某个对象世界坐标
      // 相机飞行到的位置和观察目标拉开一定的距离
      const pos2 = pos.clone().addScalar(2)
      // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
      createCameraTween(pos2, pos)
    },
  }
  // 创建GUI
  gui = new GUI()
  // 添加按钮
  gui.add(eventObj, 'near1').name('飞行观察球体')
  gui.add(eventObj, 'near2').name('飞行观察正方体')
  gui.add(eventObj, 'near3').name('靠近放大观察正方体')
  gui.add(eventObj, 'near4').name('靠近放大观察球体')
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

  // 4. 销毁控制器
  controls.dispose()
  controls = null

  // 5. 清理引用
  scene = null
  camera = null
  canvasRef.value = null
  gui.destroy() // 销毁GUI
  gui = null
}

function animate() {
  controls.update() // 更新控制器
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }
  TWEEN.update() // 更新tween动画
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