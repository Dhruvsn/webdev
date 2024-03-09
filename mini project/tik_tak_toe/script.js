// tik-tak-toe

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerx , playerY
const winpatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]

]
let count =0;

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }
       else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       count++;
       if(count == 9){
        draw();

       }
       else{
        checkWinner();
       }
       

    });
    
    
});

const draw = () =>{
        msg.innerText = "Game is Draw";
        msgcontainer.classList.remove("hide");
    disabledBoxes();

}

const resetGame = () =>{
    let turnO = true;
    enabledBoxes();
    msgcontainer.classList.add("hide");
    count =0;
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner =(winnner) =>{
        msg.innerHTML = `Congratulations,winner is ${winnner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () =>{
    for(pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;  
    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        }
    }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);

