const header = document.getElementById("header");

let headerPos = header.offsetTop; // Header position respect to top


// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    onScrollDisplay();
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onScrollDisplay() {
    const scrollDistanceSensibility = window.pageYOffset-600;

    if (scrollDistanceSensibility > headerPos) {
        header.classList.add("sticky-header");
        fillStyle ="#fff";
    } else {
        header.classList.remove("sticky-header");
        fillStyle ="#00334e";
    }
}
