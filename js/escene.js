//escenario
const scene=new THREE.Scene();

scene.background = new THREE.Color(0x007AAD)
 
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.ConeGeometry( 5, 10, 22 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('/img/ladrillos.jpg')

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial( );
material.matcap= matcap;
material.flatShading=true;

const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 1;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    
	renderer.render( scene, camera );
    camera.position.z=14
    
    

}
animate();








