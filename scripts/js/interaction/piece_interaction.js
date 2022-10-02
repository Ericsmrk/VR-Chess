AFRAME.registerComponent('cursor-listener', {
			  init: function () {
				var lastIndex = -1;
				var COLORS = ['red', 'green', 'blue'];
				var POSITIONz = -2;
				var piece_id = "";
				var move_id = "";

				this.el.addEventListener('mouseenter', function(evt){
					this.setAttribute('material', 'opacity', 0.5);
				})
				this.el.addEventListener('mouseleave', function(evt){
					this.setAttribute('material', 'opacity', 1);
				})
				this.el.addEventListener('click', function (evt) {
				 if(piece_id != ""){
					move_id = this.id;
					alert(move_id);
					if(piece_id.charAt(0) == move_id.charAt(0)){
						
					}
				 }
				 else{
				 var pos = window.prompt("Enter square to move to");		//Hopefully don't need this.
				  piece_id = this.id;
				  alert(piece_id);
				 
				}
			    })
				
				
			  }
		});