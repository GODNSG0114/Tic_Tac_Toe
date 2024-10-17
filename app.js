let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".reset");
 let turn = true;
const WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        if(turn){
            box.innerHTML = 'X';
            turn  = false;
        }
        else {
            box.innerHTML = "O";
            turn  = true;
        }
        box.disabled = true;
      checkwinner();
    }); 
})

const checkwinner = ()=>{
    for(pattern of WinPattern){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if(pos1val!=""  && pos2val!="" && pos3val!=""){
        if(pos1val === pos2val && pos2val ===pos3val){
            console.log("winner is " + pos1val);
        }
      }
 }
}