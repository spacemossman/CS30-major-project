// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//pictures and sound
let levelOneRoom, levelTwoRoom, menu;
let window1, window2;
let openCabinet, inventoryIMG, mrMidnight;
let hookInventory, pinAndHookInventory, keyInventory, pinANdHookAndNeedleInventory;
let clipboard1, clipboard2, papers1, papers2;
let backgroundMusicLvl1, backgroundMusicLvl2;
let circusMusic1, circusMusic2;
let theObjects, theBackground;
 
//each different class
let toy, bed, cross, papers, clipboard, clown, cabinet, windowView, drapes, purse, curtain; 

//menu screen vs game 
let state = "start"; 

//state varible between spooky room and normal room
let lvl1OrLvl2 = 1; 


//things you can do in the inventory
let inventoryOpen = false;
let use = false;
let combine  = false;
let examine = false;
let keyMade = false;


//things in the inventory
let hasPin = false;
let hasHook = false;
let hasNeedle = false;

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
let curtainHit = false;
let purseHit = false;
let eyeHit = false;

let useHit = false;
let combineHit = false;
let examineHit = false;

function preload(){
  
  //backgrounds
  window1 = loadImage("assets/window1.png");
  window2 = loadImage("assets/window2.png");
  clipboard1 = loadImage("assets/clipboard1.png");
  clipboard2 = loadImage("assets/clipboard2.png");
  papers1 = loadImage("assets/papers1.png");
  papers2 = loadImage("assets/papers2.png");
  openCabinet = loadImage("assets/cabinetOpen.png");

  //inventory images
  inventoryIMG = loadImage("assets/emptyinventory.png");
  hookInventory = loadImage("assets/inventoryOpenHook.png");
  pinAndHookInventory = loadImage("assets/hairpin.png");
  pinANdHookAndNeedleInventory = loadImage("assets/pinneedlehook.png");
  keyInventory = loadImage("assets/keyInventory.png");

// picture of mr Midnight
  mrMidnight = loadImage("assets/mrMidnight.png");
//two main backgrounds
  levelOneRoom = loadImage("assets/background1.png");
  levelTwoRoom = loadImage("assets/background2.png");
  menu = loadImage("assets/menu screen.png"); 

  //sounds 
  backgroundMusicLvl1 = loadSound("assets/Dream (Ambience).mp3");
  backgroundMusicLvl2 = loadSound("assets/Finding the Truth.mp3");
  circusMusic1 = loadSound("assets/Children's March Theme.mp3");
  circusMusic2 = loadSound("assets/spooky music.mp3");
}

function setup() {
  //creating a canvas in a speific size stops the hit boxes from breaking
  createCanvas(1600, 790);
  //each avabile object is their own sperate object, so i can avoid painful if statements
  toy = new Objects("toy", "What a delightful tune!", "This does not sound right.", false);
  bed = new Objects("bed", "I can't sleep now; I need to find Mr. Midnight! Oh, but's there's a hairpin I can use.", "Hello Mr. Fox! Are you having a nice nap?", false);
  cross = new Objects("cross", "I hope it dosen't fall on my head while I sleep!", "I don't understand. It was not who?", false);
  papers = new Objects("papers", "Red and tiny you are hiding from me.", "I hate the monster!", false);
  clipboard = new Objects("clipboard", "Psycho- what? I'm definitely not that for sure!", "Who did what? I'm so confused", false);
  clown = new Objects("clown", "How are you Mr. Clown?", "Where did you go Mr. Clown?", false);
  cabinet = new Objects("cabinet", "It's locked", "Thank goodness for extra keys!", false);
  windowView = new Objects("window", "It's not time to play outside", "That's my head! Why do you have my head?", false);
  drapes = new Objects("drapes", "A handy Hook! Maybe i can make a key out of this", "They were like this when i found them", false);
  purse = new Objects("purse", " ", " ", false);
  curtain = new Objects("curtain", "A knitting needle! Someone must of left it here!", "There's nothing here! I already took the knitting needle.", false);
  theBackground = new Background();
}

