/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/CreateshopView.html' ], 
		function($, _, Backbone, CreateshopTemplate) {

	var CreateshopView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(CreateshopTemplate);
			return this;
		}

	});

	return CreateshopView;
});