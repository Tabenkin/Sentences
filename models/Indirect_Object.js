var Indirect_Object = Part_Of_Speech.extend({
	
		initialize: function(stage){
		
		this.constructor.__super__.initialize.apply(this, [stage]);
		this.set('degrees', 50);
		this.set('width', 80);
		
		
		var secondary_text = new Kinetic.Text({
			text: " ( X ) ",
	        fontSize: 18,
	        fontFamily: 'Arial',
	        fill: 'black'
	    });	        
	    this.set('secondary_text', secondary_text);
	    
	    	    
	    var secondary_line = new Kinetic.Line({
	        stroke: 'black',
	        strokeWidth: 1,

	    });
		this.set('secondary_line', secondary_line);		
		
		
		var rotation = 50 * Math.PI / 180;
		this.get('secondary_text').rotate(rotation);	
		
		
		this.get('layer').add(secondary_text);		
		this.get('layer').add(secondary_line);

		
	
	},			
	defaults:{
		
		text: 'Indirect_Object'
		
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
		var width2 = this.get('width');
		
		var degrees = this.get('degrees');
		
		var x = model.get('x');
		var y = model.get('y');
		
		
		var b = width2 * Math.sin( degrees * Math.PI / 180   );
		var a = Math.sqrt( Math.pow(width2, 2)  -  Math.pow(b, 2)  )
		
		var x2 = x + a;
		var y2 = y + b;

		var text_x = x;
		var text_y = y;
						
		var text = model.get('text');									
									
		
					
		this.draw_secondary_text(text_x, text_y);
	

	
		this.draw_line(x, y, x2, y2);
		
		
		var x3 = x2 + width;

		this.draw_text(x2, y2);

		var secondary_line = this.get('secondary_line');	    
	    secondary_line.setPoints([x2,y2, x3, y2]);		
		
	    var stage = this.get('stage');
	    var layer = this.get('layer')	    
	    stage.add(layer);
					
					
	},
	draw_secondary_text: function(x, y){
		
		var kText = this.get('secondary_text');																
		kText.setX(x);
		kText.setY(y);
		kText.setOffset({x: (-1 * this.get('text_buff_x')), y: kText.getHeight()})	

	}
	
	
	
	
})