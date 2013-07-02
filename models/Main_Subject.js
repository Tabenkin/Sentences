var Main_Subject = Part_Of_Speech.extend({
	initialize: function(stage){
		
		this.constructor.__super__.initialize.apply(this, [stage]);
		
	},		
	defaults:{
		
		text: 'Main_Subject',

		
	},	
	get_x_y: function(){
									
		var model = this.get('model');
		var width = model.get('width');
					
					
		model.set('x', (500 / 2) - width);
		model.set('y', 70);
					
	}
	

	
	
	
	
})

