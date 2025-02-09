let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 =true;//playerX,playero

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");


};
    

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       if (turn0) { //playero
        box.innerText = "o";
        turn0 = false;

       }else { //playerX
        box.innerText = "x";
        turn0 = true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner  is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();
};


const checkWinner = () => {
    for(let Pattern of winPatterns) {

            let pos1val = boxes[Pattern[0]].innerText;
            let pos2val = boxes[Pattern[1]].innerText;
            let pos3val = boxes[Pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !="") {
                if(pos1val === pos2val && pos2val === pos3val) {
                    showWinner(pos1val);
                }
            }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




