//escenario
const scene=new THREE.Scene();

scene.background = new THREE.Color(0x0061FF)
 
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );


const material = new THREE.MeshStandardMaterial(0x000000);

material.color.set("#000000")
material.metalness = 0.9;
material.roughness = 0.4;

const directionalLight = new THREE.DirectionalLight(0xFFA600, 1200);

directionalLight.position.set(2,4,1);

scene.add(directionalLight);

/*const  ambientlight = new THREE.AmbientLight(0x0061FF, 4);
scene.add(ambientlight)*/

/* const pointlight = new THREE.PointLight(0x0061FF, 3)
scene.add(pointlight)
pointlight.position.set(5, 5, 5) */


const aro = new THREE.Mesh( geometry, material );
scene.add( aro );

camera.position.z = 1;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    
    aro.rotation.y += 0.01;

    line.rotation.y += 0.01;
    
	renderer.render( scene, camera );
    camera.position.z=24
    
    

} 
animate();