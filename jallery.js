var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
  fullImgBox.style.display = "grid";
  fullImg.src = pic;
}
function closeFullImg(){
  fullImgBox.style.display = "none";
}
