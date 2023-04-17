/* ThemeVarToggle Section - Toggles Dark and Light Mode */

const root = document.querySelector (':root'),
	themeBtn = document.querySelector ("#ThemeSwitchBtn");
themeBtn.addEventListener('click', SwitchThemeUpdate);

/** SwitchThemeUpdate:
 * Updates the CSS variable value to Switch Themes.
 * @param  {event} e [Click event on Switch Buttons]
 */
function SwitchThemeUpdate(e) {
	if (themeBtn.checked == true) {
/* 		console.log ("Light Theme") */
		root.style.setProperty('--bg-color0', '#dedcd9');
		root.style.setProperty('--bg-color1', '#fff');
		root.style.setProperty('--primary-color', '#95b08d');
		root.style.setProperty('--secondary-color', '#8b8eaf');
		root.style.setProperty('--font-color0', '#1e2021');
		root.style.setProperty('--font-color1', '#1c1c1c');
	} else {
/* 		console.log ("Dark Theme") */
		root.style.setProperty('--bg-color0', '#1e2021');
		root.style.setProperty('--bg-color1', '#1c1c1c');
		root.style.setProperty('--primary-color', '#49df49');
		root.style.setProperty('--secondary-color', '#4756df');
		root.style.setProperty('--font-color0', '#dedcd9');
		root.style.setProperty('--font-color1', '#fff');
	}
}
/* END ThemeVarToggle Section - Toggles Dark and Light Mode */

/* Hamburger Menu Functionality for Small Screens */
// Navigation HamburgerMenu Selections
const burger = document.querySelector("#BurgerBtn"),
	navLink = document.querySelectorAll(".navBarLink"),
	ul = document.querySelector(".navBar"),
	nav = document.querySelector("nav");

// Open Menu on Click
burger.addEventListener('click', () => {
	ul.classList.toggle("show");
});

// Close Menu on Click
navLink.forEach((link) => 
	link.addEventListener('click', () => {
		ul.classList.remove("show");
	})
);
/* END Hamburger Menu Functionality for Small Screens */

/* Show More Buttons Function */
// V1. Queries single btn ID
const showBtn = document.querySelector("#ShowBtn"),
	showContent = document.querySelector("#ShowContent");
showBtn.addEventListener('click', () => {
	showContent.classList.toggle("show");
	// showContent.scrollIntoView({
		// behaviour: 'smooth'
	// });
})
// const showMore = document.querySelectorAll (".showMore");
//.showBtn

/* END Show More Buttons Function */

/* Read More Filter Function */
FilterSelection("aboutProjects")
function FilterSelection(filterName) {
	var columnElements, columnCount;
	columnElements = document.getElementsByClassName("gridColumn");
	if (filterName == "allFilter") { 
		filterName = ""; 
	}
	for (columnCount = 0; columnCount < columnElements.length; columnCount++) {
		FilterRemoveClass(columnElements[columnCount], "show");
		if (columnElements[columnCount].className.indexOf(filterName) > -1) {
			FilterAddClass(columnElements[columnCount], "show");
		}
	}
}
// Add to Filter Class
function FilterAddClass (element, name) {
	var nameCount, elementsArr, nameArr;
	elementsArr = element.className.split(" ");
	nameArr = name.split(" ");
	for (nameCount=0; nameCount < nameArr.length; nameCount++) {
		if (elementsArr.indexOf(nameArr[nameCount]) == -1) {
			element.className += " " + nameArr[nameCount];
		}
	}
}
// Remove from Filter Class
function FilterRemoveClass (element, name) {
	var nameCount, elementsArr, nameArr;
	elementsArr = element.className.split(" ");
	nameArr = name.split(" ");
	for (nameCount=0; nameCount < nameArr.length; nameCount++) {
		while (elementsArr.indexOf(nameArr[nameCount]) > -1) {
			elementsArr.splice(elementsArr.indexOf(nameArr[nameCount]), 1);
		}
	}
	element.className = elementsArr.join(" ");
}

// Add Active Highlight BTN
var btnContainer = document.getElementById("FilterBtns"),
	filterBtns = document.getElementsByClassName("btnFilter");
for (var i = 0; i < filterBtns.length; i++) {
	filterBtns[i].addEventListener('click', function () {
		var currentBtn = document.getElementsByClassName("active");
		currentBtn[0].className = currentBtn[0].className.replace(" active", "");
		this.className += " active";
	});
}

/* END Read More Filter Function */

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

/* Scroll to Top Function */
const scrollUp = document.querySelector("#ScrollUp");
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0, left: 0, behaviour: 'smooth',
	});
});
	
/* END Scroll to Top Function */


/* Example Description */
/**
 * [someFunction description]
 * @param  {[type]} arg1 [description]
 * @param  {[type]} arg2 [description]
 * @return {[type]}      [description]
 */