"use strict"; 



const btn = document.getElementById("startBtn"); 
const p = document.getElementById("txt")


btn.addEvenetListner("click", tglButton); 

function tglButton(){
  if(btn.textContent === "Start lecture"){
    btn.textContent = "Stop Lecture"; 
    p.textContent = "Lecture has ended"; 
  }else{
    btn.textContent = "Start lecture"; 
    p.textContent = "Lecture has started"
  }
}