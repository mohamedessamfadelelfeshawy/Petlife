const bell = document.getElementById("notif");
const bell2 = document.getElementById("notif1");
const exit = document.getElementById("recomendation");

bell2.addEventListener("click", () => {
  bell.style.display = "block";
});

exit.addEventListener("click", () => {
  bell.style.display = "none";
});

/* adddtooooo*/
let add2 = document.querySelector("body .add2");
let add2_icon = document.querySelector("body .add2 .icon");
let add = document.querySelector(".middle .add");

let setting = document.querySelector("body .middle .icon");
let icon = document.querySelector("body .middle .icon i");
let camera = document.querySelectorAll("body .push .photo1");
const Name = document.querySelectorAll(".name");
const Price = document.querySelectorAll(".price");
const delte = document.querySelectorAll(".choose");
let push = document.querySelectorAll("body .push ");
let sells = document.querySelectorAll(".sells");
let submit = document.querySelector(".line3 .ff2");

let num = 0;
setting.addEventListener("click", () => {
  num += 1;
  if (num % 2 != 0) {
    let x = 0;
    icon.style.display = "none";
    setting.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';

    for (x; x < Name.length; x++) {
      let y = x;

      Name[x].removeAttribute("disabled");
      Name[x].style.border = "1px solid  black";
      Price[x].removeAttribute("disabled");
      Price[x].style.border = "1px solid black";
      camera[x].style.display = "block";
      sells[x].style.display = "none";
      delte[x].style.display = "block";
      delte[x].addEventListener("click", () => {
        push[y].style.display = "none";
        y++;
      });
      add.style.display = "none";
      push[x].style.marginTop = "135px";

      $(function () {
        $("#addto").on("click", function () {
          $("#profile-image-upload2").click();
        });
      });
    }
  } else {
    icon.style.display = "none";
    setting.innerHTML = '<i class="fa-solid fa-gear"></i>';

    let x = 0;
    for (x; x < Name.length; x++) {
      let y = x;

      Name[x].setAttribute("disabled", "disabled");
      Name[x].style.border = "none";

      Price[x].setAttribute("disabled", "disabled");
      Price[x].style.border = "none";
      camera[x].style.display = "none";
      sells[x].style.display = "block";
      delte[x].style.display = "none";
      add.style.display = "block";
      push[x].style.marginTop = "0px";
    }
  }
});

/*  adddddddtooooooooooooooooooooooooooooooooooooo; */

function previewFilee() {
  var previeww = document.getElementById("profile-image2");
  let filee = document.getElementById("profile-image-upload2").files[0];
  var reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      previeww.src = reader.result;
    },
    false
  );

  if (filee) {
    reader.readAsDataURL(filee);
  }
}
$(function () {
  $("#addto").on("click", function () {
    $("#profile-image-upload2").click();
  });
});

add.addEventListener("click", () => {
  add2.style.display = "block";
});
submit.addEventListener("click", () => {
  add2.style.display = "none";
});

/*  cameraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa; */

function previewFile() {
  var preview = document.getElementById("profile-image1");
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
