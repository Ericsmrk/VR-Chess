//creating new component for chess pieces               

//component will contain information such as:
//  1. It's current position on the chess board i.e. a2, b3 etc
//  2. Its piece type......maybe not necessary
//  3. If it has moved.. used for pawn to allow 2 space movement at first move for each pawn
AFRAME.registerComponent('chess-piece', {
    schema:{
        boardPos: {type: 'string', default: 'NULL'},
        pieceType: {type: 'string', default:'NULL'},
        pawnMoved: {type: 'bool', default: 'False'}

    }
})