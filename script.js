
const button = document.querySelector(".button"); // button that expands the lyrics div
const lyrics = document.querySelector(".lyrics"); // the lyrics div

button.addEventListener("click", function(e){
// add a visual effect
e.target.classList.add("pressed"); // adds class pressed to create a visual effect
        
// wait for 0.5 sec, remove the effect
function removeEffect () {
    e.target.classList.remove("pressed");
}
setInterval (removeEffect, 500);
// if text content = expand, remove the overflow
    if (e.target.textContent.trim()== "Expand"){
        e.target.textContent = "Shrink"; 
        lyrics.classList.add("visible"); // expand 
        
    }else {
        e.target.textContent = "Expand";
        e.target.classList.add("pressed");
        lyrics.classList.remove("visible"); // shrink
    }
});


