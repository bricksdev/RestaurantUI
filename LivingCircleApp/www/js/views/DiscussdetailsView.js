/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/DiscussdetailsView.html' ], 
		function($, _, Backbone, DiscussdetailsTemplate) {

	var DiscussdetailsView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(DiscussdetailsTemplate);
			return this;
		}

	});

	return DiscussdetailsView;
});