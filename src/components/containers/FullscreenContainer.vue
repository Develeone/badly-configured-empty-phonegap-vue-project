<template>
  <div class="fullscreen-container">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "FullscreenContainer"
    }
</script>

<style scoped lang="stylus">
  .fullscreen-container
    background #3f2163 center fixed
    background-size cover
    min-height 100vh
    color white
    padding 15px 15%

  a
    color white
    text-decoration none
</style>
