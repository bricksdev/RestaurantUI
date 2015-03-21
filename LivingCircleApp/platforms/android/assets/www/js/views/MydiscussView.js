/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone','text!templates/MydiscussView.html' ], 
		function($, _, Backbone, MydiscussTemplate) {

	var MydiscussView = Backbone.View.extend({


		},
		events : {
		},
		
		render : function() {
			this.$el.html(MydiscussTemplate);
			return this;
		}

	});

	return MydiscussView;
});