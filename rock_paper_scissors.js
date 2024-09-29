function Winner() {
    
    let player1 = parseInt(document.getElementById('player1').value);
    let player2 = parseInt(document.getElementById('player2').value);

    if ((player1 < 1 || player1 > 3) || (player2 < 1 || player2 > 3)) {
        document.getElementById('winner').textContent = 'Invalid input! Both players must choose 1, 2, or 3.';
        return;
    }

    if (player1 === player2) {
        document.getElementById('winner').textContent = "The game is a tie.";
    } else if ((player1 === 1 && player2 === 3) || 
               (player1 === 2 && player2 === 1) || 
               (player1 === 3 && player2 === 2)) { 
        document.getElementById('winner').textContent = "The first player wins.";
    } else {
        document.getElementById('winner').textContent = "The second player wins.";
    }
}