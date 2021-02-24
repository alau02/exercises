let n;
let w;
let offset;

function setup() {
  createCanvas(800, 800);
  smooth();

  n = 10;
  offset = 50;
  w = (width-2*offset)/n;

  doDraw(); 
}

function draw() {
}


function doDraw() {
  background(253);

  strokeWeight(8);
  strokeCap(ROUND); 
  stroke(0); 

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flip = round(random(1));
      drawLine(offset + i*w, offset + j*w, flip);
    }
  }
}

let x; 
let y; 
let flip;

function drawLine(x, y, flip) {
  let d = 4.0; 
  if (flip == 0) {
    line(x+d, y+d, x+w-d, y+w-d);
  } else {
    line(x+w-d, y+d, x+d, y+w-d);
  }
}

function keyPressed() {
  if (key == ' ') {
    saveFrames("ten_print_#####","png", "1","1");
  } else {

    doDraw();
  }
}
