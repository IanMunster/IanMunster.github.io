// Get the Preview Boxes
var previewBox = document.getElementsByClassName("preview-Box");

// Get the Modal Box
var modalBox = document.getElementById("Modal-Box");
// Get Modal Close Button
var modalCloseBtn = document.getElementById("ModalClose-Btn");
// Get the Modal Title
var modalTitle = document.getElementById("Modal-Title");
// Get the Modal Description
var modalDescription = document.getElementById("Modal-Description");
// Get the Modal Next and Prev Buttons
var modalNextBtn = document.getElementById("Modal-NextBtn");
var modalPrevBtn = document.getElementById("Modal-PrevBtn");
// Get the Modal Slide Number
var modalSlideNum = document.getElementById("Modal-SlideNumber");
// Get the Modal Main Image
var modalMainImg = document.getElementById("Modal-MainImg");
// Get the Modal Image Caption (Caption based on IMG ALT)
var captionText = document.getElementById("Modal-Caption");
// Get the Modal Thumb Images
var thumbs = document.getElementsByClassName("modal-Thumb");

const project = {
    title: "",
    description: "",
    img: ["", ""],
    caption: ["", ""],
}

var projects = [project, project];


// Go through all Previews
for (let p = 0; p < previewBox.length; p++) {
    // Add Click fucntion to all Previews
    previewBox[p].onclick = function () {
        //console.log("Preview: " + p);
        // TO DO: Define Projects Elsewhere
        if (p == 0) {
            projects[p].img = ["img1", "img2", "img3", "img4", "img5", "img6"];
            projects[p].caption = ["Cinque Terre", "Northern Lights", "Mountain", "Nature", "Snow", "Forest"];
        } else if (p == 1) {
            projects[p].img = ["img6", "img5", "img4", "img3", "img2", "img1"];
            projects[p].caption = ["Forest", "Snow", "Nature", "Mountain", "Northern Lights", "Cinque Terre"];
        }
        //console.log(projects[p].img[0]);

        // Get the Title of Clicked Preview
        projects[p].title = previewBox[p].getElementsByClassName("preview-Title")[0];
        projects[p].description = previewBox[p].getElementsByClassName("preview-description")[0];

        //var img = previewBox[p].getElementsByClassName("preview-Img");

        modalMainImg.src = "img/big/" + projects[p].img[0] + "_wide.jpg";
        captionText.innerHTML = projects[p].caption[0];
        //console.log(modalMainImg.src + " " + captionText.innerHTML);

        var imgs = projects[0].img;
        var thumb = [];
        for (let i = 0; i < imgs.length; i++) {
            // Append Img Names with Folder and Extension
            thumb[i] = "img/thumb/" + imgs[i] + ".jpg";
        }


        // THUMBNAILS
        for (let t = 0; t < thumbs.length; t++) {
            thumbs[t].src = thumb[t];
        }

        // Set Title and Description of Preview
        modalTitle.innerHTML = projects[p].title.innerHTML;
        modalDescription.innerHTML = projects[p].description.innerHTML;

        // Display the Modal Box
        modalBox.style.display = "block";
    }

}

// Prev Btn
modalPrevBtn.onclick = function () {

}
// Next Btn   
modalNextBtn.onclick = function () {

}

// When the user clicks the close-Btn, close the modal-Box
modalCloseBtn.onclick = function () {
    modalBox.style.display = "none";
}
