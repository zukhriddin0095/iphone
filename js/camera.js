const videoElement = document.getElementById("videoElement");
openCameraButton.addEventListener("click", () => {
  // Kamerani ochish uchun ruxsat so'raladi
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
    })
    .catch((error) => {
      console.error("Kamerani ochishda xato yuz berdi:", error);
    });
});

openCameraButton.addEventListener("click", () => {
  // Kamerani ochish uchun ruxsat so'raladi
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
    })
    .catch((error) => {
      console.error("Kamerani ochishda xato yuz berdi:", error);
    });
});
