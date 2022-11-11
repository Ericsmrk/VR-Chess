AFRAME.registerComponent('color-changer',{
    init:function(){
        const pieces = document.querySelectorAll('.chessguy');
        //console.log(pieces)
        function getRandomColor() {
            let r = (Math.floor(Math.random()*256)).toString(16);
            let g = (Math.floor(Math.random()*256)).toString(16);
            let b = (Math.floor(Math.random()*256)).toString(16);
            if(r.length == 1){
                r = '0'+r;
            }if(g.length == 1){
                g = '0'+g;
            }if(b.length == 1){
                b = '0'+b;
            }
            return '#'+r+b+g;
            
        }
        function setColors(){
            console.log('checkrunning');
            for (let i in pieces){
                let pieceToRecolor = pieces[i];
                pieceToRecolor.removeAttribute('piece-color');
                pieceToRecolor.setAttribute('piece-color',getRandomColor());
            }
        }
        this.el.addEventListener('click', setColors);
        
    }
});