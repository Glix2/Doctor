const items = document.querySelectorAll('.accordion button');



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
  var header = document.querySelector("nav");
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
