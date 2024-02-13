const btn = document.querySelector(".btn")
const innerBoxes = document.querySelectorAll(".innerBox")
const spaces = [];
firstmove = "X";
nextmove = "O";
let move = firstmove;
let currentPlayer;


innerBoxes.forEach((innerBox) => {
    innerBox.addEventListener("click", (e) => {
        const id = e.target.id;
        if (!spaces[id]) {
            spaces[id] = move;
            console.log(spaces)
        }

        console.log(id)
        innerBox.innerHTML = move;
        /* if (innerBox.classList.contains("innerBox")) {
             innerBox.classList.remove("innerBox")
             innerBox.classList.add("innerBoxX")
         }*/
        console.log("div clicked")
        GameBoard()
        checkwinner()

    })

})




console.log(move)

function GameBoard() {

    if (move == 'X') {
        move = nextmove;

        console.log(move)

    } else if
        (move == "O") {
        move = firstmove

        console.log(move)
    }


}
//INCOMPLETE FUNCTION TO CHECK WINNER
//AND ADD RESET AND START AGAIN
//PAUSING THE WORK FOR THIS NOW


function checkwinner() {

    if (spaces[0] != "" && spaces[0] == spaces[1] && spaces[0] == spaces[2]) {
        console.log("first row won")
    }
    else if (spaces[4] != "" && spaces[3] == spaces[4] && spaces[3] == spaces[5]) {
        console.log("second row won")
    }
    else if (spaces[6] != "" && spaces[6] == spaces[7] && spaces[6] == spaces[8]) {
        console.log("third row won")
    }
    else if (spaces[0] != "" && spaces[0] == spaces[4] && spaces[0] == spaces[8]) {
        console.log("diagnol row won")
    }
    else if (spaces[6] != "" && spaces[6] == spaces[4] && spaces[6] == spaces[2]) {
        console.log("diagnol row won")
    }

    else if (spaces[0] != "" && spaces[0] == spaces[3] && spaces[0] == spaces[6]) {
        console.log("first column won");
    }
    else if (spaces[1] != "" && spaces[1] == spaces[4] && spaces[1] == spaces[7]) {
        console.log("second column won");
    }
    else if (spaces[2] != "" && spaces[2] == spaces[5] && spaces[2] == spaces[8]) {
        console.log("third column won");
    }
}











