// Create the scene
const scene = new THREE.Scene();

// Set up a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add some lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Debug message to ensure script is running
console.log('Script is running.');

// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load(
    './kai-3D.glb', // Direct download link
    (gltf) => {
        console.log('Model loaded successfully.');
        scene.add(gltf.scene);
        animate();
    },
    undefined,
    (error) => {
        console.error('An error occurred:', error);
    }
);

// Create the animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
