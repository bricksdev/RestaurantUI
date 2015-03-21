/**
 * Created by kete jiang (szldkj.net| @kete2003)
 *
 * User: kete
 * Date: 8/9/12
 * Time: 11:36 AM
 */

define(['jquery', 'underscore', 'Backbone','text!../../templates/MainView.html'],
    function ($, _, Backbone,   MainTemplate) {
		
        var MainView = Backbone.View.extend({
        	
            opportunitiesListItems:null,

            forcetkClient:null,
            
            events:{
          
                'click #btnRefresh':'btnRefresh_clickHandler'
   
            },

            initialize:function (options) {

            	
            },

            render:function () {
                // Rendering a view from a template
                this.$el.html(MainTemplate);
                
                return this;
            },



            btnRefresh_clickHandler:function (event) {
                // Loading opportunities
                this.loadOpportunities();
            }

      

        });

        return MainView;
    });