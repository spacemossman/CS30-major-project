// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//pictures and sound
let levelOneRoom, levelTwoRoom;
let window1, window2;
let openCabinet, inventoryIMG;
let hookInventory, pinAndHookInventory, keyInventory, pinANdHookAndNeedleInventory;
let clipboard1, clipboard2, papers1, papers2;
let backgroundMusicLvl1, backgroungMusicLvl2;
let circusMusic1, circusMusic2;
let theObjects, theBackground;
 
//each different class
let toy, bed, cross, papers, clipboard, clown, cabinet, windowView, drapes, purse;

//state varible between spooky room and noraml room
let lvl1OrLvl2; 

//things you can do in the inventory
let inventoryOpen = true;
let use = false;
let combine  = false;
let examine = false;
let keyMade = false;

let useWith  = " "; 

//things in the inventory
let hasPin = true;
let hasHook = true;
let hasNeedle = true;

let hook = false;
let pin = false;
let needle = false;
let combinedKey = false;

let pinHit  = false;
let hookHit = false;
let needleHit = false;
let keyHit = false;


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

let useHit = false;
let combineHit = false;
let examineHit = false;

function preload(){
  
  //s
  window1 = loadImage("assets/window1.png");
  window2 = loadImage("assets/window2.png");
  clipboard1 = loadImage("assets/clipboard1.png");
  clipboard2 = loadImage("assets/clipboard2.png");
  papers1 = loadImage("assets/papers1.png");
  papers2 = loadImage("assets/papers2.png");
  openCabinet = loadImage("assets/cabinetOpen.png");

  inventoryIMG = loadImage("assets/emptyinventory.png");
  hookInventory = loadImage("assets/inventoryOpenHook.png");
  pinAndHookInventory = loadImage("assets/hairpin.png");
  pinANdHookAndNeedleInventory = loadImage("assets/pinneedlehook.png");
  keyInventory = loadImage("assets/keyInventory.png");


  levelOneRoom = loadImage("assets/background1.png");
  levelTwoRoom = loadImage("assets/background2.png");

  // backgroundMusicLvl1 = loadSound("assets/Dream (Ambience).mp3");
  // backgroungMusicLvl2 = loadSound("assets/Finding the Truth.mp3");
  circusMusic1 = loadSound("assets/Children's March Theme.mp3");
  circusMusic2 = loadSound("assets/marionettes.mp3");
}

function setup() {
  createCanvas(1600, 790);
  toy = new Objects("toy", "what a delightful tune!", "this doesn't sound right", false);
  bed = new Objects("bed", "I Can't sleep now, I need to find Mr. Midnight! Oh but's there's a hairpin I can use.", "Hello Mr Fox! Are you having a nice nap?", false);
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

  // inventory();

  
  toy.display();

  if(inventoryOpen === false){
  
    theBackground.display();
    inventory();
  
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
  }
  else if(inventoryOpen === true){
    inventory();
  }
  


  // where every item is, and if it is clikced or not
  //background changes when clicked 
  pillHit = collidePointRect(mouseX, mouseY, 1440, 630, 120, 140);
  papersHit = collidePointRect(mouseX, mouseY, 1150, 260, 100, 100);
  clipboardHit = collidePointRect(mouseX, mouseY, 750, 240, 50, 100);
  windowHit = collidePointRect(mouseX, mouseY, 300, 140, 240, 180);
  eyeHit = collidePointCircle(mouseX, mouseY, 70, 370, 70);
  cabinetHit = collidePointRect(mouseX, mouseY, 580, 340, 130, 130);

  //object is given when clicked 
  drapesHit = collidePointRect(mouseX, mouseY, 270, 400, 270, 70 );
  bedHit = collidePointRect(mouseX, mouseY, 900, 300, 245, 245);

  //text is only displayed 
  toyHit = collidePointRect(mouseX, mouseY, 440, 540, 75, 150);
  crossHit  = collidePointRect(mouseX, mouseY, 940, 150, 100, 100);
  clownHit = collidePointRect(mouseX, mouseY, 580, 160, 110, 130);
  purseHit = collidePointRect(mouseX, mouseY, 20, 650, 160, 120);
}


class Background{
  constructor(){
    this.x = height;
    this.y = width;
    this.displayWindow1 = false;
    this.displayWindow2 = false;
    this.displayPapers1 = false;
    this.displayPapers2 = false;
    this.displayClipboard1 = false;
    this.displayClipboard2 = false;

    this.displayOpenCabinet = false;
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
    else if (this.displayOpenCabinet){
      image(openCabinet, 0, 0, this.displayOpenCabinet);
    }

  }


