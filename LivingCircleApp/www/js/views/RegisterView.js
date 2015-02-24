/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define([ 'jquery', 'underscore', 'Backbone', './LoginView', './HomeView','./RegisterView',
		"../models/Session", 'text!../../templates/RegisterView.html' ], 
		function($, _, Backbone, LoginView, HomeView, RegisterView, Session, RegisterTemplate) {

	var RegisterView = Backbone.View.extend({

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
		
			'click #btnRegister' : 'btnRegister_clickHandler',
			'click #btnBack' : 'btnBack_clickHandler'
		},
		
		render : function() {
			this.$el.html(RegisterTemplate);
			return this;
		},
		

		btnRegister_clickHandler : function() {
			Session.register({
				username : this.$('#username').val(),
				password : this.$('#password').val(),
				repassword : this.$('#repassword').val(),
				nicky : this.$('#nicky').val()
			}, function() {
				if (Session.get("auth")) {
					$.mobile.jqmNavigator.pushView(new HomeView());
				}

			});

			// $.mobile.jqmNavigator.pushView(new MainView());

		},

		btnBack_clickHandler : function() {
			$.mobile.jqmNavigator.popView();
		}

	});

	return RegisterView;
});