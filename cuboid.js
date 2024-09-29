let length = 10.4;
let width = 13.5;
let height = 8.2;

let surfaceArea = 2 * (length * width + width * height + height * length);

let volume = length * width * height;

document.getElementById('surface-area').textContent = `Surface Area: ${surfaceArea.toFixed(2)}`;
document.getElementById('volume').textContent = `Volume: ${volume.toFixed(2)}`;