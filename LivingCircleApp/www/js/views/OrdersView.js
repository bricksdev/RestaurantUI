/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone', 'text!templates/OrdersView.html' ], 
		function($, _, Backbone,  OrdersTemplate) {

	var OrdersView = Backbone.View.extend({


		},
		events : {
		},
		
		render : function() {
			this.$el.html(OrdersTemplate);
			return this;
		}

	});

	return OrdersView;
});