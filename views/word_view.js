var Word_View = Backbone.View.extend({
	
	initialize: function(word_model){
		
		
		this.word_model = word_model;
		
	},
	render: function(){
		
		$(document.body).append(this.$el);
		
		
		this.$el.html(this.word_model.get('text'));
		this.$el.css('position', 'absolute');
		
		
		this.$el.draggable();
		
		
		
	}
	
	
})