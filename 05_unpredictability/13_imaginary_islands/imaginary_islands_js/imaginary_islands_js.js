function setup(){
  createCanvas(800, 800); 
  noiseSeed(5); 
  noiseDetail(5, 0.5);
}

function draw(){
  
  
  let zoom = 200.0; 
  let land = color(245, 222, 179); // Wheat
  let water = color(32, 178, 170); // LightSeaGreen
  let thresh =  mouseX / width; 
  
  let n; 

  for (let y=0; y<height; y++){
    for (let x=0; x<width; x++){
       n = noise(x/zoom, y/zoom); 
      
      if (n < thresh){
        set(x, y, water); 
      } else {
        set(x, y, land); 
      }
    }
  }
}


function keyPressed(){
  if (key == 'r'){
    noiseSeed(millis()); 
  }
  if (key == 's'){
    saveFrames("imaginary_islands_#####","png","1","1"); 
  }
}
