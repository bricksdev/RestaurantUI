/**
 * APP bricksJS
 */
var Bricks = function(){
	this.App = {};
};
/**
 * 异步请求核心方法
 */
Bricks.App = function(){
	this.defaultUrl = "http://localhost:8099";
	/**
	 * 发送请求并响应事件
	 */
	this.send = function(params, action, callback, URL) {
		var requesturl = URL ? URL + action : this.defaultUrl + action;
		$.ajax({
			data : params,
			url : requesturl,
			dataType : 'json',
			type : 'post',
			cache : false,
			timeout : 5000,
			withCredentials:true,
			success : function(data) {
				if (data.success) {
					alert(data.message);
					callback.call();
				} else {
					if ($("#errorDiv")) {
						$("#errorDiv").html(data.error);
						$("#errorDiv").addClass("display-area error-area");
					} else {
						alert(data.error);
					}
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				if ($("#errorDiv")) {
					$("#errorDiv").html(errorThrown);
					$("#errorDiv").addClass("display-area error-area");
				} else {
					alert('error ' + textStatus + " " + errorThrown);
				}
			}
		});
	};
	this.imagePreview = function(browser,file,prefix) {
		
		if(browser.msie){//判断是否为ie浏览器
			$("#"+prefix+"file"+0).val($(file).val())
			$("#"+prefix+"img"+0).attr("src",$(file).val());
			$("#"+prefix+"popup"+0).attr("src",$(file).val());
			$("#"+prefix+"a"+0).css("display","block");
		}else{//不是IE浏览器
			$("#"+prefix+"file"+0).files = file.files;
			var objUrl=this.createUrl(file.files[0]);
			console.log("objUrl="+objUrl);
			if(objUrl){
				$("#"+prefix+"img"+0).attr("src",objUrl);
				$("#"+prefix+"popup"+0).attr("src",objUrl);
				$("#"+prefix+"a"+0).css("display","block");
			}
		}
		};
    this.createUrl = function (file) {
		var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file) ;
		}
		return url ;
	};
};


var RestaurantApp = new Bricks.App();
