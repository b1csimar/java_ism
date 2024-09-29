function Letters() {
    let inputString = document.getElementById('textInput').value;
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (/^[a-zA-Z]$/.test(char)) {
            result += char + '\n'; 
        } else {
            break;
        }
    }
    document.getElementById('result').textContent = result || 'No valid letters found';
}