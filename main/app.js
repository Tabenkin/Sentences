$(document).ready(function(){
	
	
//	var enter_sentence = new Enter_Sentence();
//	enter_sentence.render();

	
//	var userAccessView = new User_Access_View()
//	userAccessView.render();
	
	var canvas = new Canvas()
	canvas.render();	
	var theCanvas = canvas;
	var stage = canvas.stage;
	

	
	var node_model2 = new Node_Model({part : new Adj({s: stage}), text: "the", canvas: theCanvas});
	var node_model3 = new Node_Model({part : new Adj({s: stage}), text: "at", canvas: theCanvas});
	var node_model4 = new Node_Model({part : new Adj({s: stage}), text: "loud", canvas: theCanvas});
	var main_object = new Node_Model({part : new Main_Subject({s: stage}), text: "", canvas: theCanvas});	
	var main_verb = new Node_Model({part : new Main_Verb({s: stage}), text : "", canvas: theCanvas});
	var preposition = new Node_Model({part: new Preposition({s: stage}), text: "mailman", canvas: theCanvas});
	
	var main_sentence_object = new Node_View();
	main_object.add_view(main_sentence_object);	
	main_sentence_object.render();
	
	
	var main_sentence_verb = new Node_View();
	main_verb.add_view(main_sentence_verb);
	
	var x = (theCanvas.width / 2);
	main_sentence_verb.render();
	

	//var adj2 = new Node_View();
	//node_model3.add_view(adj2);
	//node_model3.add_parent(main_object);
	
	
	//var prep = new Node_View();
	//preposition.add_view(prep);
	//preposition.add_parent(node_model3);
	
		
	//var adj1 = new Node_View();
	//node_model2.add_view(adj1);
	//node_model2.add_parent(preposition);
	
		
	//var adj3 = new Node_View();
	//node_model4.add_view(adj3);
	//node_model4.add_parent(main_object);

	
	
		
	var word = new Word('Rex');
	var word_view = new Word_View(word);
	word_view.render();
	


	
	
})