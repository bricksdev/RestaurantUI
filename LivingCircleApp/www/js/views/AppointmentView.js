/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone', 'text!templates/AppointmentView.html' ], 
		function($, _, Backbone,  AppointmentTemplate) {

	var AppointmentView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
		},
		
		render : function() {
			this.$el.html(AppointmentTemplate);
			return this;
		}

	});

	return AppointmentView;
});