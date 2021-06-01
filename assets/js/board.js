//want the board to reference the canvas every time the game starts so we'll include ctx in the Board constructor. we''ll also incude [this] to let us set and access properties within ctx

class Board { 
    constructor(ctx) {
      this.ctx = ctx;
      this.grid = this.getEmptyBoard();
    }
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }
  }