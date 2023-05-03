// Sticky Scroll Function on Window Scroll
window.onscroll = function() {
    StickyScroll();
};


// Get Navigation Bar
// Get Offset postion of Navigation Bar
var navBar = document.getElementById("TopNav"),
    sticky = navBar.offsetTop;

// Add Sticky Class when Y-position reached
function StickyScroll() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}