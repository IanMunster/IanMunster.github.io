
/* Hamburger Menu Functionality for Small Screens */
	// Navigation HamburgerMenu Selections
	const burger = document.querySelector("#BurgerBtn"),
		navLink = document.querySelectorAll(".navBarLink"),
		ul = document.querySelector("nav ul"),
		nav = document.querySelector("nav");

	// Open Menu on Click
	burger.addEventListener("click", () => {
		ul.classList.toggle("show");
	});

	// Close Menu on Click
	navLink.forEach((link) => 
		link.addEventListener("click", () => {
			ul.classList.remove("show");
		})
	);
	/* END Hamburger Menu Functionality for Small Screens */

// Scroll to Top Function
const scrollUp = document.querySelector("#ScrollUp");
	scrollUp.addEventListener("click", () => {
		window.scrollTo({
			top: 0, left: 0, behaviour: "smooth",
		});
	});