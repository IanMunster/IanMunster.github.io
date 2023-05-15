/* Show More Buttons Function */
function ShowMore (contentID) {

    document.querySelector(contentID).classList.toggle("hide");

    // var content = document.querySelector(id);
    // content.classList.toggle("hide");
    // content.scrollIntoView({behaviour: 'smooth'});
    
    /* Depricated "event" needs new method
    if (content.classList.contains ("hide")) {
        event.target.innerText = "Read More...";
    } else {
        event.target.innerText = "Read Less";
    }
    */
}

// v1. Queries single btn ID
/* const showBtn = document.querySelector("#ShowBtn"), showContent = document.querySelector("#ShowContent");
if (showBtn != null) {
        showBtn.addEventListener('click', () => {
        showContent.classList.toggle("hide");
        showContent.scrollIntoView({
         behaviour: 'smooth'
        });
    })
 } */