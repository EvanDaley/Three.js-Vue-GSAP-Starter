import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(-10.5, 3.5, 12.5);

  return camera;
}

export { createCamera };
