var Adj = Part_Of_Speech.extend({
	initialize: function(stage){

		this.constructor.__super__.initialize.apply(this, [stage]);
		this.set('degrees', 50);
		
		var rotation = 50 * Math.PI / 180;
		this.get('kText').rotate(rotation);
		
	},			
	defaults:{
		
		text: 'Adj',
		
	},	
	get_x_y: function(){
										
		var model = this.get('model');
		var parent = model.get('parent');
					
		var index_of = model.get('indexOf');
		var child_separation = parent.get('child_separation');					
					
		var parent_x = parent.get('x');
		var parent_y = parent.get('y');
					
		var x = parent_x + (index_of * child_separation);
		var y = parent_y;
										
		model.set('x', x);
		model.set('y', y);
	
					
	},
	render_node: function(){
										
		var model = this.get('model');
		var width = model.get('width');
		
		var degrees = this.get('degrees');
		
		var x = model.get('x');
		var y = model.get('y');
		
		
		var b = width * Math.sin( degrees * Math.PI / 180   );
		var a = Math.sqrt( Math.pow(width, 2)  -  Math.pow(b, 2)  )
		
		var x2 = x + a;
		var y2 = y + b;

		var text_x = x;
		var text_y = y;
						
		var text = model.get('text');									
								
													
		this.draw_text(text_x, text_y);
		
					
		this.draw_line(x, y, x2, y2)

	    var stage = this.get('stage');
	    var layer = this.get('layer')	    
	    stage.add(layer);

					
					
	},
	render_actions: function(){
		
		


	}		

	
	
})