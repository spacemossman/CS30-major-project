// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let levelOneRoom, levelTwoRoom;
let backgroundMusicLvl1, backgroungMusicLvl2;
let circusMusic1, circusMusic2;
let theObjects, theBackground;
let pillHit = false;
let toyHit = false;
let bedHit = false;

function preload(){
  
  
  levelOneRoom = loadImage("assets/background1.png");
  levelTwoRoom = loadImage("assets/background2.png");
  backgroundMusicLvl1 = loadSound("assets/Dream (Ambience).mp3");
  circusMusic1 = loadSound("assets/Children's March Theme.mp3");
  circusMusic2 = loadSound("assets/marionettes.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  theObjects = new Objects( 1450, 650, mouseX, mouseY);
  theBackground = new Background();
  //backgroundMusic.play();
}

function draw() {
  theBackground.display();
  theObjects.display();


  pillHit = collidePointRect(mouseX, mouseY, 1440, 630, 120, 140);
  toyHit = collidePointRect(mouseX, mouseY, 440, 540, 75, 150);
  bedHit = collidePointRect(mouseX, mouseY, 900, 300, 245, 245);
}


class Background{
  constructor(){
    this.x = windowHeight;
    this.y = windowWidth;
  }

  display(){
    if(theObjects.clicked === false){
      image(levelOneRoom, 0, 0, this.y, this.x);
      // backgroundMusicLvl1.play();
    }
    else if(theObjects.clicked === true){
      image(levelTwoRoom, 0, 0, this.y, this.x);
      // backgroundMusicLvl1.stop(); 
    }
  }
}


class Objects{
  constructor( x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.clicked = false;
    this.whereMouseIsX = dx;
    this.whereMouseIsY = dy;
  }

  display(){
    rect(1440, 630, 120, 140); // pill bottle
    rect(900, 300, 245, 245); // bed
    rect(940, 150, 100, 100); // cross
    rect(1150, 260, 100, 100);//papers
    rect(100, 100, 100, 100);//clipboard
  }

  isItCLicked(){
    if(pillHit === true){
      this.clicked = !this.clicked;
    }
    else if(pillHit === false){
      this.clicked = !this.clicked;
    }
    
    if(toyHit === true){
      if(this.clicked === false){
        circusMusic1.play();
      }
      else if (this.clicked === true){
        circusMusic2.play();
      }
    }


  }

}



function mousePressed(){
  theObjects.isItCLicked();
}