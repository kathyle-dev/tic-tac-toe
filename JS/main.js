//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia


let square= document.querySelectorAll(".square");
square = Array.from(square);

class Board{
  constructor(count, letter){
    this.count=count
    this.letter=letter
  }
  clickAndWin(){
    square.forEach((box) =>{
        box.addEventListener("click", (e)=>{
            if(e.target.innerHTML=="X" || e.target.innerHTML=="O"){
              document.getElementById("message").classList.add("shake");
              document.getElementById("message").innerHTML="This place is taken! You must choose another box.";
            }else{
              document.getElementById("message").classList.remove("shake");
              if(this.count%2 == 0){
                if(checkWin()!=true){
                  e.target.innerHTML="X";
                  this.letter ="X";
                  document.getElementById("message").innerHTML="O's move!";
                  this.count++
                  checkWin(this.letter);
                }else{
                  return;
                }
              }else{
                if(checkWin()!=true){
                e.target.innerHTML="O";
                this.letter = "O";
                document.getElementById("message").innerHTML="X's move!";
                this.count++
                checkWin(this.letter);
              }else{
                return;
              }
              }
            }
        })
    })
  }
  resetButton(){
    document.getElementById("reset").addEventListener("click", (e)=>{
      square.forEach((square, i) => {
          square.innerHTML = `<span>${i}</span>`;
  });
  document.getElementById("message").innerHTML="X's Move First!";
  document.getElementById("reset").style.display="none"
  document.body.style.backgroundColor="white";
  return this.count=0;
    })
  }
}
function checkWin(letter){
    if (
      // Rows
        square[0].innerHTML == square[1].innerHTML && square[1].innerHTML == square[2].innerHTML ||
        square[3].innerHTML == square[4].innerHTML && square[4].innerHTML == square[5].innerHTML ||
        square[6].innerHTML == square[7].innerHTML && square[7].innerHTML == square[8].innerHTML ||
      //Columns
        square[0].innerHTML == square[3].innerHTML && square[3].innerHTML == square[6].innerHTML ||
        square[1].innerHTML == square[4].innerHTML && square[4].innerHTML == square[7].innerHTML ||
        square[2].innerHTML == square[5].innerHTML && square[5].innerHTML == square[8].innerHTML ||
      //Diagonal
        square[0].innerHTML == square[4].innerHTML && square[4].innerHTML == square[8].innerHTML ||
        square[2].innerHTML == square[4].innerHTML && square[4].innerHTML == square[6].innerHTML
    ){
      document.getElementById("message").classList.add("shake");
      document.getElementById("message").innerHTML=`${letter}'s win!`;
      document.getElementById("reset").style.display="inline";
      return true;
  }else{
      document.getElementById("message").classList.remove("shake");
      gameDraw();
  }
}
function gameDraw(){
    if(
        (square[0].innerHTML =="X"||square[0].innerHTML =="O") &&
        (square[1].innerHTML =="X"||square[1].innerHTML =="O") &&
        (square[2].innerHTML =="X"||square[2].innerHTML =="O") &&
        (square[3].innerHTML =="X"||square[3].innerHTML =="O") &&
        (square[4].innerHTML =="X"||square[4].innerHTML =="O") &&
        (square[5].innerHTML =="X"||square[5].innerHTML =="O") &&
        (square[6].innerHTML =="X"||square[6].innerHTML =="O") &&
        (square[7].innerHTML =="X"||square[7].innerHTML =="O") &&
        (square[8].innerHTML =="X"||square[8].innerHTML =="O")
    ){
        document.getElementById("message").innerHTML="Tie! Play Again!"
        document.getElementById("message").classList.add("shake");
        document.getElementById("reset").style.display="inline";
    }else{
        document.getElementById("message").classList.remove("shake");
        return false;
    }
}


const newGame = new Board(0, "X");
newGame.clickAndWin();
newGame.resetButton();
