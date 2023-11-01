import GamePlay from "./gamePlay";
import GameController from "./gameController";

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-board'));

const gameCtrl = new GameController(gamePlay);
gameCtrl.init();
