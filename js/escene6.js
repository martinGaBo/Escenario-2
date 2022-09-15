//escenario
const scene=new THREE.Scene();

scene.background = new THREE.Color(0xFA8700)
  
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('/img/agua.jpg')

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xE36B2C } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap= matcap;
material.flatShading=true;
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 8;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    
	renderer.render( scene, camera );
    camera.position.z=31

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    
    

}
animate();