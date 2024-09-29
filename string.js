let myString = 'apple'; 
let result = '';

for (let i = 0; i < myString.length; i++) {
    result += myString[i] + '<br>'; 
}
document.getElementById('output').innerHTML = result;