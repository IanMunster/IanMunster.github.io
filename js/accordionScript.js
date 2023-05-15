/* Accordion Script */
var Accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < Accordion.length; i++) {
    // Add Event listener to all Accordions
    Accordion[i].addEventListener("click", function() {
        // Toggle Active Class (CSS)
        this.classList.toggle("active");
        //  Find Accordion Panel
        var panel = this.nextElementSibling;

        // Toggle Showing Panel by Max-Height
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        // Toggle Showing Panel by Display Block&None
        /* if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        } */
    });
}