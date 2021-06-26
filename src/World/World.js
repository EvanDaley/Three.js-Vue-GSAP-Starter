import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createCube } from './components/cube.js';
import { createGround } from './components/ground.js'

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera
let renderer
let scene
let loop
let controls
let ground

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    console.log(container)

    ground = createGround()

    controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight, ground);

    new Resizer(container, camera, renderer);
  }

  async init() {
    const cube = await createCube()
    controls.target.copy(cube.position)

    loop.updatables.push(cube)

    scene.add(cube)

    console.log(scene)
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
