console.log("progama iniciado sprite.js");


var jogo = document.getElementById("jogo");
var c = jogo.getContext("2d");
var d = jogo.getContext("2d");
var e = jogo.getContext("2d");
var tempo = jogo.getContext("2d");
var w=  40; var h= 40; var py=  70; var px= 70;
var ww=200; var hh=120; var yy=-50; var xx=10;
var gloomy = new Image();var casa = new Image(); var rua = new Image(); var filtro = new Image()
var gloomyD = {
  front : "assets/gloomy/gloomyFront.png",
  left: "assets/gloomy/gloomyLeft.png",
  right: "assets/gloomy/gloomyRight.png",
  up: "assets/gloomy/gloomyUp.png"
}
var t = {
  manhan : "assets/tempo/manhan.png",
  tarde : "assets/tempo/Tarde.png",
  noite : "assets/tempo/Noite.png",
  madrugada : "assets/tempo/Madrugada.png"
}

gloomy.src = gloomyD.front;
casa.src = "assets/cenario/House.png";
rua.src = "assets/cenario/road.png";

function l(){// renderiza jogador
  d.drawImage(rua, 0, 0, 340, 220);
  e.drawImage(casa, xx, yy, ww, hh);
  c.drawImage(gloomy, px, py, w, h);
  requestAnimationFrame(l);
}
function pos (){
  document.querySelector("#pG").innerText = "gloomy position: y" + py + ", x" + px;
  document.querySelector("#pC").innerText="house position : y" + yy + ", x" + xx;
  requestAnimationFrame(pos)
}
function tempoFiltro(){
  if (hora >= 0 && hora < 6){
    filtro.src= t.madrugada;
    tempo.drawImage(filtro, 0, 0);
  }
  else if (hora >= 6 && hora < 12){
    filtro.src = t.manhan;
    tempo.drawImage(filtro, 0, 0);
  }
  else if (hora >= 12 && hora < 18){
    filtro.src = t.tarde;
    tempo.drawImage(filtro, 0, 0);
  }
  else if (hora >= 18 && hora < 24){
    filtro.src = t.noite;
    tempo.drawImage(filtro, 0, 0);
  }
  
  requestAnimationFrame(tempoFiltro)
}

addEventListener("load", l);
addEventListener("load", pos);
addEventListener("load", tempoFiltro);

