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
const blur = document.getElementsByClassName("blur")[0]
const rotateBtn = document.getElementById('rotate-btn');
const prefersDarkMode = localStorage.getItem('prefersDarkMode');



window.addEventListener('scroll', revealService);

function revealService(){
  var reveals = document.querySelectorAll('.slideIn, .spinin');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 410;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }

  }
}


var boxes = [
  { selector: ".boxone", threshold: 1400 },
  { selector: ".boxtwo", threshold: 1900 },
  { selector: ".boxthree", threshold: 2400 },
  { selector: ".boxfour", threshold: 2800 }
];

window.addEventListener("scroll", function() {
  boxes.forEach(function(box) {
    var el = document.querySelector(box.selector);
    if (window.scrollY > box.threshold) {
      el.classList.add("active");
    }
  });
});



window.addEventListener("scroll", function(){
  const elements = document.querySelectorAll(".headerwrap, .logobox, .topheader");
  const isScrolled = window.scrollY > 0;

  elements.forEach(element => {
    element.classList.toggle("sticky", isScrolled);
  });
});


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
  blur.classList.toggle('active')

})

const links = document.querySelectorAll('.nav-area a')

links.forEach(l => {
  l.addEventListener('click', () => {
    navBarLinks.classList.remove('active')
    navBarLines.classList.remove('active')
    navBarLinesOne.classList.remove('active')
    navBarLinesTwo.classList.remove('active')
    blur.classList.toggle('active')

  })
})



// add an event listener to the window that checks the screen width
window.addEventListener('resize', () => {
  if (window.innerWidth > 701) { // change to your desired limit
    navBarLinks.classList.remove('active');
    navBarLines.classList.remove('active')
    navBarLinesOne.classList.remove('active')
    navBarLinesTwo.classList.remove('active')
  }
});


if (prefersDarkMode === 'true') {
  document.body.classList.add('dark-mode');
  rotateBtn.classList.add('toggle-dark-mode');
}

rotateBtn.addEventListener('click', function() {
  this.classList.toggle('rotate');
  this.classList.toggle('toggle-dark-mode');

  const body = document.body;
  body.classList.toggle('dark-mode');
  localStorage.setItem('prefersDarkMode', body.classList.contains('dark-mode'));

  const container = document.querySelector('.darkcontainer');
  container.classList.toggle('button-pressed');
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex =  slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// we make them images go brrrr //

const carousel = document.querySelector('[data-carousel]');
const slides = carousel.querySelector('[data-slides]');
const nextButton = carousel.querySelector('[data-carousel-button="next"]');

let currentSlide = 0;

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.children.length;
  slides.children[currentSlide].setAttribute('data-active', '');
  slides.children[(currentSlide + slides.children.length - 1) % slides.children.length].removeAttribute('data-active');
}

let slideInterval = setInterval(showNextSlide, 8000);

nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  showNextSlide();
  slideInterval = setInterval(showNextSlide, 8000);
});
