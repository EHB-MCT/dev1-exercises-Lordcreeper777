"use strict"

drawlayers();

function
    drawlayers(){

        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let context = canvas.getContext('2d');

        //blue square
        context.beginPath();
        context.rect(50,50,300,300);
        context.fillStyle = "lightblue";
        context.strokeStyle = "black";
        context.lineWidth = "2";
        context.fill();
        context.stroke();

       //U form
        context.beginPath();
        context.moveTo(100,50);
        context.lineTo(100,250);
        context.lineTo(300,250);
        context.lineTo(300,50);
        context.strokeStyle = "black";
        context.lineWidth = "2";
        context.stroke();

       
        context.beginPath();
        context.moveTo(300,100);
        context.lineTo(150,100);
        context.lineTo(150,250);
        context.moveTo(150,150);
        context.lineTo(250,150);
        context.lineTo(250,250);
        context.strokeStyle = "black";
        context.lineWidth = "2";
        context.stroke();

        context.beginPath();
        context.moveTo(50,300);
        context.lineTo(300,300);
        context.lineTo(300,250);
        context.strokeStyle = "black";
        context.lineWidth = "2";
        context.stroke();






    }