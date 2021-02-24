let cursorImg; 
let py;
let px;
let pradius;  

let xspeed = 5;
let yspeed = 5;

function preload(){
    cursorImg = loadImage("data/cursor_with_shadow_15x21.png");
}

function setup() {
  createCanvas(800, 800); 

  py = 50;
  px = 50; 
  pradius = 50;
  fill(253, 253, 253);
}

function draw() {
  // background(253); 
  if (mouseIsPressed){
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

    let rX = 0.75*width;
    let rW = 40; 
    let rH = 200; 
    let rL = rX - rW/2; 
    let rR = rX + rW/2; 
    let rT = mouseY - rH/2; 
    let rB = mouseY + rH/2; 
  rect(rX, mouseY, rW, rH);

  px = px + xspeed;
  py = py + yspeed;

  //CONDITIONAL STATEMENTS
  let pL = px - pradius; 
  let pR = px + pradius; 
  let pT = py - pradius; 
  let pB = py + pradius; 

  if ((pL<0) || (pR>width) || ((pB > rT) && (pT < rB) && (((pR > rL)&&(pL < rL))  || ((pL < rR)&&(pR > rR))) ) ) {
    xspeed = xspeed*-1;
  }

  if ((pT<0) || (pB>height)) {
    yspeed = yspeed*-1;
  }
  

  image(cursorImg, mouseX, mouseY, 15*6, 21*6);
}


function keyPressed(){
  if (key === ' '){
    saveFrames("one_person_pong.png"); 
  }
}