
const batteryProcent = document.querySelector(".battery");



//  clock

const getTimeString = ({ hours, minutes, seconds, zone }) => {
  if (minutes / 10 < 1) {
    minutes = "0" + minutes;
  }
  if (seconds / 10 < 1) {
    seconds = "0" + seconds;
  }
  return `${hours}:${minutes}:${seconds} ${zone}`;
};
const renderTime = () => {
  let currentTime = document.getElementById("current-time");
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let zone = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = hours % 12;
  }
  const timeString = getTimeString({ hours, minutes, seconds, zone });
  currentTime.innerHTML = timeString;
};
setInterval(renderTime, 1000);

//  clock

// String value of current active alarm 
var alarmString = null;

// Handle Create Alarm submit
const handleSubmit = (event) => {
  // Prevent default action of reloading the page
  event.preventDefault();
  const { hour, sec, min, zone } = document.forms[0];
  alarmString = getTimeString({
    hours: hour.value,
    seconds: sec.value,
    minutes: min.value,
    zone: zone.value
  });
  // Reset form after submit
  document.forms[0].reset();
};

// Attach submit event to the form
document.forms[0].addEventListener("submit", handleSubmit);


if ("navigator" in window && "getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    batteryQuvatti = battery.level;

    batteryProcent.innerHTML = `<p class="quvvat"> ${batteryQuvatti}%</p> `;
  });
} else {
}