<template>
  auto-fill
  <div class="grid-container grid-container--fill">
    <div class="grid-element">1</div>
    <div class="grid-element">2</div>
    <div class="grid-element">3</div>
    <div class="grid-element">4</div>
    <div class="grid-element">5</div>
  </div>

  <hr />

  auto-fit
  <div class="grid-container grid-container--fit">
    <div class="grid-element">1</div>
    <div class="grid-element">2</div>
    <div class="grid-element">3</div>
    <div class="grid-element">4</div>
    <div class="grid-element">5</div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
}

.grid-container--fill {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

.grid-container--fit {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.grid-element {
  background-color: deepPink;
  padding: 20px;
  color: #fff;
  border: 1px solid #fff;
}

body {
  padding: 2em;
}

hr {
  margin: 80px;
}
</style>
