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
  theObjects = new Objects();
  theBackground = new Background();
}

function draw() {
  theBackground.display();
  theObjects.descriptions();
  theObjects.display();


  // where every item is, and if it is clikced or not
  pillHit = collidePointRect(mouseX, mouseY, 1440, 630, 120, 140);
  papersHit = collidePointRect(mouseX, mouseY, 1150, 260, 100, 100);
  clipboardHit = collidePointRect(mouseX, mouseY, 750, 240, 50, 100);
  windowHit = collidePointRect(mouseX, mouseY, 300, 140, 240, 180);
  eyeHit = collidePointCircle(mouseX, mouseY, 70, 370, 70);


 
  toyHit = collidePointRect(mouseX, mouseY, 440, 540, 75, 150);
  bedHit = collidePointRect(mouseX, mouseY, 900, 300, 245, 245);
  crossHit  = collidePointRect(mouseX, mouseY, 940, 150, 100, 100);
  clownHit = collidePointRect(mouseX, mouseY, 580, 160, 110, 130);
  cabinetHit = collidePointRect(mouseX, mouseY, 580, 340, 130, 130);
  drapesHit = collidePointRect(mouseX, mouseY, 270, 400, 270, 70 );
  purseHit = collidePointRect(mouseX, mouseY, 20, 650, 160, 120);
}


class Background{
  constructor(){
    this.x = windowHeight;
    this.y = windowWidth;
    this.displayWindow1 = false;
    this.displayWindow2 = false;
    this.displayPapers1 = false;
    this.displayPapers2 = false;
    this.displayClipboard1 = false;
    this.displayClipboard2 = false;
  }

  display(){

    if(theObjects.clicked === false && this.displayWindow1 === false){
      image(levelOneRoom, 0, 0, this.y, this.x);
      // backgroundMusicLvl1.play();
      lvl1OrLvl2 = 1;
    }
    else if(theObjects.clicked === true && this.displayWindow2 === false){
      image(levelTwoRoom, 0, 0, this.y, this.x);
      
      lvl1OrLvl2 = 2; 
    }
    else if(this.displayWindow1 === true){
      image(window1, 0, 0, this.y, this.x );
    }
    else if(this.displayWindow2 === true){
      image(window2, 0, 0, this.y, this.x);
    }
    if(this.displayPapers1 === true){
      image(papers1, 0, 0, this.y, this.x);
    }
    else if (this.displayPapers2 === true){
      image(papers2, 0, 0, this.y, this.x);
    }
    else if(this.displayClipboard1 === true){
      image(clipboard1, 0, 0, this.y, this.x);
    }
    else if(this.displayClipboard2 === true){
      image(clipboard2, 0, 0, this.y, this.x);
    }

  }


  isItCLicked(){
    if(lvl1OrLvl2 === 1){
      if(windowHit === true){
        this.displayWindow1 = true;
      }
      else if(papersHit === true){
        this.displayPapers1 = true;
        console.log("ayup");
      }
      else if(clipboardHit === true){
        this.displayClipboard1 = true;
      }
      if(eyeHit === true && 
        (this.displayWindow1 === true || this.displayPapers1 === true || this.displayClipboard1 === true)){

        this.displayWindow1 = false;
        this.displayPapers1 = false;
        this.displayClipboard1 = false;

      }
    }
    else if(lvl1OrLvl2 === 2){
      if(windowHit === true){
        this.displayWindow2 = true;
      }    
      else if(papersHit === true){
        this.displayPapers2 = true;
        console.log("ayo");
      }
      else if(clipboardHit === true){
        this.displayClipboard2 = true;
      }
      if(eyeHit === true && (
        this.displayWindow2 === true || this.displayPapers2 === true || this.displayClipboard2 === true )){

        this.displayWindow2 = false;
        this.displayPapers2 = false;
        this.displayClipboard2 = false;

      }
    }
  }
}


class Objects{
  constructor(){
    this.clicked = false;

    this.whateverText = " ";

    this.papersText1 = false;
    this.clipboardText1 = false;
    this.windowText1 = false;
    this.toyText1 = false;
    this.bedText1 = false;
    this.crossText1 = false;
    this.clownText1 = false;
    this.cabinetText1 = false;
    this.drapesText1 = false;
    this.purseText1 = false;


    this.papersText2 = false;
    this.clipboardText2 = false;
    this.windowText2 = false;
    this.toyText2 = false;
    this.bedText2 = false;
    this.crossText2 = false;
    this.clownText2 = false;
    this.cabinetText2 = false;
    this.drapesText2 = false;
    this.purseText2 = false;
  }
  display(){
    fill("black");
    circle(1510, 370, 80);
    point(mouseX, mouseY);
  }

  isItCLicked(){
    if(pillHit === true){
      this.clicked = !this.clicked;
    }
    
    if(lvl1OrLvl2 === 1){
      if(toyHit === true){
        circusMusic1.play();
        this.toyText1 = true;
      }
      else if (bedHit === true){
        this.bedText1 = true;
      }
      else if (crossHit === true){
        this.crossText1 = true;
      }
      else if (clownHit === true){
        this.clownText1 = true;
      }
      else if (cabinetHit === true){
        this.cabinetText1 = true;
      }
      else if (drapesHit === true){
        this.drapesText1 = true;
      }
      else if (purseHit === true){
        this.purseText1 = true;
      }
      else if(papersHit === true){
        this.papersText1 = true;
      }
      else if(clipboardHit === true){
        this.clipboardText1 = true;
      }
      else if(windowHit === true){
        this.windowText1 = true;
      }

    }
    else if(lvl1OrLvl2 === 2){
      if(toyHit === true){
        circusMusic2.play();
      }

      else if (bedHit === true){
        this.bedText2 = true;
      }
      else if (crossHit === true){
        this.crossText2 = true;
      }
      else if (clownHit === true){
        this.clownText2 = true;
      }
      else if (cabinetHit === true){
        this.cabinetText2 = true;
      }
      else if (drapesHit === true){
        this.drapesText2 = true;
      }
      else if (purseHit === true){
        this.purseText2 = true;
      }
      else if(papersHit === true){
        this.papersText2 = true;
      }
      else if(clipboardHit === true){
        this.clipboardText2 = true;
      }
      else if(windowHit === true){
        this.windowText2 = true;
      }
    }
  }


  descriptions(){
    fill("white");
    textSize(24);
    textFont("Gerogia")
    textAlign("center");
    text(this.whateverText, 500, 750);


    if(this.papersText1 === true){
      this.whateverText = "Red and tiny, you are hiding from me."
    }
    if(this.papersText2 === true){
      this.whateverText = "I hate the monster!"
    }
    if(this.clipboardText1 === true){
      this.whateverText = "Psycho- what? I'm definitely not that for sure!"
    }
    if(this.clipboardText2 === true){
      this.whateverText = "Who did what?"
    }
    if(this.windowText1 === true){
      this.whateverText = "It's not time to play outside"
    }
    if(this.windowText2 === true){
      this.whateverText = "That's my head! why do you have my head?"
    }
    if(this.toyText1 === true){
      this.whateverText = "what a delightful tune!"
    }
    if(this.toyText2 === true){
      this.whateverText = "kadjfk;ljd"
    }
  }
}



function mousePressed(){
  theObjects.isItCLicked();
  theBackground.isItCLicked();
}