function draw() {
  if(state === "start"){
    //the menu with a instructions
    image(menu, 0, 0, theBackground.y, theBackground.x);

    noStroke(); 
    fill("white");
    rect(630, 330, 400, 400);

    fill("black");
    textSize(50);
    textFont("Gerogia");
    text("Press enter to start!", 635, 380);
    textSize(24);
    text("Instructions: Click around to explore and", 635, 430);  
    text("to open the cabinet.", 635, 460);
    text("Check your inventory on the bottom left", 635, 490);  
    text("so that you can make a key.", 635, 520);
    text("Make sure to click everywhere!", 635, 550);

  }
  else if (state === "game"){ 

    //what the game needs to start
    toy.display();
  
    //only doing descirptions for objects if the inventory isn't open 
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
      curtain.descriptions();
    }
    // if the inventory is open, do the inventroy thingd
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
    curtainHit = collidePointRect(mouseX, mouseY, 1270, 200, 200, 300);
  
    //object is given when clicked 
    drapesHit = collidePointRect(mouseX, mouseY, 270, 400, 270, 70 );
    bedHit = collidePointRect(mouseX, mouseY, 900, 300, 245, 245);
  
    //text is only displayed 
    toyHit = collidePointRect(mouseX, mouseY, 440, 540, 75, 150);
    crossHit  = collidePointRect(mouseX, mouseY, 940, 150, 100, 100);
    clownHit = collidePointRect(mouseX, mouseY, 580, 160, 110, 130);
    purseHit = collidePointRect(mouseX, mouseY, 20, 650, 160, 120);
  }
  
}


class Background{
  constructor(){
    this.x = height;
    this.y = width;
    //which background to display
    this.displayWindow1 = false;
    this.displayWindow2 = false;
    this.displayPapers1 = false;
    this.displayPapers2 = false;
    this.displayClipboard1 = false;
    this.displayClipboard2 = false;

    this.displayOpenCabinet = false;
    this.winGame = false; 
  }

