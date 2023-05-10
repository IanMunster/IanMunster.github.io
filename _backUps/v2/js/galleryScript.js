// Singular Slide show Gallery Script
let imgIndex = 0;
ShowSlide(imgIndex);

function CurrentSlide(slide) {
    ShowSlide(imgIndex = slide);
}

function ChangeSlide(slide) {
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

// Multiple Slide show Gallery Script at Once
// let imgIndex = [0,0];
// let slideId = ["gallerySlides0","gallerySlides1"];
// ShowSlide(1,0);
// ShowSlide(1,1);

// function CurrentSlide(slide) {
//     // ShowSlide(imgIndex = slide);
// }

// function ChangeSlide(slide, gallery) {
//     ShowSlide(imgIndex[gallery] += slide, gallery);
// }

// function ShowSlide(slide, gallery) {
//     let i;
//     let galleries = document.getElementsByClassName(slideId[gallery]);

//     if (slide > galleries.length) {
//         imgIndex[gallery] = 1
//     }
//     if (slide < 1) {
//         imgIndex[gallery] = galleries.length
//     }
//     for (i = 0; i < galleries.length; i++) {
//         galleries[i].style.display = "none";
//     }
//     galleries[imgIndex[gallery]].style.display = "block";
// }