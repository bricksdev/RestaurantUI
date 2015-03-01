// Session Collection
// ===================

// Includes file dependencies
define([
	"jquery",
	"Backbone"], function( $, Backbone) {

    // Extends Backbone.Collection
    var SessionCollection = Backbone.Collection.extend( {

        // The Collection constructor
        initialize: function( models, options ) {

            // Sets the type instance property (ie. animals)
//            this.on("add",function(model,collection,option){
//            	// saved on server
//           
//            	option.success = function(){
//            		console.log("server response.")
//            	};
//            	console.log(model);
//            	
//            	Backbone.sync("create",JSON.stringify(model),option);
//            });
        },
        action:"/session",
        // Sets the Collection model property to be a Category Model
//        model: Session,
//        localStorage: new Localstorage("ldcz-storage"),
        url : function(){
        	
        	return "http://localhost:8099/users" + this.action;
        }
       
    } );

    // Returns the Model class
    return SessionCollection;

} );