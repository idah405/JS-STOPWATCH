
const display = document.getElementById('display');
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;


function start(){
    if (isRunning) return;

    isRunning = true;
    starttime = Date.now() - elapsedtime;
    timer = setInterval(updateDisplay, 10);
}
function stop(){
    if (!isRunning) return;

    isRunning = false;
    elapsedtime = Date.now() - starttime;
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    starttime = 0;
    isRunning = false;
    elapsedtime = 0;
    display.textContent = '00:00:00';
}

function updateDisplay(){
    elapsedtime = Date.now() - starttime;
    const currentTime = Date.now()
    let hours = Math.floor(elapsedtime/(1000 * 60 * 60));
    let minuites = Math.floor(elapsedtime/(1000 * 60 )% 60);
    let seconds= Math.floor(elapsedtime/(1000 % 60));
    let milliseconds = elapsedtime % 1000/10;

    hours = String(hours).padStart(2, "0");
    minuites = String(minuites).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minuites}: ${seconds}:${milliseconds}`;
}