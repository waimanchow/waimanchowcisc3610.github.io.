var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');

//use array to store pictures
var images = [];
images.length = 6;

var cats = [];
cats.length = 6;
//for loop for adding pictures
for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'img/pic' + i.toString() + '.png';

    cats[i] = new Image();
    cats[i].src = 'img/cat' + i.toString() + '.png';
}
var i = 1;

const myInterval = setInterval(myTimer,100);


//character running
function myTimer(){
    i++;
    if( i >= 6){
        i = 1;
    }
    //background
    img = new Image();
    img.src = 'img/home.jpg';
//talking bubbles
    bubble = new Image();
    bubble.src = 'img/talkingbubble1.png';

    bubble2 = new Image();
    bubble2.src = 'img/talkingbubble2.png';

    c.drawImage(img, 0, 0,1000,700);
    c.drawImage(images[i],100,550,160,150);
    c.drawImage(cats[i],700,550,270,150);
    c.drawImage(bubble,670,360,150,150);
    c.drawImage(bubble2,120,360,150,150);

}







