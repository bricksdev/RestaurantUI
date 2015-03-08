/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone', 
		"js/models/Session", 'text!templates/RegisterView.html' ], 
		function($, _, Backbone, Session, RegisterTemplate) {

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
					
					window.location.href = event.currentTarget.hash;
					
				}

			});


		}

	});

	return RegisterView;
});