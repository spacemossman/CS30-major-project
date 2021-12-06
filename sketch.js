// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let levelOneRoom, pillBottle;

function preload(){
  levelOneRoom = loadImage("assets/franbow'sroom.jpg");
  pillBottle = loadImage("assets/nobackgroundDrugs.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(levelOneRoom, 0, 0, windowWidth, windowHeight);
  //image(pillBottle, 0, 0);
}

class Duotine{
  constructor( x, y){
    this.x = x;
    this.y = y;
    this.size = 30; 
    this.clicked = false;
  }
  display(){
    image(pillBottle, this.x, this.y);
  }

  isItCLicked(){
  }
}



function mousePressed(){
  // let cellX  = Math.floor(mouseX/cellWidth);
  // let cellY = Math.floor(mouseY/cellHeight);
  
}