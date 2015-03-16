define(["jquery",
  'underscore',
  'Backbone'
], function($,_, Backbone) {
  var SessionModel = Backbone.Model.extend({
	  defaults: {
	      auth: false
	    },
	action:"/session",
    initialize: function (options) {
    	var that = this;
//    	window._token_s=that;

    },
    url : function(){
    	
    	return $.server.url+"/users" + this.action;
    },
    register: function(creds, callback) {
    	this.action= "/reg";
        // Do a POST to /session and send the serialized form creds
        this.save( creds, {
           success: callback
        });
      },
    login: function(creds, callback) {
    	this.action="/login";
      // Do a POST to /session and send the serialized form creds
    	this.save(creds, {success:callback});
    },
    logout: function() {
    	this.action= "/logout";
      // Do a DELETE to /session and clear the clientside data
      var that = this;
      this.destroy({
        success: function (model, resp) {
          
          model.clear();
          // Set auth to false to trigger a change:auth event
          // The server also returns a new csrf token so that
          // the user can relogin without refreshing the page
          that.set({auth: false, _csrf: resp._csrf});
          
        }
      });      
    },

    getAuth: function(callback) {
    	
      // getAuth is wrapped around our router
      // before we start any routers let us see if the user is valid
      this.fetch({
          success: callback
      });
    }
  });
  return new SessionModel();

});
