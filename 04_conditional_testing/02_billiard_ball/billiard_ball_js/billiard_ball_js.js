
let cursorImg; 
let py;
let px;
let pradius;  

let xspeed = 7;
let yspeed = 5;

function preload(){
    cursorImg = loadImage("data/cursor_with_shadow_15x21.png");
}

function setup() {
  createCanvas(800, 800);

  py = 123;
  px = 117; 
  pradius = 50;
  fill(253, 253, 253);
}

function draw() {
  // background(253); 
   if(mouseIsPressed){
    rectMode(CORNER); 
    fill(253, 253, 253, 255); 
    noStroke(); 
    rect(0,0, width+1, height+1); 
   } else{
    rectMode(CORNER); 
    fill(253, 253, 253, 20); 
    noStroke(); 
    rect(0,0, width+1, height+1); 
   }

  fill(0, 0, 0);
  noStroke();
  ellipse(px, py, pradius*2, pradius*2);

  px = px + xspeed;
  py = py + yspeed;
  let pL = px - pradius; 
  let pR = px + pradius; 
  let pT = py - pradius; 
  let pB = py + pradius; 

  if ((pL<0) || (pR>width)){
    xspeed = xspeed*-1;
  }

  if ((pT<0) || (pB>height)) {
    yspeed = yspeed*-1;
  }

}


function  keyPressed(){
  if (key == ' '){
    saveFrames("bouncing_ball.png"); 
  }
}