  display(){
    //how each background is displayed
    if(toy.clicked === false && this.displayWindow1 === false){
      image(levelOneRoom, 0, 0, this.y, this.x);
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
    else if (this.displayOpenCabinet === true){
      image(openCabinet, 0, 0, this.y, this.x);
    }

    if (this.winGame === true){
      image(mrMidnight, 700, 300);
      cabinet.whateverText = "Mr. Midnight! I finally found you!";
    }

  }


  isItCLickedBackgrounds(){
    //the use fuction is in here
    //becuase it switches the background
    if(use === true && combinedKey === true){
      if(mouseIsPressed && cabinetHit === true){
        this.displayOpenCabinet = true;
        cabinet.displayText = true;
        cabinet.howManyTimesClicked++; 
      }
      if(cabinet.howManyTimesClicked === 2 && cabinetHit === true){
        this.winGame = true;
      }
    }
    else if (use === true && (hook === true || pin === true || needle === true)){
      if(mouseIsPressed){
        fill("white");
        textSize(24);
        textFont("Gerogia");
        text("That just won't work", 500, 750);
      }
    }

    //when things are clicked, this is how they are changed
    if(lvl1OrLvl2 === 1){
      if(windowHit === true){
        this.displayWindow1 = true;
      }
      else if(papersHit === true){
        this.displayPapers1 = true;
      }
      else if(clipboardHit === true){
        this.displayClipboard1 = true;
      }
      //and this is how you escape from each background
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
    
    //this variable switches between the two main room 
    this.clicked = false;
    //these variable sets what text is displayed
    this.whateverText = " ";
    this.whatObject = whatObject;
    this.whatToSay1 = whatText1;
    this.whatToSay2 = whatText2;

    //and when it is displayed
    this.displayText = displayText;
    //this helps with how many times speific objects are clicked
    this.howManyTimesClicked = 0; 
  }

  display(){
    fill("black");
    circle(1510, 370, 80);
    point(mouseX, mouseY);

  }

  switchRoom(){
    //how the rooms swicthed 
    if(pillHit === true){
      this.clicked = !this.clicked;
    }
  }
  
  
  descriptions(){
    if(this.displayText === true){
      //this how which text is displayed
      if(lvl1OrLvl2 === 1 && 
        (this.whatObject !== "purse" && this.whatObject !== "curtain" && this.whatObject !== "cabinet" && this.whatObject !== "drapes")){
         // If the object is not a object which gives youo an object/is the cabinet, regular text is displyaed depending on which room 
          this.whateverText = this.whatToSay1;
      }
      else if (lvl1OrLvl2 === 2 && 
        (this.whatObject !== "purse" && this.whatObject !== "curtain" && this.whatObject !== "cabinet" && this.whatObject !== "drapes")){
        this.whateverText = this.whatToSay2;
      }
      else if (this.whatObject === "purse" || this.whatObject === "curtain" || this.whatObject === "cabinet" || this.whatObject === "drapes"){
        //this is what happend when the object is the cabinet or gives you and item 
        if(this.howManTimesClicked === 100){
          //this is an easter egg that I'm not sure if it will work
          this.whateverText = "Why did you click this 100 times? Why? ";
        }
        //different descirptions for if the item has been picked up already
        else if(this.howManyTimesClicked >= 2){
          this.whateverText = this.whatToSay2;
        }
        //first descirption for when item is picked up
        else if (this.howManyTimesClicked === 1 ){
          this.whateverText = this.whatToSay1;
        }
        //cabinet text depending wether is open, clicked again, or locked
        else if(this.whatObject === "cabinet" && theBackground.displayOpenCabinet === true){
          this.whateverText = "It's unlocked! I wonder what's inside!";
          if(this.whatObject === "cabinet" && theBackground.winGame === true){
            this.whateverText = "Mr Midnight! I finally found you!";
          }
        }
        else if (this.whatObject === "cabinet"){
          this.whateverText = this.whatToSay1; 
        }
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
    // How the items show up in the inventory
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
  //inventory opens with this
  if(purseHit === true){
    inventoryOpen = !inventoryOpen;
  }

  //No other descirptions when the inventory
  if(inventoryOpen === false){
    isItCLicked();
  }
  
  //how the backgrounds switch
  toy.switchRoom();
  theBackground.isItCLickedBackgrounds();
}


function keyPressed(){
  //moving from the menu screen to the game
  if(state === "start"){
    if(keyCode === 13){
      state = "game";
    }
  }
  sound(); 
}

function isItCLicked(){
  //how each text is displayed and only one at time
  //also how items get in inventory
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
    curtain.displayText = false; 

    //toy playing sounds
    if(lvl1OrLvl2 === 1){
      circusMusic1.play();
    }
    else if (lvl1OrLvl2 === 2){
      circusMusic2.play();
    }
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
    curtain.displayText = false; 


    bed.howManyTimesClicked++;
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
    curtain.displayText = false; 
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
    curtain.displayText = false; 
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
    curtain.displayText = false; 
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
    curtain.displayText = false; 
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
    curtain.displayText = false; 
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
    curtain.displayText = false; 
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
    curtain.displayText = false; 

    drapes.howManyTimesClicked++; 
    hasHook = true;
  }
  else if(purseHit === true){ // inventory opens
    purse.displayText = true;

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    curtain.displayText = false; 
  }
  else if(curtainHit === true){
    curtain.displayText = true; 

    toy.displayText = false;
    bed.displayText = false;
    cross.displayText = false;
    papers.displayText = false;
    clipboard.displayText = false;
    clown.displayText = false;
    cabinet.displayText = false;
    window.displayText = false;
    drapes.displayText = false;
    purse.displayText = false; 

    curtain.howManyTimesClicked++;
    hasNeedle = true;
  }
}



function inventory(){
// the main inventory function 
  if(inventoryOpen === true){

    //get objets is called 
    getObjects();

    //use cmbine and examine hit boxes
    useHit = collidePointRect(mouseX, mouseY, 370, 600, 255, 80 ); //use
    combineHit = collidePointRect(mouseX, mouseY, 700, 600, 255, 80 ); //combine
    examineHit = collidePointRect(mouseX, mouseY, 1010, 600, 270, 80 ); //examine

    //items hit boxes
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
      theBackground.isItCLickedBackgrounds();
    }
    else if (combine === true){
      //only one combination works, the rest spawn an error
      purse.whateverText = "pick two objects to combine";
      if(needle === true && pin === true){
        keyMade = true;
        purse.whateverText = "A key! Maybe I can open up the cabinet with this!";
        getObjects();
        combine = false;
        hasPin = false;
        hasNeedle = false;
      }
      else if(needle === true && hook === true){
        purse.whateverText = "That just won't work";
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
      //each item has an extra description when examined
      purse.whateverText = "Pick an object to examine";
      if(hook === true){
        purse.whateverText = "The hook that fell of the drapes";
        examine = false;
        hook = false;
      }
      else if(pin === true){
        purse.whateverText = "The hairpin i left in my bed! It must have fallen out while i was sleeping.";
        examine = false;
        pin = false;
      }
      else if (needle === true){
        purse.whateverText = "A knitting needle! I don't have any yarn or the other needle to knit though.";
        examine = false;
        needle = false;
      }
    }
    purse.displayText = true;
    purse.descriptions();
  }
}

function sound(){
  //how the sound plays
  if(state === "game"){
    if (toy.displayText === false){
      backgroundMusicLvl2.play();
      backgroundMusicLvl2.loop();
    }
    else if (toy.displayText === true){
      backgroundMusicLvl2.stop();
    }
  }
}

