// Fran Bow clone 
// Aiden Maddison
// 11/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let invisbleGrid; 
let gridSize  = 30;
let levelOneRoom;

function preload(){
  levelOneRoom = loadImage("assets/franbow'sroom.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  invisbleGrid = createEmptyArray(gridSize, gridSize);
}

function draw() {
  displayGrid();
  image(levelOneRoom, 0, 0, windowWidth, windowHeight);
}

function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y = 0; y<gridSize; y++){
    for(let x =0; x<gridSize; x++){
      rect(x*cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyArray(rows, cols){
  let grid = [];
  
  for (let y = 0; y<rows; y++){
    grid.push([]);
    for(let x = 0; x<cols; x++){
      grid[y].push(0); 
    }
  }
  return grid;
}

function mousePressed(){

}