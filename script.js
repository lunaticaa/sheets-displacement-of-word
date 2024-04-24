
let wordsR = document.querySelectorAll(".r-word-list");
let wordsL = document.querySelectorAll(".l-word-list");
let leftList = document.getElementById("left-list");
let rightList = document.getElementById("right-list");
let container = document.querySelector(".container");


function leftToRight(){
  let word = leftList.lastChild;
  if (word){
    leftList.removeChild(word);
    rightList.appendChild(word);
  }
}

function rightToLeft(){
  let word = rightList.lastChild;
  if (word){
    rightList.removeChild(word);
    leftList.appendChild(word);
  }
}

function AllToRight(){
  
  let letters = leftList.textContent;
  rightList.textContent += letters;
  leftList.textContent = "";
}

function AllToLeft(){
  
  let letters = rightList.textContent;
  leftList.textContent += letters;
  rightList.textContent = "";
}