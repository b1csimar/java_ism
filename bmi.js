let mass_in_kg = 81.2;
let height_in_m = 1.78;

let bmi = mass_in_kg / (height_in_m ** 2);

document.getElementById('bmi').textContent = `Body Mass Index (BMI): ${bmi.toFixed(2)}`;