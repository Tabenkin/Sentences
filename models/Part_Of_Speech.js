var Part_Of_Speech = Backbone.Model.extend({
	
	initialize:function(stage){
	
	
		this.set('text_buff_x', 30);
		this.set('text_buff_y', -2);
		
		
		var txt = new Kinetic.Text({
	        fontSize: 18,
	        fontFamily: 'Arial',
	        fill: 'black'
	    });
	    
	    
	    this.set('kText', txt);
		
		var primary_line = new Kinetic.Line({
	        stroke: 'black',
	        strokeWidth: 1,

	    });
		
		this.set('primary_line', primary_line);
		
		
		
		var text_action = new Kinetic.Rect({
			
			fill:'white',
			stroke: 'white',
			strokeWidth: 1
			
					
		});
		this.set('text_action', text_action);
		
		
		var pending_action  = new Kinetic.Rect({
			
			fill:'white',
			stroke: 'white',
			strokeWidth: 1			
						
		});
		this.set('pending_action', pending_action);
		
		

		var layer = new Kinetic.Layer();
		layer.add(txt);
		layer.add(primary_line);
		layer.add(text_action);
		layer.add(pending_action);
				
		this.set('layer', layer);	
		this.set('stage', stage.s);
		
		
		
		//pop over stuff
		//Will probably put this into its own class
		var popover = document.createElement('DIV');
		var arrow = document.createElement('DIV');
		$(arrow).addClass('arrow');
		
		$(popover).append(arrow);		
		$(document.body).append(popover);

		
		this.set('popover', popover);
		
		
		
				
		
	},
	set_kText_text: function(text){
		
		kText = this.get('kText');		
		kText.setText(text);
		
		model = this.get('model');
		
		text_width = kText.getWidth();
		model.generate_width(text_width);
		
		
	},
	render_node: function(){

																
		var model = this.get('model');
		var x = model.get('x');
		var y = model.get('y');
		var x2 = x + model.get('width');

		var text_x = x;
		var text_y = y;
					
		this.draw_text(text_x, text_y);
		
		this.draw_line(x, y, x2, y);
	    	    
	    var stage = this.get('stage');
	    var layer = this.get('layer');
	    stage.add(layer);
	    
	
	},
	draw_text: function(x, y){
		
		var kText = this.get('kText');																
		kText.setX(x);
		kText.setY(y);
		kText.setOffset({x: (-1 * this.get('text_buff_x')), y: kText.getHeight()})	

	},
	draw_line: function(x, y, x2, y2){
		

		var primary_line = this.get('primary_line');	    
	    primary_line.setPoints([x,y, x2, y2]);
	    
		
	},		
	render_actions: function(){
	
		var text_action = this.get('text_action');
		var pending_action = this.get('pending_action');

		
		var model = this.get('model');
		var x = model.get('x');
		var y = model.get('y');
		var width = model.get('width');
		var height = 20;
		
		
		text_action.setX(x);
		text_action.setY(y);
		text_action.setWidth(width);
		text_action.setHeight(height);
		text_action.setOffset({ y: height + 2 });
		
		
		var pof = this;
		
		text_action.on('mousemove', function() {
			
			
			var popover = pof.get('popover');
			$(popover).addClass('popover top');
			
			var pop_height = 40;
			var pop_width = 100;
			
			var pop_x = x + (width / 2) - (pop_width / 2) + 500;
			var pop_y = y - height - pop_height + 100;
			
			
			$(popover).css({
				
				'display' : 'block',
				'position' : 'absolute',				
				'left' : pop_x,
				'top' : pop_y,
				'width': pop_width,
				'height' : pop_height,

	
			})
			
			
			
			
						      
			      
		});
		
		/*
		text_action.on('mouseout', function(){
			
			var popover = pof.get('popover');
			
			$(popover).css({
				
				'display' : 'none'	
				
			})
			
			
			
		});
*/
		
		pending_action.setX(x);
		pending_action.setY(y);
		pending_action.setWidth(width);
		pending_action.setHeight(height);
		pending_action.setOffset({ y: -2 });
		

		var stage = this.get('stage');
		var layer = this.get('layer');
				
		stage.add(layer);
		
							
	}	
		
	
})