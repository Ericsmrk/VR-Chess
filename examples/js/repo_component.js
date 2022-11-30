/*  Repo, char, and turns Component
*
*   @author Jacob Miller GH:miller_jacob49
*   
*/

AFRAME.registerComponent('repo', {

    init: function() {
        const avatar1 = document.querySelector('#player')
        const sText = document.querySelector('#startText')
        const pCursor = document.querySelector('#playercursor')
        
        
        this.el.addEventListener('click', function() {  //reset position, remove instructions, set playerID for turns
            if(this.getAttribute('id')=="spec"){
                console.log('yup')
                pCursor.removeAttribute('cursor')
                avatar1.setAttribute('position', "0 1.2 0")
                avatar1.setAttribute('movement-controls')
                avatar1.setAttribute('wasd-controls', "acceleration:15")
            }
            if(pCursor.getAttribute('playerID')==3){     //prevents players from selecting/removing both spawns
                if (this.getAttribute('id')=="whiteBox") {
                    avatar1.setAttribute('position', "0 1.2 0.4")
                    pCursor.setAttribute('playerID', "0")
                    NAF.utils.takeOwnership(this);
                    this.setAttribute('position', "0 -100 0")
                }
                else if (this.getAttribute('id')=="blackBox") {   //reset position, remove instructions, set playerID for turns
                    avatar1.setAttribute('position', "0 1.2 -0.4")
                    pCursor.setAttribute('playerID', "1")
                    NAF.utils.takeOwnership(this);
                    this.setAttribute('position', "0 -100 0")
                    }
                sText.setAttribute('visible', "false")
            }
        })
    }
});

AFRAME.registerComponent('char', {
    schema:{
        playerID: {type: 'string', default: '0'}
    }
});

AFRAME.registerComponent('turns', {
    schema:{
        whoseTurn: {type: 'string', default:"0"}
    }
});



