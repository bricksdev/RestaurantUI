/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
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