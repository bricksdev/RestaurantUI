/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/ShopDetailsView.html' ], 
		function($, _, Backbone, ShopDetailsTemplate) {

	var ShopDetailsView = Backbone.View.extend({

		initialize : function() {


		},
		events : {
		},
		
		render : function() {
			this.$el.html(ShopDetailsTemplate);
			return this;
		}

	});

	return ShopDetailsView;
});