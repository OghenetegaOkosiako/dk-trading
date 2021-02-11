// Top slidshow
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex ++);
}

function minusSlides(n) {
    showSlides(slideIndex -= 1);
}
function currentSlide (n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("my-slides");

    if(n >= slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        if(slideIndex == slides[i].children[0].innerHTML) {
            slides[i].style.display = "block"
        }else {
            slides[i].style.display = "none"
        }
        
    }
  

    
}