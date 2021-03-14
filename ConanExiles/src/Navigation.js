/* Navigation Bar Script
*
* Responsive Navigation Bar
* Sticky Navigation Bar on Scroll
*/

/* Get Navigation Bar */
var navBar = document.getElementById("TopNavBar")

/* Responsive: Toggle between Responsive and None Responsive */
function responsiveNavClassSwitch () {
	if ( navBar.className === "topNavBar" ) {
	// if ( navBar.classList.contains ("topNavBar") ) {
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
	//	navBar.style.height = "60px"; 
	}
	else { 
		navBar.classList.remove ("sticky"); 
	//	navBar.style.height = "80px"; 
	}
}
