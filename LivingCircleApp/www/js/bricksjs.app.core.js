// Category Model
// ==============

// Includes file dependencies
define([
	"jquery"
], function($) {

	var RestaurantApp = function($){
		this.defaultUrl = "http://localhost:8099";
		
		/**
		 * 发送请求并响应事件
		 */
		this.getJSONArray = function(params, action) {
			var requesturl = this.defaultUrl + action;
			var jsonObject = [];
			
			$.ajax({
				data : params,
				url : requesturl,
				dataType : 'json',
				type : 'post',
				async:false,
				cache : false,
				timeout : 5000,
				withCredentials:true,
				success : function(data) {
					if (data.success) {
//						alert(data.message);
						jsonObject = data.jsonobjs;
						
					} 
				},
				error : function(jqXHR, textStatus, errorThrown) {
					
						alert('error ' + textStatus + " " + errorThrown);
					
				}
			});
			return jsonObject;
		
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
	return new RestaurantApp($);
} );