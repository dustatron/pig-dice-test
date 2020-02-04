export function Game() {
  this.turn = "player1";
  this.player1Score = 0;
  this.player2Score = 0;
  this.points = [2, 3, 4, 5, 6];
  this.tempScore = 0;
}

Game.prototype.checkWinner = function () {
  if (this.player1Score >= 100 || this.player2Score >= 100) {
    return this.turn + " has won the game!";
  } else {
    return false;
  }
}

Game.prototype.nextTurn = function () {
  if (this.turn === 'player1') {
    this.player1Score += this.tempScore;
    this.tempScore = 0;
    return this.turn = 'player2';
  } else if (this.turn === 'player2') {
    this.player2Score += this.tempScore;
    this.tempScore = 0;
    return this.turn = 'player1';
  } else {
    return 'Turn Error';
  }
}

// Game.prototype.checkRoll = 

// export function checkRoll(game, roll) {
// 	if (game.points.includes(roll)) {
// 		game.tempScore += roll;
// 		$("#running-total").html(game.tempScore);
// 	} else {
// 		nextTurn(game);
// 	}
// }