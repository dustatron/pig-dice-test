import { Game } from '../src/game.js';
import { exportAllDeclaration } from '@babel/types';

// var game;
// beforeEach(()=>{
//   game = new Game();
// });

describe('Game', () => {
  test('should make game object with default properties', () => {
    var game = new Game();
    expect(game.turn).toBe('player1');
    expect(game.player1Score).toBe(0);
    expect(game.player2Score).toBe(0);
    expect(game.points.join('')).toBe('23456');
    expect(game.tempScore).toBe(0);
    expect(game.roll).toBe(1);
  });
});


describe('Check Winner', () => {
  test('should return false if players score is not a win', () => {
    var noWinGame = new Game();
    expect(noWinGame.checkWinner()).toEqual(false);
  });

  test('should return win for play1', () => {
    var shouldWinP1 = new Game();
    shouldWinP1.player1Score = 100;
    shouldWinP1.player2Score = 99;
    expect(shouldWinP1.checkWinner()).toEqual("player1 has won the game!");
  });

  test('should return for player2', () => {
    var shouldWinP2 = new Game();
    shouldWinP2.player1Score = 99;
    shouldWinP2.player2Score = 100;
    shouldWinP2.turn = "player2"
    expect(shouldWinP2.checkWinner()).toEqual("player2 has won the game!");
  });
});

describe('nextTurn', () => {
  test('should return player2 if turn is currently player1', () => {
    var currentlyPlayerOne = new Game();
    currentlyPlayerOne.turn = "player1";
    expect(currentlyPlayerOne.nextTurn()).toEqual("player2");
  });


  test('should return player1 if turn is currently player2', () => {
    var currentlyPlayerTwo = new Game();
    currentlyPlayerTwo.turn = 'player2';
    expect(currentlyPlayerTwo.nextTurn()).toEqual('player1');
  });

  test("should add tempt score to player1's total score", () => {
    var addScoreP1 = new Game();
    addScoreP1.tempScore = 10;
    addScoreP1.player1Score = 1;
    addScoreP1.nextTurn();
    expect(addScoreP1.player1Score).toBe(11);
  });

  test("should return add temp score to player2's total score", () => {
    var addScoreP2 = new Game();
    addScoreP2.tempScore = 10;
    addScoreP2.player2Score = 1;
    addScoreP2.turn = 'player2';
    addScoreP2.nextTurn();
    expect(addScoreP2.player2Score).toBe(11);
  });

  test("should return temp score to 0", () => {
    var resetTempScore = new Game();
    resetTempScore.tempScore = 10;
    resetTempScore.nextTurn();
    expect(resetTempScore.tempScore).toBe(0);
  });
});


describe('checkRoll', () => {
  var game;
  beforeEach(() => {
    game = new Game();
  });

  test('should run nextTurn if dice roll is a 1', () => {
    expect(game.turn).toBe('player1');
    game.roll = 1;
    game.checkRoll();
    expect(game.turn).toBe('player2');
  });

  test('should add roll value to temp score', () => {
    expect(game.checkRoll())
    game.roll = 6;
    game.checkRoll();
    expect(game.tempScore).toBe(6);
    game.roll = 2;
    game.checkRoll();
    expect(game.tempScore).toBe(8);
  });

  test('clear tempScore if roll value equals 1', () => {
    game.roll = 1;
    game.player1Score = 1;
    game.tempScore = 2;
    game.checkRoll();
    expect(game.player1Score).toBe(1);
  });

  test('should provide a number', () => {
    game.roll = 0;
    game.diceRoll();
    expect(game.roll).toBeGreaterThan(0);
    expect(game.roll).toBeLessThan(7);
  });
});

describe('reset', () => {
  var game;
  beforeEach(() => {
    game = new Game();
  });

  test('should reset game object values to starting state', () => {
    game.turn = "player2";
    game.player1Score = 10;
    game.player2Score = 12;
    game.tempScore = 13;
    game.roll = 5;
    game.reset()

    expect(game.turn).toBe('player1');
    expect(game.player1Score).toBe(0);
    expect(game.player2Score).toBe(0);
    expect(game.tempScore).toBe(0);
    expect(game.roll).toBe(1);
  });
});
