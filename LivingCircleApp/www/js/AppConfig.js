/**
 * 环境定义
 */
define([ "jquery", "underscore" ], function($, _) {
	$.extend({
		env : {
			debug : true
		},
		server : {
			// IP此处为本地PC的IP，localhost(10.9.68.45)/127.0.0.1都不能联通到本地服务
			url : "http://life.szldkj.net"
		}
	});
	// 设定underscore的server url
	_.server = _.server || {};
	$.extend(_.server, {

		url : $.server.url
	});
});