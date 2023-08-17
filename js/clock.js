
const batteryProcent = document.querySelector(".battery");

const Hr = document.querySelector("#hr");
const Mn = document.querySelector("#mn");
const Sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  Hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  Mn.style.transform = `rotateZ(${mm}deg)`;
  Sc.style.transform = `rotateZ(${ss}deg)`;
});


if ("navigator" in window && "getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    batteryQuvatti = battery.level;

    batteryProcent.innerHTML = `<p class="quvvat"> ${batteryQuvatti}%</p> `;
  });
} else {
}