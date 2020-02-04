export function Game() {
  this.turn = "player1";
  this.player1Score = 0;
  this.player2Score = 0;
  this.points = [2, 3, 4, 5, 6];
  this.tempScore = 0;
  this.roll = 1;
}

Game.prototype.checkWinner = function() {
  if (this.player1Score >= 100 || this.player2Score >= 100) {
    return this.turn + " has won the game!";
  } else {
    return false;
  }
}

Game.prototype.nextTurn = function() {
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

Game.prototype.checkRoll = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    this.nextTurn();  
  } else if (this.roll > 1 && this.roll < 7) {
    this.tempScore += this.roll;
  } else {
    return "'Error checkRoll';"
  }
};

Game.prototype.diceRoll = function() {
  var random = Math.ceil(Math.random()*6);
  this.roll = random;
};

Game.prototype.reset = function() {
  this.turn = 'player1';
  this.player1Score = 0;
  this.player2Score = 0;
  this.tempScore = 0;
  this.roll = 1;
}