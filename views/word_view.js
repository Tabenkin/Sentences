var Word_View = Backbone.View.extend({
	
	initialize: function(word_model){
		
		
		this.word_model = word_model;
		
	},
	render: function(){
		
		$(document.body).append(this.$el);
		
		
		this.$el.html(this.word_model.get('text'));
		this.$el.css('position', 'absolute');
		
		
		this.$el.draggable({
			
			revert: 'invalid',
			revertDuration: 100,
			start:function(){
								
				$(this).css({
				
					'pointer-events': 'none',
					'z-index':9999
					
					
					
				});
				
			},		
			stop: function(){
			
				$(this).css('pointer-events', 'auto');		
			
			}
		
			
			
		});
		
		
		
	}
	
	
})