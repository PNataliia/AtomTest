'use strict';
//Need to be Optimized
let elementScroll = document.querySelector("#header");
function Scroll () {
  let yPos = window.pageYOffset;
      if (yPos > 50) {
        elementScroll.classList.add("show-element");
      } else {
        elementScroll.classList.remove("show-element");
      }
  }
window.addEventListener("scroll", Scroll);

function dropdownContent (dropdownBtnSelector, dropdownMenuSelector, dropdownSearchSelector, listsItemSelector ){
  const dropdownBtn = document.querySelector(dropdownBtnSelector),
        dropdownMenu = document.querySelector(dropdownMenuSelector),
        dropdownSearch = document.getElementById(dropdownSearchSelector),
        listsItem = document.querySelectorAll(listsItemSelector);
  
    dropdownBtn.onclick = showMenu;
    dropdownSearch.onkeyup = filter;
    dropdownMenu.addEventListener("click", showItem);
    
    function showMenu() {
        dropdownMenu.classList.toggle("dropdown-show");
        if(dropdownMenu.classList.contains("dropdown-show")){
        document.querySelector('.e-select').style.transform = "rotate(-90deg)";
        }else{
        document.querySelector('.e-select').style.transform = "rotate(90deg)";
        }
    }
  
    function filter() {
        let input = dropdownSearch.value.toLowerCase();
        console.log(input);
        listsItem.forEach(item => {
        let itemText = item.innerText.toLowerCase();
        if (itemText.includes(input) === true) {
            item.style.display = "";
        } else {
            item.style.display = "none";
            console.log("")
        }
        });
    }
  
  function showItem(e) {
    if (e.target.classList.contains("e-option") === true) {
      let itemText = e.target.innerText;
      dropdownSearch.value = itemText;
    }else if(e.target.classList.contains("availability") !== false){
        itemText.style.color = "#e5e5e5" ;
        itemText.style.textDecoration ="line-through";
        itemText.style.pointerEvents = "none";
      }  
    showMenu();  
  }
}

dropdownContent ('[data-dropdown-size-btn]',".e-size-list","dropdownEsize",".e-size-option");
dropdownContent ('[data-dropdown-color-btn]',".e-color-list","dropdownEcolor",".e-color-option");


let availability = document.querySelectorAll(".availability");
availability.forEach(function (lay) {
    let availabilitySize = document.querySelectorAll(".availability .e-size");
    availabilitySize.forEach(function (item){
        item.style.color = "#e5e5e5" ;
        item.style.textDecoration ="line-through";
    });  
  lay.style.pointerEvents = "none"; 
});

const slide = document.querySelectorAll(".product-box");
const btnRight = document.querySelector("#next-button");

let currentPosition = 0;
let maxPosition = slide.length - 1;

const rightSlide = function () {
  if (currentPosition === maxPosition) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  let prevSlide;
  currentPosition == 0
    ? (prevSlide = maxPosition)
    : (prevSlide = currentPosition - 1);
  slide.forEach((s) => s.classList.remove("rightSlide"));
  slide.forEach((s) => s.classList.remove("active"));
  slide[currentPosition].classList.add("rightSlide");
  slide[currentPosition].classList.add("active");
  slide[prevSlide].classList.add("prevSlide");
  slide[prevSlide].classList.add("animatePrevSlide");
};


btnRight.addEventListener("click", rightSlide);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}


let toggleElementFooter = document.querySelectorAll('.footer-header-response');
toggleElementFooter.forEach(el => {
  el.addEventListener('click', (e)=> {
    e.currentTarget.classList.toggle('active');
  })
})

