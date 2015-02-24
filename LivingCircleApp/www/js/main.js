// Sets the require.js configuration for your application.
require.config( {

//	baseUrl: "../js",

	// 3rd party script alias names
	paths: {

		// Core Libraries
		"jquery": "js/libs/jquery-1.8.2.min",
		"jquerymobile": "js/libs/jquery.mobile-1.4.5.min",
		"underscore": "js/libs/underscore-min",
		"backbone": "js/libs/backbone-min",
		"text": "js/libs/text-0.27.0.min"
	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {

		"backbone": {
			"deps": [ "underscore", "jquery" ],
			"exports": "Backbone"
		}

	}
	,templates: '../templates'
    ,urlArgs: "bust=" + (new Date()).getTime()

});

// Includes File Dependencies
require([
	"jquery",
	"backbone",
	"js/routers/mobileRouter"
], function ( $, Backbone, Mobile ) {

	$( document ).on( "mobileinit",

		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function () {

			// Prevents all anchor click handling including the addition of active button state and alternate link bluring.
			$.mobile.linkBindingEnabled = false;

			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;
		}
	)

	require( [ "jquerymobile" ], function () {

		// Instantiates a new Backbone.js Mobile Router
		this.router = new Mobile();
	});
});
