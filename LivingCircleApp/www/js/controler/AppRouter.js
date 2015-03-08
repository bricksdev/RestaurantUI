/**
 * 定义router
 */
define(['jquery', 'underscore', 'Backbone',"Bricksutil","js/models/Session"], 
		function($,_,Backbone,Bricksutil,Session) {


	var Router = Backbone.Router.extend({
		routes : {
			"" : "defaults",
			":page" : "generic"
		},

		// last argument must always be the Application
		initialize : function() {
			Bricksutil.debug('Router initialization...');
			// App must always be the last argument passed to the router constructor
			App = _.last(arguments);

			this.firstPage = true;
			Bricksutil.debug('Router initialized');
		},
		defaults : function() {
			Bricksutil.debug("View defaults");
			
			// 设定请求的token
			Session.getAuth(function(collection, response){
				console.log("client access role check.");
				window.session = Session;
				console.log(window.session);
				
			});
			
			// Retrieve the first view
			for (var view in App.Views) {
				// 验证是否登录过
				if(Session.get("auth") && view != "home"){
					continue;
				}
				Bricksutil.debug("View : "+view);
				this.changePage(new App.Views[view], view);
				return;
			}
		},
		generic : function(id) {
			Bricksutil.debug("View generic id : "+id);
			for (var view in App.Views) {
				if (view.toLowerCase() === id.toLowerCase()) {
					Bricksutil.debug('routing #%s', id);
					this.changePage(new App.Views[view], id);
					return;
				}
			}
			Bricksutil.debug('no route for #%s', id);
		},
		changePage : function(page, pageid) {
			// page id
			var id = page.id ? page.id : pageid+'-page';
			Bricksutil.debug("Page id :"+id);
			$(page.el).attr('id', id);
			
			$(page.el).attr('data-role', 'page');
	
			page.render();

			
			$('body').append(page.$el);

			// specific jqm page options
			var transition = page.transition ? page.transition : $.mobile.defaultPageTransition;
			var reverse = page.reverse ? page.reverse : false;
			
			// We don't want to slide the first page
			if (this.firstPage) {
				transition = 'none';
				this.firstPage = false;
				

			}
			$.mobile.changePage(page.$el, {
				changeHash : false,
				transition : transition,
				reverse : reverse
			});
			// reset element class #active
			if(page.addSpecialClass){
				page.addSpecialClass();
			}
		}
	});

	return Router;
});