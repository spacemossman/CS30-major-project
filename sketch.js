// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let levelOneRoom, levelTwoRoom, pillBottle;
let picturesF, theBackground;

function preload(){
  levelOneRoom = loadImage("assets/franbow'sroom.jpg");
  pillBottle = loadImage("assets/nobackgroundDrugs.jpg");
  // levelTwoRoom = loadImage("assets/")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  picturesF = new Duotine( 1450, 650, mouseX, mouseY);
  theBackground = new Background();
}

function draw() {
  theBackground.display();
  picturesF.display();
}
class Background{
  constructor(){
    this.x = windowHeight;
    this.y = windowWidth;
  }

  display(){
    if(picturesF.clicked === false){
      image(levelOneRoom, 0, 0, this.y, this.x);
    }
    else if(picturesF.clicked === true){
      //yuh
    }
  }
}


class Duotine{
  constructor( x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.clicked = false;
    this.whereMouseIsX = dx;
    this.whereMouseIsY = dy;
  }
  display(){
    rect(this.x,  this.y, 108, 130);
    image(pillBottle, this.x, this.y);
  }

  isItCLicked(){
    if(dist(this.x, this.y, 108, 130)> this.whereMouseIsX){
      this.clicked = true;
    }                                     
  }
}



function mousePressed(){
  // let cellX  = Math.floor(mouseX/cellWidth);
  // let cellY = Math.floor(mouseY/cellHeight);
  picturesF.isItCLicked();
}