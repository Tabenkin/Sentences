var Node_View = Backbone.View.extend({
	
	initialize: function(){
		
		

	},		
	defaults:{
			
		node_model: ''
		
		
	},
	render: function(){
		
		var model = this.model
		var text = model.get('text');
								
		var PART_OF_SPEECH = model.get('part');
		PART_OF_SPEECH.set_kText_text(text);
		PART_OF_SPEECH.get_x_y();
		PART_OF_SPEECH.render_node();
		PART_OF_SPEECH.render_actions();
		


	}
	
	
});