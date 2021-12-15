// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let levelOneRoom, levelTwoRoom, pillBottle;
let picturesF, theBackground;
let pillHit = false;
let toyHit = false;

function preload(){
  levelOneRoom = loadImage("assets/franbow'sroom.jpg");
  pillBottle = loadImage("assets/nobackgroundDrugs.jpg");
  levelTwoRoom = loadImage("assets/deadroom.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  picturesF = new Duotine( 1450, 650, mouseX, mouseY);
  theBackground = new Background();
}

function draw() {
  theBackground.display();
  picturesF.display();


  pillHit = collidePointRect(mouseX, mouseY, picturesF.x, picturesF.y, 108, 130);
  toyHit = collidePointRect(mouseX, mouseY, 440, 540, 75, 150);
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
      image(levelTwoRoom, 0, 0, this.y, this.x);
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
    rect(440, 540, 75, 150);
    // rect()
    image(pillBottle, this.x, this.y);
  }

  isItCLicked(){
    if(pillHit === true){
      this.clicked = !this.clicked;
    }                                     
  }

}



function mousePressed(){
  // let cellX  = Math.floor(mouseX/cellWidth);
  // let cellY = Math.floor(mouseY/cellHeight);
  picturesF.isItCLicked();
}