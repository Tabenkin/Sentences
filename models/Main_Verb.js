var Main_Verb = Part_Of_Speech.extend({
	initialize: function(stage){
		
		this.constructor.__super__.initialize.apply(this, [stage]);
		
		var secondary_line = new Kinetic.Line({
	        stroke: 'black',
	        strokeWidth: 1,

	    });
		
		this.set('secondary_line', secondary_line);		
		this.get('layer').add(secondary_line);
		
	},	
	defaults:{
		
		text: 'Main_Verb',
		
	},
	get_x_y: function(){
				
		var model = this.get('model');
					
		model.set('x', (500 / 2));
		model.set('y', 70);
		
			
				
	},
	render_node: function(){
					
								
		var model = this.get('model');
		var x = model.get('x');					
		var x2 = x + model.get('width');					
		var y = model.get('y');
		var y2 = y - 20;
	
		var text_x = x;
		var text_y = y;
		var text = model.get('text');																							
					
		this.draw_text(text_x, text_y);					
							
		this.draw_line(x, y, x2, y);
															
										
		var secondary_line = this.get('secondary_line');	    
	    secondary_line.setPoints([x,y, x, y2]);					
					
						
					
		var stage = this.get('stage');
	    var layer = this.get('layer');
	    stage.add(layer);			
					
	}








})