AFRAME.registerComponent('color-changer',{
    schema:{
        option:{type:'string',default:'random'},
        seed:{type:'number',default:-1}
    },
    init:function(){
        
        const pieces = document.querySelectorAll('.chessguy');

        var currentSeed = this.data.seed;
        currentSeed = currentSeed % 0x10000;
        var currentOption = this.data.option;

        function rerollSeed(){
            currentSeed = Math.floor(Math.random()*0x10000);
            
            let seedForm = document.getElementById('colorSeed')
            if(seedForm){
                seedForm.value=currentSeed;
            }
        }
        function getRandomColor(c) {
            let rawColor=Math.floor(currentSeed/16)
            function weightColors( col){
                
                x=parseInt(col, 16);
                
                if(c=='w'){
                    x+=3;
                }else if(c=='b'){
                    x-=1;
                }
                //if char does not equal w or b, do not darken or lighten.
                if(x>0xF){
                    x = 0xF;
                }
                else if(x<0){
                    x=0;
                }
                return x;
            }
            
            let colorString = rawColor.toString();
            if(colorString.length<3){
                colorString='0'+ colorString;
                if(colorString.length<2){
                    colorString='0'+ colorString;
                    
                }
            }

            let weightedR=weightColors(colorString[0]);
            let weightedG=weightColors(colorString[1]);
            let weightedB=weightColors(colorString[2]);
            rawColor=(weightedR*0x100)+(weightedG*0x10)+weightedB
            
            let rgb = rawColor.toString(16);//bottom bit is only used for increased number of seeds for pseudo randomization
            //rgb = '0';
            //console.log(rgb + 'random test');
            if(rgb.length<3){
                if(rgb.length<2){
                    rgb = '0'+rgb;
                }
                rgb = '0'+rgb;
            }
            //console.log(rgb + 'random test');
            currentSeed = (currentSeed*69737)% 0x10000;
            return '#'+rgb;
        }
        
        
        function randomColors(){
            colorW = getRandomColor('w');
            colorB = getRandomColor('b');
            test = pieces[i].id;
            for(let i in pieces){
                if(pieces[i].id[0]=='w'){//Yes, this throws an error, but the function still works. No time to figure out why.
                    pieces[i].removeAttribute('piece-color');
                    pieces[i].setAttribute('piece-color',colorW);
                }else{
                    pieces[i].removeAttribute('piece-color');
                    pieces[i].setAttribute('piece-color',colorB);
                }
            }
        }

        function superRandomColors(){
            for (let i in pieces){
                let color = getRandomColor(pieces[i].id[0]);
                //console.log(color);
                pieces[i].removeAttribute('piece-color');//This throws an error, but only once per function call, but the function runs as expected. God knows why
                pieces[i].setAttribute('piece-color',color);   
            }
        }

        this.el.addEventListener('click', function(){
            rerollSeed();
            //console.log(this.data.seed);
            colorize();
            
        });
        
        
        //Check if there is a seed, if not, make one. otherwise constrain seed to max size.
        
        function colorize(){
            if(currentOption == 'random'){
                if(currentSeed < 0){
                    rerollSeed();
                }else{
                    randomColors();
                }
            }else if(currentOption == 'super-random'){
                if(currentSeed < 0){
                    rerollSeed();
                }else{
                    superRandomColors();
                }
            }
            
        }
        
        
        var promises = Array(32);
            for(let i =0;i<32;i++){
                promises[i] = new Promise(function(resolve) {
                    pieces[i].addEventListener('model-loaded',resolve,false);
                    
                });
            }
        Promise.all(promises).then(function(){
            colorize();
            
        });
        
        
    }
});
