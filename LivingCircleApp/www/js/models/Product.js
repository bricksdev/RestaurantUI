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

    },
    getUrl:function(action){
    	return this.defaultUrl + action;
    },
    publish: function(creds, callback) {
//    	console.log(creds);
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
