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
let camera = document.querySelector("body .push .photo1");
const Name = document.getElementById("name");
const Price = document.getElementById("price");
const delte = document.getElementById("delte");
let push = document.querySelector("body .push ");
let submit = document.querySelector(".line3 .ff2");



let num = 0;
setting.addEventListener("click", () => {
  num += 1;
  if (num % 2 != 0) {
    icon.style.display = "none";
    setting.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    camera.style.display="block";
    Name.removeAttribute("disabled");
    Name.style.border="1px solid  black";
    Price.removeAttribute("disabled");
    Price.style.border="1px solid black";
    delte.style.display = "block";
    add.style.display = "none";
    push.style.marginTop = "200px";



   
  } else {
    icon.style.display = "none";
    setting.innerHTML = '<i class="fa-solid fa-gear"></i>';
    camera.style.display="none";
    Name.setAttribute("disabled", "disabled");
    Name.style.border="none";
    Price.setAttribute("disabled", "disabled");
    Price.style.border="none";
    delte.style.display="none";
    add.style.display = "block";
    push.style.marginTop = "0";
   
  }
});
delte.addEventListener("click",()=>{
  push.style.display="none";
});

submit.addEventListener("click", () => {
  add2.style.display="none"
})






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





 add.addEventListener("click", () => {
  add2.style.display = "block";
});
