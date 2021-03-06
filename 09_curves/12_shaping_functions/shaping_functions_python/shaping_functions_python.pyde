def setup():
  size(800, 800, FX2D) 
  noLoop()

def draw():
  background(253) 

  margin = 40 
  rL = 160 
  rR = width-margin 
  rB = height-margin 
  rT = 160 
  rW = rR-rL 
  rH = rB-rT 
  myPow = 0.18
  nLines = 12

  # Draw the background of the square
  fill(255) 
  noStroke() 
  rect(rL, rT, rW, rH) 

  # Draw the curve
  noFill() 
  stroke(0) 
  strokeWeight(8) 
  strokeJoin(ROUND) 
  beginShape() 
  for i in range(rW):
    t = map(i, 0, rW, 0, 1) 
    f = function_ExponentialEmphasis(t, myPow) 
    x = map(t, 0, 1, rL, rR) 
    y = map(f, 0, 1, rB, rT) 
    vertex(x, y)
  
  endShape()

  
  stroke(0,0,0, 128) 
  strokeWeight(1.0) 
  for i in range(nLines):
    t = map(i, 0, nLines, 0, 1) 
    x = map(t, 0, 1, rL, rR) 
    f = function_ExponentialEmphasis(t, myPow) 
    y = map(f, 0, 1, rB, rT)  
    line(x, rB, x, y)
    line(x, y, rL, y) 

  # Clip the tips
  fill(253) 
  noStroke()  
  rect(rL, rT, -10, rH)
  rect(rL-10, rB, rW, 10)
  rect(rR, rT, 10, rH)
  rect(rL, rT, rW+10, -10) 

  # Outer square
  noFill()
  stroke(0) 
  strokeWeight(2) 
  rect(rL, rT, rW, rH)
  
  # Accelerating lines
  noFill()
  stroke(0) 
  strokeWeight(2) 
  rect(margin,rT, 100,rH) 
  strokeWeight(8) 
  strokeCap(SQUARE) 
  for i in range(nLines):
    t = map(i, 0, nLines, 0, 1) 
    f = function_ExponentialEmphasis(t, myPow) 
    y = map(f, 0, 1, rB, rT)  
    line(margin-1, y, margin+100+1, y) 
  
  
  # Grayscale gradient
  noFill() 
  strokeWeight(1)
  for i in range(rW):
    t = map(i, 0, rW, 0, 1) 
    f = function_ExponentialEmphasis(t, myPow) 
    x = map(t, 0, 1, rL, rR) 
    g = map(f, 0, 1, 0, 255) 
    stroke(g,g,g) 
    line(x,margin, x, margin+100) 
  
  stroke(0) 
  strokeWeight(2) 
  rect(rL,margin, rW, 100) 

# Functions of the form `y=pow(x, a)`, where
# `x` is a number between 0 and 1, and `a` is some exponent 
# close to 1.0 (like 0.5, or 1.5) are useful for applying a bias to 
# signals, boosting contrast

#------------------------------------------------------
def function_ExponentialEmphasis (x, a):

  min_param_a = 0.0 + EPSILON
  max_param_a = 1.0 - EPSILON
  a = constrain(a, min_param_a, max_param_a) 

  if (a < 0.5):
    # emphasis
    a = 2*(a)
    y = pow(x, a)
    return y
  else:
    # de-emphasis
    a = 2*(a-0.5)
    y = pow(x, 1.0/(1-a))
    return y
  
