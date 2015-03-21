/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/HistoryappointsView.html' ], 
		function($, _, Backbone,  HistoryappointsTemplate) {

	var HistoryappointsView = Backbone.View.extend({

		initialize : function() {


		},
		events : {
		},
		
		render : function() {
			this.$el.html(HistoryappointsTemplate);
			return this;
		}

	});

	return HistoryappointsView;
});