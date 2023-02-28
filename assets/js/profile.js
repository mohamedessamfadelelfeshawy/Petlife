let setting = document.querySelector("body .middle .profile_photo .icon");
let icon = document.querySelector("body .middle .profile_photo .icon i");
let user_name = document.querySelector(
  "body .middle .profile_photo .data .name"
);
let user_email = document.querySelector(
  "body .middle .profile_photo .data .email"
);
let add = document.querySelector(".my_animal .add");
let pictures = document.querySelector(".my_animal .pictures");
let pic1 = document.querySelector(".my_animal .pictures .pic1");
let pic2 = document.querySelector(".my_animal .pictures .pic2");
let Rex = document.querySelector(".my_animal .pic1 .rex  ");
let Mavi = document.querySelector(".my_animal .pic2 .mavi ");
let rex = document.querySelector(".my_animal .pic1 .rex  div");
let mavi = document.querySelector(".my_animal .pic2 .mavi  div");
let profile_name = document.querySelector("body .middle form .d1");
let phone = document.querySelector("body .middle form .d2");
let adress = document.querySelector("body .middle form .d3");
let profile_photo = document.querySelector("body .middle .profile_photo");
let photo = document.querySelector(".middle .profile_photo .photo1");

/* adddtooooo*/
 let add2 = document.querySelector("body .add2");
 let add2_icon = document.querySelector("body .add2 .icon");
        


let num = 0;
let new_name;
setting.addEventListener("click", () => {
  num += 1;
  if (num % 2 != 0) {
    icon.style.display = "none";
    setting.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    rex.style.display = "block";
    mavi.style.display = "block";
    pic1.firstElementChild.style.display = "block";
    pic2.firstElementChild.style.display = "block";
    photo.style.display = "block";

    add.style.display = "block";

    Rex.style.bottom = "-45.5%";
    Mavi.style.bottom = "-45.5%";

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

    photo.addEventListener("click", () => {});

    rex.addEventListener("click", () => {
      pic1.style.display = "none";
      pic2.style.margin = "80px 27.5%  0px ";
    });
    mavi.addEventListener("click", () => {
      pic2.style.display = "none";
      pic1.style.margin = "80px 27.5%  0px ";
    });
    add.addEventListener("click", () => {
      add2.style.display = "block";
    });
    add2_icon.addEventListener("click", () => {
      add2.style.display = "none";
    });
  } else {
    icon.style.display = "none";
    setting.innerHTML = '<i class="fa-solid fa-gear"></i>';
    rex.style.display = "none";
    mavi.style.display = "none";
    add.style.display = "none";
    pic1.firstElementChild.style.display = "none";
    pic2.firstElementChild.style.display = "none";
    photo.style.display = "none";
    Rex.style.bottom = "-64%";
    Mavi.style.bottom = "-64%";

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


/* adddddddtooooooooooooooooooooooooooooooooooooo */

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


