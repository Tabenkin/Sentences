var Subject_View = Backbone.View.extend({
	
	initialize: function(){
		
		this.font = '18pt Calibri';
		this.font_color = "black";
		this.canvas = document.createElement("CANVAS");
		

		
		
	},		
	defaults:{
			
		node_model: ''
		
		
	},
	render: function(){
		

		var canvas = this.canvas;
		this.canvas.width = 500;
		this.canvas.height = 500;
			
		$(canvas).css({
			
			'position':'absolute',
			'top' : '0px',
			'left' : '0px'	
			
		})
		
		this.mainCanvas.$el.append(canvas);
		
		

		var part_speech = {'adj' : {deg:'30', buffer: 70, y_offset: 30}, 'noun' : {deg:'0', buffer: 50, y_offset: 0}};
		
		var TEXT_BUFF_Y = -2;
		var TEXT_BUFF_X = 20;
		var TEXT_BUFF_SPACE = 40;
		

		var ctx = canvas.getContext('2d');
		ctx.font = '14pt Arial';


		ctx.save();
			
		var model = this.model
		var text = model.get('text');
		var part = model.get('part');

		var PART_OF_SPEECH = part_speech[part];
		var degrees = PART_OF_SPEECH.deg;

		
		var text_width = ctx.measureText(text).width;
		model.generate_width(text_width);
		
		model.set('x', (canvas.width / 2) - model.get('width'))
		
		
		var x = model.get('x');	
		var x2 = canvas.width / 2;
		var y = model.get('y');
		
		var text_x = x + TEXT_BUFF_X;
		var text_y = y + TEXT_BUFF_Y;
		
		
		ctx.save();
		
		ctx.translate(x, y);
		ctx.rotate(degrees * Math.PI / 180);
		ctx.translate(-x, -y);
		
		ctx.restore();		
	
		
		ctx.fillText(text, text_x, text_y);
		
		ctx.moveTo(x, y);
		ctx.lineTo(x2, y);
		ctx.stroke();
		
		
		ctx.restore();
		
		
	},
	update: function(){
		
		var canvas = this.$el.children();
		
		this.render(canvas);
		
	
	}
	
	
});