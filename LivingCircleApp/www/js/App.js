/*
 * 定义核心的App入口
 * Created by kete jiang (szldkj.net|@kete2003)
 * 
 * User: kete
 * Date: 2015-3-8
 * Time: 20:41 PM
 */
define(['jquery', 'underscore', 'Backbone', "Bricksutil",'js/controler/AppRouter', "js/controler/HandlerViews"], 
		function($, _, Backbone, Bricksutil, AppRouter, HandlerViews) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";

	var App = App || {
		Views : HandlerViews,

		Router : {},
		start : function() {
			$(document).ready(function() {
				Bricksutil.debug('App initialization...');
				App.Router = new AppRouter(App);
				App.events(); //register event handler
				Backbone.history.start();
				Bricksutil.debug('App initialized');
			});
		}, 
//		  this.evtLookup = {
//			      bC: "pagebeforechange", bl: "pagebeforeload",
//			      l: "pageload",
//			      bc: "pagebeforecreate", c: "pagecreate",
//			      bs: "pagebeforeshow", s: "pageshow",
//			      bh: "pagebeforehide", h: "pagehide",
//			      i: "pageinit", rm: "pageremove",
//			      pbp: "popupbeforeposition", pao: "popupafteropen", pac: "popupafterclose"
//			    };
		events : function (){
			// 定义不同的页面添加的事件代理
			$(document).delegate("#main-page", "pageinit", function() {
				Bricksutil.debug("Pageinit fired for #main-page");
				$("#main-page").addClass("my-page");
			});
			
			$(document).delegate("#home-page", "pagebeforeshow", function() {
				Bricksutil.debug("pagebeforeshow fired for #home-page");
//				$.mobile.resetActivePageHeight();
			});
		}
	};

	// make app global
	window.App = App;
	return App;
});
