const items = document.querySelectorAll('.accordion button');
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
const toggleButton = document.getElementsByClassName('hamburger')[0]
const navBarLinks = document.getElementsByClassName('nav-area')[0]
const navBarLines = document.getElementsByClassName('bar')[0]
const navBarLinesOne = document.getElementsByClassName('bar1')[0]
const navBarLinesTwo = document.getElementsByClassName('bar2')[0]


window.addEventListener('scroll', revealService);

function revealService(){
  var reveals = document.querySelectorAll('.slideIn, .spinin, .fadein');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }

  }
}



window.addEventListener("scroll", function(){
  var header = document.querySelector(".returnarrowwrap");
  header.classList.toggle("sticky", window.scrollY > 1000);
})

window.addEventListener("scroll", function(){
  var header = document.querySelector("navbox");
  header.classList.toggle("stickynav", window.scrollY > 300);
})

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
  fullImgBox.style.display = "grid";
  fullImg.src = pic;
}
function closeFullImg(){
  fullImgBox.style.display = "none";
}


lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);


toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
  navBarLines.classList.toggle('active')
  navBarLinesOne.classList.toggle('active')
  navBarLinesTwo.classList.toggle('active')

})

// GET ALL LINKS IN NAVBAR
const links = document.querySelectorAll('.nav-area a')

links.forEach(l => {
  // BIND CLICK EVENT ON ALL LINKS
  l.addEventListener('click', () => {
    // ON CLICK, REMOVE active CLASS FROM navBarLinks
    navBarLinks.classList.remove('active')
    navBarLines.classList.remove('active')
    navBarLinesOne.classList.remove('active')
    navBarLinesTwo.classList.remove('active')

  })
})
