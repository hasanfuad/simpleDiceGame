var randNum1 = Math.floor(Math.random()*6)+1;

var randomDice = "dice"+randNum1+".png";

var randomImage = "images/"+randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);


var randNum2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "images/dice"+randNum2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

//Player1 wins
if(randNum1 > randNum2)
{
    document.querySelector("h1").innerHTML = "⛳Player 1 Win!!!";
}
else if(randNum2 > randNum1)
{
    document.querySelector("h1").innerHTML = "Player 2 Win⛳!!!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw:)"
}