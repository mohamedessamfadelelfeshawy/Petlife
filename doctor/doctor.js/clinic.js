/* let first = document.getElementById("accept"); */
let first = document.querySelector(".main5 .accept");
const second = document.getElementById("notime");
let third = document.querySelector(".main5");

third.addEventListener("click", () => {
  
 /* first.textContent = "Ok";
  second.style.display = "none";
  first.style.marginTop="35%";*/
  
 third.firstElementChild.classList.add("accept");

});

