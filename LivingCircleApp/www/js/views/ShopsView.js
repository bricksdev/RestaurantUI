/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/ShopsView.html' ], 
		function($, _, Backbone,  ShopsTemplate) {

	var ShopsView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(ShopsTemplate);
			return this;
		}

	});

	return ShopsView;
});