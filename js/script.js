// DOM Elements
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
// Variables

// Functions
// Set up the analog Clock Time
function analogClock() {
  const currentTime = new Date();
  const secondsValue = currentTime.getSeconds() / 60;
  const minutesValue = (secondsValue + currentTime.getMinutes()) / 60;
  const hoursValue = (minutesValue + currentTime.getHours()) / 12;
  
  rotationHand(secondHand, secondsValue);
  rotationHand(minuteHand, minutesValue);
  rotationHand(hourHand, hoursValue);
}

// Set up the time Hand Rotation Degree
function rotationHand(element, ratio) {
  element.style.setProperty("--rotation", ratio * 360);
}

setInterval(analogClock, 1000);
analogClock();

// Set up the Digital Clock Time
// DOM Elements
const digital = document.querySelector(".digitalClock");

// Functions
const digitalClock = () => {
  const currentTime = new Date();
  let digitalClock = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  digital.textContent = digitalClock;
};

setInterval(digitalClock, 1000);
digitalClock();
