

let happened = [];
let historyLen; 

//--------------------------------------------
function setup(){
  createCanvas(800, 800); 
  
  historyLen = width/4;
  happened = [historyLen];
}


//--------------------------------------------
function draw(){
  background(253); 
  
  noFill();
  stroke(0); 
  strokeWeight(4); 
  strokeJoin(ROUND); 
  
  beginShape(); 
  for (let i=0; i<historyLen; i++){
    let h = happened[(historyLen-1)-i];
    let x = map(i, 0, historyLen-1, 0, width); 
    let y; 
    if (h == 0){
      y = height/2;
    } else{
      y = (height/2 - (height/8));
    }
    vertex(x, y); 
  }
  endShape(); 
  
  let probability = 0.02;
  for (let i=historyLen-1; i>0; i--){
    happened[i] = happened[i-1];
  }
  let trigger = 0; 
  let doit = random(1.0); 
  if (doit < probability){
    trigger = 1; 
  }
  happened[0] = trigger;
}

//--------------------------------------------
function keyPressed(){
  if (key == ' '){
    saveFrames("intermittent_events_#####","png","1","1"); 
  }
}