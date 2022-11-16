AFRAME.registerComponent('repo_b', {

init: function() {
    const avatar1 = document.querySelector('#player')
    const object3D = this.el.object3D; //is this necessary? Still dont understand it

    
    function setPos(){
        console.log(avatar1)
        console.log("yes")
        const whitePos = new THREE.Vector3(0,0,0)
        //avatar1.object3D.position.copy(whitePos)
        avatar1.setAttribute('position', "0 1.2 -0.4")
        avatar1.setAttribute('rotation', "180 90 90")

        console.log("yup")
    }

    this.el.addEventListener('click', setPos);
}



});

AFRAME.registerComponent('repo_w', {

    init: function() {
        const avatar1 = document.querySelector('#player')
        const object3D = this.el.object3D; //is this necessary? Still dont understand it
    
        
        function setPos(){
            console.log(avatar1)
            console.log("yes")
            const whitePos = new THREE.Vector3(0,0,0)
            //avatar1.object3D.position.copy(whitePos)
            avatar1.setAttribute('position', "0 1.2 0.4")
    
            console.log("yup")
        }
    
        this.el.addEventListener('click', setPos);
    }
    
    
    
    });
