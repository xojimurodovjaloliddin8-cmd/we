// 3D SAHNA YARATISH
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('liquid-bg'),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

// GEOMETRIYA (TorusKnot - murakkab 3D shakl)
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshNormalMaterial({
    wireframe: true
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 30;

// ANIMATSIYA TSIKLI
function animate() {
    requestAnimationFrame(animate);

    // Shaklni aylantirish
    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Oyna o'lchami o'zgarganda saytni moslashtirish
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animatsiyani boshlash
animate();