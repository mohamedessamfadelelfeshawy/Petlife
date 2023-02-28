const bell = document.getElementById("notif");
const bell2 = document.getElementById("notif1");
const exit = document.getElementById("recomendation");

bell2.addEventListener("click", () => {
  bell.style.display = "block";
});

exit.addEventListener("click", () => {
  bell.style.display = "none";
});




let setting = document.querySelector("body .middle .profile_photo .icon");
let icon = document.querySelector("body .middle .profile_photo .icon i");
let user_name = document.querySelector("body .middle .profile_photo .data .name");
let user_email = document.querySelector("body .middle .profile_photo .data .email");
let add = document.querySelector(".my_animal .add");
let pictures = document.querySelector(".my_animal .pictures");
let profile_name = document.querySelector("body .middle form .d1");
let phone = document.querySelector("body .middle form .d2");
let adress = document.querySelector("body .middle form .d3");
let profile_photo = document.querySelector("body .middle .profile_photo");
let photo = document.querySelector(".middle .profile_photo .photo1");

let num = 0;
let new_name;
setting.addEventListener("click", () => {
  num += 1;
  if (num % 2 != 0) {
    setting.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    photo.style.display = "block";
    profile_name.style.display = "block";
    profile_name.style.margin = "10px 0px 0px 60px";
    phone.style.position = "relative";
    phone.style.bottom = "-70px";
    profile_name.lastElementChild.style.background = "white";
    phone.lastElementChild.style.background = "white";
    adress.lastElementChild.style.background = "white";
    phone.lastElementChild.style.color = "black";
    adress.lastElementChild.style.color = "black";
    phone.lastElementChild.removeAttribute("disabled");
    adress.lastElementChild.removeAttribute("disabled");
  } else {
    setting.innerHTML = '<i class="fa-solid fa-gear"></i>';
        photo.style.display = "none";
    profile_name.style.display = "none";
    new_name = profile_name.lastElementChild.value;
    user_name.textContent = new_name;
    phone.style.bottom = "0px";
    phone.lastElementChild.style.background = "#70707038";
    phone.lastElementChild.style.color = "#707070";
    phone.lastElementChild.setAttribute("disabled", "disabled");
    adress.lastElementChild.style.color = "#707070";
    adress.lastElementChild.style.background = "#70707038";
    adress.lastElementChild.setAttribute("disabled", "disabled");
  }
});
/* cameraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */
function previewFile() {
  var preview = document.getElementById("profile-image1");
  /*  var file = document.querySelector("input[type=file]").files[0]; */
  let file = document.getElementById("profile-image-upload").files[0];
  var reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
$(function () {
  $("#wany").on("click", function () {
    $("#profile-image-upload").click();
  });
});
