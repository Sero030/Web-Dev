// Detecting Button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown", function(event){
        playSound(event.key);
        buttonAnimation(event.key);
    });

// Detecting Key Press
function playSound(key){
    switch (key) {
        case "w": new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a": new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s": new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d": new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j": new Audio("./sounds/snare.mp3").play();
            break;
        case "k": new Audio("./sounds/crash.mp3").play();
            break;
        case "l": new Audio("./sounds/kick-bass.mp3").play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(key){
    var keyPressed = document.querySelector("."+key);
    keyPressed.classList.add("pressed");
    setTimeout(function(){
        keyPressed.classList.remove("pressed");
    },100);
}