function LeapYear() {
           
    let year = document.getElementById('year').value;
   
    let isLeap = false;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeap = true;
    }

    if (isLeap) {
        document.getElementById('result').textContent = `${year} is a leap year.`;
    } else {
        document.getElementById('result').textContent = `${year} is not a leap year.`;
    }
}