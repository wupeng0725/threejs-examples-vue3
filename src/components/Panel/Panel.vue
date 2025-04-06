<template>
  <div id="panel">
    <div class="panel-header">
      <span class="title">Threejs 样例</span>
      <a href="https://github.com/wupeng0725/threejs-examples-vue3" target="_blank" title="Github源码">
        <img src="/github.svg" alt="Github源码">
      </a>
    </div>
    <div class="panel-item" :class="item.value === currentPanel && 'selected'" v-for="(item, index) in panelList"
      :key="item.value" @click="onClickPanel(item)">
      {{ index + 1 }} - {{ item.title }}
    </div>
  </div>
</template>

<script setup>
import { panelList } from './panel'
import { ref } from 'vue'

const emit = defineEmits(['componentChange'])

const currentPanel = ref('')

const onClickPanel = (item) => {
  if (item.type === 'demo') {
    currentPanel.value = item.value
    emit('componentChange', item)
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

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
}

.title {
  padding: 20px;
  color: aqua;
  font-size: 30px;
  font-weight: 700;
}
a {
  padding-right: 10px;
  img {
    width: 30px;
  }
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