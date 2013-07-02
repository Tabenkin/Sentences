var Canvas = Backbone.View.extend({
	
	render: function(){
	
		
		this.$el.attr('id', 'canvas');

		
		this.width = 500;
		this.height = 500;
		
		$(document.body).append(this.el);		

		var stage = new Kinetic.Stage({
		      container: 'canvas',
		      width: 500,
		      height: 500
	    });
	    
	    this.stage = stage;		

	
	}
	
	
	
})