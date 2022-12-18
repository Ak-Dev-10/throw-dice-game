var randomNumber1 = Math.floor(Math.random()*6)+1;// to get a random number between 1 and 6

var randomImageSource1 = "images/dice"+randomNumber1+".png"; // dice1 to dice6

document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1);// selecting the 1st image tag


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 has won";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 has won";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}