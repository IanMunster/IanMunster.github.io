/* Singular LightBox Script */
var lightBoxes = document.getElementsByClassName("lightBox");

// Open Lightbox
function OpenLightBox (box) {
    // Open Clicked Lightbox
    lightBoxes[box].style.display = "block";
}

// Close LightBox
function CloseLightBox (box) {
    // Close Clicked Lightbox
    lightBoxes[box].style.display = "none";
}


// Multiple Lightboxes Script
// let boxIndex;

// function OpenLightBox(box) {
//     var i,
//     boxes = document.getElementsByClassName("lightBox");

//     for (i = 0; i < boxes.length; i++) {
//         boxes[i].style.display = "none";
//     }

//     boxes[box].style.display = "block";
// }

// function CloseLightBox(box) {
//     var i,
//     boxes = document.getElementsByClassName("lightBox");
//     for ( i = 0; i < boxes.length; i++) {
//         //
//         console.log ("i: " + i);
//         console.log ("box: " + box);
//         //
//         boxes[box].style.display = "none";
//     }
// }