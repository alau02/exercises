let A = 0b000001;
let B = 0b000011;
let C = 0b001001;
let D = 0b011001;
let E = 0b010001; 
let F = 0b001011; 
let G = 0b011011; 
let H = 0b010011; 
let I = 0b001010; 
let J = 0b011010; 
let K = 0b000101; 
let L = 0b000111; 
let M = 0b001101; 
let N = 0b011101; 
let O = 0b010101; 
let P = 0b001111; 
let Q = 0b011111; 
let R = 0b010111; 
let S = 0b001110; 
let T = 0b011110; 
let U = 0b100101; 
let V = 0b100111;
let W = 0b111010; 
let X = 0b101101; 
let Y = 0b111101; 
let Z = 0b110101; 
let alphabet = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];


//  Braile dimensions (in inches, using average of max and min)
//  Ref: https://www.avalisway.com/resources/ada-raised-text-braille-requirements
let dotBaseDiameter = (0.059 + 0.063)/2; // base diameter of any individual dot
let distBtwDot = (0.090 + 0.100)/2; // distance between dots in the same cell
let distBtwCellH = (0.241 + 0.300)/2; // distance between corresponding dots in adjacent cells
let distBtwCellV = (0.395 + 0.400)/2; // distance between corresponding dots from one cell directly below
let dotHeight = (0.025 + 0.037)/2; // dot height

let scale = 550;

function setup() {
  createCanvas(800, 800); 
  noLoop();
  print(alphabet);
}

function draw() {
  background(253); 
  let str = [];
 
  let marginLeft = (width-((str.length-1)*distBtwCellH + distBtwDot)*scale)/2;
  let marginTop = (height-((str.length-1)*distBtwCellV+distBtwDot*2)*scale)/2;

  renderBraille(str, marginLeft, marginTop); 
}
let mLeft;
let mTop;

function renderBraille(str, mLeft, mTop) {
  ellipseMode(CENTER); 
  noStroke(); 

  for (let i = 0; i < str.length; i++) {
    word = str[i];
    word = word.toUpperCase(); 
    let nChars = word.length();
    
    for (let j=0; j<nChars; j++) {
      c = word.charAt(j);
      let charIndex = c - 'A'; 
      let binaryPattern = alphabet[charIndex];
      
      push();
      translate(mLeft + j*distBtwCellH*scale, mTop + i*distBtwCellV*scale); 
      
      for (let b = 0; b < 6; b++) {
        let px = (b/3) * distBtwDot * scale;
        let py = (b%3) * distBtwDot * scale;
        
        fill(0);
        ellipse(px, py, dotBaseDiameter*scale, dotBaseDiameter*scale);
        
        let mask = 1 << b;
        if ((binaryPattern & mask) == 0) {
          // not a raised dot -> draw a blank dot
          fill(255); 
          ellipse(px, py, dotBaseDiameter*scale-8, dotBaseDiameter*scale-8);
        }
      }
      
      pop();
    } 
  }
}

function keyPressed() {
  if (key == ' ') {
    saveFrames('braille_tool','png','1','1');
  }
}