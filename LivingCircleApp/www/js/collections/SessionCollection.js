// Category Collection
// ===================

// Includes file dependencies
define([
	"jquery",
	"Backbone",
//	"localstorage",
	"../models/Session"], function( $, Backbone, Session) {

    // Extends Backbone.Collection
    var SessionCollection = Backbone.Collection.extend( {

        // The Collection constructor
        initialize: function( models, options ) {

            // Sets the type instance property (ie. animals)
            
            this.urlRoot = options.urlRoot;
            
        },

        // Sets the Collection model property to be a Category Model
        model: Session,
//        localStorage: new Localstorage("ldcz-storage"),
        url : function(){
        	
        	return "http://localhost:8099" + this.urlRoot;
        },
        	
        register: function(creds, callback) {
        	Session.register();
            // Do a POST to /session and send the serialized form creds
            this.save(creds, {
               success: callback
            });
          },
        login: function(creds, callback) {
        	Session.login();
          // Do a POST to /session and send the serialized form creds
          this.save(creds, {
             success: callback
          });
        },
        logout: function() {
            this.urlRoot=this.getUrl("/logout");
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
        	Session.getAuth();
          // getAuth is wrapped around our router
          // before we start any routers let us see if the user is valid
          this.fetch({
              success: callback
          });
        }
       
    } );

    // Returns the Model class
    return SessionCollection;

} );