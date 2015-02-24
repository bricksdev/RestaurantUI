/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 9/7/12 Time: 3:50 PM
 */

define([ 'jquery', 'underscore', 'Backbone', './LoginView', './MainView','./RegisterView',
		"../models/Session", 'text!../../templates/RegisterView.html' ], 
		function($, _, Backbone, LoginView, MainView, RegisterView, Session, RegisterTemplate) {

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
			'click #btnSave' : 'btnSave_clickHandler',
			'click #btnRegister' : 'btnRegister_clickHandler',
			'click #btnBack' : 'btnBack_clickHandler'
		},
		
		render : function() {
			this.$el.html(RegisterTemplate);
			return this;
		},
		
		btnRegister_clickHandler : function(){
			$.mobile.jqmNavigator.pushView(new RegisterView());
		},
		
		btnSave_clickHandler : function() {
			Session.login({
				username : this.$('#username').val(),
				password : this.$('#password').val(),
				saveFlag : this.$('#saveFlag').val()
			}, function() {
				if (Session.get("auth")) {
					$.mobile.jqmNavigator.popView();
					if(this.$('#saveFlag').val()==="on"){
					 localStorage.setItem('user_info', {
						 username:this.$('#username').val(),
						 password:this.$('#password').val(),
						 saveFlag:this.$('#saveFlag').val()
					 });
					}
				}else{
					
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