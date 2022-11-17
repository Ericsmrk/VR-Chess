AFRAME.registerComponent('piece-color', {
    /*
    init: function () {
    // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            const obj = this.el.getObject3D('mesh');
            obj.traverse(node => {
                node.material.color.set(this.data);
            });
        });
    },
    */
    update: function () {
        const obj = this.el.getObject3D('mesh');
        obj.traverse(node => {
            node.material.color.set(this.data);           
        });
    }
});