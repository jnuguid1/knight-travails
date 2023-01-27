const Node = (coord, parent = null) => {
  const getCoord = () => {
    return coord;
  };

  const getParent = () => {
    return parent;
  };

  return { coord, parent, getCoord, getParent };
}

const Knight = (() => {

  const possibleMoves = (coord) => {
    const moves = [];
    const x = coord[0];
    const y = coord[1];
    if (x >= 2 && y >= 1) moves.push([x-2, y-1]);
    if (x >= 1 && y >= 2) moves.push([x-1, y-2]);
    if (x >= 2 && y <= 6 ) moves.push([x-2, y+1]);
    if (x >= 1 && y <= 5) moves.push([x-1, y+2]);
    if (x <= 6 && y <= 5 ) moves.push([x+1, y+2]);
    if (x <= 5 && y <= 6) moves.push([x+2, y+1]);
    if (x <= 5 && y >= 1) moves.push([x+2, y-1]);
    if (x <= 6 && y >= 2) moves.push([x+1, y-2]);
    return moves;
  }

  const coordsEqual = (coord1, coord2) => {
    if (coord1[0] === coord2[0] && coord1[1] === coord2[1]) return true
    return false;
  }

  const knightMoves = (startPosition, endPosition) => {
    const queue = []; // queue for BFS
    const path = []; // shortest path
    queue.push(Node(startPosition));
    let currentNode;
    while (true) {
      currentNode = queue.shift();
      if (coordsEqual(currentNode.getCoord(), endPosition)) {
        break;
      }
      const moves = possibleMoves(currentNode.getCoord());
      moves.forEach(move => queue.push(Node(move, currentNode)));
    }
    while (currentNode.getParent() !== null) {
      path.unshift(currentNode.getCoord());
      currentNode = currentNode.getParent();
    }
    path.unshift(startPosition);
    console.log(`You made it in ${path.length-1} moves! Here\'s your path:`);
    path.forEach(coord => console.log(coord));
  }

  return {
    knightMoves
  }
})();

Knight.knightMoves([0,2],[3,3])
