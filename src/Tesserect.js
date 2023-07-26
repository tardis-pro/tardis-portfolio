import * as React from 'react'
import * as THREE from 'three';


class Tesseract extends THREE.Mesh {

    constructor(radius) {
      super();
  
      const vertices = [
        // Front face
        new THREE.Vector3(radius, radius, radius),
        new THREE.Vector3(-radius, radius, radius),
        new THREE.Vector3(-radius, -radius, radius),
        new THREE.Vector3(radius, -radius, radius),
  
        // Back face
        new THREE.Vector3(radius, radius, -radius),
        new THREE.Vector3(-radius, radius, -radius),
        new THREE.Vector3(-radius, -radius, -radius),
        new THREE.Vector3(radius, -radius, -radius),
  
        // Left face
        new THREE.Vector3(-radius, radius, radius),
        new THREE.Vector3(-radius, radius, -radius),
        new THREE.Vector3(-radius, -radius, -radius),
        new THREE.Vector3(-radius, -radius, radius),
  
        // Right face
        new THREE.Vector3(radius, radius, radius),
        new THREE.Vector3(radius, radius, -radius),
        new THREE.Vector3(radius, -radius, -radius),
        new THREE.Vector3(radius, -radius, radius),
  
        // Top face
        new THREE.Vector3(radius, radius, radius),
        new THREE.Vector3(-radius, radius, radius),
        new THREE.Vector3(-radius, radius, -radius),
        new THREE.Vector3(radius, radius, -radius),
  
        // Bottom face
        new THREE.Vector3(radius, -radius, radius),
        new THREE.Vector3(-radius, -radius, radius),
        new THREE.Vector3(-radius, -radius, -radius),
        new THREE.Vector3(radius, -radius, -radius),
      ];
  
      const faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
      ];
  
      const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
      const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  
      this.add(new THREE.Mesh(geometry, material));
    }
  }
  
  export { Tesseract };