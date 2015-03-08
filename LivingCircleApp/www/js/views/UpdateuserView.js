/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone',  'text!templates/UpdateuserView.html' ], 
		function($, _, Backbone,  RegisterTemplate) {

	var UpdateuserView = Backbone.View.extend({

		initialize : function() {


		},
		events : {
			// 'pageshow':'this_pageshowHandler',
			'click #btnSave' : 'btnSave_clickHandler',
			'click #btnRegister' : 'btnRegister_clickHandler',
			'click #btnBack' : 'btnBack_clickHandler'
		},
		
		render : function() {
			this.$el.html(UpdateuserTemplate);
			return this;
		}
	});

	return UpdateuserView;
});