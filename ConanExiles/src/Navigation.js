/* Navigation Bar Script
*
* Responsive Navigation Bar
* Sticky Navigation Bar on Scroll
*/

/* Get Navigation Bar */
var navBar = document.getElementById("TopNavBar")

/* Responsive: Toggle between Responsive and None Responsive */
function responsiveNavClassSwitch () {
	if ( (navBar.className === "topNavBar") || (navBar.className === "topNavBar sticky") ) {
		navBar.classList.add ("responsive");
	} else {
		navBar.classList.remove ("responsive");
	}
}

/* Sticky Navigation on Scroll */
window.onscroll = function (){ 
	stickyMenu () 
};
// Navigation Top Offset
var sticky = navBar.offsetTop;
function stickyMenu () {
	// If scroll is lower than offset (would scroll passed Navbar)
	if ( window.pageYOffset >= sticky ) { 
		// Add Sticky Class
		navBar.classList.add ("sticky"); 
	} else { 
		navBar.classList.remove ("sticky"); 
	}
}
