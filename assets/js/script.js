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
		ul = document.querySelector("nav ul"),
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

// Scroll to Top Function
const scrollUp = document.querySelector("#ScrollUp");
	scrollUp.addEventListener('click', () => {
		window.scrollTo({
			top: 0, left: 0, behaviour: 'smooth',
		});
	});