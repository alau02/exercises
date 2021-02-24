
function setup() {
  createCanvas(800, 800); 
  background(253); 
  smooth(); 
  reset();
}

//-------------------------------------------
function draw() {
  noStroke(); 
  fill(253, 2); 
  rect(0,0, width+1, height+1); 

  stroke(0); 
  strokeWeight(8);
  fill(255); 

  let nx = noise(frameCount/240.0 + 19.999);  
  let ny = noise(frameCount/240.0 + 12.345);
  let nd = noise(frameCount/80.0 + 23.456);
  
  let px = map(nx, 0,1, -100, width+100);
  let py = map(ny, 0,1, -100, height+100);
  let pd = map(nd, 0,1, 40,120);  
  
  ellipse(px, py, pd, pd);
}

//-------------------------------------------
function keyPressed() {
  if (key == 'R') {
    reset();
  } else if (key == ' ') {
    saveFrames("animation_with_noise_#####", "png","1","1");
    background(253);
  }
}

//-------------------------------------------
function reset() {
  background(253);
}
