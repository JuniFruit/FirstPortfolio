
import * as THREE from './node_modules/three/build/three.module.js';
//import  {OrbitControls}  from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

//const controls = new OrbitControls();

const container = document.getElementById('c');

//Loader

const textureLoad = new THREE.TextureLoader();
const normalTexture = textureLoad.load('/textures/GolftText.png');


//Scene
const scene = new THREE.Scene();

const color2 = new THREE.Color("rgb(255, 255, 255");


//Camera
const camera = new THREE.PerspectiveCamera( 75, 600 / 700, 0.1, 200 );
camera.position.z = 250;
camera.position.x = 25;
camera.position.y = 0;

//Renderer
const renderer = new THREE.WebGLRenderer({antialiases: true, alpha: true});
renderer.setSize( 600, 700, false );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild( renderer.domElement );


// Controls



//Light
const light = new THREE.PointLight( 0x404040, 6 );
light.position.set( -20, 55, 145 );

light.castShadow = true; // default false
scene.add( light );

const lightAmbient = new THREE.AmbientLight( 0x404040, 1 ); // soft white light
scene.add( lightAmbient );


//Objects
const geometry = new THREE.SphereGeometry( 100, 42, 42, 0, 6.3, 0, 3.1 );
const material = new THREE.MeshStandardMaterial({color: '#101d91'});
material.metalness = 0;
material.roughness = 0;
material.normalMap = normalTexture;

const sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0, 0, 5)
sphere.castShadow = true;
sphere.receiveShadow = false;

scene.add( sphere );







//Create a helper for the shadow camera (optional)
//const helper = new THREE.CameraHelper( light.shadow.camera );
//scene.add( helper );

//Control

let mouseX = 0;
let mouseY = 0;



let targetX = 0;
let targetY = 0;

// const windowX = window.innerWidht / 2;
// const windowY = window.innerHeight / 2;

//Resizing




const resizeScene = () => {
	if(window.innerWidth < 1300) {
	
	camera.aspect = 900 / 900;
	camera.updateProjectionMatrix();
	renderer.setSize( 700, 700 );
 } else if (window.innerWidth > 1300) {
	renderer.setSize( 800, 800 )
 }
}

// window.addEventListener('resize', resizeScene)


 //Controls events
 
 let isClicked = false;

container.addEventListener('mousedown', event => {
	
	isClicked = true;
	sphere.rotation.y = 0
});

container.addEventListener('mousemove', event => {
	if (isClicked) {
	
		
		
	}
 
});

container.addEventListener('mouseup', event => {
	isClicked = false;
	
})

const clock = new THREE.Clock();

const animate = function () {
	
	targetX = mouseX * .001;
	targetY = mouseY * .011;
	
	const elapsedTime = clock.getElapsedTime();
	
	sphere.rotation.y = .1 * elapsedTime;
	//sphere.rotation.y = targetY;
	sphere.rotation.x = targetX;
	
	//controls.update()
	renderer.render( scene, camera );

    window.requestAnimationFrame( animate );
};

animate();
