//escenario
const scene=new THREE.Scene();

scene.background = new THREE.Color(0x00B0FA)
  
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('/img/madera.jpg')


const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap= matcap;
material.flatShading=true;
const heart = new THREE.Mesh( geometry, material );
scene.add( heart );

camera.position.z = 8;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    heart.rotation.x += 0.01;
    heart.rotation.y += 0.01;
    
	renderer.render( scene, camera );
    camera.position.z=28

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    
    

}
animate();