AFRAME.registerComponent('repo_b', {

    init: function() {
        const avatar1 = document.querySelector('#player')

        function setPosb(){
            avatar1.setAttribute('position', "0 1.2 -0.4")
        }

        this.el.addEventListener('click', setPosb);
    }
});


AFRAME.registerComponent('repo_w', {

    init: function() {
        const avatar1 = document.querySelector('#player')

        function setPos(){
            avatar1.setAttribute('position', "0 1.2 0.4")
        }
        
        this.el.addEventListener('click', setPos);
    }
});
