/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
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