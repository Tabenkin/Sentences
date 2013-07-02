var Enter_Sentence = Backbone.View.extend({
	
	template: _.template($("#enterSentenceForm").html(), {} ),
	render: function(){
					
		this.$el.html( this.template );
		
		
		$(document.body).append(this.el);
		return this;
	
		
	},
	events:{
		
		'click #submit_sentence' : 'validateSentence'
		
		
	},
	validateSentence: function(){
		
		var sentence_input = $("#sentence_input");
				
		if(!$(sentence_input).val().trim()){
			
			$(sentence_input).val("");
			alert('You must enter a sentence!');
			
			return;	
		}
		
		
		var sentence = $(sentence_input).val();
		var words_text = new Array();
		
		words_text = sentence.split(" ");
		
		$(words_text).each(function(index){
		
			var punctuation = this.match(/[\.,\/!\\;:=\`]/g)
		
			
			if(punctuation){
				
				console.log(punctuation);
				
			}
		
		
		
		});
		
		
		
	}
	
})