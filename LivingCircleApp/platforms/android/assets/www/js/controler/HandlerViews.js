/**
 * 定义handler views
 */
define(["jquery",'underscore',"Backbone",
        "js/views/HomeView","js/views/MainView","js/views/CountView",
        "js/views/ServiceView","js/views/UserinfoView","./access/AccessViews"
        ,"./product/ProductViews"
        ],
        function($,_,Backbone,HomeView,MainView,CountView,ServiceView,UserinfoView,
        		AccessViews,ProductViews){
	var handlers =  {
	    main: MainView,
	    home:HomeView,
	    count:CountView,
	    service:ServiceView,
	    userinfo:UserinfoView
	};
	// 授权相关
	$.extend(handlers, AccessViews);
	// 产品相关
	$.extend(handlers, ProductViews);
	return handlers;
});