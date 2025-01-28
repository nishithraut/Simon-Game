let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let p=document.querySelector('h3');

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game started");
        
        levelup();
        started=true;
    }
})

function levelup(){
    userSeq=[];
    level++;
    p.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);

    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function isCorrect(idx){

    if (userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup, 1000);
        }
    } else {
        p.innerText="Game Over! Press any key to start";
        
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    let idx=userSeq.length-1;
    isCorrect(idx);
}

let allbtns=document.querySelectorAll(".btn");
for (const btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}