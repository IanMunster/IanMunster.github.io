window.onscroll = function() {
    ScrollProgress();
};

window.onscroll = function() {
    StickyScroll()
    console.log("ScrollingSticky");
};


function ScrollProgress() {
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowScroll / height) * 100;
        document.getElementById("ScrollBar").style.width = scrolled + "%";
}