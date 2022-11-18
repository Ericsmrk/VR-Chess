AFRAME.registerComponent('setatts',{
    init:function(){
        const pieces = document.querySelectorAll('.chessguy');
        var chessPieceScale = 0.0355489829436;  //ratio of 'size' of model to smaller size, based on 15cm tall king (larger than usual piece)
        var params = this.getUrlParams();
        var colorChanger= document.querySelector('#initial-color-changer');
        var loader = document.querySelector('#loader');
        let colorAtt = '';
        if(colorChanger){
            if(params.colorType){
                colorAtt+='option:' + params.colorType + ';';
                
                if(params.colorType=='gradient'){
                    if(params.gradW){
                        colorAtt+='gradientW:' + params.gradW + ';'
                    }if(params.gradB){
                        colorAtt+='gradientB:' + params.gradB + ';'
                    }    
                }
            }
            if(params.colorSeed){
                colorAtt+='seed:' + params.colorSeed + ';';
            }
            
           
            
            colorAtt+='onload:true'
            console.log(colorAtt)
            //colorChanger.removeAttribute('color-changer');
            colorChanger.setAttribute('color-changer', colorAtt);  
                
        }
        if(loader){
            document.querySelector('a-scene').addEventListener('loaded', function () {
                if(params.scene){
                    loader.setAttribute('loader', '/src/scenes/'+params.scene+'.json');
                    console.log(params.scene);
                }
            })
            
        }

        
        for(i in pieces){
            pieces[i].object3D.position.x -=0.25;   // removes offset. Currently pieces are spaced throughout the range (x,z) (2,2) to (-1.5,-1.5)
            pieces[i].object3D.position.x *=0.16;   //Shrinks spacing between pieces.
            
            
            pieces[i].object3D.position.z -=0.25;   //same as x
            pieces[i].object3D.position.z *=0.16;
            
            pieces[i].object3D.position.y =0.8;     //A-frame y is height. changing height does not affect piece interaction.
            pieces[i].object3D.scale.set(chessPieceScale,chessPieceScale,chessPieceScale);
            
        }
        
         
    },
    getUrlParams: function () {//Copied from dynamic-room-component, itself from networked a-frame.
        var match;
        var pl = /\+/g;  // Regex for replacing addition symbol with a space
        var search = /([^&=]+)=?([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); };
        var query = window.location.search.substring(1);
        var urlParams = {};
    
        match = search.exec(query);
        while (match) {
          urlParams[decode(match[1])] = decode(match[2]);
          match = search.exec(query);
        }
        return urlParams;
      }
    
});