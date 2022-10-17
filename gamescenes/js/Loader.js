AFRAME.registerComponent('loader', {
    init:function(){
        let sceneRequest = new XMLHttpRequest();
        sceneRequest.open("GET","../src/scenes/scene1.json",false);
        sceneRequest.send();
        //console.log(sceneRequest.responseText);
        var sceneData = JSON.parse(sceneRequest.responseText);
        
        
        var ascene = document.querySelector('a-scene');
        //load assets
        
        
/*
        let xest = document.createElement('a-asset-item');
        xest.setAttribute('id', 'chair');
        xest.setAttribute('src','../src/models/props/basic/chair.gltf')
        ascene.appendChild(xest);
        
        let yest = document.createElement("a-entity");
        yest.setAttribute('position', {x: 0, y: 0, z: 0}),
        yest.setAttribute('gltf-model', '#chair');
        ascene.appendChild(yest);
*/      
        
        
        for(let i in sceneData.loadobjects){
            
            let asset = document.createElement('a-asset-item');
            asset.setAttribute('id', sceneData.loadobjects[i].id);
            asset.setAttribute('src', sceneData.loadobjects[i].src);
            ascene.appendChild(asset);
        }

        
            
        //place entities
        for(let i in sceneData.placeobjects){
            let entity = document.createElement('a-entity');
            console.log(sceneData.placeobjects[i]);
            entity.setAttribute('gltf-model', sceneData.placeobjects[i].model);
            entity.setAttribute('position', {x: 0, y: 0, z: 0});
            //thing.setAttribute('scale', entity.scale);
            //thing.setAttribute('rotation', entity.rotation);
            ascene.appendChild(entity);
        }
        

        //for(let special in sceneData['specialobjects']){
        //    document.write(special);
        //}
        
        //<a-asset-item id = chair src='../src/models/props/basic/chair.gltf'></a-asset-item>"
        //<a-entity gltf-model='#table' position = '0 0 0' scale = '.25 .25 .25' rotation='0 0 0'></a-entity>
        
    }

    //loadScene();


}

);
    