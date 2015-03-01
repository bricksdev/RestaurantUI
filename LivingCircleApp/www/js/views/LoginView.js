/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define([ 'jquery', 'underscore', 'Backbone', 'Bricksutil',
		"js/models/Session",  'text!templates/LoginView.html' ], 
		function($, _, Backbone, Bricksutil, Session,  LoginTemplate) {

	var LoginView = Backbone.View.extend({

		initialize : function() {

		},
		events : {
			// 'pageshow':'this_pageshowHandler',
			'click #btnSave' : 'btnSave_clickHandler'
		},
		
		render : function() {
			this.$el.html(LoginTemplate);
			return this;
		},

		
		btnSave_clickHandler : function() {
			
			var flag = $('#savedFlag').checked;

			Session.login({
				username : $('#username').val(),
				password : $('#password').val(),
				saveFlag : $('#savedFlag').checked
			}, function(collection,response) {
				console.log(collection,response);
				if (response.auth) {
					Bricksutil.displayMessage("SUCCESS",response.message);
					
					
					if(flag){
					 localStorage.setItem('user_info', {
						 username:this.$('#username').val(),
						 password:this.$('#password').val(),
						 saveFlag:this.$('#saveFlag').checked
					 });
					}
					// page change
					if(event.currentTarget){
						window.location.href = "#home";
					}
				}

			});

			

		}



	});

	return LoginView;
});