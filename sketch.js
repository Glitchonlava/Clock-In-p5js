var canvasWidth; 
var canvasHeight;

var hrs;
var mins;
var secs;
  


function setup() {
  createCanvas(canvasWidth,canvasHeight)
}
hrs=0;
mins=0;
secs=0;
canvasWidth = 400;
canvasHeight = canvasWidth + canvasWidth/8;

function draw() {
  background(255,240,220);
  
currentTime();
 digitalClock(); 

  
}

 
function currentTime(){
  hrs=hour();
  mins=minute();
  secs=second();
  
  console.log(hrs,mins,secs);
}

function digitalClock(){
  
  //Code for digital clock
  
  let noon;
  if(hrs >= 12){
    noon = 'PM'
  } else {
    noon = 'AM'
  }
  
  //Display time
  
  hrs = hrs%12;
  
  if(hrs < 10){
    hrs = '0'+hrs
  }
  
  if(mins < 10){
    mins = '0'+mins
  }
  
  if(secs < 10){
    secs = '0'+secs
  }
  
  if(hrs == 0) {
    hrs=12;
  }
  
  let timeString = hrs+':'+mins+':'+secs+' '+noon;
  
  noStroke();
  fill(125,50,25);
  
  textFont("Courier New");
  textSize(width/10);
  textAlign(CENTER,CENTER);
  
  text(timeString, width/2, height/10);
  
  function analogClock() {
    
   //Code For Analog Clock 
    image(img.width/2,height/2,300,300);
  }
  
}
