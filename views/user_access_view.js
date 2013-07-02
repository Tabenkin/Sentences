var User_Access_View = Backbone.View.extend({
	
	template: _.template($("#loginForm").html() , {}),
	render: function(){
		
		this.$el.html(this.template);
		
		
		var div = this.$el;
		var input_container = div.children('#input_container');
		var input = input_container.children('input');
		var h3 = input_container.children('h3');
		
		var BOX_SHADOW = '0px 6px 30px rgba(50, 50, 50, 0.75)';
		var BORDER_RADIUS = '7px';
		
		var CONTAINER_WIDTH = 1000;
		var CONTAINER_HEIGHT = 220;
		
		var CONTAINER_TOP = 200;
		var CONTAINER_LEFT = ($(window).width() / 2) - (CONTAINER_WIDTH / 2);
				
		$(div).addClass('userAccessForm');
		$(div).css({
			
			'position': 'absolute',			
			'left': CONTAINER_LEFT + 'px',
			'top': CONTAINER_TOP + 'px',
			'width' : CONTAINER_WIDTH + 'px',
			'height' : CONTAINER_HEIGHT + 'px',

				
		})

		var INPUT_CONTAINER_OFFSET = 220;
		var INPUT_CONTAINER_WIDTH = $(input).outerWidth(true) + $(h3).outerWidth(true) + 200 + INPUT_CONTAINER_OFFSET;		
		var INPUT_CONTAINER_LEFT = ($(div).outerWidth(true) / 2) - ((INPUT_CONTAINER_WIDTH - INPUT_CONTAINER_OFFSET) / 2.2);
		
	
		$(input_container).css({
			
			'position' : 'absolute',
			'width' : INPUT_CONTAINER_WIDTH + 'px',
			'left' : INPUT_CONTAINER_LEFT + 'px',
			'height' : '65px',
			'top': '65px'
			
		})
		
		var error_message = $(input_container).children("#error_message");
		
		
		$(error_message).css({
			
			'height' : '65px'	
			
			
		})
		
		
		$(h3).css({
			
			'display' : 'inline',
			'margin-right' : '2px'
	
		});
		
		
		
		
		$(input).css({
			
			'display' : 'inline',			
						
		});
		
		

		
		var button = div.children('button');
		
		var BUTTON_WIDTH = 400;		
		var BUTTON_LEFT = ($(div).outerWidth(true) / 2) - (BUTTON_WIDTH / 2);
		
		
		$(button).css({
			
			'display' : 'block',
			'position' : 'absolute',			
			'left' : BUTTON_LEFT + 'px',
			'top' : '120px',
			'width' : BUTTON_WIDTH + 'px'
		});
	
		
		
		
		
	
		$(document.body).append(this.el);
		
		return this;
		
		
	},
	events: {
		
		"click #submit_access_request" : 'validateUser'
		
		
	},
	validateUser: function(){
		
		var thisElement = this;
		var input = this.$el.children("#input_container").children("input");
		var access_code = $(input).val();
	
		$.ajax({
			
			url: '../models/validate_user_access.php',
			async: false,
			type: 'POST',
			data: {
				
				access_code: access_code
				
			},
			success: function(data){
			
				var input_container = $(input).parent();
				var error_message = $(input_container).children("P");
				
				$(error_message).addClass('help-inline error_message');
				$(input).addClass('text-component');
				
				if(data != 1){
					
					
				
					$(input_container).attr('class', 'control-group error');
		
					$(error_message).html(data);
					
				
								
					$(input_container).append(error_message);
					
					
					return false;

				}
				
				
				$(input_container).attr('class', 'control-group success');
				$(error_message).html("Success!");				
				$(thisElement.el).remove();
				
				
				var canvas = new Canvas();
				canvas.render();
				
			}
			
			
			
		})
		
		
		
		
		
		
	}
	
	
	
})