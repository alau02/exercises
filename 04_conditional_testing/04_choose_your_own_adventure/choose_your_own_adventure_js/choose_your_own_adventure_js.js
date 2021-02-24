let cursorImg;
let myFont; 

function preload(){
  cursorImg = loadImage("data/cursor_with_shadow_15x21.png");
  myFont = loadFont("data/CenturySchoolbook.otf"); //"CenturySchoolbook-60.vlw"); 
}

function setup() {
  createCanvas(800, 800);
  textFont(myFont, 90);
}

function draw() {
  background(253, 253, 253);

  // draw back wall
  fill(245); 
  stroke(0); 
  strokeWeight(8); 
  strokeJoin(MITER); 
  rect(100, 150, 600, 450); 

  // draw corners
  line(100, 150, 100-200, 150-200); 
  line(700, 150, 700+200, 150-200); 
  line(100, 600, 100-200, 600+200); 
  line(700, 600, 700+200, 600+200); 

  // draw doors.
  drawDoor(1); 
  drawDoor(2); 
  drawDoor(3); 

  textFont(myFont, 60);
  text("You see three doors.", width/2, 750); 

  image(cursorImg, mouseX, mouseY, 15*6, 21*6);
}

let i
function drawDoor(i) {
 
  let doorw = 140; 
  let doorm = 45;

  push(); 
  translate(100+i*doorm+doorw*(i-1), 300); 

  fill(255); 
  stroke(0); 
  strokeWeight(8); 
  strokeJoin(MITER); 
  rect(0, 0, doorw, 300); 

  noFill();
  stroke(0); 
  strokeWeight(1); 
  rect(20, 175, 45, 105);
  rect(20, 20,  45, 115);
  rect(75, 175, 45, 105);
  rect(75, 20,  45, 115);
  
  noStroke(); 
  fill(0); 
  ellipse(doorw-25, 155, 15,15); 

  fill(0);
  textFont(myFont, 90);
  textAlign(CENTER, BASELINE); 
  text(i, 0+doorw/2, 0-40);


  pop();
}




function keyPressed() {
  if (key === ' ') {
    saveFrames("choose_your_own_adventure", "png","1","1");
  }
}