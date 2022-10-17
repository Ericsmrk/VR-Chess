function loadScene(){
    let sceneRequest = new XMLHttpRequest();
    sceneRequest.open("GET","../src/scenes/scene2.json",false);
    sceneRequest.send();
    console.log(sceneRequest.responseText);
    let scene = JSON.parse(sceneRequest.responseText);
    //console.log(scene);
    
    let afScene = document.getElementById("ascene");
    //load assets
    afScene.write("<a-assets>");
        for(let item in scene['loadobjects']){
            afScene.write('<a-asset-item id = ' + item.id + ' src="' + item.source + '"></a-asset-item>');
        }

    
        afScene.write("</a-assets>");
    //place entities
    for(let entity in scene['placeobjects']){
        afScene.write('<a-entity gltf-model="#' + entity.id + '" position = "' + entity.position + '"scale = "' + entity.scale +'"rotation = "' + entity.rotation+ '"></a-entity>' )
    }
    
    for(let special in scene['specialobjects']){
        afScene.write(special);
    }
    
    //<a-asset-item id = chair src='../src/models/props/basic/chair.gltf'></a-asset-item>"
    //<a-entity gltf-model='#table' position = '0 0 0' scale = '.25 .25 .25' rotation='0 0 0'></a-entity>
    
}

loadScene();