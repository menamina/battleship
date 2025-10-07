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

