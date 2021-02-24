A = 0b000001
B = 0b000011
C = 0b001001
D = 0b011001
E = 0b010001 
F = 0b001011 
G = 0b011011 
H = 0b010011 
I = 0b001010 
J = 0b011010
K = 0b000101 
L = 0b000111
M = 0b001101 
N = 0b011101 
O = 0b010101 
P = 0b001111 
Q = 0b011111 
R = 0b010111
S = 0b001110 
T = 0b011110 
U = 0b100101 
V = 0b100111
W = 0b111010 
X = 0b101101 
Y = 0b111101 
Z = 0b110101 
alphabet = {A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z}


#  Braile dimensions (in inches, using average of max and min)
#  Ref: https://www.avalisway.com/resources/ada-raised-text-braille-requirements
dotBaseDiameter = (0.059 + 0.063)/2 # base diameter of any individual dot
distBtwDot = (0.090 + 0.100)/2 # distance between dots in the same cell
distBtwCellH = (0.241 + 0.300)/2 # distance between corresponding dots in adjacent cells
distBtwCellV = (0.395 + 0.400)/2 # distance between corresponding dots from one cell directly below
dotHeight = (0.025 + 0.037)/2 # dot height

scale = 550

def setup():
    global alphabet
    size(800, 800) 
    noLoop()
    println(alphabet)

def draw():
    global alphabet
    background(253) 

    String[] str = new String[2]
    str[0] = "HELLO"
    str[1] = "WORLD"
    marginLeft = (width-((str[0].length()-1)*distBtwCellH + distBtwDot)*scale)/2
    marginTop = (height-((str.length-1)*distBtwCellV+distBtwDot*2)*scale)/2

    renderBraille(str, marginLeft, marginTop) 

def renderBraille(String[] str, float mLeft, float mTop):
    ellipseMode(CENTER) 
    noStroke() 

  for i in range (str, str.length, i++) {
    String word = str[i];
    word = word.toUpperCase(); 
    int nChars = word.length();
    
    for (int j=0; j<nChars; j++) {
      char c = word.charAt(j);
      int charIndex = c - 'A'; 
      int binaryPattern = alphabet[charIndex];
      
      pushMatrix();
      translate(mLeft + j*distBtwCellH*scale, mTop + i*distBtwCellV*scale); 
      
      for (int b = 0; b < 6; b++) {
        float px = int(b/3) * distBtwDot * scale;
        float py = int(b%3) * distBtwDot * scale;
        
        fill(0);
        ellipse(px, py, dotBaseDiameter*scale, dotBaseDiameter*scale);
        
        int mask = 1 << b;
        if ((binaryPattern & mask) == 0) {
          // not a raised dot -> draw a blank dot
          fill(255); 
          ellipse(px, py, dotBaseDiameter*scale-8, dotBaseDiameter*scale-8);
        }
      }
      
      popMatrix();
    } 
  }
}

def keyPressed():
  if key == ' ':
    saveFrame("braille_tool.png")
