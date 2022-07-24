
// Scroll to Top Function
const scrollUp = document.querySelector("#ScrollUp");
	scrollUp.addEventListener("click", () => {
		window.scrollTo({
			top: 0, left: 0, behaviour: "smooth",
		});
	});