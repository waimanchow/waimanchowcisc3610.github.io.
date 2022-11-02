var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(300, 300, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

var help = document.getElementById('help');
var btn = document.getElementById('btn');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = [ 'aqua' , 'help' , 'beige', 'bisque', 'black', 'blue', 'brown', 
'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 
'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 
'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 
'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];

var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


btn.onclick = function() {

    if (btn.innerText === "Speak") {
        btn.innerText = "Stop";
        recognition.start();

    } else if (btn.innerText === "Stop") {
        btn.innerText = "Speak"
        recognition.abort();
    }

   
  }
  
  recognition.onresult = function(event) {

var color = event.results[0][0].transcript;

if(color=='help'){

    help.play();

}

else{
ctx.beginPath();
ctx.arc(300, 300, 25, 0, 2 * Math.PI);
ctx.fillStyle = color;
ctx.fill();
ctx.stroke();
}
  }
  
  
