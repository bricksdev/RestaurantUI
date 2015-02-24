define([
  'underscore',
  'Backbone'
], function(_, Backbone) {
  var ProductModel = Backbone.Model.extend({
  
//    urlRoot: 'http://localhost:8099/users/session',
    initialize: function () {
      var that = this;
      this.defaultUrl = "http://localhost:8099/product";
      // Hook into jquery
      // Use withCredentials to send the server cookies
      // The server must allow this through response headers
      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
          // 跨域訪問設定
          options.crossDomain = {
              crossDomain: true
          };
          options.xhrFields = {
              withCredentials: true
          };

        // If we have a csrf token send it through with the next request
        if(typeof that.get('_csrf') !== 'undefined') {
          jqXHR.setRequestHeader('X-CSRF-Token', that.get('_csrf'));
        }
      });
    },
    getUrl:function(action){
    	return this.defaultUrl + action;
    },
    publish: function(creds, callback) {
    	console.log(creds);
        this.urlRoot=this.getUrl("/publish");
        // Do a POST to /session and send the serialized form creds
        this.save(creds, {
           success: callback
        });
      },
     upUrl:function(){
    	 this.urlRoot=this.getUrl("/publish");
    	 return this.urlRoot;
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
    getProducts: function(callback) {
    	this.urlRoot= this.getUrl("/products");
      // getAuth is wrapped around our router
      // before we start any routers let us see if the user is valid
      this.fetch({
          success: callback
      });
    }
  });
  return new ProductModel();

});
