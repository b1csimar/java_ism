let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;

let totalSecondsInDay = 24 * 60 * 60;

let secondsPassed = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;

let remainingSeconds = totalSecondsInDay - secondsPassed;

document.getElementById('remaining-seconds').textContent = `Remaining seconds in the day: ${remainingSeconds}`;