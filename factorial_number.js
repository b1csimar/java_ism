function calculateFactorial() {
    let number = parseInt(document.getElementById('numberInput').value);
    let factorial = 1;
    if (number === 0) {
        document.getElementById('result').textContent = `0 factorial is 1.`;
        return;
    }
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('result').textContent = `${number} factorial is ${factorial}.`;
}