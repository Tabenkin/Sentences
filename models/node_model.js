var Node_Model = Backbone.Model.extend({
	
	initialize: function(obj){
		
		this.set('CHILD_OFFSET', 40);
		this.set('TEXT_BUFF_SPACE', 40);
		
		this.set('part', obj.part);
		this.set('text', obj.text);		
		this.set('width', 100);
		this.set('child_nodes', new Array());
		this.set('main_canvas', obj.canvas);
						
		obj.part.set('stage', obj.canvas.stage);				
						
				
		obj.part.set('model', this);
		
		
		this.on('change:text', function(){
		
			this.update_node();
					
		});
		
		this.on('change:child_nodes', function(){
			
			this.update_node();
			
		});
		
		
	},
	defaults:{
		
		x: '',
		y: '',
		text: '',
		width: '100',
		parent: '',
		child_nodes: '',
		indexOf: 0,
		child_separation: 0

			
	},
	generate_width: function(text_width){
		
		var num_children = this.get('child_nodes').length;
		var width = text_width + this.get('TEXT_BUFF_SPACE') + (num_children * this.get('CHILD_OFFSET'));
		
		this.set('width', width);	
		
	},
	add_view: function(view){
	
		this.set('view', view)		
		view.model = this;
	
	},
	add_child: function(node){
		
		var children = this.get('child_nodes');		
		children.push(node);
	

		this.update_node();
		
			
	},
	add_parent: function(node){
		
		
		this.set('parent', node);		
		node.add_child(this);
		

	},
	update_node: function(){
	
	
		var view = this.get('view');
		view.render();
		
		this.update_children();
		
	},
	update_children: function(){
		
		var parent = this;
		var children = this.get('child_nodes');		
		var num_children = children.length;
		var child_separation = this.get('width') / num_children; 
		
		this.set('child_separation', child_separation);
		
		var child_x = parent.get('x');
		
		$(children).each(function(index){
			
			this.set('indexOf', index);
					
			this.set('x', child_x);
			child_x += child_separation;
			
			this.set('y', parent.get('y'));			
			this.get('view').render();
				
				
			this.update_children();	

		
		});		
		
		
	}
	
	
});