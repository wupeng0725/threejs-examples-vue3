<template>
	<div id="wrapper">
		<div id="panel">
			<h1>Threejs 样例</h1>
			<button @click="selectViewer('PointLight')">点光源</button>
			<button @click="selectViewer('SpotLight')">聚光灯</button>
			<button @click="jumpGitHub">3D圣诞贺卡</button>
		</div>
		<div id="viewer">
			<component :is="currentComponent" />
		</div>
	</div>
</template>

<script setup>
import { defineAsyncComponent, shallowRef } from 'vue'
// import PointLight from './components/PointLight.vue'
const PointLight = defineAsyncComponent(() => import('./components/PointLight.vue'))
// import SpotLight from './components/SpotLight.vue'
const SpotLight = defineAsyncComponent(() => import('./components/SpotLight.vue'))
const components = {
	'PointLight': PointLight,
	'SpotLight': SpotLight
}

const currentComponent = shallowRef(components['PointLight'])

const selectViewer = (comName) => {
	currentComponent.value = components[comName]
}

const jumpGitHub = () => {
	window.open('https://wupeng0725.github.io/christmas-card/', '_blank')
}
</script>

<style>
#app {
	width: 100%;
	height: 100vh;
}

#wrapper {
	width: 100%;
	height: 100%;
}

#panel {
	position: fixed;
	z-index: 100;
	left: 0px;
	width: 300px;
	height: 100%;
	overflow: auto;
	border-right: 1px solid #e8e8e8;
	display: flex;
	flex-direction: column;
}

#viewer {
	position: absolute;
	left: 300px;
	right: 0;
	width: calc(100% - 300px);
	height: 100%;
}
</style>
