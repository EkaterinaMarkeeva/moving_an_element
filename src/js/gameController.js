import { getRandomInt } from './generators';

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.position = null;
  }

  init() {
    this.gamePlay.drawUi();
    this.gamePlay.drawGoblin();
    this.changesGoblinPosition();
  }

  changesGoblinPosition() {
    let counter = 0;
    
    const goblinsInterval = setInterval(() => {
      this.position = this.createPosition(0, this.gamePlay.boardSize - 1, this.gamePlay.boardSize, this.position);

      this.gamePlay.drawGoblin(this.position);
      
      counter += 1;
      
      if (counter > 100) {
        clearInterval(goblinsInterval);
      }
    }, 5000);
  }

  createPosition(min, max, boardSize, oldPosition) {
    let position;
    let index = 0;
  
    while ((!position || oldPosition === position) && index < 1000) {
      let string = getRandomInt(min, max);
      let column = getRandomInt(min, max)
  
      position = string * boardSize + column;
      index += 1;
    }
  
    return position;
  }
}
