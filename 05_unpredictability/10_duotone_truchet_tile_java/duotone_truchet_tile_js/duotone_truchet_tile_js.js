// Duotone Truchet-like Tilings
// Ref: http://cambolbro.com/graphics/duotone/

let n;
let w;

function setup() {
  createCanvas(800, 800);

  n = 10;
  w = width/n;

  noLoop();
  randomSeed(398);
}

//--------------------------------------------------
function draw() {
  background(253);
  randomSeed(398);

  for (let i = 3; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i+j)%2 == 0) {
        if (round(random(1)) == 0) {
          drawTileA(i*w, j*w, true);
        } else {
          drawTileB(i*w, j*w, false);
        }
      } else {
        if (round(random(1)) == 0) {
          drawTileA(i*w, j*w, false);
        } else {
          drawTileB(i*w, j*w, true);
        }
      }
    }
  }

 drawGrid();
 drawHelper();

}


function drawHelper(){
  
  let sc = 2.0;
  let sep = 1.2;
  push();
  scale(sc); 
  translate(16, 16);
  
  drawTileA(0, w*0*sep, true);
  drawTileA(0, w*1*sep, false);
  drawTileB(0, w*2*sep, true);
  drawTileB(0, w*3*sep, false);
  
  strokeWeight(8.0/sc);
  strokeJoin(MITER); 
  stroke(0); 
  noFill(); 
  for (let i=0; i<4; i++) {
    rect(0, w*i*sep, w, w);
  }
  pop();
}

//--------------------------------------------------
let x;
let y;
let flip;

function drawGrid() {
  stroke(253, 50);
  strokeWeight(3);
  for (x = w; x < width; x += w) {
    line(x, 0, x, height);
  }

  for (y = w; y < height; y += w) {
    line(0, y, width, y);
  }
}

function drawTileA(x, y, flip) {
  push();
  translate(x, y);
  noStroke();
  if (flip) {
    fill(253);
  } else {
    fill(240); //255, 200, 200);
  }
  rect(0, 0, w, w);
  stroke(0);
  strokeWeight(3);
  if (flip) {
    fill(240); //255, 200, 200);
  } else {
    fill(253);
  }
  arc(w, 0, w, w, HALF_PI, PI);
  arc(0, w, w, w, PI+HALF_PI, PI+PI);
  pop();
}

function  drawTileB(x, y, flip) {
  push();
  translate(x, y);
  noStroke();
  if (flip) {
    fill(253);
  } else {
    fill(240); //255, 200, 200);
  }
  rect(0, 0, w, w);
  stroke(0);
  strokeWeight(3);
  if (flip) {
    fill(240); //255, 200, 200);
  } else {
    fill(253);
  }
  arc(0, 0, w, w, 0, HALF_PI);
  arc(w, w, w, w, PI, PI+HALF_PI);
  pop();
}

function keyPressed() {
  if (key == ' ') {
    saveFrames("truchet_tile","png", "1","1");
  }
}
