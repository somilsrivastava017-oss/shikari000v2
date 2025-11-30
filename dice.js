
var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomnum1 + ".png";
var randomImageSource = "webimg/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomnum2 + ".png";
var randomImageSource2 = "webimg/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomnum1 < randomnum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else if (randomnum1 > randomnum2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else {
  document.querySelectorAll("h1").innerHTML = "🏳️DRAW🏳️";
}
