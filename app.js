let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector(".reset")

let turno=true; //player0 and playerx


const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



boxes.forEach( (box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");

        if (turno)
        {
            //playero
            box.innerText="O";
            turno=false;
        }
        else{
            //playerx
            box.innerText="X";
            turno=true;
        }

        box.disabled=true;
        checkWinner();


    });

});
function disablebox(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function enablebox(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
function reset(){
    turno=true;
    enablebox();
}

resetBtn.addEventListener("click",reset);

function check(a){
    if(a==true)
    {
        reset();
    }

}

function showWinner(pos1val){
    let a = confirm(`${pos1val} won the game . Do you wanna play again?`);
    disablebox();
    check(a);
}

function checkWinner(){

    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val==pos2val&&pos2val==pos3val)
            {
                console.log("winner");
                showWinner(pos1val);
            }
        }
    }
}
