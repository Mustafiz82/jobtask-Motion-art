const overlay = document.getElementById("overlay")
const underlay = document.getElementById("canvas")
const stopPointer = document.querySelectorAll("button, a");


let isMoving = false;
let timer;


underlay.addEventListener("mousemove", () => {

    isMoving = true;

    clearTimeout(timer);

    timer = setTimeout(() => {
        isMoving = false;
        overlay.style.pointerEvents = "auto"

    }, 100); 
    
});


const mousemove = overlay.addEventListener("mousemove" , () => {
    
    overlay.style.pointerEvents = "none"
})


window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;


    const purchaseButton = document.getElementById("purchase")
    const buttonCoordinate = purchaseButton.getBoundingClientRect();

    let buttonX = buttonCoordinate.x;
    let buttonY = buttonCoordinate.y;
    let buttonWidth = buttonCoordinate.width;
    let buttonHeight = buttonCoordinate.height;


    if (x >= buttonX && x <= (buttonX + buttonWidth) && y >= buttonY && y <= (buttonY + buttonHeight)) {
        purchaseButton.style.backgroundColor= "transparent"
        purchaseButton.style.color= "white"
        purchaseButton.style.cursor = "pointer";
        // overlay.style.pointerEvents = "auto"



    }

    else{
        purchaseButton.style.backgroundColor= "white"
        purchaseButton.style.color= "black"
        purchaseButton.style.cursor= "auto"
        overlay.style.pointerEvents = "none"

// 
    }
});


// purchaseButton.addEventListener("mousemove " , () => {
//     purchaseButton.style.cursor = "pointer"
// })




