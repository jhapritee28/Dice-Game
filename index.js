var randomNo1 = Math.floor(Math.random() * 6) + 1;

var randomimages1 = "images/Dice" + randomNo1 +".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimages1 ) ;


var randomNo2 = Math.floor(Math.random() * 6) +1 ;

var randomimages2 = "images/Dice" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimages2);


if(randomNo1 > randomNo2){
    document.querySelector("h1").innerHTML= "Player1 Wins 🚩!";
}
else if(randomNo2 > randomNo1){
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩!";
} else{
    document.querySelector("h1").innerHTML = "Draw";
}