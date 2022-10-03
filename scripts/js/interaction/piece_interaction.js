AFRAME.registerComponent('cursor-listener', {
	
				

			  init: function () {
				
				var piece_id = "";
				var move_id = "";
				this.el.addEventListener('mouseenter', function(evt){
					this.setAttribute('material', 'opacity', 0.5);
				})
				this.el.addEventListener('mouseleave', function(evt){
					this.setAttribute('material', 'opacity', 1);
				})
				D3.addEventListener('click', function (evt){
					
					pawnw_d.setAttribute('position', {x:0, y:1.5, z:-2});
					
				})/*
				this.el.addEventListener('click', function(evt) {
					let input = this.id;
					let first2 = input.charAt(0) + input.charAt(1);

					if(input.charAt(3)){
						piece_id = this.id;
						alert(piece_id);
					}
					else{
						move_id = this.id;
						alert(move_id);
						alert(piece_id);
					}
					if(piece_id != "" && move_id != ""){
						alert("move!");
						if(piece_id == "pawnw_d"){
							pawnw_d.setAttribute('position', {x:0, y:2.5, z:-2});
						}
					}/*
					else{
						alert("Nope!");
					}


					
					

				}, {once:true})
				*/
				
				
			  }
		});
/*
		if(move_id != "0"){
			piece_id.setAttribute('position', {x:0, y:1.5, z:-2});
		}
*/

