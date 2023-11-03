const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    // Adjust for EST which is UTC-5
    now.setHours(now.getUTCHours() - 5);
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call setDate immediately to set the time
setDate();
// Then, update every second
setInterval(setDate, 1000);

const clock = document.querySelector('.clock');

for(let i = 0; i < 12; i++) {
    const marking = document.createElement("div");
    marking.classList.add("marking");
    marking.style.transform = `rotate(${i * 30}deg) translateY(-90px)`;
    clock.appendChild(marking);
}


