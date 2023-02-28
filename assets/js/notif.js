let bell = document.getElementById("notif");
let bell2 = document.getElementById("notif1");
let exit = document.getElementById("recomendation");

bell2.addEventListener("click", () => {
  bell.style.display = "block";
});

exit.addEventListener("click", () => {
  bell.style.display = "none";
});
