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