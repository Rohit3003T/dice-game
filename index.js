var randomNumber1= Math.floor(Math.random()*6 )+ 1;
var randomimages1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimages1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimages2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimages2); 
 
if(randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML= "PLAYER 1 WINS";
 


}else if (randomNumber2>randomNumber1){
 document.querySelector("h1").innerHTML="player 2 wins";


}else{

    document.querySelector("h1").innerHTML="DRAW";

}

function refreshPage() {
    location.reload();
  }