/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 7/4/12
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
        // Backbone.js library
        Backbone:'js/libs/backbone-min',
        // jQuery
        jquery:'js/libs/jquery-1.8.2.min',
        jqueryform:"js/libs/jquery.form.min",
        // jQuery Mobile framework
        jqm:'js/libs/jquery.mobile-1.4.5.min',
        // jQuery Mobile plugin for Backbone views navigation
        jqmNavigator:'js/libs/jquery.mobile/jqmNavigator',
        // mobile scrolling polyfill
        overthrow:'js/libs/overthrow/overthrow',
        // alertity
        alertify:'js/libs/alertify/alertify',
        // message util
        Bricksutil:'js/libs/Bricksutil',
        // js date
        datepicker:"js/libs/jquery.mobile.datepicker",
        // js date ui
        datepickerui:'js/libs/jquery.ui.datepicker'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        alertify:{
            exports:'alertify'
        },
        Bricksutil:{
        	deps:['alertify'],
        	exports:'Bricksutil'
        },
        jqm:{
            deps:['jquery',"jqueryform", 'js/jqm-config','jqmNavigator']
        },
        overthrow:{
            exports:'overthrow'
        },
        datepickerui:{
        	
        	exports:"datepickerui"
        },
        datepicker:{
        	deps:['datepickerui'],
        	exports:"datepicker"
        }
    }
    ,templates: '../templates'
    ,urlArgs: "bust=" + (new Date()).getTime()
});

require(['domReady', 'js/views/MainView', 'js/views/HomeView','js/models/Session','jqm',"underscore","datepicker"],
    function (domReady, MainView, HomeView, Session) {

        // domReady is RequireJS plugin that triggers when DOM is ready
        domReady(function () {

            function onDeviceReady(desktop) {
                // Hiding splash screen when app is loaded
                if (desktop !== true)
                    cordova.exec(null, null, "SplashScreen", "hide", []);
                Session.getAuth(function(collection, response){
                	if(response.auth){
                		// Pushing HomeView
                        $.mobile.jqmNavigator.pushView(new HomeView());
                	}else{
                		// Pushing MainView
                        $.mobile.jqmNavigator.pushView(new MainView());
                	}
                });
                
            }

            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
                // This is running on a device so waiting for deviceready event
                document.addEventListener("deviceready", onDeviceReady, false);
            } else {
                // Polyfill for navigator.notification features to work in browser when debugging
                navigator.notification = {alert:function (message) {
                    // Using standard alert
                    alert(message);
                }};
                // On desktop don't have to wait for anything
                onDeviceReady(true);
            }
        });
    }
);