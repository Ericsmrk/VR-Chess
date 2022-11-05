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
				
				
                //const elements = document.querySelectorAll('a-entity');//Gives us an array of ALL a-entitys
                const pieces = document.querySelectorAll('.chessguy');
				//this.
				// SUGGESTION: mousevents are oldschool. consider pointer events
				// https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
				/// o: I will let my mate know!
                

				//<<<<<<< HEAD
				const object3D = this.el.object3D; //Jose: make sure you go back and understand 

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
            console.log(localIntersection);
            const boardPosition = new THREE.Vector2(
                (localIntersection.x / 0.64) + 0.5,
                (localIntersection.y / 0.64) + 0.5
            );
            console.log(boardPosition);
            // Multiply by all the chess positions (chess boards are 8x8)
            boardPosition.multiplyScalar(8);
            // Round to a whole number (chess isnt fractional)
            boardPosition.ceil();
            console.log(boardPosition);
            return boardPosition;
        }
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
        

//------------------------------------------------------------Function for isSpaceOccupied-----------------------------------------------------------------------------
//THIS WILL BREAK IF ENVIRONMENT IS CHANGED!!
//THIS WILL BREAK IF ENVIRONMENT IS CHANGED!!
//THIS WILL BREAK IF ENVIRONMENT IS CHANGED!!
//THIS WILL BREAK IF ENVIRONMENT IS CHANGED!!
const getPieceID = (boardPosition) => { //THIS WILL BREAK IF ENVIRONMENT IS CHANGED!!
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
    return curPieceID
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

      
        //Attempts at holding animation. The main problem is getting the actual piece object, if 
        this.el.addEventListener('mousedown', function (target) {
            
            

        });
//*/        

        this.el.addEventListener('mousedown', function (obj) {  //this.el points to what element you are about to click on, you're attaching event listen to that, mousedown fires the the 
            //function following it. this.el gets assigned to obj as, like a reference? we think. 
            if (!obj.detail.intersection) //if there's no intersection(if you don't click on the board) it yeets you
                return;
            
            //<<<<<<< HEAD this was left over after a merge, might have messed things up by removing it, might have not. Not sure tbh. 
            
            const startPosition = worldToBoard(obj.detail.intersection.point) //"obj.detail.intersection.point" understand and document this better, appears to grab the position
            
            //translates from the world to the board. 
            const curPiece = getPieceID(startPosition)
            console.log(curPiece)
            //this.data.curHolding = curPiece;
            if(curPiece== (-1)){
                console.log("NOPE!")
                return;
            }

//****************************************************************************************************************************************************** */
            console.log(pieces[curPiece].id[0]) //can use this to check against an occupied spot, if space occupied, check if it same color as piece being moved
                                                    //if yes, do nothing
                                                    //if no, KILL


//-----------------------------------------------SETTING ASIDE SPACE FOR LOGIC TO DETERMINE INFORMATION ABOUT SPACE CLICKED ON-----------------------------------------------------
//      1. Is space currently occupied?         - maybe write separate function isSpaceOccupied(startPosition) to perform this
                //-YES : Need to figure out how to determine what piece at that position.
                    // - compare startPosition w/ while iterating through elements [this can be in terms of BoardPosition OR ChessTerms]
                    // 
                //-NO  : No piece should be allowed to move on mouseUp.

            /* if(isSpaceOccupied){
                var pieceID = "NULL";
                var i = 0;
                    while(boardToChessTerm(startPosition)!=boardToChessTerm(elements[i].position)){
                        i++;
                    }
                pieceID = elements[i];
            }
            pieceID.object3D.position.copy(boardToWorld(endPosition));
            */
            


            highlightPlane.object3D.visible = true; //while mouse is down, the following three thigns happen. First the highlight becomes visible. 
            highlightPlane.setAttribute("color", "blue"); //next it becomes blue 
            highlightPlane.object3D.position.copy(boardToWorld(startPosition)) //This gives the first position to the highlight plane


            //console.log('Moving from: ', boardToChessTerm(startPosition)) //This lets us know where that is, helps with debuggin

            
            



            const onMouseUp = (evt) => { //understand the javascript stuff going on here.  //understand the javascript stuff going on here. 
                // Cleanup event handlers so we don't get _another_
                // listener every time we click
                NAF.utils.takeOwnership(pieces[curPiece]); //this is a function that takes ownership of the rook. please work
                //console.log("pieces[curPiece].id: " + pieces[curPiece].id)
                this.removeEventListener('mouseup', onMouseUp); //ask about this. to whatever subject matter expert we can find  //ask about this. to whatever subject matter expert we can find 


                const endPosition = worldToBoard(evt.detail.intersection.point) //When you mouse up, that position is coppied to end position

                
    //****************************************************************************************************************************************************** */
                console.log(pieces[curPiece].id[0]) //can use this to check against an occupied spot, if space occupied, check if it same color as piece being moved
                //if yes, do nothing
                //if no, KILL
                const endPosPiece = getPieceID(endPosition)
                if(endPosPiece == -1){
                    console.log("End position empty")
                    pieces[curPiece].object3D.position.copy(boardToWorld(endPosition))
                    pieces[curPiece].setAttribute('boardPos', boardToChessTerm(endPosition))
                
                

                }
                else{
                    console.log("End " + pieces[endPosPiece].id)
                    if(pieces[curPiece].id[0] == pieces[endPosPiece].id[0]){
                        //means pieces are the same color, DO NOT MOVE
                        console.log("Pieces same color, INVALID MOVE")

                    }
                    else{   //KILL/CAPTURE FUNCTION WILL BE PLACED HERE!
                        console.log(pieces[curPiece].id)
                        pieces[curPiece].object3D.position.copy(boardToWorld(endPosition))
                        pieces[curPiece].setAttribute('boardPos', boardToChessTerm(endPosition))
                        console.log(pieces[curPiece].getAttribute('boardPos'))

                        //KILL/CAPTURE
                        if(pieces[curPiece].id[0] == 'w'){
                            pieces[endPosPiece].object3D.position.copy(deadPieceW[dPit_w])
                            pieces[endPosPiece].setAttribute('boardPos', "dead")
                            dPit_w++
                        }else{
                            pieces[endPosPiece].object3D.position.copy(deadPieceB[dPit_b])
                            pieces[endPosPiece].setAttribute('boardPos', "dead")
                            dPit_b++
                        }
                        
                        
                
                

                
                    }
                }

                highlightPlane.object3D.position.copy(boardToWorld(endPosition))   //positioning highlight plane at endPosition
                highlightPlane.setAttribute("color", "red");  
                
                /*
                console.log(pieces[curPiece].id)
                pieces[curPiece].object3D.position.copy(boardToWorld(endPosition))
                
                

                highlightPlane.object3D.position.copy(boardToWorld(endPosition))   //positioning highlight plane at endPosition
                highlightPlane.setAttribute("color", "red");     */                   //coloring plane after drop
            };

          this.addEventListener('mouseup', onMouseUp);
      });
     
    }
    /*
    ,
    tick:function(time, timedelta){
        if(this.data.curHolding!= ' '){
            var position = document.querySelector('a-scene').camera.el.object3D.position; 
            var rotation = document.querySelector('a-scene').camera.el.object3D.rotation;
            var distance = 2;
            var x = position.x; var y = position.y; var z = position.z;
            console.log(rotation.x);
            x -= distance*Math.sin(rotation.x+(Math.PI/2))*Math.sin(rotation.y);
            y -= distance*Math.cos(rotation.x+(Math.PI/2));
            z -= distance*Math.sin(rotation.x+(Math.PI/2))*Math.cos(rotation.y);
            
            curobject = document.querySelector('#' + this.data.curHolding);
            curobject.object3D.position.set(x,y,z);  
            
            
            console.log('x= ' +x +' y= ' + y +' z= ' + z);
        }
            
           
            
    }
    */
});

