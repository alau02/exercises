let offset;
let n;
let w;
let patternH = [];
let patternV = [];

let myFont;

function preload(){
  myFont = loadFont("data/CenturySchoolbook.otf");
}

function setup() {
  createCanvas(800, 800);
  textFont(myFont, 40);

  n = 12;
  offset = 80;
  w = (width-1.8*offset)/n;

  patternH = [n+1];
  patternV = [n+1];

  reset();
}

function draw() {
  background(253);
  
  push(); 
  translate(10,10); 

  fill(0);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < n+1; i++) {
    text(str(patternH[i]), offset/2-5, offset+i*w);
  }
  for (let i = 0; i < n+1; i++) {
    text(str(patternV[i]), offset+i*w, offset/2-5);
  }


  stroke(0);
  strokeWeight(8);
  strokeCap(PROJECT); 
  for (let i = 0; i < n+1; i++) { 
    if (patternV[i] == 1) {
      for (let j = 0; j < n; j += 2) {
        line(offset+i*w, offset+j*w, offset+i*w, offset+(j+1)*w);
      }
    } else {
      for (let j = 1; j < n; j += 2) {
        line(offset+i*w, offset+j*w, offset+i*w, offset+(j+1)*w);
      }
    }
  } 

  for (let j = 0; j < n+1; j++) { 
    if (patternH[j] == 1) {
      for (let i = 0; i < n; i += 2) {
        line(offset+i*w, offset+j*w, offset+(i+1)*w, offset+j*w);
      }
    } else {
      for (let i = 1; i < n; i += 2) {
        line(offset+i*w, offset+j*w, offset+(i+1)*w, offset+j*w);
      }
    }
  } 


  pop();
}

function reset() {
  for (let i = 0; i < n+1; i++) {
    let r1 = round(random(1));
    let r2 = round(random(1));
    patternH[i] = r1;
    patternV[i] = r2;
  }
}

function keyPressed() {
  if (key == ' ') {
    saveFrames("hitomezashi_sashiko","png","1","1");
  } else if (key == 'r') {
    reset();
  }
}