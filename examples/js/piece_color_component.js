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