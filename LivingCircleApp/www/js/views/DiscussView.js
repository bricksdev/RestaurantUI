/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone', 'text!templates/DiscussView.html' ], 
		function($, _, Backbone,  DiscussTemplate) {

	var DiscussView = Backbone.View.extend({

		initialize : function() {


		},
		events : {
		},
		
		render : function() {
			this.$el.html(DiscussTemplate);
			return this;
		}

	});

	return DiscussView;
});