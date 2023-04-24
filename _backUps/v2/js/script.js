
// PROJECT
/* Slide Show Carousel 
 Get all Elements with Class "mySlides" in array "mySlides"
 Hide all Slides from display.
 Increase SlideIndex by 1,
 If slideIndex is bigger than mySlides Array, go to 1
 Display Slide Image on index (minus 1 to start on index 0)
 Set a Timeout for 3sec and call Carousel Function again*/

var slideIndex = 0
Carousel();
function Carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(Carousel, 3000);
}