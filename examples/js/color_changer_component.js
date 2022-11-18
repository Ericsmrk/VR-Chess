AFRAME.registerComponent('color-changer',{
    schema:{
        option:{type:'string',default:'random'},
        seed:{type:'number',default:-1},
        onload:{default:false},
        selector:{type:'string',default:'none'},
        gradientW:{type:'string', default:'000000222222'},
        gradientB:{type:'string', default:'FFFFFFEEEEEE'}
    },
    options:{
        'basic':{wColor:'#F0F0E0', bColor:'#202030'},
        'ash':{wColor:'#BBB', bColor:'#555'},
        'silver-gold':{wColor:'#E0E0E7', bColor:'#E7B53B'},
        'red-blu':{wColor:'#B8383B', bColor:'#5885A2'}
    },
    init:function(){ //Rewrite to an update-based function instead later
        
        const pieces = document.querySelectorAll('.chessguy');
        var originalSeed = this.data.seed;
        var currentSeed = originalSeed;
        currentSeed = currentSeed % 0x10000;
        var currentOption = this.data.option;   //Programs haven't liked directly checking schema data, unfortunately there's no time to figure out why
        var optionData = this.options;   //This component is just for buttons anyway, so it shouldn't be that big of an issue
        var runOnLoad = this.data.onload;       //probably since this.data is different when going down a scope
        var gradW = this.data.gradientW;
        var gradB = this.data.gradientB;
        var currentSelector = this.data.selector;

        function rerollSeed(){
            originalSeed = Math.floor(Math.random()*0x10000);
            currentSeed = originalSeed;
            
        }
        function getRandomColor(c) {
            let rawColor=Math.floor(currentSeed/16)
            function weightColors(col){
                
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
            //test = pieces[i].id;
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

        var x = document.querySelector('#'+ currentSelector);
        console.log(currentOption)
        if(x){
            x.addEventListener('click', function(){
                rerollSeed();
                //console.log(this.data.seed);
                colorize();
                
            });
        }
        
        
        
        //Check if there is a seed, if not, make one. otherwise constrain seed to max size.
        
        function colorize(){
            let seedForm = document.querySelector('#colorSeed');
            let typeForm = document.querySelector('#colorType');
            let gradWForm = document.querySelector('#gradW');
            let gradBForm = document.querySelector('#gradB');
            if(seedForm){
                seedForm.value=originalSeed;
            }if(typeForm){
                typeForm.value=currentOption;
            }if(gradWForm){
                gradWForm.value=gradW;
            }if(gradBForm){
                gradBForm.value=gradB;
            }

            

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
            }else if(currentOption == 'gradient'){
                let arrW = Array(8);
                let arrB = Array(8);
                let wColor1 = Array(3);
                let wColor2 = Array(3);
                let bColor1 = Array(3);
                let bColor2 = Array(3);
                wColor1[0] = parseInt(gradW.substr(0,2),16);
                wColor2[0] = parseInt(gradW.substr(6,2),16);
                wColor1[1] = parseInt(gradW.substr(2,2),16);
                wColor2[1] = parseInt(gradW.substr(8,2),16);
                wColor1[2] = parseInt(gradW.substr(4,2),16);
                wColor2[2] = parseInt(gradW.substr(10,2),16);

                bColor1[0] = parseInt(gradB.substr(0,2),16);
                bColor2[0] = parseInt(gradB.substr(6,2),16);
                bColor1[1] = parseInt(gradB.substr(2,2),16);
                bColor2[1] = parseInt(gradB.substr(8,2),16);
                bColor1[2] = parseInt(gradB.substr(4,2),16);
                bColor2[2] = parseInt(gradB.substr(10,2),16);
            
                for(let i = 0;i<8;i++){
                    arrW[i] = '#';
                    for(let j = 0;j<3;j++){
                        let xolor = (Math.round(((7 - i) * wColor1[j] + (i * wColor2[j])) / 7)).toString(16);
                        if(xolor.length<2){
                            xolor = '0'+ xolor;
                        }
                        arrW[i]+=xolor;
                        
                          
                    }
                }
                for(let i = 0;i<8;i++){
                    arrB[i] = '#';
                    for(let j = 0;j<3;j++){
                        let xolor = (Math.round(((7 - i) * bColor1[j] + (i * bColor2[j])) / 7)).toString(16);
                        if(xolor.length<2){
                            xolor = '0'+ xolor;
                        }
                        arrB[i]+=xolor;
                          
                    }
                }
                for(let i in pieces){
                    y = pieces[i].getAttribute('boardpos');
                    if(pieces[i].id[0]=='w'){//Yes, this throws an error, but the function still works. No time to figure out why.
                        pieces[i].removeAttribute('piece-color');
                        pieces[i].setAttribute('piece-color',arrW[y.charCodeAt(0)-97]);
                    }else{
                        pieces[i].removeAttribute('piece-color');
                        pieces[i].setAttribute('piece-color',arrB[y.charCodeAt(0)-97]);
                    }
                }
            }else{
                colorW = optionData[currentOption].wColor;
                colorB = optionData[currentOption].bColor;
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
            
            
            
        }
        
        if(runOnLoad){
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
        
        
        
    }
});
