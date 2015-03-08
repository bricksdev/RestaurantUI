/**
 * Created by kete jiang (szldkj.net| @kete2003)
 *
 * User: kete
 * Date: 2015-03-08
 * Time: 7:52 PM
 */

require.config({
    paths:{
        // RequireJS plugin
        text:'js/libs/text-0.27.0.min',
        // RequireJS plugin
        domReady:'js/libs/require/domReady',
        // underscore library
        underscore:'js/libs/underscore-min',
        // jQuery
        jquery:'js/libs/jquery-1.8.2.min',
        // Backbone.js library
        Backbone:'js/libs/backbone-min',
        // jQueryform
        jqueryform:"js/libs/jquery.form.min",
        // js date ui
        datepickerui:'js/libs/jquery.ui.datepicker',
        // js date
        datepicker:"js/libs/jquery.mobile.datepicker",
        // jQuery Mobile framework
        jquerymobile:'js/libs/jquery.mobile-1.4.5.min',
        // jQuery Mobile plugin for Backbone views navigation
//        jqmRouter:'js/libs/jquery.mobile/jquery.mobile.router',
        // mobile scrolling polyfill
//        overthrow:'js/libs/overthrow/overthrow',
        // alertity
        alertify:'js/libs/alertify/alertify',
        // message util
        Bricksutil:'js/libs/Bricksutil'

        
    },

    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        jquerymobile:{
            deps:['jquery',"jqueryform"]
        },
        datepicker:{
        	deps:["jquery","datepickerui"],
        	exports:"datepicker"
        }

    }
    ,templates: '../../templates'
    ,urlArgs: "bust=" + (new Date()).getTime()
});

require(['jquery', 'underscore',"Backbone", "js/App"],
    function ($,_, Backbone, App) {
	// init system run debug env 
	window.env = window.env || {debug:false}; 
	// jquery cross request
	$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
		// 跨域訪問設定
		options.crossDomain = {
			crossDomain : true
		};
		options.xhrFields = {
			withCredentials : true
		};
		//console.log(options);
        // If we have a csrf token send it through with the next request
        if(typeof window.session !== 'undefined') {
        	
			//console.log(window.session);
          jqXHR.setRequestHeader('X-CSRF-Token', window.session.get('_csrf'));
        }
	});
	$(document).bind("mobileinit", function() {
//		console.log("JQuery mobile routing system disabled");
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		$.mobile.defaultPageTransition = "none";
		// Remove page from DOM when it's being replaced
		$(":jqmData(role='page')").live('pagehide', function(event, ui) {
//			console.log("page detach");
			$(event.currentTarget).detach();
		});
	});
	
	require(['jquerymobile',"datepicker"], function($$) {
		// The "app" dependency is passed in as "App"
		App.start();
	});
	
});