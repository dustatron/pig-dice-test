// Business-Logic

export function Game() {
  this.turn = "player1";
  this.player1Score = 0;
  this.player2Score = 0;
  this.points = [2, 3, 4, 5, 6];
  this.tempScore = 0;
}

export function checkRoll(game, roll) {
	if (game.points.includes(roll)) {
		game.tempScore += roll;
		$("#running-total").html(game.tempScore);
	} else {
		nextTurn(game);
	}
}

export function nextTurn(game, tempScore) {
	if (game.turn === "player1") {
		if (tempScore) {
			game.player1Score += tempScore;
			$("#player1-score").html(game.player1Score);
		}
		game.turn = "player2";
		$("#player2-panel").css("background-color", "lightblue");
		$("#player1-panel").css("background-color", "whitesmoke");
	} else {
		if (tempScore) {
			game.player2Score += tempScore;
			$("#player2-score").html(game.player2Score);
		}
		game.turn = "player1";
		$("#player1-panel").css("background-color", "lightblue");
		$("#player2-panel").css("background-color", "whitesmoke");
	}
	game.tempScore = 0;
	$("#running-total").html(game.tempScore);
}

export function checkWinner(game) {
	if (game.player1Score >= 20 || game.player2Score >= 20) {
		alert(game.turn + " has won the game!");
		newGame();
	}
}

export function newGame() {
	var game = new Game();
	$("#running-total").html("0");
	$("#player1-score").html("0");
	$("#player2-score").html("0");
	$("#roll-result").html("0");
	$("#player1-panel").css("background-color", "lightblue");
}
