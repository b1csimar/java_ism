function printDivisors() {
    let output = '';
    let num = 10; 

    
    while (num <= 30) {
        output += num + ': '; 
        let divisor = 1; 
        let divisorsList = []; 

        while (divisor <= num) {
            if (num % divisor === 0) {
                divisorsList.push(divisor); 
            }
            divisor++;
        }
        output += divisorsList.join(', ') + ',\n';
        num++;
    }
    document.getElementById('output').textContent = output;
}