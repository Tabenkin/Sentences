var CTX_Drawer = Backbone.Model.extend({
	
	draw_horizontal_line: function(ctx, x1, x2, y){
		
		ctx.moveTo(x1, y);
		ctx.lineTo(x2, y);
		ctx.stroke();
		
	},
	draw_vertical_line: function(ctx, x1, y1, y2){
		
		ctx.moveTo(x1, y1);
		ctx.lineTo(x1, y2);
		ctx.stroke();
			
	},
	rotate: function(ctx, x, y, degrees){
		
		ctx.save();
		
		ctx.translate(x, y);
		ctx.rotate(degrees * Math.PI / 180);
		ctx.translate(-x, -y);
				
		
	}

	
	
	
	
})