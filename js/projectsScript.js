/* https://w3schools.invisionzone.com/topic/62696-multiple-lightbox-on-one-page/
Click on: a Project-Preview =>
    Open a Lightbox over Page.
    Lightbox shows Project Title, Gallery, Description and Links
        Gallery contains Multiple Image Slides with;
            A Main Big Image Slide,
            Click on: Thumbs for Slides-Navigation =>
                Open Clicked Image as Main Image Slide
            Clickon: Next -or- Previous Buttons for Slides-Navigation =>
                Change to Next or Previous Slide Image
            Image Captions based on Slide-Thumb Image's ALT-Text,
            Slide Number Count "CurrentSlide# / AllSlides#"

Click on: Close Btn / Outside of currently opened Lightbox =>
    Close Currently Opened Lightbox
*/
// Project Preview
var preview = document.getElementsByClassName("project");
// Number of Project Previews
let previewIndex;
// LightBox Element
var LightBox = document.getElementById("LightBox");
// Lightbox Close Button
var CloseBtn = document.getElementById("CloseBtn").addEventListener('click', CloseLightBox);
// Title of Project Lightbox
var Title = document.getElementById("Lightbox-Title");
// Description of Project Lightbox
var Descr = document.getElementById("Lightbox-Description");

// Gallery Slides
var galleryImgs = document.getElementsByClassName("galleryImg");
// Gallery Slide-Thumbs
var galleryThumbs = document.getElementsByClassName("galleryThumbs");
// Gallery Slide-Numbers (Current Slide #/ Total Slides #)
var gallerySlidesNum  = document.getElementsByClassName("gallerySlideNumber");



// Project Information and Images
const projectContent = {
    title: "TITLE",
    description: "DESCRIPTION",
    download: "href=''",
    trello: "href=''",
    github: "href=''",
    images: [image0="image0_1920x1080.jpg", image1="image1_1920x1080.jpg", image2="image2_1920x1080.jpg"]
};

// Find all Project Previews
for (previewIndex = 0; previewIndex < preview.length; previewIndex++) {
    // Clicked On Project-Preview
    preview[previewIndex].addEventListener('click', OpenLightBox);
}


/// LIGHTBOX
// Open Lightbox
function OpenLightBox(e) {
    // Debug
    console.log("Open Lightbox");
    // Display Title of Project
    Title.innerHTML = projectContent.title;
    // Display Description of Project
    Descr.innerHTML = projectContent.description;
    // Display the Project Lightbox Element
    LightBox.style.display = "block";

}

// Close Lightbox
function CloseLightBox() {
    // Debug
    console.log("Close Lightbox");
    // Hide the Project Lightbox Element
    LightBox.style.display = "none";
}