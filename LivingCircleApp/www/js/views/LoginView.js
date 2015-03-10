/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
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
			
			if(flag){
			 localStorage.setItem('user_info', {
				 username:this.$('#username').val(),
				 password:this.$('#password').val(),
				 saveFlag:this.$('#saveFlag').checked
			 });
			}
			Session.login({
				username : $('#username').val(),
				password : $('#password').val(),
				saveFlag : $('#savedFlag').checked
			}, function(collection,response) {
//				console.log(collection,response);
				if (response.auth) {
					Bricksutil.displayMessage("SUCCESS",response.message);
					
					// page change
					window.location.href = "#home";
					
				}else{
					Bricksutil.displayMessage("ERROR",response.message);
				}

			});

			

		}



	});

	return LoginView;
});