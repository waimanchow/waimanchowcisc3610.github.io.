"use strict";

function drawing() {
//getting the nave value
  let fn = document.getElementById("fname").value;
  let ln = document.getElementById("lname").value;
  document.getElementById("demo").innerHTML ="Your name is "+fn+ln;
//getting background value
  let bgcolor = document.getElementById("bgcolor").value;
  document.body.style.backgroundColor = bgcolor;
//text color
  let tcolor = document.getElementById("textcolor").value;
  document.getElementById("demo").style.color = tcolor;
//font size
  let size = document.getElementById("a").value;
  let px="px";
  let fontsize=size+px;
  document.getElementById("demo").style['font-size'] = fontsize;
//font family
  let font=document.getElementById("font").value;
  document.getElementById("demo").style.fontFamily = font;
 
}