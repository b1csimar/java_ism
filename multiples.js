function printNumbers() {
    let output = '';
    let skipCounter = 1; 
    let currentDivisibleBy3 = 0; 
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            currentDivisibleBy3++;
            if (currentDivisibleBy3 === skipCounter) {
                skipCounter++;
                continue; 
            }
        }
        output += i + ', ';
    }
    output = output.slice(0, -2);
    document.getElementById('output').textContent = output;
}