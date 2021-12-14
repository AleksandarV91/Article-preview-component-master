const btn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share-box-content");

btn.addEventListener("click", function () {
  shareBox.classList.toggle("show");
});
