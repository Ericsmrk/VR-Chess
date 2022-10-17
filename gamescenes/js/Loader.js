AFRAME.registerComponent('loader', {
    init:function(){
        let sceneRequest = new XMLHttpRequest();
        sceneRequest.open("GET","../src/scenes/scene1.json",false);
        sceneRequest.send();
        //console.log(sceneRequest.responseText);
        var sceneData = JSON.parse(sceneRequest.responseText);
        
        
        var ascene = document.querySelector('a-scene');
        //load assets
        
        

        let xest = document.createElement('a-asset-item');
        xest.setAttribute('id', 'chair');
        xest.setAttribute('src','../src/models/props/basic/chair.gltf')
        ascene.appendChild(xest);
        
        let yest = document.createElement("a-entity");
        yest.setAttribute('position', {x: 0, y: 0, z: 0}),
        yest.setAttribute('gltf-model', '#chair');
        ascene.appendChild(yest);
      
        
        /*
        for(let i in sceneData.loadobjects){
            console.log(sceneData.loadobjects[i].id);
            console.log(sceneData.loadobjects[i].src);
            let thing = document.createElement('a-asset-item');
            thing.setAttribute('id', JSON.stringify(sceneData.loadobjects[i].id));
            thing.setAttribute('src,', JSON.stringify(sceneData.loadobjects[i].src));
            ascene.appendChild(thing);
        }

        
            
        //place entities
        for(let entity in sceneData.placeobjects){
            let thing = document.createElement('a-entity');
            thing.setAttribute('gltf-model', entity.gltf-model);
            thing.setAttribute('position', entity.position);
            thing.setAttribute('scale', entity.scale);
            thing.setAttribute('rotation', entity.rotation);
            ascene.appendChild(thing);
        }
        */

        //for(let special in sceneData['specialobjects']){
        //    document.write(special);
        //}
        
        //<a-asset-item id = chair src='../src/models/props/basic/chair.gltf'></a-asset-item>"
        //<a-entity gltf-model='#table' position = '0 0 0' scale = '.25 .25 .25' rotation='0 0 0'></a-entity>
        
    }

    //loadScene();


}

);
    