<template>
  <div id="panel">
    <span class="title">Threejs 样例</span>
    <div class="panel-item" :class="item.value === currentPanel && 'selected'" v-for="(item, index) in panelList" :key="item.value" @click="onClickPanel(item)">
      {{ index + 1 }} - {{ item.title }}
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const emit = defineEmits(['componentChange'])

const panelList = [
  {
    title: '点光源',
    value: 'PointLight',
    type: 'demo'
  },
  {
    title: '聚光灯',
    value: 'SpotLight',
    type: 'demo'
  },
  {
    title: '3D圣诞贺卡',
    value: 'christmas-card',
    type: 'link'
  }
]

const currentPanel = ref('')

const onClickPanel = (item) => {
  if (item.type === 'demo') {
    currentPanel.value = item.value
    emit('componentChange', item.value)
  } else {
    jumpGitHub(item.value)
  }
}

const jumpGitHub = (path) => {
  window.open(`https://wupeng0725.github.io/${path}/`, '_blank')
}
</script>

<style lang="scss" scoped>
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

.title {
  padding: 20px;
  color: aqua;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 2px solid #ccc;
}

@mixin panel-item {
  background-color: #ccc;
  color: aquamarine;
}

.panel-item {
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    @include panel-item;
  }

  &.selected {
    @include panel-item;
  }
}
</style>