
function printBubble(){
    var elem = "";
    for(let i=0; i<147; i++){
        elem += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector(".middle").innerHTML = elem;
}
printBubble();


var time = 60;
function countTime(){
    var timer = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector(".time>.box").innerHTML = time;
        }
        else{
            clearInterval(timer);
            let audio = new Audio("end.mp3");
            audio.play()
            document.querySelector(".hit>.box").innerHTML = `0`;
            document.querySelector(".point>.box").innerHTML = `0`;
            document.querySelector(".middle").innerHTML = 
            `<div class="end">
            <h1>Game Over!</h1>
            <h4>SCORE: ${score}</h4>
            <button>New Game</button>
            </div>`;
            document.querySelector(".end>button").addEventListener("click",function(){
                location.reload(); 
            })
        }
        
    },1000)
}
countTime();


var random_hit = 0;
function newHit(){
    random_hit = Math.floor(Math.random() * 10);
    document.querySelector(".hit>.box").innerHTML = random_hit;
}
newHit();


var score = 0;
function newScore(flag){
    if(flag === "positive"){
        score += 20;
        document.querySelector(".point>.box").innerHTML = score;
    }
    else{
        score -= 10;
        document.querySelector(".point>.box").innerHTML = score;
    }
    
}


document.querySelector(".middle").addEventListener("click",function(data){
    var click = Number(data.target.innerHTML);
    if(random_hit === click){
        let audio = new Audio("correct.mp3");
        audio.play()
        newScore("positive");
        printBubble();
        newHit();
    }
    else if(Number.isInteger(click) === true){
        let audio = new Audio("wrong.mp3");
        audio.play()
        newScore("negative");
        printBubble();
        newHit();
    }
});


