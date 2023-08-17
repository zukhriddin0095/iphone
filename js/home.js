const Instagram = document.querySelector(".instagram");
const Twitter = document.querySelector(".twitter");
const Youtube = document.querySelector(".youtube");
const Telegram = document.querySelector(".telegram");
const clock15 = document.querySelector(".clock");
const Alarm = document.querySelector(".alarm-set");
const latin = document.querySelector(".latin");

const batteryProcent = document.querySelector(".battery");

Instagram.addEventListener("click", () => {
  location =
    "https://instagram.com/zukhriddin0095?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D";
})


clock15.addEventListener("click", () => {
  location = "../clock.html";
});

Alarm.addEventListener("click", () => {
  location = "../alarm.html";
});

latin.addEventListener("click", () => {
  location = "../translatefonds.html";
});

if ("navigator" in window && "getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    batteryQuvatti = battery.level;

    batteryProcent.innerHTML = `<p class="quvvat"> ${batteryQuvatti}%</p> `;
  });
} else {
}
