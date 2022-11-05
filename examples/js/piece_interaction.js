// The cursor listener represents the "whole" chessboard as a plane.
// It's a 4x4 plane tiled sideways, so Z is "upwards" instead of Y.
AFRAME.registerComponent('cursor-listener', {
    /*schema:{
        curHolding: {default:' '}
    },  */      

    init: function () {
				// Grab a reference to the plane we'll use to signify when
				// we highlight a piece. It starts invisible, but well
				// make it visible when we click on it
				//<<<<<<< HEAD
				const highlightPlane = document.querySelector('#highlight-plane');  
				//#highlight-plane is a html element, that we are assigning to highlightPlane, which is a js element. 
				//querySelector is just a method that calls up the DOM, and in this specific case goes "AYO GIMI THE FIRST highlight-plane YOU SEE"
				//that's why there's a hashtag in front of it. hightlightPlane is a js element. 
				
				
                //Gives us an array of ALL .chessguys
                const pieces = document.querySelectorAll('.chessguy');

                //I MAY use this to make things easier with logic..not sure right now
                const spaces = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
                "b1", "ba2", "b3", "b4", "b5", "b6", "b7", "b8",
                "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
                "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
                "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
                "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
                "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
                "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"]

//*************************************************************************** VARIABLES FOR GRAVEYARD ************************************************************************************************ */
            var scl = 0.16;
            var repos = 0.25*(1-0.16);
            var dPx = 2.5*0.16+repos;
            var dPz = -2.75+(0.04*7);
            
            var dPy = 0.8;
            
            
            var dPit_w = 0;
            var dPit_b = 0;
            const deadPieceW = [new THREE.Vector3(dPx, dPy, dPz), new THREE.Vector3(dPx, dPy, dPz-0.5*scl),new THREE.Vector3(dPx, dPy, dPz-1.0*scl),new THREE.Vector3(dPx, dPy, dPz-1.5*scl),
                new THREE.Vector3(dPx, dPy, dPz-2.0*scl), new THREE.Vector3(dPx, dPy, dPz-2.5*scl), new THREE.Vector3(dPx, dPy, dPz-3.0*scl), new THREE.Vector3(dPx, dPy, dPz-3.5*scl),
                new THREE.Vector3(dPx+0.5*scl, dPy, dPz),new THREE.Vector3(dPx+0.5*scl, dPy, dPz-0.5*scl),new THREE.Vector3(dPx+0.5*scl, dPy, dPz-1.0*scl),new THREE.Vector3(dPx+0.5*scl, dPy, dPz-1.5*scl),
                new THREE.Vector3(dPx+0.5*scl, dPy, dPz-2.0*scl),new THREE.Vector3(dPx+0.5*scl, dPy, dPz-2.5*scl),new THREE.Vector3(dPx+0.5*scl, dPy, dPz-3.0*scl),new THREE.Vector3(dPx+0.5*scl, dPy, dPz-3.5*scl)]
            
            
            dPx = -2*(0.16)+repos;
            const deadPieceB = [new THREE.Vector3(dPx, dPy, dPz), new THREE.Vector3(dPx, dPy, dPz-0.5*scl),new THREE.Vector3(dPx, dPy, dPz-1.0*scl),new THREE.Vector3(dPx, dPy, dPz-1.5*scl),
            new THREE.Vector3(dPx, dPy, dPz-2.0*scl), new THREE.Vector3(dPx, dPy, dPz-2.5*scl), new THREE.Vector3(dPx, dPy, dPz-3.0*scl), new THREE.Vector3(dPx, dPy, dPz-3.5*scl),
            new THREE.Vector3(dPx-0.5*scl, dPy, dPz),new THREE.Vector3(dPx-0.5*scl, dPy, dPz-0.5*scl),new THREE.Vector3(dPx-0.5*scl, dPy, dPz-1.0*scl),new THREE.Vector3(dPx-0.5*scl, dPy, dPz-1.5*scl),
            new THREE.Vector3(dPx-0.5*scl, dPy, dPz-2.0*scl),new THREE.Vector3(dPx-0.5*scl, dPy, dPz-2.5*scl),new THREE.Vector3(dPx-0.5*scl, dPy, dPz-3.0*scl),new THREE.Vector3(dPx-0.5*scl, dPy, dPz-3.5*scl)]
 
                
				//this.
				// SUGGESTION: mousevents are oldschool. consider pointer events
				// https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
				/// o: I will let my mate know!
                

				//<<<<<<< HEAD
				const object3D = this.el.object3D; //Jose: make sure you go back and understand 

//************************************************************************** WORLD TO BOARD FUNCTION ****************************************************************************************** */                
        // This function converts any position in the world
        // to a position in "chess space" (aka A4, B2, E8 that kinda thing)
        // (and does no checks, you can get insane chess position if you put
        // garbage in here - TODO: add a limit maybe to you can only pick one of
        // the valid 8x8 spaces?)

        // returns a Vector2 (since chess is 2 dimensional)
        // https://threejs.org/docs/index.html?q=vect#api/en/math/Vector2
        const worldToBoard = (worldVector) => {//Javascript is rood at times 
            // Convert to "world space", relative to the center of the universe
            // to "local space", where this position is described as
            // "relative" to the center of the board.
            // (note that the board is tiled "sideways" via the rotate attribute,
            // to make it horizontal since by default <a-plane> is like upright
            // instead of flat.)
            const localIntersection = object3D.worldToLocal(worldVector);
            //console.log(localIntersection);
            // Normalize to 0 - 1 (the board is 4 units wide and positions go into the negative)
            // Also discard the "z-axis" here - chess isn't 3d.
            const boardPosition = new THREE.Vector2(
                (localIntersection.x / 0.64) + 0.5,
                (localIntersection.y / 0.64) + 0.5
            );
            // Multiply by all the chess positions (chess boards are 8x8)
            boardPosition.multiplyScalar(8);
            // Round to a whole number (chess isnt fractional)
            boardPosition.ceil();
            return boardPosition;
        }

//************************************************************************ BOARD TO WORLD FUNCTION ********************************************************************************* */
        // Opposite of the function above, get the "world space" position
        // from a "chess space" position
        const boardToWorld = (boardPosition) => {
            // Start by figuring out our "local position" from the center of the board.
            const localPosition = new THREE.Vector3(boardPosition.x, boardPosition.y, 0);
            // divide by 4 so that our chess position range go from (1 - 8) to (1 - 2)
            localPosition.multiplyScalar(1/4)
            // subtract -1 to that is goes (-1 to +1)
            localPosition.add(new THREE.Vector3(-1, -1, 0))
            // and now it goes from (-2 to +2) (which is the size of our board - we're almost done)
            localPosition.multiplyScalar(0.32)
            // and since we rounded the number down, we need to add
            // a bit to make it to the middle of the square
            localPosition.add(new THREE.Vector3(-0.25*.16, -0.25*.16, 0))
            // And turn it into a world space vector!
            return object3D.localToWorld(localPosition)
        };

//******************************************************************** BOARD TO CHESS TERM FUNCTION ********************************************************************************** */
        // convert a "chess space" position to a string like "C4", "D1"
        const boardToChessTerm = (boardPosition) => {
            // Chess board looks like
            // https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Starting_position_in_a_chess_game.jpg/1920px-Starting_position_in_a_chess_game.jpg
            const letters = new Map([
                [1, 'a'],
                [2, 'b'],
                [3, 'c'],
                [4, 'd'],
                [5, 'e'],
                [6, 'f'],
                [7, 'g'],
                [8, 'h'],
            ]);
            const columnLetter = letters.get(boardPosition.x);
            const rowNumber = boardPosition.y;
            return `${columnLetter}${rowNumber}`;
        }

//------------------------------------------------------------Function for isMoveValid-----------------------------------------------------------------------------------------------------
//This section is going to become HUGE!!
        const isMoveValid = (curP, sPos, ePos) => {

            const id = curP.id[2] + curP.id[3]
            if(curP.id[0]=='w'){
                switch(id){
                    case 'pa':  //All logic for WHITE PAWNs, important to note the BLACK PAWNs will require different logic(opposite of this)
                        if(curP.getAttribute('pawnMoved') == 'false'){  //movement allowed if PAWN has NOT moved yet

                            //**************Could change this to where pawnMoved is checked only for the second move, but will cause pawnMoved to be accessed everytime??******* */
                            //move up 1
                            if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos,1 ,0)) && getPieceID(modBoardPos(sPos,1,0))==-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //move up 2 (first turn)
                            else if( boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, 2, 0)) && getPieceID(modBoardPos(sPos, 2, 0))==-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //kill to the right
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, 1, 1)) && getPieceID(modBoardPos(sPos,1,1))!=-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //kill to the left
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, 1, -1)) && getPieceID(modBoardPos(sPos,1,-1))!=-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //invalid move
                            else{
                                return false;
                            }
                        }
                        else {  //movement allowed after PAWN has moved once
                            //move up 1
                            if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos,1 ,0)) && getPieceID(modBoardPos(sPos,1,0))==-1){
                                console.log(getPieceID(modBoardPos(sPos,1,0)))
                                return true;
                            }
                            //kill to the right
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, 1, 1)) && getPieceID(modBoardPos(sPos,1,1))!=-1){
                                return true;
                            }
                            //kill to the left
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, 1, -1)) && getPieceID(modBoardPos(sPos,1,-1))!=-1){
                                return true;
                            }
                            //invalid move
                            else{
                                return false;
                            }
                        }
                }
                    
            }
            else if(curP.id[0]=='b'){
                switch(id){
                    case 'pa': //All logic for BLACK PAWNs, important to note the WHITE PAWNs will require different logic(opposite of this)
                        if(curP.getAttribute('pawnMoved') == 'false'){ //movement allowed if PAWN has NOT moved yet
                            //move up 1
                            if(boardToChessTerm(ePos)==boardToChessTerm(modBoardPos(sPos, -1, 0)) && getPieceID(modBoardPos(sPos, -1, 0))==-1){
                                curP.setAttribute('pawnMoved', 'true')
                                return true
                            }
                            //move up 2 (first turn)
                            else if( boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, -2, 0)) && getPieceID(modBoardPos(sPos, -2, 0))==-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //kill to the right
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, -1, 1)) && getPieceID(modBoardPos(sPos,-1,1))!=-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //kill to the left
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, -1, -1)) && getPieceID(modBoardPos(sPos,-1,-1))!=-1){
                                curP.setAttribute('pawnMoved', 'true');
                                return true;
                            }
                            //invalid move
                            else{
                                console.log('invalid move')
                                return false;
                            }
                        }
                        else{ //movement allowed after PAWN has moved once
                             //move up 1
                             if(boardToChessTerm(ePos)==boardToChessTerm(modBoardPos(sPos, -1, 0)) && getPieceID(modBoardPos(sPos, -1, 0))==-1){
                                
                                return true
                            }
                            //move up 2 (first turn)
                            else if( boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, -2, 0)) && getPieceID(modBoardPos(sPos, -2, 0))==-1){
                                return true;
                            }
                            //kill to the right
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, -1, 1)) && getPieceID(modBoardPos(sPos,-1,1))!=-1){
                                return true;
                            }
                            //kill to the left
                            else if(boardToChessTerm(ePos) == boardToChessTerm(modBoardPos(sPos, -1, -1)) && getPieceID(modBoardPos(sPos,-1,-1))!=-1){
                                return true;
                            }
                            //invalid move
                            else{
                                console.log('invalid move')
                                return false;
                            }
                        }
                }
            }

            
        }

