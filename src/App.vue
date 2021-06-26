<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div id="scene-container"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
  font-family: Sans-Serif;
  color: #444;
  /* position: absolute; */
}

/* body {
    margin: 0;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    font-family: Sans-Serif;
    color: #444;
}*/

#app #scene-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
</style>
