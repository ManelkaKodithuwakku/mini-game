const player = document.getElementById("player");
const ground = document.getElementById("ground");

let dx = 0;
let dy = 0;
let acceleration = 0.1;
let index = 1;

const draw = ()=>{
    if(dy<0){  
        player.style.backgroundImage = `url('../img/Jump\ \(${index++}\).png')`;
    }else if(dx!==0){
        player.style.backgroundImage = `url('../img/Run\ \(${index++}\).png')`;
    }else{
        player.style.backgroundImage = `url('../img/Idle\ \(${index++}\).png')`;

    }
    if(index > 8) index=1;

    requestAnimationFrame(draw);
};


const animate = ()=>{
    
    dy+=acceleration;
    if (player.offsetLeft<0){
        dx = 0;
        player.style.left = '0';
    }else if(player.offsetLeft+player.offsetWidth > innerWidth){
        dx = 0;
        player.style.left = `${innerWidth - player.offsetWidth}px`;
    }

    if((player.offsetTop + player.offsetHeight)>ground.offsetTop){
        dy = 0;
        player.style.top = `${ground.offsetTop-player.offsetHeight}px`;
    }
    player.style.left = `${player.offsetLeft + dx}px`;
    player.style.top = `${player.offsetTop + dy}px`;

    requestAnimationFrame(animate);
};


addEventListener('keydown',({key})=>{
    
    if (key === "ArrowRight"){
        player.classList.remove("turn");
        dx = 10;
    }else if(key === "ArrowLeft"){
        player.classList.add("turn");
        dx = -10;
    }
});

addEventListener('keypress',({key})=>{
    if(key === " "){
        dy = -10;
        acceleration = 0.2;
    }
});


addEventListener('keyup',({key})=>{
    if (key === "ArrowRight" || key === "ArrowLeft"){
        dx=0;
    }
});

requestAnimationFrame(animate);
requestAnimationFrame(draw);

// let j=0;
// let t1 = 0;
// const interval = 1;

// function repaint(timestamp){
//     if(!t1) t1 = timestamp;
//     const diff = timestamp - t1;
//     if(diff >= interval * 1000){
//         t1 = timestamp;
//         console.log('Painted: ' + j++,timestamp);
//     }
  
//     requestAnimationFrame(repaint);
// }

// requestAnimationFrame(repaint);