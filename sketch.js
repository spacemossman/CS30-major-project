// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let levelOneRoom, pillBottle;
let picturesF;

function preload(){
  levelOneRoom = loadImage("assets/franbow'sroom.jpg");
  pillBottle = loadImage("assets/nobackgroundDrugs.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  picturesF = new Duotine( 1450, 650, mouseX, mouseY);
}

function draw() {
  image(levelOneRoom, 0, 0, windowWidth, windowHeight);
  picturesF.display();
}

class Duotine{
  constructor( x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.size = 30; 
    this.clicked = false;
    this.whereMouseIsX = dx;
    this.whereMouseIsY = dy;
  }
  display(){
    image(pillBottle, this.x, this.y);
  }

  isItCLicked(){
    if(this.whereMouseIsX === 5){
      this.clicked = true;
    }                                     
  }
}



function mousePressed(){
  // let cellX  = Math.floor(mouseX/cellWidth);
  // let cellY = Math.floor(mouseY/cellHeight);
  picturesF.isItCLicked();
}