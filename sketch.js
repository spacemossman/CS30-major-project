// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//pictures and sound
let levelOneRoom, levelTwoRoom;
let window1, window2;
let clipboard1, clipboard2, papers1, papers2;
let backgroundMusicLvl1, backgroungMusicLvl2;
let circusMusic1, circusMusic2;
let theObjects, theBackground;

//state varible between spooky room and noraml room
let lvl1OrLvl2; 

//availble objects to click
let pillHit = false;
let toyHit = false;
let bedHit = false;
let crossHit = false;
let papersHit  = false;
let clipboardHit = false;
let clownHit = false;
let cabinetHit = false;
let windowHit = false;
let drapesHit = false;
let purseHit = false;
let eyeHit = false;

function preload(){
  
  //s
  window1 = loadImage("assets/window1.png");
  window2 = loadImage("assets/window2.png");
  clipboard1 = loadImage("assets/clipboard1.png");
  clipboard2 = loadImage("assets/clipboard2.png");
  papers1 = loadImage("assets/papers1.png");
  papers2 = loadImage("assets/papers2.png");
  
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


  // where every item is, and if it is clikced or not
  pillHit = collidePointRect(mouseX, mouseY, 1440, 630, 120, 140);
  toyHit = collidePointRect(mouseX, mouseY, 440, 540, 75, 150);
  bedHit = collidePointRect(mouseX, mouseY, 900, 300, 245, 245);
  crossHit  = collidePointRect(mouseX, mouseY, 940, 150, 100, 100);
  papersHit = collidePointRect(mouseX, mouseY, 1150, 260, 100, 100);
  clipboardHit = collidePointRect(mouseX, mouseY, 750, 240, 50, 100);
  clownHit = collidePointRect(mouseX, mouseY, 580, 160, 110, 130);
  cabinetHit = collidePointRect(mouseX, mouseY, 580, 340, 130, 130);
  windowHit = collidePointRect(mouseX, mouseY, 300, 140, 240, 180);
  drapesHit = collidePointRect(mouseX, mouseY, 270, 400, 270, 70 );
  purseHit = collidePointRect(mouseX, mouseY, 20, 650, 160, 120);
  eyeHit = collidePointCircle(mouseX, mouseY, 70, 370, 70);

}


class Background{
  constructor(){
    this.x = windowHeight;
    this.y = windowWidth;
    this.displayWindow1 = false;
    this.displayWindow2 = false;
  }

  display(){

    if(theObjects.clicked === false){
      image(levelOneRoom, 0, 0, this.y, this.x);
      // backgroundMusicLvl1.play();
      lvl1OrLvl2 = 1;
    }
    else if(theObjects.clicked === true){
      image(levelTwoRoom, 0, 0, this.y, this.x);
      // backgroundMusicLvl1.stop(); 
      lvl1OrLvl2 = 2; 
    }
   
   
    if(this.displayWindow1 === true){
      image(window1, 0, 0, this.y, this.x );
    }
    else if(this.displayWindow2 === true){
      image(window2, 0, 0, this.y, this.x);
    }

  }


  isItCLicked(){
    if(lvl1OrLvl2 === 1){
      if(windowHit === true){
        this.displayWindow1 = true;
        if(eyeHit === true){
          this.displayWindow1 = false;
        }
      }
    }
    else if(lvl1OrLvl2 === 2){
      if(windowHit === true){
        this.displayWindow2 = true;
        if(eyeHit === true){
          this.displayWindow1 = false;
        }
      }
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
    circle(70, 370, 70);
  }

  isItCLicked(){
    if(pillHit === true){
      this.clicked = !this.clicked;
    }
    
    if(lvl1OrLvl2 === 1){
      if(toyHit === true){
        circusMusic1.play();
      }
    }
    else if(lvl1OrLvl2 === 2){
      if(toyHit === true){
        circusMusic2.play();
      }
    }
  }


  descriptions(){
    
  }
}



function mousePressed(){
  theObjects.isItCLicked();
  theBackground.isItCLicked();
}