//escenario
const scene=new THREE.Scene();

scene.background = new THREE.Color(0x0000ff)
  
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* -------------------------------------------------------------------------------------------------------- */
//Geometria 

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('/img/luna.jpg')

const geometry = new THREE.BoxGeometry( 10, 10, 16 );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xff8800 } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap= matcap;
material.flatShading=true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/* -------------------------------------------------------------------------------------------------------- */
//GEOMETRIA2
const geometry2 = new THREE.CapsuleGeometry( 4, 4, 16, 32 );

const textureLoader2 = new THREE.TextureLoader();
const matcap2 = textureLoader2.load('/img/papel.jpg')

const edges2 = new THREE.EdgesGeometry( geometry2 );
const line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line2 );

const material2 = new THREE.MeshMatcapMaterial();
material2.matcap= matcap2;
material2.flatShading=true;

const capsule = new THREE.Mesh( geometry2, material2 );
scene.add( capsule );

/* -------------------------------------------------------------------------------------------------------- */
//GEOMETRIA3

const geometry3 = new THREE.ConeGeometry( 5, 10, 22 );

const textureLoader3 = new THREE.TextureLoader();
const matcap3 = textureLoader3.load('/img/ladrillos.jpg')

const edges3 = new THREE.EdgesGeometry( geometry3 );
const line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line3 );

const material3 = new THREE.MeshMatcapMaterial( );
material3.matcap= matcap3;
material3.flatShading=true;

const cone = new THREE.Mesh( geometry3, material3 );
scene.add( cone );

/* -------------------------------------------------------------------------------------------------------- */
//GEOMETRIA4

const geometry4 = new THREE.CylinderGeometry( 5, 5, 20, 32 );

const edges4 = new THREE.EdgesGeometry( geometry4 );
const line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 'red' } ) );
scene.add( line4 );

const material4 = new THREE.MeshNormalMaterial();
material4.flatShading= true;
const cylinder = new THREE.Mesh( geometry4, material4 );
scene.add( cylinder );

/* --------------------ALL CONTROLS---------------- */

/* const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 5;  */

/* const control = new THREE.PointerLockControls(camera, renderer.domElement);
document.getElementById('btnplay').onclick = () => {
    control.lock()
} */

/*const flyControls= new THREE.FlyControls(camera, renderer.domElement);

flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;*/

let objects= [cube,line,capsule,line2,cone,line3,cylinder,line4]


const controls = new THREE.DragControls(objects ,camera, renderer.domElement);

controls.deactivate();
controls.activate();

controls.addEventListener('hoveron', function(event){
    console.log(event.object);
    event.object.material.wireframe = true;
    event.object.scale.y *= 3;
});

controls.addEventListener('hoveroff', function(event){
    console.log(event.object);
    event.object.material.wireframe = false;
    event.object.scale.y /= 3;
});



camera.position.z = 8;

capsule.position.x =0;

cone.position.x = -14;
line3.position.x = -14;

cube.position.x= 20;
line.position.x= 20;

cylinder.position.x = -30;
line4.position.x = -30;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.02;
    line2.rotation.x += 0.01;
    line2.rotation.y += 0.02;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.02;
    line3.rotation.x += 0.01;
    line3.rotation.y += 0.02;

    
    cylinder.rotation.y += 0.02;
    
    line4.rotation.y += 0.02;
    
	renderer.render( scene, camera );
    camera.position.z=30
    
    //flyControls.update(0.5);
    
    

}
animate();