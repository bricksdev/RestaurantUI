/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define([ 'jquery', 'underscore', 'Backbone', 'Bricksutil','./LoginView','./HomeView','./RegisterView',
		"../models/Session",  'text!../../templates/LoginView.html' ], 
		function($, _, Backbone, Bricksutil,LoginView, HomeView, RegisterView, Session,  LoginTemplate) {

	var LoginView = Backbone.View.extend({

		initialize : function() {

			$.ajaxPrefilter(function(options, originalOptions, jqXHR) {

				// 跨域訪問設定
				options.crossDomain = {
					crossDomain : true
				};
				options.xhrFields = {
					withCredentials : true
				};
				// console.log(options.url);
				// Your server goes below
				// options.url = 'http://localhost:8099' + options.url;
				// options.url = 'http://cross-domain.nodejitsu.com' +
				// options.url;
			});

		},
		events : {
			// 'pageshow':'this_pageshowHandler',
			'click #btnSave' : 'btnSave_clickHandler',
			'click #btnRegister' : 'btnRegister_clickHandler',
			'click #btnBack' : 'btnBack_clickHandler'
		},
		
		render : function() {
			this.$el.html(LoginTemplate);
			return this;
		},
		
		btnRegister_clickHandler : function(){
			$.mobile.jqmNavigator.pushView(new RegisterView());
		},
		
		btnSave_clickHandler : function() {
			console.log(this.$('#saveFlag').val());
			Session.login({
				username : this.$('#username').val(),
				password : this.$('#password').val(),
				saveFlag : this.$('#saveFlag').val()
			}, function(collection,response) {
				console.log(response);
				if (response.auth) {
					Bricksutil.displayMessage("SUCCESS",response.message);
					$.mobile.jqmNavigator.pushView(new HomeView());
					
					if(this.$('#saveFlag').val()){
					 localStorage.setItem('user_info', {
						 username:this.$('#username').val(),
						 password:this.$('#password').val(),
						 saveFlag:this.$('#saveFlag').checked
					 });
					}
				}

			});

			

		},

		btnBack_clickHandler : function() {
			$.mobile.jqmNavigator.popView();
		}

	});

	return LoginView;
});