/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define(['jquery', 'underscore', 'Backbone', 'text!templates/ServiceView.html' ], 
		function($, _, Backbone, ServiceTemplate) {
	
	var ServiceView = Backbone.View.extend({
		
		
		initialize : function() {
			
			
		},
		events : {

		},
		
		render : function() {
			this.$el.html(ServiceTemplate);
			return this;
		},
		addSpecialClass:function(){
			
			$("#btnService").addClass("ui-btn-active");
		}
		

	});

	return ServiceView;
});