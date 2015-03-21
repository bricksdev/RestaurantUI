/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone', 
		"js/models/Session", 'text!templates/ProdetailsView.html' ], 
		function($, _, Backbone, LoginView, MainView, RegisterView, Session, ProdetailsTemplate) {

	var RegisterView = Backbone.View.extend({

		initialize : function() {


		},
		events : {

		},
		
		render : function() {
			this.$el.html(ProdetailsTemplate);
			return this;
		}

	});

	return RegisterView;
});