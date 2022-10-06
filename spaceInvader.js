"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

drawspaceinvader();

function drawspaceinvader(){
    context.beginPath();
    context.rect(0,0,300,300);
    context.fill();

    context.beginPath();
    context.rect(25,25,250,50);
    context.rect(25,75,50,50);
    context.rect(225,75,50,50);
    context.rect(75,125,150,50);
    context.rect(25,175,50,100);
    context.rect(125,175,50,100);
    context.rect(225,175,50,100);
    context.fillStyle = "#00ff00";
    context.fill();
}
