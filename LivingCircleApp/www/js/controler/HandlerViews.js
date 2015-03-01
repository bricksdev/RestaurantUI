/**
 * 定义handler views
 */
define(["jquery",'underscore',"Backbone",
        "js/views/HomeView","js/views/MainView","js/views/CountView",
        "js/views/ServiceView","js/views/UserinfoView","./access/AccessViews"
        ],
        function($,_,Backbone,HomeView,MainView,CountView,ServiceView,UserinfoView,AccessViews){
	var handlers =  {
	    main: MainView,
	    home:HomeView,
	    count:CountView,
	    service:ServiceView,
	    userinfo:UserinfoView
	};
	$.extend(handlers, AccessViews);
	return handlers;
});