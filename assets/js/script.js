/* ThemeVarToggle Section - Toggles Dark and Light Mode */
const root = document.querySelector (':root'),
	themeBtn = document.querySelector ("#ThemeSwitchBtn");
themeBtn.addEventListener('click', SwitchThemeUpdate);

function SwitchThemeUpdate(e) {
/* 	console.log ("themeBtn.checked: "+ themeBtn.checked ) */
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

/* Read More Button Function */
const readMore = document.querySelector("#ReadMoreBtn"),
	moreAbout = document.querySelector("#More");
readMore.addEventListener('click', () => {
	moreAbout.classList.toggle("show");
	moreAbout.scrollIntoView({
		behaviour: 'smooth'
	});
})
/* END Read More Button Function */

/* Read More Filter Function */
FilterSelection("allFilter")
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

/* Scroll to Top Function */
const scrollUp = document.querySelector("#ScrollUp");
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0, left: 0, behaviour: 'smooth',
	});
});
	
/* END Scroll to Top Function */