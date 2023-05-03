// Hamburger Button Navigation Script

// function MenuClick () {
//     var nav = document.getElementById("TopNav");
//     if (nav.className === "topNav") {
//         nav.className += "responsive";
//     } else {
//         nav.className = "topNav";
//     }
// }

function MenuClick () {
    var nav = document.getElementById("TopNav");
    if (!nav.classList.contains("responsive") ) {
        nav.classList.add("responsive");
    } else {
        nav.classList.remove("responsive");
    }
}
