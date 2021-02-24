function setup(){
  createCanvas(800, 800); 
  noiseSeed(5); 
  noiseDetail(5, 0.5);
}

function draw(){
  
  background(253); 
  
  skyColor = color(200,230,255); 
  for (let y=0; y<height; y++){
    let t = map(y, 0, height, 0, 1);
    t = pow(t, 0.25); 
    let alpha = map(t, 0,1, 255, 0); 
    stroke(200,230,255, alpha);
    line(0,y, width, y); 
  }
  
  stroke(0);
  for (let x=0; x<width; x++){
    let t = millis()/1000.0 + 3.0 * map(x, 0,width, 0,1); 
    let f = noise(t);  
    let y = map(f, 0,1, height*0.60, height*0.20); 
    line(x,height, x,y); 
  }
  
}


function keyPressed(){
  if (key == 's'){
    noiseSeed(millis()); 
  }
  if (key == ' '){
    saveFrames("noise_mountains_#####","png","1","1"); 
  }
}