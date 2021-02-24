let px; 
let py; 

function setup() {
  createCanvas(800, 800);  
  smooth();
  clearCanvas(); 
}

function draw() {

  stroke(0); 
  strokeWeight(2); 
  for (let i=0; i<10; i++) {
    let qx = px;
    let qy = py; 
    let jumpRange = 20; 
    let rangle = random(0, TWO_PI); 
    px += jumpRange * cos(rangle); //random(-1, 1); 
    py += jumpRange * sin(rangle); //random(-1, 1);

    stroke(0); 
    strokeWeight(2); 
    line (qx, qy, px, py);
  }
}

function keyPressed() {
  if (key === 'R') {
    reset();
  } else if (key === ' ') {
    println("saving " + millis()); 
    saveCanvas("brownian_motion_#####.png","png");
  }
}

function reset() {
  background(253);
  px = width/2; 
  py = height/2;
}