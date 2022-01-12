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
 
//each different class
let toy, bed, cross, papers, clipboard, clown, cabinet, windowView, drapes, purse;

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
  toy = new Objects("toy", "what a delightful tune!", "this doesn't sound right", false);
  bed = new Objects("bed", "I Can't sleep now, I need to find Mr. Midnight!", "Hello Mr Fox! Are you having a nice nap?", false);
  cross = new Objects("cross", "I hope it doesn't fall on my head while i sleep", "I don't understand. It was not who?", false);
  papers = new Objects("papers", "Red and tiny you are hinding from me.", " I hate the monster!", false);
  clipboard = new Objects("clipboard", "Psycho- what? I'm definitely not that for sure!", "Who did what? I'm so confused", false);
  clown = new Objects("clown", "How are you Mr Clown?", "Where did you go Mr Clown?", false);
  cabinet = new Objects("cabinet", "It's locked", "Thank goodness for extra keys!", false);
  windowView = new Objects("window", "It's not time to play outside", "That's my head! why do you have my head?", false);
  drapes = new Objects("drapes", "A handy Hook! maybe i can make a key out of this", "they  were like this when i found them", false);
  purse = new Objects("purse", "the purse that my Aunt Grace Gave Me!", "Maybe i should try combining something", false);
  theBackground = new Background();
}

function draw() {
  theBackground.display();
  toy.descriptions();
  bed.descriptions();
  cross.descriptions();
  papers.descriptions();
  clipboard.descriptions();
  clown.descriptions();
  cabinet.descriptions();
  windowView.descriptions();
  drapes.descriptions();
  purse.descriptions();

  toy.display();
  


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

    if(toy.clicked === false && this.displayWindow1 === false){
      image(levelOneRoom, 0, 0, this.y, this.x);
      // backgroundMusicLvl1.play();
      lvl1OrLvl2 = 1;
    }
    else if(toy.clicked === true && this.displayWindow2 === false){
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
  constructor(whatObject, whatText1, whatText2, displayText){
    this.clicked = false;

    this.whateverText = " ";

    this.whatObject = whatObject;
    this.whatToSay1 = whatText1;
    this.whatToSay2 = whatText2;

    this.displayText = displayText;
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
    
    if(toyHit === true && this.whatObject === "toy"){
      this.displayText1 = true;
    }
    else if(bedHit === true && this.whatObject === "bed"){
      this.displayText1 = true;
    }
    else if(crossHit === true && this.whatObject === "cross"){
      this.displayText1 = true;
    }
    else if(papersHit === true && this.whatObject === "papers"){
      this.displayText1 = true;
    }
    else if(clipboardHit === true && this.whatObject === "clipboard"){
      this.displayText1 = true;
    }
    else if(clownHit === true && this.whatObject === "clown"){
      this.displayText1 = true;
    }
    else if(cabinetHit === true && this.whatObject === "cabinet"){
      this.displayText1 = true;
    }
    else if(windowHit === true && this.whatObject === "window"){
      this.displayText1 = true;
    }
    else if(drapesHit === true && this.whatObject === "drapes"){
      this.displayText1 = true;
    }
    else if(purseHit === true && this.whatObject === "purse"){
      this.displayText1 = true;
    }
  }


  descriptions(){
    if(this.displayText === true){
      
      if(lvl1OrLvl2 === 1){
        this.whateverText = this.whatText1;
      }
      else if (lvl1OrLvl2 === 2){
        this.whateverText = this.whatText2;
      }

      fill("white");
      textSize(24);
      textFont("Gerogia");
      textAlign("center");
      text(this.whateverText, 500, 750);
    }
  }
}



function mousePressed(){
  toy.isItCLicked();
  bed.isItCLicked();
  cross.isItCLicked();
  papers.isItCLicked();
  clipboard.isItCLicked();
  clown.isItCLicked();
  cabinet.isItCLicked();
  windowView.isItCLicked();
  drapes.isItCLicked();
  purse.isItCLicked();


  theBackground.isItCLicked();
}