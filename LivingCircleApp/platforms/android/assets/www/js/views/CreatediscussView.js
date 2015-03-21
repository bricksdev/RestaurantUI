/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/CreatediscussView.html' ], 
		function($, _, Backbone, CreatediscussTemplate) {

	var CreatediscussView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(CreatediscussTemplate);
			return this;
		}

	});

	return CreatediscussView;
});