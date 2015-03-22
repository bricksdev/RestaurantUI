/**
 * 定义router
 */
define(['jquery', 'underscore', 'Backbone',"Bricksutil","js/models/Session"], 
		function($,_,Backbone,Bricksutil,Session) {


	var Router = Backbone.Router.extend({
		routes : {
			"" : "defaults",
			":page" : "actions"
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
			var that = this;
			// 设定请求的token
			Session.getAuth(function(collection, response){
				console.log("client access role check.");
//				window.session = Session;
//				console.log(window.session);
//				window._token_s=response;
				window._token_s=response._csrf;
//				console.log(JSON.stringify(arguments) );
				if(response.auth){
					that.changePage(new App.Views["home"], "home");
				}else{
					that.changePage(new App.Views["main"], "main");
				}
			});
			
			// Retrieve the first view
//			for (var view in App.Views) {
////				Bricksutil.debug("auth check ",view);
//				// 验证是否登录过
//				if(Session.get("auth") && (view !== "home" || !view)){
//					Bricksutil.debug("auth check ",Session);
//					continue;
//				}
//				Bricksutil.debug("View : "+view);
//				this.changePage(new App.Views[view], view);
//				return;
//			}
		},
		actions : function(id) {
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
				changeHash : true,
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