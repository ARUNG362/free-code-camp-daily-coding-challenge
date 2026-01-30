function findPawnMoves(position) {
    const moves = [];
    
    if(position.includes("2")){
        moves.push(`${position[0]}${+position[1] + 1}`)
        moves.push(`${position[0]}${+position[1] + 2}`)
    } else{
        moves.push(`${position[0]}${+position[1] + 1}`)
    }   
    console.log(moves);
    return moves;
}
findPawnMoves("D4");
