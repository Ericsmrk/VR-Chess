//creating new component for chess pieces               --DON'T KNOW IF THIS IS NECESSARY

//component will contain information such as:
//  1. It's current position on the chess board i.e. a2, b3 etc
AFRAME.registerComponent('chess-piece', {
    schema:{
        boardPos: {type: 'string', default: 'NULL'}
    }
})