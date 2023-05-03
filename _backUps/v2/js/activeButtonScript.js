// Highlight current Active Filter Button
var filterBtnContainer = document.getElementById("FilterBtnContainer"),
	filterBtns = filterBtnContainer.getElementsByClassName("btn");

for (var i = 0; i < filterBtns.length; i++) {
	filterBtns[i].addEventListener('click', function () {
		var currentBtn = filterBtnContainer.getElementsByClassName("active");
		currentBtn[0].classList.replace("active", "btn");
		this.classList += " active";
	});
}
