
const canvas = document.getElementById("toggle-menu-canvas");
const opacityLayer = document.querySelector(".opacity-layer");

let isClicked = false;


// This function is called when html button is pressed
function openCloseMenu () {
    const menu = document.getElementById("menu-content");

    if(isClicked == false) {
        isClicked = true;
        menu.style.opacity = "100%";
        menu.style.right = "0px";
        opacityLayer.style.display = "block";
        opacityLayer.style.opacity = "100%";
        drawCanvas();
    } else if(isClicked == true) {
        isClicked = false;
        menu.style.opacity = "0";
        menu.style.right = "-220px";
        opacityLayer.style.display = "none";
        opacityLayer.style.opacity = "0";
        drawCanvas();
    }
}

// Draw the button appareance depending if is pressed or it isn't
function drawCanvas() {

    if(canvas.getContext) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.lineWidth = 2;
        context.fillStyle = "#00334e";
        
        if(isClicked) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(20, 20);
            context.moveTo(0, 20);
            context.lineTo(20, 0);
            context.closePath();
            context.stroke();
        }
        if(!isClicked) {
            context.beginPath();
            context.moveTo(0, 1);
            context.lineTo(20, 1);
            context.moveTo(0, 10);
            context.lineTo(20, 10);
            context.moveTo(0, 19);
            context.lineTo(20, 19);
            context.closePath();
            context.stroke();
        }
        
    }
    
}

drawCanvas();