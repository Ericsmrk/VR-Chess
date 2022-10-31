AFRAME.registerComponent('setatts',{
    init:function(){
        const pieces = document.querySelectorAll('.chessguy');
        var chessPieceScale = 0.0355489829436;  //ratio of 'size' of model to smaller size, based on 15cm tall king (larger than usual piece)
        for(i in pieces){
            pieces[i].object3D.position.y =0.8;
            pieces[i].object3D.scale.set(chessPieceScale,chessPieceScale,chessPieceScale);
            
        }
        //document.querySelector('#cursor-plane').object3D.position.y = 1.01;
        //Doesn't work. it's one item so I'm sure it's not a big deal to change manually
    }
    
});