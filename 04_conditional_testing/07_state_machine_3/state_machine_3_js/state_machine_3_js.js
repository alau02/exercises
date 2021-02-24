let state;
let clickCount; 
let OFF_TO_ON = 2; 
let ON_TO_OFF = 3; 
let OFF = 0; 
let ON = 1; 

let rW, rH, rT, rL, rR, rB;
let rectSize; 
let cursorImg; 

function preload(){
  cursorImg = loadImage("data/cursor_with_shadow_15x21.png"); 
}

function setup() {
  createCanvas(800, 800);
  rectMode(CORNER);
  rectSize = width * (1.0 - ((sqrt(5) - 1.0)/2.0));
  
  state = ON; 
  clickCount = 0; 
}

function draw() {
  background(200);

  rW = rectSize; 
  rH = rectSize;  
  rL = width/2 - rectSize/2; 
  rT = height/2 - rectSize/2;
  rR = rL + rW; 
  rB = rT + rH; 

  if (state === OFF) {
    fill(50);
  } else {
    fill(255); 
  }

  stroke(0); 
  strokeWeight(8); 
  strokeJoin(MITER); 
  rect(rL, rT, rW, rH);
  
  image(cursorImg, mouseX, mouseY, 15*6, 21*6); 
}

function mousePressed() {
  if ((mouseX > rL) && (mouseX < rR) && (mouseY < rB) && (mouseY > rT)) {
    clickCount++;
    
    if ((state === OFF) && (clickCount === OFF_TO_ON)){
      state = ON; 
      clickCount = 0; 
    } else if ((state === ON) && (clickCount === ON_TO_OFF)){
      state = OFF; 
      clickCount = 0; 
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    saveFrames("state_machine","png","1","1");
  }
}