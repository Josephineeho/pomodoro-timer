const textLabel = document.getElementById("textLabel");
const numbsVarry = document.getElementById("numbsVarry");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const border = document.getElementById("border");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn")
const resetBtn = document.getElementById("resetBtn");
stopBtn.classList.add("hide");
startBtn.classList.add("show");
let isRunning = false;
let seconds = 0;
var minutes = 0;
let increment = 1;
let interval = null;
var hours = 0;


plusBtn.onclick = function() {  
  if(increment <10){
    increment++;
  }
  else{
    increment = 0;
  }
  numbsVarry.textContent = increment;
    };
    

minusBtn.onclick = function() {
    if(increment >0){
        increment--;
    }
    numbsVarry.textContent = increment;
}

// START BUTTON

startBtn.onclick = function() {
    if(!isRunning){
        let addBy = parseInt(numbsVarry.textContent);
        isRunning = true;
        startBtn.classList.add("hide");
        stopBtn.classList.remove("hide");
    stopBtn.classList.add("show");
    startBtn.classList.remove("show");
        // let increment= parseInt(numbsVarry.textContent)||1;

        interval = setInterval(()=>{
            seconds+=addBy || 1;
            if(seconds>=60){
                seconds=0;
                minutes++;
            }
            if(minutes>=60){
                minutes=0;
                hours++;
            }
            textLabel.textContent=pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
        },1000);
    }
};
stopBtn.onclick = function() {
    if(isRunning){
        startBtn.classList.remove("hide");
        startBtn.classList.add("show");
        stopBtn.classList.remove("show");
        stopBtn.classList.add("hide");
        isRunning= false;
        clearInterval(interval);
    }
};

resetBtn.onclick = function() {
    //  toggleButton();
    clearInterval(interval);

    isRunning = false;
    startBtn.classList.remove("hide");
    startBtn.classList.add("show");
    stopBtn.classList.remove("show");
    stopBtn.classList.add("hide");
    seconds = 0;
    minutes = 0;
    hours = 0;
    textLabel.textContent = "00:00:00";

}

// PAD NUMBERS
function pad(num) {
    return String(num).padStart(2, "0");
}

// function toggleButton( ){
// if(!isRunning){
//     startBtn.classList.add("");
//     stopBtn.classList.remove("hide");
//     stopBtn.classList.add("show");
//     startBtn.classList.remove("show");
//     // isRunning = true;
// }
// else if(resetBtn.onclick){
//     startBtn.classList.remove("hide");
//     startBtn.classList.add("show");
//     stopBtn.classList.remove("show");
//     stopBtn.classList.add("hide");
// }
// else{
//     startBtn.classList.remove("hide");
//     startBtn.classList.add("show");
//     stopBtn.classList.remove("show");
//     stopBtn.classList.add("hide")
//     // isRunning = false;
// }
//     }