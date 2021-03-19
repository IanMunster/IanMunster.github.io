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
var sticky = navBar.offsetTop;
function stickyMenu () {
	if ( window.pageYOffset >= sticky ) { 
		navBar.classList.add ("sticky"); 
	}
	else { 
		navBar.classList.remove ("sticky"); 
	}
}
