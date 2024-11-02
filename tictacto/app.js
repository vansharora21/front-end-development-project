let board = ['', '', '', '', '', '', '', '', ''];
let turn = 0;
const boardElement = document.getElementById('board');
const restartButton = document.getElementById('restart');

function createBoard() {
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        boardElement.appendChild(cellElement);
    });
}

function handleCellClick(index) {
    if (board[index] || isWinner()) return;
    board[index] = turn % 2 === 0 ? 'X' : 'O';
    turn++;
    createBoard();
    if (isWinner()) {
        alert(`${board[index]} wins!`);
    } else {
        checkIfTie();
    }
}

function checkIfTie() {
    if (turn >= 9) {
        alert('Game is a tie!');
    }
}

function isWinner() {
    const winningSequences = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let sequence of winningSequences) {
        const [a, b, c] = sequence;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 0;
    createBoard();
}

restartButton.addEventListener('click', restartGame);
createBoard();