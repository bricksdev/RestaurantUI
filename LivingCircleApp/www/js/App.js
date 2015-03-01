/*
*
*/
define(['jquery', 'underscore', 'Backbone', "Bricksutil",'js/controler/ViewRouter', "js/controler/HandlerViews"], 
		function($, _, Backbone, Bricksutil,Router, HandlerViews) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
//	"use strict";

	var App = App || {
		Views : HandlerViews,

		Router : {},
		start : function() {
			$(document).ready(function() {
				Bricksutil.debug('App initialization...');
				App.Router = new Router(App);
				App.events(); //register event handler
				Backbone.history.start();
				Bricksutil.debug('App initialized');
			});
		}, 
		events : function (){
			$(document).delegate("#main-page", "pageinit", function() {
				Bricksutil.debug("Pageinit fired for #main-page");
				$("#main-page").addClass("my-page");
			});

			
		}
	};

	// make app global
	window.App = App;
	return App;
});
