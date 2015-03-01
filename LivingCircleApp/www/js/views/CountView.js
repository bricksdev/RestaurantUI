/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define([ 'jquery', 'underscore', 'Backbone',   'text!templates/CountView.html' ], 
		function($, _, Backbone,  CountTemplate) {

	var CountView = Backbone.View.extend({

		initialize : function() {

		
		},
		events : {

		},
		
		render : function() {
			this.$el.html(CountTemplate);
			return this;
		},
		addSpecialClass:function(){
			
			$("#btnCount").addClass("ui-btn-active");
		}
		


	});

	return CountView;
});