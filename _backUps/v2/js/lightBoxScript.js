/* LightBox Script */

var lightBoxIndex;
var lightBoxes = document.getElementsByClassName("lightBox");

// Open Lightbox
function OpenLightBox (box) {
    // Open Clicked Lightbox
   lightBoxes[box].style.display = "block";

}

// Close LightBox
    // TODO: Close when Clicked Outside Content
function CloseLightBox (box) {
    // Close Clicked Lightbox
    
    lightBoxes[box].style.display = "none";

//     for (let i = 0; i < lightBoxes.length; i++) {
//         lightBoxes[box].style.display = "none";
//         console.log(lightBoxes[i]);
//     }
}

