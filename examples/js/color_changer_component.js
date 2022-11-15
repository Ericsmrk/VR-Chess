AFRAME.registerComponent('color-changer',{
    schema:{
        preset:{type:'string',default:'random'},
        seed:{type:'number',default:-1}
    },
    init:function(){
        
        const pieces = document.querySelectorAll('.chessguy');
        console.log(pieces);

        var currentSeed;
        function rerollSeed(){
            currentSeed = Math.floor(Math.random()*0x10000);
            let appendGuy = document.createElement('p');
            appendGuy.innerHTML = currentSeed;
            document.querySelector('.inputBox').appendChild(appendGuy);
            
            //this.setAttribute('seed', currentSeed);
        }
        function advanceSeed(){
            currentSeed = (currentSeed*34819)% 0xFFFF;
        }
        //Check if there is a seed, if not, make one. otherwise set seed to max size.
        
        
        
        
        //console.log(pieces)
        function getRandomColor() {
            //console.log((currentSeed).toString(16));
            let rgb = (Math.floor(currentSeed/16)).toString(16);//bottom bit is not used for better pseudo randomization
            //rgb = '0';
            //console.log(rgb + 'random test');
            if(rgb.length<3){
                if(rgb.length<2){
                    rgb = '0'+rgb;
                }
                rgb = '0'+rgb;
            }
            //console.log(rgb + 'random test');
            advanceSeed();
            return '#'+rgb;
            
        }
        function setColors(){
            for (let i in pieces){
                
                color = getRandomColor();
                console.log(color);
                let pieceToRecolor = pieces[i];
                pieceToRecolor.removeAttribute('piece-color');
                pieceToRecolor.setAttribute('piece-color',color);
            
                
            }
        }

        this.el.addEventListener('click', function(){
            rerollSeed();
            //console.log(this.data.seed);
            setColors();
            
        });
        
        let originalSeed = this.data.seed;
        
            if(originalSeed < 0){
                rerollSeed();
            }else{
                currentSeed = originalSeed;
                currentSeed = currentSeed % 0xFFFF;
                var promises = Array(32);
                for(let i =0;i<32;i++){
                    console.log('checkme')
                    promises[i] = new Promise(function(resolve) {
                        pieces[i].addEventListener('model-loaded',resolve,false);
                        
                    });
                }
                Promise.all(promises).then(function(){
                    setColors();
                    
                });
                
                
            
   
            }
        
        
        
    }
});