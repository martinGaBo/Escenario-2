//escenario
const scene=new THREE.Scene();

scene.background = new THREE.Color(0x000000)

  
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('/img/papel.jpg')

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap= matcap;
material.flatShading=true;

const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 1;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.02;

    line.rotation.x += 0.01;
    line.rotation.y += 0.02;
    
	renderer.render( scene, camera );
    camera.position.z=3
    
    

}
animate();