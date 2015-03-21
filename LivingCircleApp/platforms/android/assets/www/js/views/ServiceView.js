/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
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