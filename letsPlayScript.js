var timer = 60;
var score = 0;
var hitrn;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    var number = Math.floor(Math.random()*10);
    for (var i  = 1; i<=140; i++) {
        var number = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${number}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over: Your score was ${score}</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum == hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();