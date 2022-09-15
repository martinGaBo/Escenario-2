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
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('/img/cafe.jpg')


const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap= matcap;
material.flatShading=true;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 8;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
	renderer.render( scene, camera );
    camera.position.z=12

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    
    

}
animate();