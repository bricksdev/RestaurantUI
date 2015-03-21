/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/OrderView.html' ], 
		function($, _, Backbone, OrderTemplate) {

	var OrderView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(OrderTemplate);
			return this;
		}

	});

	return OrderView;
});