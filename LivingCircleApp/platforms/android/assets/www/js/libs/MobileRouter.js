/**
 * kete <kete2003@gmail.com>
 * 定义routers
 */
define(["jquery","underscore","Backbone","Routers","js/controler/ViewHandlers","js/views/MainView"],
		function($,_,Backbone,routers, mobileHandler,MainView){

	var Approuter =  Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

        	
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: routers,
        mainView: function (){
        	var view = new MainView();
        	$(view.el).attr('id', 'index');
        	$(view.el).attr('data-role', 'page');
        	
        	view.render();
        	
			$('body').append(view.$el);
			$("#index").addClass("my-page");
            // Changing page
            $.mobile.changePage(view.$el);
           
            
        },
        homeView:function(){
        	console.log(view);
        	var view = mobileHandler.homeView();
        	
        	$(view.el).attr('id', 'home');
        	$(view.el).attr('data-role', 'page');
        	
        	view.render();
        	
			$('body').append(view.$el);
		
            // Changing page
            $.mobile.changePage(view.$el);
        }
	});
	var router = new Approuter();
	console.log(router);
	return router;
	
});