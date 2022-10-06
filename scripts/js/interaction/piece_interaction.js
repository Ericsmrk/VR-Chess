
AFRAME.registerComponent('cursor-listener', {
			  init: function () {
				//schema: {}, //THIS STORES DATA!!
				var lastIndex = -1;
				var COLORS = ['red', 'green', 'blue'];
				var POSITIONS = [1, 2, 3]
				var posx = 0;
				var posy = 0;
				var objID = "NULL";
				var beforePos = "0";
/*
				function objectToPos(posObject){
					return posObject.x + " " + posObject.y + " " + posObject.z;
				}*/

				

				this.el.addEventListener('mouseenter', function(evt){
					this.setAttribute('material', 'opacity', 0.5);
				})
				this.el.addEventListener('mouseleave', function(evt){
					this.setAttribute('material', 'opacity', 1);
				})
				rook_w_r.addEventListener('mousedown', function (obj) {
					
					
					
					
				  console.log("Hello?"); //only triggers console.log once<----not true, infinitely loops 'alert'
				 
				  
				  this.addEventListener('mouseup', function(evt) {
					console.log("Hi");
					objID = this.id;
					console.log(objID);
					if(objID == "rook_w_r"){
					
					/*
					var pos = this.getAttribute('position');
					pos = objectToPos(pos);
					console.log(beforePos);
					rook_w_r.setAttribute('animation', `property: position; from ${beforePos} to ${targetPos}; dur:`);
					*/
					rook_w_r.setAttribute('position', {x:2, y:2, z:-2});}
				  })
				 
				  				

				  
				},)
				

				

			  },/*
			  update: function() {
					this.el.addEventListener('click', function(evt){
						alert("What happened?" + this.id);
						posx = getAttribute(this.position.x);
						alert(posx);

					})
			  }
			*/
			});