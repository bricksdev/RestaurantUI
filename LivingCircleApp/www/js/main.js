/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-03-08 Time: 7:52 PM
 */

require.config({
	paths : {
		// RequireJS plugin
		text : 'js/libs/text-0.27.0.min',
		// RequireJS plugin
		domReady : 'js/libs/require/domReady',
		// underscore library
		underscore : 'js/libs/underscore-min',
		// jQuery
		jquery : 'js/libs/jquery-1.8.2.min',
		// Backbone.js library
		Backbone : 'js/libs/backbone-min',
		// jQueryform
		jqueryform : "js/libs/jquery.form.min",
		jquerymobile : 'js/libs/jquery.mobile-1.4.5.min',
		// js date
		// jqmdate:"js/libs/datebox/jqm-datebox.core",
		// jqmdateslide:"js/libs/datebox/jqm-datebox.mode.slidebox",
		datepicker : "js/libs/jquery.mobile.datepicker",
		// js date ui
		datepickerui : 'js/libs/jquery.ui.datepicker',
		// jQuery Mobile framework

		// jQuery Mobile plugin for Backbone views navigation
		// jqmRouter:'js/libs/jquery.mobile/jquery.mobile.router',
		// mobile scrolling polyfill
		// overthrow:'js/libs/overthrow/overthrow',
		// alertity
		alertify : 'js/libs/alertify/alertify',
		// message util
		Bricksutil : 'js/libs/Bricksutil'

	},

	shim : {
		Backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		underscore : {
			exports : '_'
		},
		jquerymobile : {
			deps : [ 'jquery', "jqueryform" ],
			exports : "jquerymobile"
		},
		datepickerui : {
			deps : [ "jquery", "jquerymobile" ],
			exports : "datepickerui"
		},
		datepicker : {
			deps : [ "jquery", "jquerymobile" ],
			exports : "datepicker"
		}

	},
	templates : '../../templates'
	,urlArgs : "bust=" + (new Date()).getTime()
});

require([ 'domReady', 'jquery', 'underscore', "Backbone", "js/AppConfig",
		"js/App" ], function(domReady, $, _, Backbone, config, App) {

	// domReady is RequireJS plugin that triggers when DOM is ready
	domReady(function() {

		function onDeviceReady(desktop) {
//			console.log(desktop);
			// Hiding splash screen when app is loaded
			if (desktop !== true)
				cordova.exec(null, null, 'SplashScreen', 'hide', []);

			// init system run debug env
			// $.env = $.env || function(){return {debug:true};};
			$.support.cors = true;
			// $.server = $.server || function(){return
			// {url:"http://localhost:8099"};};

			// jquery cross request
			$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
				
				// 跨域訪問設定
				options.crossDomain = {
					crossDomain : true
				};
				options.xhrFields = {
					withCredentials : true
				};
				
				
				// console.log(options.jsonp);
				// If we have a csrf token send it through with the next request
				if (window._token_s) {

					// console.log(window.session);
					jqXHR.setRequestHeader('X-CSRF-Token', window._token_s);
				}
			});
			$(document).bind(
					"mobileinit",
					function() {
						// console.log("JQuery mobile routing system disabled");
						$.mobile.ajaxEnabled = false;
						$.mobile.linkBindingEnabled = false;
						$.mobile.hashListeningEnabled = false;
						$.mobile.pushStateEnabled = false;
						$.mobile.defaultPageTransition = "none";
						$.mobile.allowCrossDomainPages = true;
						$.mobile.support.cors = true;
						// Remove page from DOM when it's being replaced
						$(":jqmData(role='page')").live('pagehide',
								function(event, ui) {
									// console.log("page detach");
									$(event.currentTarget).detach();
								});
					});
			require([ 'jquerymobile', "datepicker", "datepickerui" ], 
					function($$) {

				// The "app" dependency is passed in as "App"
				App.start();
			});
		}

		if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
			// This is running on a device so waiting for deviceready event
			document.addEventListener('deviceready', onDeviceReady, false);
		} else {
			// On desktop don't have to wait for anything
			onDeviceReady(true);
		}

	});

});
