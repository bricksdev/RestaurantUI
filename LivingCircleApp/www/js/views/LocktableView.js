/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/LocktableView.html' ], 
		function($, _, Backbone, RegisterTemplate) {

	var LocktableView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(LocktableTemplate);
			return this;
		}
	});

	return LocktableView;
});