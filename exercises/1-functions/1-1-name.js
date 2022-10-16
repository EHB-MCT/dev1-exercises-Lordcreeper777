"use strict";

drawName();

function drawName(){
        

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let context = canvas.getContext('2d');
       
    context.beginPath();
    context.moveTo(50,300);
    context.lineTo(200,300);
    context.moveTo(200,300);
    context.lineTo(200,200);
    context.lineTo(50,200);
    context.lineTo(50,100);
    context.lineTo(200,100);
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.stroke();

    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(300,100);
    context.lineTo(250,100);
    context.lineTo(350,100);
    context.strokeStyle = "green";
    context.lineWidth = 10;
    context.stroke();

   
    context.beginPath();
    context.moveTo(450,100);
    context.lineTo(400,300);
    context.moveTo(450,100);
    context.lineTo(550,300);
    context.moveTo(430,200);
    context.lineTo(500,200);
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    context.stroke();

    context.beginPath();
    context.moveTo(600,300);
    context.lineTo(750,300);
    context.moveTo(750,300);
    context.lineTo(750,200);
    context.lineTo(600,200);
    context.lineTo(600,100);
    context.lineTo(750,100);
    context.strokeStyle = "orange";
    context.lineWidth = 10;
    context.stroke();





    }
