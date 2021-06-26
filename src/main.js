// ====================
// Vue
// ====================

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// ====================
// THREE JS
// ====================

// import './style.css'
import { World } from './World/World.js';

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // call any async functions
  await world.init()

  // start the animation loop
  world.start();
}

main().catch(err => {
  console.error(err)
});
