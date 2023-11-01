export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  drawUi() {
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      
      cellEl.classList.add('cell', 'board-theme');
      
      this.container.appendChild(cellEl);
    }
    
    this.cells = Array.from(this.container.children);
  } 
  
  drawGoblin(position = 0) {
    if (document.querySelector('.goblin')) {
      document.querySelector('.goblin').remove();
    }
  
    const allCells = document.querySelectorAll('.cell');
    const img = document.createElement('div');
    
    img.classList.add('goblin');
    allCells[position].appendChild(img);
  }
}
