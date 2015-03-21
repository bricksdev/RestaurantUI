// Category Collection
// ===================

// Includes file dependencies
define([
	"jquery",
	"Backbone",
//	"localstorage",
	"../models/CategoryModel"], function( $, Backbone, CategoryModel) {

    // Extends Backbone.Router
    var Collection = Backbone.Collection.extend( {

        // The Collection constructor
        initialize: function( models, options ) {

            // Sets the type instance property (ie. animals)
            this.type = options.type;
            this.urlRoot = options.urlRoot;
            
        },

        // Sets the Collection model property to be a Category Model
        model: CategoryModel,
//        localStorage: new Localstorage("ldcz-storage"),
        url : function(){
        	
        	return "http://localhost:8099" + this.urlRoot;
        }
        	
       
       
    } );

    // Returns the Model class
    return Collection;

} );