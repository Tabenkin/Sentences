var Preposition = Part_Of_Speech.extend({
	initialize: function(stage){
		
		this.constructor.__super__.initialize.apply(this, [stage]);
		
	},		
	defaults:{
		
		text: 'Preposition',
		
	},
	get_x_y: function(){
					
			var model = this.get('model');
			var parent = model.get('parent');
					
			var parent_x = parent.get('x');
			var parent_y = parent.get('y');
			var parent_width = parent.get('width');
					
			y = parent_width * Math.sin(50 * Math.PI / 180);
			x = Math.sqrt(Math.pow(parent_width, 2) - Math.pow(y, 2));
	
			model.set('x', parent_x + x);
			model.set('y', parent_y + y);
	}		
				
				
	
	
	
	
})