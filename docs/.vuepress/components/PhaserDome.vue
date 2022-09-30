<script setup lang="ts">
import type { Types } from 'phaser'
import Phaser, { Core, Scene, WEBGL } from 'phaser'
import { computed, defineProps, onMounted, ref } from 'vue'
import {} from 'lodash-es'
const dom = ref<HTMLDivElement | null>(null)
let game: Phaser.Game
const a = ref<string>('123')
onMounted(() => {
  console.log('13213')
  // ;(dom.value as HTMLDivElement).innerHTML = 'onMounted'
  game = new Phaser.Game({
    ...config,
    parent: dom.value as HTMLDivElement,
  })
})
var config: Types.Core.GameConfig = {
  type: WEBGL,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
}

function preload() {
  // game.load.setBaseURL('https://labs.phaser.io')
  // this.load.image('sky', 'assets/skies/space3.png')
  // this.load.image('logo', 'assets/sprites/phaser3-logo.png')
  // this.load.image('red', 'assets/particles/red.png')
}
function create() {
  // this.add.image(400, 300, 'sky')
  // const particles = this.add.particles('red')
  // var emitter = particles.createEmitter({
  //   speed: 100,
  //   scale: { start: 1, end: 0 },
  //   blendMode: 'ADD',
  // })
  // var logo = this.physics.add.image(400, 100, 'logo')
  // logo.setVelocity(100, 200)
  // logo.setBounce(1, 1)
  // logo.setCollideWorldBounds(true)
  // emitter.startFollow(logo)
}
</script>

<template>
  <div ref="dom">{{ a }}</div>
</template>

<style scoped></style>
