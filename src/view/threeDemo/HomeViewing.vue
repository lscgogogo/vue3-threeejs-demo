<template>
  <div class="page">
    <div id="webgl" ref="container" class="webgl"></div>
    <div class="map">
      <div ref="tagDiv" class="tag"></div>
      <img src="@/assets/img/open/homeViewing/map.gif" alt="" />
    </div>
    <div v-if="progress !== 100" class="loading"></div>
    <div v-if="progress !== 100" class="progress">
      <span>新房加载中：{{ progress }}%</span>
    </div>
    <div class="title">VR全景看房</div>
  </div>
</template>

<script setup>
import * as THREE from 'three'


const container = ref
console.log('container', container)
</script>

<style lang="scss" scoped></style>
