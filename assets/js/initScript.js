/* INITIALIZE PAGE
NEEDS TO BE LOADED AT PAGE LOAD */

// Game Dev SVG Animation Delay
document.addEventListener('DOMContentLoaded', function () {
	window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);
})

// Page-Loading: Loader Overlay Functions
var loadTimer;
// Overlay
function OverlayOn() {
	document.getElementById("Overlay").style.display = 'block';
}
function OverlayOff() {
	document.getElementById("Overlay").style.display = 'none';
}
// Loader
function PageLoader() {
	// loadTimer = setTimeout (ShowPage, 10);
}
// Show Page
function ShowPage() {
	document.getElementById("Loader").style.display = 'none';
	OverlayOff();
}

// Uncheck all Checkboxes by Default. (Use for: Theme Switcher, )
var inputs = document.getElementsByTagName('input');

for (var i=0; i<inputs.length; i++)  {
  if (inputs[i].type == 'checkbox')   {
    inputs[i].checked = false;
  }
}
/* END OF INITIALIZE */

