
var random1=Math.random();
random1=random1*6;
random1=Math.round(random1);


var random2=Math.random();
random2=random2*6;
random2=Math.round(random2);


if(random1===1){
    document.querySelectorAll("img")[0].setAttribute("src","./dice1.png");

}else if(random1===2){
    document.querySelectorAll("img")[0].setAttribute("src","./dice2.png");
}else if(random1===3){
    document.querySelectorAll("img")[0].setAttribute("src","./dice3.png");
}else if(random1===4){
    document.querySelectorAll("img")[0].setAttribute("src","./dice4.png");
}else if(random1===5){
    document.querySelectorAll("img")[0].setAttribute("src","./dice5.png");
}else{
    document.querySelectorAll("img")[0].setAttribute("src","./dice6.png");
}


if(random2===1){
    document.querySelectorAll("img")[1].setAttribute("src","./dice1.png");

}else if(random2===2){
    document.querySelectorAll("img")[1].setAttribute("src","./dice2.png");
}else if(random2===3){
    document.querySelectorAll("img")[1].setAttribute("src","./dice3.png");
}else if(random2===4){
    document.querySelectorAll("img")[1].setAttribute("src","./dice4.png");
}else if(random2===5){
    document.querySelectorAll("img")[1].setAttribute("src","./dice5.png");
}else{
    document.querySelectorAll("img")[1].setAttribute("src","./dice6.png");
}


if(random1>random2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";

}else if(random1<random2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";

}else{
    document.querySelector("h1").innerHTML="DRAW";

}






