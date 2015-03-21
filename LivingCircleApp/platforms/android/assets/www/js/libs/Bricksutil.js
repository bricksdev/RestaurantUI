
// Includes file dependencies
define(['jquery', 'underscore',"alertify"], function( $, _,Alertify ) {

    return {
        openLinkExternal: openLinkExternal,
        openFileExternal: openFileExternal,
        displayMessage: displayMessage,
        debug:debugMessage,
        append:appendView
    };
    
    //Open external link on a new browser window and for phonegap app, open in Phonegap inappbrowser
    function openLinkExternal (targetURL) {
        if (window.Phonegap || window.cordova) {
            window.open(targetURL, "_blank", "EnableViewPortScale=yes", "location=no");
        }
        else {
            window.open(targetURL, "_blank");
        }
    }

    //Open file (PDF, CSV, etc) 
    //Browser: open on a new browser window
    //iOS app: open in Phonegap inappbrowser
    //Android app: open in phone's browser to start the download process since Android browser does not have built-in viewer
    function openFileExternal (targetURL) {
        if (window.Phonegap || window.cordova) {
            window.console && console.log("Utils/openFileExternal");
            window.console && console.log("device.platform=" + device.platform);
            
            if (device.platform === "Android") {
                if( confirm("Download process will open a new browser window. Click back button on your device to get back to this app.") ) {
                    window.open(targetURL, "_system", "EnableViewPortScale=yes", "location=yes");
                }
            }
            else { 
                window.open(targetURL, "_blank", "EnableViewPortScale=yes", "location=no");
            }
        }
        else {          
            window.open(targetURL, "_blank");
        }
    }

    //Display alert using alertify
    function displayMessage (alertType, alertMessage) {

        if (alertType === "ERROR") {
            Alertify.error(alertMessage, 5000);
        }else if(alertType === "WARNING") {
        	Alertify.log(alertMessage, 3000);
        }else {
            Alertify.success(alertMessage, 3000);
        }

    }
    
    function debugMessage(message){
    	if(!$.env){
    		console.log(message);
    		return ;
    	}
    	if($.env.debug){
    		console.log(message);
    	}
    }
    
    function appendView(container, selector, view) {
		var selectors;

		if (_.isObject(selector)) {
			selectors = selector;
		} else {
			selectors = {};
			selectors[selector] = view;
		}

		if (!selectors)
			return;

		_.each(selectors, function(view, selector) {
			view.setElement(container.$(selector)).render();
		}, container);
	}


} );