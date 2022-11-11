AFRAME.registerComponent('setatts',{
    init:function(){
        const pieces = document.querySelectorAll('.chessguy');
        var chessPieceScale = 0.0355489829436;  //ratio of 'size' of model to smaller size, based on 15cm tall king (larger than usual piece)
        for(i in pieces){
            pieces[i].object3D.position.x -=0.25;   // removes offset. Currently pieces are spaced throughout the range (x,z) (2,2) to (-1.5,-1.5)
            pieces[i].object3D.position.x *=0.16;   //Shrinks spacing between pieces.
            
            
            pieces[i].object3D.position.z -=0.25;   //same as x
            pieces[i].object3D.position.z *=0.16;
            
            pieces[i].object3D.position.y =0.8;     //A-frame y is height. changing height does not affect piece interaction.
            pieces[i].object3D.scale.set(chessPieceScale,chessPieceScale,chessPieceScale);
            
        }
        
    }
    
});