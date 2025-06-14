function makeBubble(){
    let clutter = "";
    for (let i = 1; i <= 220; i++) {
      clutter += ` <div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
let timer = 60;
let score = 0;
let hitrn;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function runTimer(){
     let timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over Plzz reload for New Game</h1>`;
        }

    },1000)
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener('click',function(dets){
    // console.log(dets.target); tells on which it clicks

    let numberclicked = Number(dets.target.textContent); 
    console.log(numberclicked);

    if(numberclicked===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    

    

})
makeBubble();
runTimer();
getNewHit();