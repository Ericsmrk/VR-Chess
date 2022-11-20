AFRAME.registerComponent('env-selector',{
    init:function(){
        const loader = document.querySelector('#loader');
        const validButtons = document.querySelectorAll('.sceneChanger');
        loader.setAttribute('loader','/src/scenes/scene1.json');
        console.log(loader)
        for(i in validButtons){
            validButtons[i].addEventListener('click',function(){
                loader.removeAttribute('loader');
                loader.setAttribute('loader','/src/scenes/'+this.id+'.json');
                let sceneForm = document.querySelector('#scene');
                sceneForm.value=this.id;
            });
        }
        
       
    }
})