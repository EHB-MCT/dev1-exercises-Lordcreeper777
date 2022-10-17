"use strict";

drawcircle();

function 
    drawcircle(){
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let context = canvas.getContext('2d');

        context.beginPath();
        context.rect(50,50,350,350);
        context.fillStyle = "orange";
        context.fill();
        
        context.beginPath();
        context.rect(50,250,350,150);
        context.fillStyle = "darkblue";
        context.fill();

        context.beginPath();
        context.ellipse(225,250,100,60,Math.PI,0,Math.PI);
        context.fillStyle = "yellow";
        context.fill();


}