  isItCLickedBackgrounds(){
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

  switchRoom(){
    if(pillHit === true){
      this.clicked = !this.clicked;
    }
    
  }
  
  
  descriptions(){
    if(this.displayText === true ){

      if (this.whatObject !== "purse" && this.whatObject !== "cabinet"){
      
        if(lvl1OrLvl2 === 1){
          this.whateverText = this.whatToSay1;
        }
        else if (lvl1OrLvl2 === 2){
          this.whateverText = this.whatToSay2;
        }
      }

      else if(this.whatObject === "purse" && this.whatObject === "cabinet"){
        this.whateverText = this.whatToSay1;
      }

      fill("white");
      textSize(24);
      textFont("Gerogia");
      text(this.whateverText, 500, 750);
    }
      
  }
  
}

function getObjects(){
  if(inventoryOpen === true){
    image(inventoryIMG, 0, 0, theBackground.y, theBackground.x);
    if(hasHook === true){
      image(hookInventory, 0, 0, theBackground.y, theBackground.x);
    }
    if(hasPin === true && hasHook === true){
      image(pinAndHookInventory, 0, 0, theBackground.y, theBackground.x);

    }
    if(hasPin === true && hasHook === true && hasNeedle){
      image(pinANdHookAndNeedleInventory, 0, 0, theBackground.y, theBackground.x);
    }

    else if(keyMade === true && hasHook === true){
      image(keyInventory, 0, 0, theBackground.y, theBackground.x);
    }
  }
}

function mousePressed(){
  isItCLicked();
  
  if(purseHit === true){
    inventoryOpen = !inventoryOpen;
  }
  
  toy.switchRoom();
  purse.switchRoom();
  
  theBackground.isItCLickedBackgrounds();
}


function isItCLicked(){
  
  if(toyHit === true){
    toy.displayText = true;


    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(bedHit === true){ // vareint
    bed.displayText = true;

    toy.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;


    hasPin = true;
  }
  else if(crossHit === true){
    cross.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(papersHit === true){
    papers.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(clipboardHit === true){
    clipboard.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(clownHit === true){
    clown.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(cabinetHit === true){ //varient main obejct of the game trying to unlock
    cabinet.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(windowHit === true){
    window.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    drapes.displayText = false;
    purse.displayText = false;
  }
  else if(drapesHit === true){ // varient give hook once hook is given other text
    drapes.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    purse.displayText = false;

    hasHook = true;
  }
  else if(purseHit === true){ // inventory opens
    purse.displayText = true;
    // sinventoryOpen = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
  }
}



function inventory(){
  if(inventoryOpen === true){

    getObjects();


    useHit = collidePointRect(mouseX, mouseY, 370, 600, 255, 80 ); //use
    combineHit = collidePointRect(mouseX, mouseY, 700, 600, 255, 80 ); //combine
    examineHit = collidePointRect(mouseX, mouseY, 1010, 600, 270, 80 ); //examine


    pinHit = collidePointRect(mouseX, mouseY, 570, 150, 140, 140 );
    hookHit = collidePointRect(mouseX, mouseY, 420, 150, 140, 140);
    needleHit = collidePointRect(mouseX, mouseY, 700, 150, 140, 140);
    keyHit = collidePointRect(mouseX, mouseY, 420, 270, 140, 140 );


    if (mouseIsPressed){     
      if(useHit === true){
        use  = true;
      }
      else if (combineHit === true){
        combine = true;
      }
      else if (examineHit === true){
        examine = true;
      }

      if(hookHit === true){
        hook = true;
      }
      if(pinHit === true){
        pin = true;
      }
      if(needleHit === true){
        needle = true;
      }
      else if (keyHit === true){
        combinedKey = true; 
      }
    }


    if(use === true){
      useObject();
    }
    else if (combine === true){
      purse.whateverText = "pick two objects to combine";
      if(needle === true && pin === true){
        keyMade = true;
        purse.whateverText = "A key! Maybe i can open up the cabinet with this!";
        getObjects();
        combine = false;
        hasPin = false;
        hasNeedle = false;
      }
      else if(needle === true && hook === true){
        purse.whateverText = "that just won't work";
        combine = false;
        needle = false;
        hook = false;
      }
      else if(hook === true && pin === true){
        purse.whateverText = "Hmm, I don't think that will work";
        combine = false;
        hook = false;
        pin = false;
      }
    }
    else if (examine === true){
      purse.whateverText = "pick an object to examine";
      if(hook === true){
        purse.whateverText = "the hook that fell of the drapes";
        examine = false;
        hook = false;
      }
      else if(pin === true){
        purse.whateverText = "the hairpin i left in my bed! It must have fallen out while i was sleeping.";
        examine = false;
        pin = false;
      }
      else if (needle === true){
        purse.whateverText = "A knitting needle! I don't have any yarn or the other needle to knit though. ";
        examine = false;
        needle = false;
      }
    }
    purse.displayText = true;
    purse.descriptions();
  }
}

function useObject (){
  if(use === true){
    inventoryOpen = false; 

    if( toyHit === true){
      useWith = "toy";
    }
    else if(bedHit === true){
      useWith = "bed";
    }
    else if (crossHit === true){
      useWith = "cross";
    }
    else if(clownHit === true){
      useWith = "clown";

    }
    else if(cabinetHit === true){
      useWith = "cabinet";
    }
    else if (drapesHit === true){
      useWith = "drapes";
    }
    

    text( "pick an object to use " + useWith); 
  }
}