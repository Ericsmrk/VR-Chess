AFRAME.registerComponent('piece-color', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        const obj = this.el.getObject3D('mesh');
        obj.traverse(node => {
            node.material.color.set(this.data);
        });
      });
    },
    update:function(){
      
      const obj = this.el.getObject3D('mesh');
      obj.traverse(node => {
          node.material.color.set(this.data);
      });
    
    },
    remove:function(){
      
    }
  });

  /* global AFRAME, NAF */
//really wishing this was better commented 
//so of course, everything has to be correctly be a registered component in a frame, color changer is the 
//function (I think) name here. 
/*
AFRAME.registerComponent('color-changer', {
  //then we have something called events, im guessing that lets
  
  dependencies: ['raycaster'],
  
  init:function(){
    const pieces = document.querySelectorAll(".chessguy");
    
    function changeColor(){
      //whiteColor = getRandomColor();
      //blackColor = getRandomColor();
      
      for(let i=0;i<32;i++){
        pieceToRecolor=pieces[i];
        if(pieceToRecolor.id[0]=='w'){
          pieceToRecolor.removeAttribute('piece-color');
          pieceToRecolor.setAttribute('piece-color','#FFFF00');
        }else if(pieceToRecolor.id[0]=='b'){
          pieceToRecolor.removeAttribute('piece-color');
          pieceToRecolor.setAttribute('piece-color','#FF00FF');
        }
      }
    }
    changeColor();
    console.log('init piece color functions')
    const button = document.querySelector('#recolorButton');
    this.el.addEventListener('raycaster-intersection', changeColor());
    
  },
  
  
  events: {
    //this fire when a click happens, which starts another function, goes to evt (im guessing 
    //environmen? )
    
    'click': function (evt) {
      const pieces = document.querySelectorAll(".chessguy");
      //whiteColor = getRandomColor();
      //blackColor = getRandomColor();
      console.log('changeColor called')
      for(let i in pieces){
        

        if(pieces[i].id[0]=='w'){
          pieces[i].removeAttribute('piece-color');
          pieces[i].setAttribute('piece-color','#FFFF00');
        }else if(pieces[i].id[0]=='b'){
          pieces[i].removeAttribute('piece-color');
          pieces[i].setAttribute('piece-color','#FF00FF');
        }
      }
    }
  },

  getRandomColor: function() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
});
*/