


 let accept = document.querySelectorAll(".main5 .accept");
let dav = document.querySelectorAll(".content1");
let choose = document.querySelectorAll(".choose");

let x=0 ;

for (x ; x < accept.length; x++){
  let y = x;

  accept[x].addEventListener("click", () => {
    dav[y].style.display = "none";
    y++;
  });
}

/* choseeeeeeanotherrrrtimeeeeee */
let z = 0;

for (z; z < choose.length; z++) {
  let m = z;

  choose[z].addEventListener("click", () => {
    dav[m].style.display = "none";
    m++;
  });
}





