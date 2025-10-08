function Ship(size) {
  if (size < 2 || size > 5) {
    throw new Error("Ships must have a length between 2 and 5");
  }
  
  const length = size;
  let hits = 0;      
  let sunk = false;  

  return {
    getLength() {
      return length;
    },

    hit() {
      if (!sunk) {
        hits++;
        if (hits >= length) {
          sunk = true;
        }
      }
    },

    getHits() {
      return hits;
    },

    isSunk() {
      return sunk;
    }
  };
}

function Gameboard(){
    const board = [
    [null, null, null, null, null, null, null, null, null, null], // row 0
    [null, null, null, null, null, null, null, null, null, null], // row 1
    [null, null, null, null, null, null, null, null, null, null], // row 2
    [null, null, null, null, null, null, null, null, null, null], // row 3
    [null, null, null, null, null, null, null, null, null, null], // row 4
    [null, null, null, null, null, null, null, null, null, null], // row 5
    [null, null, null, null, null, null, null, null, null, null], // row 6
    [null, null, null, null, null, null, null, null, null, null], // row 7
    [null, null, null, null, null, null, null, null, null, null], // row 8
    [null, null, null, null, null, null, null, null, null, null]  // row 9
    ];

    const ships = [];

    return {
        board,
        ships,

        placeShip(shipLength, x, y, direction = null) {
        if (direction === 'horizontal' && x + shipLength > 10) {
            throw new Error("Ship does not fit horizontally");
        }
        if (direction === 'vertical' && y + shipLength > 10) {
            throw new Error("Ship does not fit vertically");
        }

        const newShip = Ship(shipLength);
        ships.push(newShip);

        for (let i = 0; i < shipLength; i++) {
            if (direction === 'horizontal') {
            board[y][x + i] = newShip;
            } else {
            board[y + i][x] = newShip;
            }
        }
        },

        receiveAttack(x, y, direction = null){
            if (direction === 'horizontal') {
                if (board[y][x] !== null) {  // y = row, x = column
                    const hitShip = board[y][x];
                    hitShip.hit();
                    return 'hit';
                } else {
                    const miss = board[y][x];
                    return miss;
                }
            }

            if (direction === 'vertical') {
                if (board[y][x] !== null) { 
                    const hitShip = board[y][x];
                    hitShip.hit();
                    return 'hit';
                } else {
                    const missed = board[y][x];
                    return missed;
                }
            }
        },

        allSunk(){
           return ships.every((ship) => ship.isSunk() === true);
        }
    }
}

module.exports = {Ship, Gameboard};
