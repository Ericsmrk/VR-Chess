AFRAME.registerComponent('cursor-listener', {
			  init: function () {
				var lastIndex = -1;
				var COLORS = ['red', 'green', 'blue'];

				this.el.addEventListener('mouseenter', function(evt){
					this.setAttribute('material', 'opacity', 0.5);
				})
				this.el.addEventListener('mouseleave', function(evt){
					this.setAttribute('material', 'opacity', 1);
				})
				this.el.addEventListener('click', function (evt) {
				  lastIndex = (lastIndex + 1) % COLORS.length;
				  this.setAttribute('material', 'color', COLORS[lastIndex]);
				  console.log('I was clicked at: ', evt.detail.intersection.point);
				  this.setAttribute('position', {x:0, y:2, z:-3})

				  
				});

			  }
			});