const batteryProcent = document.querySelector(".battery");
const getTitle = document.querySelector(".gettexts");

if ("navigator" in window && "getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    batteryQuvatti = battery.level;

    batteryProcent.innerHTML = `<p class="quvvat"> ${batteryQuvatti}%</p> `;
  });
} else {
}

function convertAndDisplay() {
  let kirilText = document.getElementById("kirilInput").value;
  let latinText = convertToLatin(kirilText);
  document.getElementById("latinOutput").textContent = latinText;
}

    function convertToLatin(text) {
      let cyrillic = "а б д е ф г ҳ и ж к л м н о п қ р с т у в х й з";
      let latin = "a b d e f g h i j k l m n o p q r s t u v x y z";

      let cyrillicArr = cyrillic.split(" ");
      let latinArr = latin.split(" ");

      let convertedText = "";

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = cyrillicArr.indexOf(char);

        if (index !== -1) {
          convertedText += latinArr[index];
        } else {
          convertedText += char;
        }
      }

      return convertedText;
    }

    var kirilText = "зухриддин!";
var latinText = convertToLatin(kirilText);
console.log(latinText); 
