"use strict";

 function changeCanvasColor () {
		// Locate the element "mycanvas" in the document.
        var canvas = document.getElementById("mycanvas");
        var context = canvas.getContext("2d");
        
        //background color
        context.fillStyle = "lightblue";
        context.fillRect(0, 0, canvas.width, canvas.height);
		
		context.font="20px Arial";
        context.fillStyle = "black";
        
        // draw x and y-axis
         context.beginPath();
  		context.moveTo(120, 10);
  		context.lineTo(120, 460);
  		context.lineTo(490, 460);
  		context.stroke();
        
    //x-axis
  var numb=5;
  var labels = ["0","5","10", "15", "20", "25", "30"];
  for (var i = 0; i < 7; i++) {
    context.fillText(labels[i], 70+numb*10 , 485);
    numb=numb+5;
   
  }
  
const myJSON = '{"name":["Strawberry", "Peach", "Banana","Pear","Grape"], "quantity":[15, 10, 25, 10, 20], "color":["red", "orange", "yellow", "green", "purple"]}';

const myObj = JSON.parse(myJSON);
var place=20;
		 for (var i = 0; i < 5; i++) {
        
		context.fillStyle = myObj.color[i];
        
        context.fillText(myObj.quantity[i],10,65+place);
        
        context.fillRect(120, 20+place, myObj.quantity[i]*10, 40);
		context.fillText(myObj.name[i],10,40+place);
        place=place+80;

        }

        }

changeCanvasColor ();
