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
let count = 0;
let isRunning = false;


plusBtn.onclick = function() {  
            count++;  
    if(count <= 10) {
    numbsVarry.textContent = count;
    }
    else{
      return  count = 0;
    }
    
}
minusBtn.onclick = function() {
    if(count <= 10 && count !=0) {
    count--;
numbsVarry.textContent = count;
}
return 0;
}

startBtn.onclick = function() {
    toggleButton();
    let count = 0 ;
    textLabel.textContent = count;
    const interval = setInterval(() =>
    {
        count++;
        textLabel.textContent = count;
        if(count >= 60){
            clearInterval(interval);
        }
    }, 200);
}
resetBtn.onclick = function() {
    if(count > 0)
    count =0;
    textLabel.textContent = count;
}

function toggleButton( ){
if(!isRunning){
    startBtn.classList.add("hide");
    stopBtn.classList.remove("hide");
    stopBtn.classList.add("show");
    startBtn.classList.remove("show");
    isRunning = true;
}
else{
    startBtn.classList.remove("hide");
    startBtn.classList.add("show");
    stopBtn.classList.remove("show");
    stopBtn.classList.add("hide")
    isRunning = false;
}
    }``