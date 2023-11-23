const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
}

animate();