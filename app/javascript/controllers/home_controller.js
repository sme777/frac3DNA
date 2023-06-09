import { Controller } from "@hotwired/stimulus"
import * as THREE from "three";

// Connects to data-controller="home"
export default class extends Controller {
  connect() {
    console.log("hello world ZZZZZZ!")

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(this.renderer.domElement);
    this.pointLight = new THREE.PointLight(0xffffff);
    this.pointLight.position.set(8, 4, -5);
    this.item = this.makeCube();
    this.item.position.set(0, 0, 0);
    console.log(this.item);
    this.scene.add(this.item);
    this.camera.position.z = 15;
    console.log(this.scene, this.camera)
    this.render();
  }

  makeCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( {color: 0xff0000} )
    return new THREE.Mesh(geometry, material);
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.item.rotation.x += 0.01;
    this.item.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
