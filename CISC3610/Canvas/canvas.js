"use strict";

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var tx = c.getContext("2d");

function drawMyHouse(){
ctx.beginPath()

//Mountains
ctx.beginPath()
ctx.moveTo(700,550)
ctx.lineTo(600,550)
ctx.lineTo(635,440)
ctx.closePath()
ctx.fillStyle="#32CD32"
ctx.fill()

ctx.beginPath()
ctx.moveTo(770,550)
ctx.lineTo(650,550)
ctx.lineTo(695,360)
ctx.closePath()
ctx.fillStyle="#32CD32"
ctx.fill()

//house
ctx.fillStyle="#FAFAD2";
ctx.fillRect(50,350,200,200);

ctx.font = "23px Arial";
ctx.fillStyle="#6A5ACD";
ctx.fillText("My house", 80, 460);

//fence
var k=10;
var t=20;
 for (let i = 0; i < 6; i++) {
ctx.beginPath()
ctx.fillStyle="#A52A2A"
ctx.fillRect(0+k,490, 10, 60);
ctx.fill();
ctx.closePath()

k=k+30;

    }
    
for (let i = 0; i < 4; i++) {
ctx.beginPath()
ctx.fillStyle="#A52A2A"
ctx.fillRect(50+k,490, 10, 60);
ctx.fill();
ctx.closePath()
k=k+30;
}

//ladders
var k=10;
var t=20;

 for (let i = 0; i < 9; i++) {
ctx.beginPath()
ctx.fillStyle="#D2691E"
ctx.fillRect(240+k,410+t, 60, 10);
ctx.fill();
ctx.closePath()

k=k+30;
t=t+15;

    }


//ground color
ctx.fillStyle="#228B22"
ctx.fillRect(0,550,800,100)

//roof
ctx.moveTo(50,350)
ctx.lineTo(150,250)
ctx.lineTo(250,350)
ctx.closePath()
ctx.fillStyle="#6b4224"
ctx.fill()

//window
ctx.strokeStyle="#DDA0DD"
ctx.strokeRect(75,375,50,50)
ctx.strokeRect(125,375,50,50)



//door
ctx.strokeStyle="#6a1a10"
ctx.strokeRect(175,480,25,70)
ctx.strokeRect(200,480,25,70)


ctx.fillStyle="#6b4224"
ctx.beginPath()
ctx.arc(190,500,5,0,Math.PI*2)
ctx.arc(210,500,5,0,Math.PI*2)
ctx.fill()

ctx.fillRect(500,400,70,200)


//tree
ctx.fillStyle="#335617"
ctx.beginPath()
ctx.arc(450,300,120,0,Math.PI*2)
ctx.arc(500,180,120,0,Math.PI*2)
ctx.arc(590,300,120,0,Math.PI*2)
ctx.closePath()
ctx.fill()


//sun
ctx.font = "23px Arial";
ctx.fillStyle="#FF7F50";
ctx.fillText("Sun", 5, 30);

ctx.fillStyle="#FFA500"
ctx.beginPath()
ctx.arc(60,80,30,0,Math.PI*2)
ctx.closePath()
ctx.fill()

ctx.beginPath();
ctx.moveTo(10,40);
ctx.lineTo(38,50);
ctx.lineTo(45,75);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(55,50);
ctx.lineTo(70,55);
ctx.lineTo(70,25);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0,80);
ctx.lineTo(30,70);
ctx.lineTo(30,85);
ctx.fill();
ctx.closePath();

//cloud-1
ctx.fillStyle="#fff"
ctx.beginPath()
ctx.arc(80,100,30,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(120,75,35,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(160,75,30,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.beginPath()
ctx.arc(120,125,30,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.beginPath()
ctx.arc(160,125,35,0,Math.PI*2)
ctx.closePath()
ctx.fill()
ctx.arc(200,100,30,0,Math.PI*2)
ctx.closePath()
ctx.fill()

//cloud-2
ctx.arc(300,100,30,0,Math.PI*2);
ctx.closePath();
ctx.fill();
ctx.arc(350,100,30,0,Math.PI*2);
ctx.closePath();
ctx.fill();
ctx.arc(325,70,30,0,Math.PI*2);
ctx.closePath();
ctx.fill();
    


//grasses

    var a=15;
     for (let n = 0; n < 26; n++) {
ctx.beginPath();
ctx.moveTo(0+a,540);
ctx.lineTo(10+a,640);
ctx.lineTo(0+a,605);
ctx.fillStyle="#7CFC00";
ctx.fill();
ctx.closePath();
a=a+30;

    }
    
    

}

drawMyHouse();