//------------------------------------------------------------ MODBOARDPOS AND GETPIECEID FUNCTIONS -----------------------------------------------------------------------------
        //Allows me to check availability of a square for piece movements such as PAWN kill for diagnol kills
        const modBoardPos = (boardPosition, x, y) => {              //***********LOOK INTO THIS*************** */
            newPos = new THREE.Vector2(boardPosition.x, boardPosition.y)
            newPos.x = boardPosition.x + y;
            newPos.y = boardPosition.y + x;
            return newPos;
        }
        //returns piece # in the pieces array
        const getPieceID = (boardPosition) => { 
            var i = 0;
            var pieceID = "NULL"
            var curPieceID = -1;

            for(i; i <32; i++){
            // console.log(i)
                //console.log("Comparing: " + boardToChessTerm(boardPosition) + " and " + elements[i].getAttribute('boardPos'))
                if(boardToChessTerm(boardPosition)==pieces[i].getAttribute('boardPos')){
                    //console.log(pieces[i].id);
                    curPieceID = i;
                    pieceID = pieces[i].id
                    return curPieceID
                }
            }
            return curPieceID   //returns a # that can be used in pieces array
        }
//---------------------------------------------------------------- MOUSEDOWN ADDEVENTLISTENER BEGINS -------------------------------------------------------------------------------------------------
      

        this.el.addEventListener('mousedown', function (obj) {  //this.el points to what element you are about to click on, you're attaching event listen to that, mousedown fires the the 
            //function following it. this.el gets assigned to obj as, like a reference? we think. 
            if (!obj.detail.intersection) //if there's no intersection(if you don't click on the board) it yeets you
                return;
            
            const startPosition = worldToBoard(obj.detail.intersection.point) //"obj.detail.intersection.point" understand and document this better, appears to grab the position
            console.log(boardToChessTerm(startPosition))
            //translates from the world to the board. 
            const curPiece = getPieceID(startPosition)
            console.log(curPiece)
            //this.data.curHolding = curPiece;
            if(curPiece== (-1)){
                console.log("NOPE!")
                return;
            }
            pieceTarget = boardToWorld(startPosition);//get piece position for storing it later
            let pieceToAnimate = pieces[curPiece];
            pieceToAnimate.setAttribute('holdable', 'x:'+pieceTarget.x+';y:'+pieceTarget.y+';z:'+pieceTarget.z);
            //starts the holding component

//************************************************************* SETTING HIGHLIGHT PLANE **************************************************************************************** */
            highlightPlane.object3D.visible = true; //while mouse is down, the following three thigns happen. First the highlight becomes visible. 
            highlightPlane.setAttribute("color", "blue"); //next it becomes blue 
            highlightPlane.object3D.position.copy(boardToWorld(startPosition)) //This gives the first position to the highlight plane
            
//*********************************************************** DEFINITION FOR EVENT OCCURING ON MOUSE UP****************************************************************************************** */
            const onMouseUp = (evt) => { //understand the javascript stuff going on here.  //understand the javascript stuff going on here. 
                // Cleanup event handlers so we don't get _another_
                // listener every time we click  
                this.removeEventListener('mouseup', onMouseUp); //ask about this. to whatever subject matter expert we can find  //ask about this. to whatever subject matter expert we can find 
                
                let pieceToAnimate = pieces[curPiece];//removing attribute set to stop and reset postion
                pieceToAnimate.removeAttribute('holdable');

                const endPosition = worldToBoard(evt.detail.intersection.point) //When you mouse up, that position is coppied to end position

                
//*********************************************************** LOGIC TO PREVENT OCCUPIED SPACE MOVES ******************************************************************************************* */
                const endPosPiece = getPieceID(endPosition)
                if(endPosPiece == -1){  //checking if space is empty, allow move

                    if(isMoveValid(pieces[curPiece], startPosition, endPosition)){
                        pieces[curPiece].object3D.position.copy(boardToWorld(endPosition))
                        pieces[curPiece].setAttribute('boardPos', boardToChessTerm(endPosition))
                    }
                }
                else{   //if space IS OCCUPIED

                    console.log("End " + pieces[endPosPiece].id)
                    if(pieces[curPiece].id[0] == pieces[endPosPiece].id[0]){    //if pieces are same color
                        //means pieces are the same color, DO NOT MOVE
                        console.log("Pieces same color, INVALID MOVE")
                    }
                    else{   //KILL/CAPTURE FUNCTION WILL BE PLACED HERE!  ---> Pieces are not some color, KILL
                        //isMoveValid()
                        if(isMoveValid(pieces[curPiece], startPosition, endPosition)){      
                            pieces[curPiece].object3D.position.copy(boardToWorld(endPosition))      //Move piece into new position
                            pieces[curPiece].setAttribute('boardPos', boardToChessTerm(endPosition))
                            console.log(pieces[curPiece].getAttribute('boardPos'))

                            //KILL/CAPTURE      --> Move KILLED piece into graveyard
                            if(pieces[curPiece].id[0] == 'w'){  //if white, move into white graveyard
                                pieces[endPosPiece].object3D.position.copy(deadPieceW[dPit_w])
                                pieces[endPosPiece].setAttribute('boardPos', "dead")
                                dPit_w++
                            }else{                              //if black, move into black graveyard
                                pieces[endPosPiece].object3D.position.copy(deadPieceB[dPit_b])
                                pieces[endPosPiece].setAttribute('boardPos', "dead")
                                dPit_b++
                            }     
                        }           
                    }
                }

                highlightPlane.object3D.position.copy(boardToWorld(endPosition))   //positioning highlight plane at endPosition
                highlightPlane.setAttribute("color", "red");  

            };

          this.addEventListener('mouseup', onMouseUp);
      });
     
    }
});

