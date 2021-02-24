let cursorImg;

function preload(){
  cursorImg = loadImage("data/cursor_with_shadow_15x21.png");
}

function setup() {
  createCanvas(800, 800);
  smooth();
}

function draw() {

  background(253);
  ellipseMode(CENTER); 
  strokeWeight(2);
  stroke(0);
  noFill(); 

  let nRows = 14;
  let nCols = nRows;
  let cellSize =  width/(nCols+2);
  let eSize = cellSize * 0.75;

  for (let row=1; row<nRows; row++) {
    for (let col=1; col<nCols; col++) {

      let cx = map(col, 0, nCols, 0, width);
      let cy = map(row, 0, nRows, 0, height);  

      let chaos = map(mouseX, 0, width, 0, 1);
      chaos *= pow(map(col, 1, nCols, 0, 1), 1.333); // for photo only
      
      let eRot = HALF_PI + chaos*random(-HALF_PI, HALF_PI);
      let ex = cx + chaos*random(-1,1) * cellSize * 0.5;
      let ey = cy + chaos*random(-1,1) * cellSize * 0.5;
      let eAR = 1 + chaos*random(-0.75, 0.75); 
      let ew = eSize * eAR; 
      let eh = eSize / eAR; 
      
      let esw = 3.0 + chaos*random(-1,1)*2.5; 
      strokeWeight(esw);
    
      push(); 
      translate(ex, ey);
      rotate(eRot); 
      ellipse(0, 0, ew, eh); 
      pop();
    }
  }

  for (let i=0; i<17; i++){
    noStroke(); 
    fill(253,253,253, (17-i)*10); 
    ellipse(mouseX+15*1.75, mouseY+21*2.75, i*16,i*16); 
  }
  image(cursorImg, mouseX, mouseY, 15*6, 21*6);
}

function keyPressed() {
  if (key == ' ') {
    saveFrames("order_to_chaos_####","png","1","1");
  }
}