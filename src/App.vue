<template>
  <div id="app">
    <div class="preloader">
      <div class="preloader-icon"></div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

* {
  font-family: 'Roboto', sans-serif, Arial;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.preloader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  background: rgba(0, 0, 0, 0.2);
  display: none;
}

.preloader .preloader-icon {
  position: fixed;
  left: 40vw;
  top: 45%;
  width: 20vw;
  height: 20vw;
  z-index: 999;
  background: white;
  box-shadow: 0 10px 25px black;
  border-radius: 100%;
  border: 1px solid #040f31;
  /*background: white url("assets/images/svg/loading.svg");*/
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
</style>
