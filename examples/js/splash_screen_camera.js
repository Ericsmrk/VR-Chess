AFRAME.registerComponent('splash-camera',{
    init:function(){
        this.el.object3D.position.set(1,1.2,0);
        this.el.object3D.rotation.set(THREE.Math.degToRad(-30),THREE.Math.degToRad(90),0);
        
    },
    tick:function(time, timedelta){
        if(timedelta>8){
            let angle = THREE.Math.degToRad(10*time/1000)%360;
            this.el.object3D.rotation.y= angle;

            this.el.object3D.position.x = Math.sin(angle);
            this.el.object3D.position.z = Math.cos(angle);
            
            
            let rayguy = document.querySelector('#mouse-cursor');
            
            rayguy.setAttribute('raycaster','objects: .clickable')
            
        }
    }
});