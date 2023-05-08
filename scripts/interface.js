let i;
let flag = false;

document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");
    let button = document.getElementById("restartGame");
    
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

    button.addEventListener('click', restartGame)

})

function handleClick(event){
    let square = event.target;
    let position = square.id
    if(handleMove(position)){
       setTimeout(()=>{alert(`Game over!\n\n O vencedor é o player ${playerTime+1}!`);restartGame()}, 10)    
    }
    
    updateSquare(position);
}


function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}


function updateSquares(){

    let squares = document.querySelectorAll(".square"); //Array das div's dos squares

    squares.forEach((square)=>{
        let position = square.id  // Position recebe o ID do square da vez
        let symbol = board[position]   //symbol recebe o 

        if(symbol != ''){
            square.innerHTML = `<div class='symbol'></div>`
        }

    })

}

function restartGame(){
    updateSquares();
    resetVar();
}

