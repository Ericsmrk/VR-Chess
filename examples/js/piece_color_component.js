AFRAME.registerComponent('piece-color', {
    
    init: function () {
    // Source: https://glitch.com/edit/#!/aframe-modify-model-material?path=index.html%3A1%3A0
        this.el.addEventListener('model-loaded', () => {
            const obj = this.el.getObject3D('mesh');
            obj.traverse(node => {
                node.material.color.set(this.data);
            });
        });
    },
    
    update: function () {
        const obj = this.el.getObject3D('mesh');
        obj.traverse(node => {
            node.material.color.set(this.data);           
        });
    }
});