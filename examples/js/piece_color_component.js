AFRAME.registerComponent('piece-color', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
            //console.log('red')
            node.material.color.set(this.data);
          
        });
      });
    }
  });

  /* global AFRAME, NAF */
//really wishing this was better commented 
//so of course, everything has to be correctly be a registered component in a frame, color changer is the 
//function (I think) name here. 

AFRAME.registerComponent('color-changer', {
  //then we have something called events, im guessing that lets
  events: {
    //this fire when a click happens, which starts another function, goes to evt (im guessing 
    //environmen? )
    'click': function (evt) {
      //okay, top part is easy, changes material color
      
      const pieces = document.querySelectorAll("a-entity[piece-color-w]");
      this.el.setAttribute('material', { color: this.getRandomColor() });

      //however, what the flying pig is this. 
      //gives ownership to the clicker person maybe? hm. 
      //NAF.utils.takeOwnership(this.el);
    }
  },

  getRandomColor: function() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
});
