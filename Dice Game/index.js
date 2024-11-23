var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
setimage(randomNumber1, ".img1");
setimage(randomNumber2, ".img2");
if(randomNumber1 == randomNumber2){
    document.body.querySelector("h1").innerText = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.body.querySelector("h1").innerText = "🚩Player 1 Wins";
}
else{
    document.body.querySelector("h1").innerText = "Player 2 Wins🚩";
}

function setimage(number,classAssigned){
    switch (number) {
        case 1: document.body.querySelector("div " + classAssigned).setAttribute("src", "./images/dice1.png");
            break;
        case 2: document.body.querySelector("div " + classAssigned).setAttribute("src", "./images/dice2.png");
            break;
        case 3: document.body.querySelector("div " + classAssigned).setAttribute("src", "./images/dice3.png");
            break;
        case 4: document.body.querySelector("div " + classAssigned).setAttribute("src", "./images/dice4.png");
            break;
        case 5: document.body.querySelector("div " + classAssigned).setAttribute("src", "./images/dice5.png");
            break;
        case 6: document.body.querySelector("div " + classAssigned).setAttribute("src", "./images/dice6.png");
            break;  
    }
}