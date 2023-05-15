/*
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


/*Project ## {
    Project Title = "..."
    Project Gallery: [
        SLIDE1 [ Image0 (src=""), Thumb0 (src="" alt="")],
        SLIDE2 [ Image0 (src=""), Thumb0 (src="" alt="")],
    ]
    Project Description = "..."
    Project Links: [ Download (href=""), Trello (href=""), Github (href="")
    ]
}*/


// Lightbox-Close BTN: onclick="CloseLightBox()"
// Gallery-Prev BTN: onclick="ChangeSlide(-1)"
// Gallery-Next BTN: onclick="ChangeSlide(1)"


// https://w3schools.invisionzone.com/topic/62696-multiple-lightbox-on-one-page/

const projectContent = {
    title: "TITLE",
    description: "DESCRIPTION",
    download: "href=''",
    trello: "href=''",
    github: "href=''",
    images: [image0="image0", image1="image1", image2="image2"]
};

var preview = document.getElementsByClassName("project");
let previewIndex;

var lightBox = document.getElementById("LightBox");

// var closeBtn = document;
// var Prev = document;
// var Next = document;

let imgIndex = 0;

// Find all Project Previews
for (previewIndex = 0; previewIndex < preview.length; previewIndex++) {
    // Clicked On Project-Preview
    preview[previewIndex].addEventListener('click', OpenLightBox);
}


/// LIGHTBOX
// Open Lightbox
function OpenLightBox(e) {
    console.log("Open Lightbox");
    //
    lightBox.style.display = "block";
    //
    Title = document.getElementById("Project-Title")
    // Title.innerHTML = preview.alt;
    //
    console.log("Image Index: "+imgIndex);
    ShowSlide(imgIndex);

    //
    closeBtn = document.getElementById("CloseBtn").addEventListener('click', CloseLightBox);
    //
    //Prev = document.getElementById("PrevBtn").addEventListener('click', ChangeSlide());
    //
    //Next = document.getElementById("NextBtn").addEventListener('click', ChangeSlide());
}

// Close Lightbox
function CloseLightBox() {
    console.log("Close Lightbox");
    //
    lightBox.style.display = "none";
}


/// GALLERY
//
function CurrentSlide(slide) {
    console.log ("Current Slide: "+slide);
    // 
    ShowSlide(imgIndex = slide);
}

//
function ChangeSlide(slide) {
    console.log("Change Slide: "+slide);
    //
    ShowSlide(imgIndex += slide);
}

function ShowSlide (slide) {
    var i,
    slides = document.getElementsByClassName("gallerySlides"),
    thumbs = document.getElementsByClassName("thumbs"),
    captionText = document.getElementById("CAPTION");

    if (slide > slides.length-1) {
        imgIndex = 0
    }
    if (slide < 0) {
        imgIndex = slides.length-1
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" thumbActive","");   
    }
    
    slides[imgIndex].style.display = "block";
    thumbs[imgIndex].className += " thumbActive";
    captionText.innerHTML = thumbs[imgIndex].alt;
}