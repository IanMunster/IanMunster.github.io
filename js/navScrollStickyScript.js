// Sticky Scroll Function on Window Scroll
window.onscroll = function() {
    StickyScroll();
};


// Get Navigation Bar
// Get Offset postion of Navigation Bar
var navBar = document.getElementById("TopNav"),
    header = document.getElementById("Header"),
    sticky = header.clientHeight;

// Add Sticky Class when Y-position reached
function StickyScroll() {

    // console.log ("navBar Offset: " + sticky);
    // console.log ("page Y Offset: " + window.pageYOffset);
    // console.log ("header Heigth: " + header.clientHeight);

    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}

// Change Sticky Y-Pos when Window is Resized: i.e. Header Size Changed
window.onresize = function() {
    sticky = header.clientHeight;
}