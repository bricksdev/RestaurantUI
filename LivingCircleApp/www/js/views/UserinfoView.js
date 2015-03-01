/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define([ 'jquery', 'underscore', 'Backbone', 'text!templates/UserinfoView.html' ], 
		function($, _, Backbone,  UserinfoTemplate) {

	var UserinfoView = Backbone.View.extend({

		initialize : function() {


		},
		events : {
		
		},
		
		render : function() {
			this.$el.html(UserinfoTemplate);
			return this;
		},
		addSpecialClass:function(){
			
			$("#btnUser").addClass("ui-btn-active");
		}


	});

	return UserinfoView;
});