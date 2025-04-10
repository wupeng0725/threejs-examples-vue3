<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { withBase } from '@/utils'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null, objects = []

function main() {
  // 创建渲染器
  // 渲染器负责将你提供的所有数据渲染绘制到canvas上
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true // 抗锯齿
  })

  // 创建透视相机，近大远小
  const fov = 40 // fov是视野范围(field of view)的缩写，默认值50
  const aspect = window.innerWidth / window.innerHeight  // aspect指画布的宽高比，默认值1
  // near和far代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。
  const near = 0.1 // 默认值0.1
  const far = 1000 // 默认值2000
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  // 摄像机默认指向Z轴负方向，上方向朝向Y轴正方向。
  // 我们将会把立方体放置在坐标原点，所以我们需要往后移一下摄像机才能显示出物体。
  camera.position.z = 120

  // 创建场景，需要three.js绘制的东西都需要加入到scene中
  scene = new THREE.Scene()
  // 设置创建的背景--略浅的灰色
  scene.background = new THREE.Color(0xaaaaaa)

  // 效果好了一些但还是很难看出是三维的。我们来添加些光照效果
  // 先创建一盏平行光
  {
    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }

  const spread = 15

  function addObject(x, y, obj) {
    obj.position.x = x * spread
    obj.position.y = y * spread

    scene.add(obj)
    objects.push(obj)
  }

  function createMaterial() {
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
    })

    const hue = Math.random()
    const saturation = 1
    const luminance = .5
    material.color.setHSL(hue, saturation, luminance)

    return material
  }

  function addSolidGeometry(x, y, geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial())
    addObject(x, y, mesh)
  }
  function addLineGeometry(x, y, geometry) {
    const material = new THREE.LineBasicMaterial({ color: 0x000000 })
    const mesh = new THREE.LineSegments(geometry, material)
    addObject(x, y, mesh)

  }

  {
    // 立方体
    const width = 8
    const height = 8
    const depth = 8
    addSolidGeometry(-2, 2, new THREE.BoxGeometry(width, height, depth))
  }
  {
    // 圆形
    const radius = 7
    const segments = 24
    addSolidGeometry(- 1, 2, new THREE.CircleGeometry(radius, segments))
  }
  {
    // 圆锥体
    const radius = 6
    const height = 8
    const segments = 16
    addSolidGeometry(0, 2, new THREE.ConeGeometry(radius, height, segments))
  }
  {
    // 圆柱
    const radiusTop = 4
    const radiusBottom = 4
    const height = 8
    const radialSegments = 12
    addSolidGeometry(1, 2, new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments))
  }
  {
    // 12面体
    const radius = 7
    addSolidGeometry(2, 2, new THREE.DodecahedronGeometry(radius))
  }
  {
    // 挤压几何体
    const shape = new THREE.Shape()
    const x = - 2.5
    const y = - 5
    shape.moveTo(x + 2.5, y + 2.5)
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)

    const extrudeSettings = {
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 2,
    }

    addSolidGeometry(- 2, 1, new THREE.ExtrudeGeometry(shape, extrudeSettings))
  }
  {
    // 20面体
    const radius = 7
    addSolidGeometry(- 1, 1, new THREE.IcosahedronGeometry(radius))

  }
  {
    // 车削几何体
    const points = []
    for (let i = 0; i < 10; ++i) {

      points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * .8))

    }

    addSolidGeometry(0, 1, new THREE.LatheGeometry(points))
  }
  {
    // 八面体
    const radius = 7
    addSolidGeometry(1, 1, new THREE.OctahedronGeometry(radius))
  }
  {
    // 参数化几何体
    function klein(v, u, target) {

      u *= Math.PI
      v *= 2 * Math.PI
      u = u * 2

      let x
      let z

      if (u < Math.PI) {

        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v)
        z = - 8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v)

      } else {

        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI)
        z = - 8 * Math.sin(u)

      }

      const y = - 2 * (1 - Math.cos(u) / 2) * Math.sin(v)

      target.set(x, y, z).multiplyScalar(0.75)

    }

    const slices = 25
    const stacks = 25
    addSolidGeometry(2, 1, new ParametricGeometry(klein, slices, stacks))
  }
  {
    // 平面
    const width = 9
    const height = 9
    const widthSegments = 2
    const heightSegments = 2
    addSolidGeometry(- 2, 0, new THREE.PlaneGeometry(width, height, widthSegments, heightSegments))
  }
  {
    // 多面几何体
    const verticesOfCube = [
      - 1, - 1, - 1, 1, - 1, - 1, 1, 1, - 1, - 1, 1, - 1,
      - 1, - 1, 1, 1, - 1, 1, 1, 1, 1, - 1, 1, 1,
    ]
    const indicesOfFaces = [
      2, 1, 0, 0, 3, 2,
      0, 4, 7, 7, 3, 0,
      0, 1, 5, 5, 4, 0,
      1, 2, 6, 6, 5, 1,
      2, 3, 7, 7, 6, 2,
      4, 5, 6, 6, 7, 4,
    ]
    const radius = 7
    const detail = 2
    addSolidGeometry(- 1, 0, new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, radius, detail))
  }
  {
    // 圆环
    const innerRadius = 2
    const outerRadius = 7
    const segments = 18
    addSolidGeometry(0, 0, new THREE.RingGeometry(innerRadius, outerRadius, segments))
  }
  {
    // 形状--爱心
    const shape = new THREE.Shape()
    const x = - 2.5
    const y = - 5
    shape.moveTo(x + 2.5, y + 2.5)
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)
    addSolidGeometry(1, 0, new THREE.ShapeGeometry(shape))
  }
  {
    // 球
    const radius = 7
    const widthSegments = 32
    const heightSegments = 16
    addSolidGeometry(2, 0, new THREE.SphereGeometry(radius, widthSegments, heightSegments))
  }
  {
    // 四面体
    const radius = 7
    addSolidGeometry(- 2, - 1, new THREE.TetrahedronGeometry(radius))
  }
  {
    // 文本几何体
    const loader = new FontLoader()
    // promisify font loading
    function loadFont(url) {

      return new Promise((resolve, reject) => {

        loader.load(url, resolve, undefined, reject)

      })

    }

    async function doit() {

      const font = await loadFont(withBase('/fonts/helvetiker_regular.typeface.json'))
      const geometry = new TextGeometry('three.js', {
        font: font,
        size: 3.0,
        depth: .2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.15,
        bevelSize: .3,
        bevelSegments: 5,
      })
      const mesh = new THREE.Mesh(geometry, createMaterial())
      geometry.computeBoundingBox()
      geometry.boundingBox.getCenter(mesh.position).multiplyScalar(- 1)

      const parent = new THREE.Object3D()
      parent.add(mesh)

      addObject(- 1, - 1, parent)

    }

    doit()

  }
  {
    // 圆环几何体
    const radius = 5
    const tubeRadius = 2
    const radialSegments = 8
    const tubularSegments = 24
    addSolidGeometry(0, - 1, new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments))

  }
  {
    // 圆环扭结几何体
    const radius = 3.5
    const tube = 1.5
    const radialSegments = 8
    const tubularSegments = 64
    const p = 2
    const q = 3
    addSolidGeometry(1, - 1, new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q))
  }
  {
    // 管道
    class CustomSinCurve extends THREE.Curve {

      constructor(scale) {

        super()
        this.scale = scale

      }
      getPoint(t) {

        const tx = t * 3 - 1.5
        const ty = Math.sin(2 * Math.PI * t)
        const tz = 0
        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale)

      }
    }

    const path = new CustomSinCurve(4)
    const tubularSegments = 20
    const radius = 1
    const radialSegments = 8
    const closed = false
    addSolidGeometry(2, - 1, new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed))
  }
  {
    // 边缘几何体
    const width = 8
    const height = 8
    const depth = 8
    const thresholdAngle = 1
    addLineGeometry(- 1, - 2, new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth), thresholdAngle))
  }
  {
    // 线框几何体
    const width = 8
    const height = 8
    const depth = 8
    addLineGeometry(1, - 2, new THREE.WireframeGeometry(new THREE.BoxGeometry(width, height, depth)))
  }
  {
    // 点材质
    const radius = 7
    const widthSegments = 12
    const heightSegments = 8
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
    const material = new THREE.PointsMaterial({
      color: 'red',
      size: 3,     // in world units
      sizeAttenuation: false // 指定点的大小是否因相机深度而衰减。
    })
    const points = new THREE.Points(geometry, material)
    addObject(0, -2, points)
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

function animate(time) {
  time *= 0.001 // 将时间单位变为秒

  objects.forEach((obj, ndx) => {

    const speed = .1 + ndx * .05
    const rot = time * speed
    obj.rotation.x = rot
    obj.rotation.y = rot

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

// 清理资源
const cleanUp = () => {
  // 1. 停止动画循环
  if (animationId) cancelAnimationFrame(animationId)

  // 2. 释放Three.js资源
  for (const cube of objects) {
    scene.remove(cube)
  }
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
  objects = []
  canvasRef.value = null
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