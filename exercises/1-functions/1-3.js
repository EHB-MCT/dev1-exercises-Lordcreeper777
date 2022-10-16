"use strict"

drawrectangles();

function drawrectangles(){
    
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let context = canvas.getContext('2d');
    
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,50);
    context.lineTo(200,200);
    context.lineTo(50,200);
    context.lineTo(50,50);
    context.strokeStyle = "red";
    context.lineWidth = "2";
    context.stroke();

    context.beginPath();
    context.moveTo(350,350);
    context.lineTo(350,200);
    context.lineTo(200,200);
    context.lineTo(200,350);
    context.lineTo(350,350)
    context.strokeStyle = "red";
    context.lineWidth = "2";
    context.stroke();

    context.beginPath();
    context.rect(125,125,150,150);
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.rect(325,50,25,25);
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.rect(50,325,25,25);
    context.fillStyle = "black";
    context.fill();


    context.beginPath();
    context.rect(275,75,50,50);
    context.strokeStyle = "red"
    context.lineWidth = "2"
    context.stroke();

    context.beginPath();
    context.rect(75,275,50,50);
    context.strokeStyle = "red"
    context.lineWidth = "2"
    context.stroke();


    









}


