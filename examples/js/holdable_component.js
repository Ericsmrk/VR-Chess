/*  Color Changer Component
*
*   @author Brett Harris GH:BrettH23
*   
*/
AFRAME.registerComponent('holdable',{
    init:function(){
        //console.log(this.data +' init holdable')
    },
    tick: function(){
        
            //console.log('animation is pinging');
            var position = document.querySelector('a-scene').camera.el.object3D.position; 
            var rotation = document.querySelector('a-scene').camera.el.object3D.rotation;
            var distance = 0.35;
            var x = position.x; var y = position.y; var z = position.z;
            //console.log(rotation.x);
            
            x -= distance*Math.sin(rotation.x+(Math.PI/2))*Math.sin(rotation.y);
            y -= distance*Math.cos(rotation.x+(Math.PI/2));
            z -= distance*Math.sin(rotation.x+(Math.PI/2))*Math.cos(rotation.y);
            
            //curobject = document.querySelector('#' + this.data.curHolding);
            this.el.object3D.position.set(x,y,z);  
            
            
            //console.log('x= ' +x +' y= ' + y +' z= ' + z);
        
        
    },
    remove: function(){
        this.el.object3D.position.x=this.data.x;
        this.el.object3D.position.y=this.data.y;
        this.el.object3D.position.z=this.data.z;
    }
});