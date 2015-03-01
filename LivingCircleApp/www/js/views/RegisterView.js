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

		},
		events : {

			'click #btnRegister' : 'btnRegister_clickHandler'
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
					Bricksutil.displayMessage("SUCCESS",response.message);
					// page change
					if(event.currentTarget){
						window.location.href = event.currentTarget.hash;
					}
				}

			});


		}

	});

	return RegisterView;
});