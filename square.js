function drawSquare() {
    let size = parseInt(document.getElementById('sizeInput').value);
    if (size < 2 || isNaN(size)) {
        document.getElementById('output').textContent = "Please enter a size greater than or equal to 2.";
        return;
    }
    let square = '';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (row === 0 || row === size - 1 || col === 0 || col === size - 1 || row === col) {
                square += '%';
            } else {
                square += ' ';
            }
        }
        square += '\n';
    }
    document.getElementById('output').textContent = square;
}