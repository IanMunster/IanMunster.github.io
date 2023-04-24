/* Modal Lightbox Functions */
// Open the Modal
function openModal(modalID) {
	document.getElementById(modalID).style.display = "block";
}
//Close the Modal
function closeModal(modalID) {
	document.getElementById(modalID).style.display = "none";
}

// Slides
var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function changeSlides(number) {
	showSlides (slideIndex += number);
}

// Thumbnail Image Controls
function currentSlide(number) {
	showSlides(slideIndex = number);
}

// Show the Slides on Number Index
function showSlides(number) {
	var i,
	slides = document.getElementsByClassName("modalSlides"),
	thumbs = document.getElementsByClassName("modalThumb"),
	captionText = document.getElementById("ModalCaption");
	// Number bigger than Total Slides, go to First Slide
	if (number > slides.length) {
		slideIndex = 1
	}
	// Number Slides smaller than 0, got to Last Slide
	if (number < 1) {
		slideIndex = slides.length
	}
	// Hide all inactive Slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// Set Thumbnail as InActive Style
	for (i = 0; i < thumbs.length; i++) {
		thumbs[i].className = thumbs[i].className.replace(" activeSlide", "");
	}
	// Display Slide, Set active Tumb and Display Caption
	slides[slideIndex-1].style.display = "block";
	thumbs[slideIndex-1].className += " activeSlide";
	captionText.innerHTML = thumbs[slideIndex-1].alt;
}

/* END Modal Lightbox Functions */