let color = "black"

function setGrid(size){
  let board = document.querySelector("#board");

  // Removes the previous Size if another is selected
  let squares = board.querySelectorAll("div");
  squares.forEach(div => div.remove());

  // Changes Grid Size
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


  // Adds More Divs
  for (let i = 0; i < size*size; i++) {
    let square = document.createElement('div');
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", colorSquare)
  }
}

function colorSquare(){
  this.style.backgroundColor = color
}

function changeColor(){
  let blue = document.querySelector("#blue");
  blue.addEventListener("click", ()=>{
    color = "blue"
  })
  let black = document.querySelector("#black");
  black.addEventListener("click", ()=>{
    color = "black"
  })
  let red = document.querySelector("#red");
  red.addEventListener("click", ()=>{
    color = "red"
  })
  let green = document.querySelector("#green");
  green.addEventListener("click", ()=>{
    color = "green"
  })
  let yellow = document.querySelector("#yellow");
  yellow.addEventListener("click", ()=>{
    color = "yellow"
  })
  let white = document.querySelector("#white");
  white.addEventListener("click", ()=>{
    color = "white"
  })
  let violet = document.querySelector("#violet");
  violet.addEventListener("click", ()=>{
    color = "violet"
  })
  let orange = document.querySelector("#orange");
  orange.addEventListener("click", ()=>{
    color = "orange"
  })
  let grey = document.querySelector("#grey");
  grey.addEventListener("click", ()=>{
    color = "grey"
  })
  let brown = document.querySelector("#brown");
  brown.addEventListener("click", ()=>{
    color = "brown"
  })
}


function reset(){
  let board = document.querySelector("#board");
  let squares = board.querySelectorAll("div");
  squares.forEach(div => div.style.backgroundColor = "white")
    color = "white"
}

function selectGrid(input) {
  setGrid(input)
}



selectGrid();
changeColor();
