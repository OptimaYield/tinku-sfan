const btn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");

btn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});
