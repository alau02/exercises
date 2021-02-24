let cursorImg; 
let myFont; 

function preload() {
  cursorImg = loadImage("data/cursor_with_shadow_15x21.png");
  myFont = loadFont("data/CenturySchoolbook.otf");
}

function setup() {
  createCanvas(800, 800);
  image(cursorImg, 0, 0);
  myFont = textFont("CenturySchoolbook", 90); 
}

function draw() {
  background(253);
  //String str = (mouseX > (width/2)) ? "RIGHT" : "LEFT";
  if(mouseX > (width/2)){ 
    text("\n RIGHT", width*0.50, height*0.80);
  } else{
    text("\n LEFT", width*0.50, height*0.80);
  }
  
  
  stroke(0); 
  strokeWeight(8); 
  strokeCap(ROUND); 
  for (let y=-10; y<(height * 0.666); y+=80){
    line(width/2, y, width/2, y+45); 
  }
  
  
  fill(0); 
  textAlign(CENTER, CENTER); 
  textFont(myFont, 90); 
  textLeading(90); 
  text("Cursor is on the \n", width*0.50, height*0.80); 

  image(cursorImg, mouseX, mouseY, 15*6, 21*6);
}

function keyPressed() {
  if (key == '') {
    saveFrames("left_or_right","png","1","1");
  }
}