/**
 * Created by kete jiang (szldkj.net|
 * 
 * @kete2003)
 * 
 * User: kete Date: 2015-3-8 
 */

define([ 'jquery', 'underscore', 'Backbone', "Bricksutil", "js/models/Product",
		'text!templates/ProductsView.html' ], function($, _, Backbone,
		Bricksutil, Product, ProductTemplate) {

	var ProductView = Backbone.View.extend({

		initialize : function() {


		},
		events : {
			
			'click #btnSave' : 'btnSave_clickHandler',
			'change #files' : 'files_changeHandler'
		},

		render : function() {
			this.$el.html(ProductTemplate);
			return this;
		},

		files_changeHandler : function(event) {
			this.imagePreview($.mobile.browser, event.currentTarget, "image");
		},
		imagePreview : function(browser, file, prefix) {

			if (browser.msie) {// 判断是否为ie浏览器

				$("#" + prefix + "img" + 0).attr("src", $(file).val());
				$("#" + prefix + "popup" + 0).attr("src", $(file).val());
				$("#" + prefix + "a" + 0).css("display", "block");
			} else {// 不是IE浏览器

				$.each(file.files, function(fl) {
					this.createUrl = function(file) {
						var url = null;
						if (window.createObjectURL != undefined) { // basic
							url = window.createObjectURL(file);
						} else if (window.URL != undefined) { // mozilla(firefox)
							url = window.URL.createObjectURL(file);
						} else if (window.webkitURL != undefined) { // webkit
							// or
							// chrome
							url = window.webkitURL.createObjectURL(file);
						}
						return url;
					};
					console.log(fl);
					var objUrl = this.createUrl(file.files[fl]);
					console.log("objUrl=" + objUrl);
					if (objUrl) {
						$("#" + prefix + "img" + fl).attr("src", objUrl);
						$("#" + prefix + "popup" + fl).attr("src", objUrl);
						$("#" + prefix + "a" + fl).css("display", "block");
					}
				});

			}
		},

		btnSave_clickHandler : function(event) {

			// console.log(this.$('#files'));
			// var fb = new FormData();
			// fb.append("formFile",this.$('#files'));
			// console.log(fb);
			// var options = {
			// target: '#output2', // target element(s) to be updated
			// with server response
			// beforeSubmit: showRequest, // pre-submit callback
			// success: showResponse // post-submit callback

			// other available options:
			// url: url // override for form's 'action' attribute
			// type: type // 'get' or 'post', override for form's
			// 'method' attribute
			// dataType: null // 'xml', 'script', or 'json' (expected
			// server response type)
			// clearForm: true // clear all form fields after successful
			// submit
			// resetForm: true // reset the form after successful submit

			// $.ajax options can be used here too, for example:
			// timeout: 3000
			// };
			var options = {
				url : Product.upUrl(),
				dataType : "json",
				success : function(response, statusText, xhr, $form) {

//					console.log(response);
					if (response.success) {
						Bricksutil.displayMessage("SUCCESS", response.message)
						window.location.href = "#home";
					} else {
						Bricksutil.displayMessage("ERROR", response.message)
					}
				}
			};
			this.$('#formFile').ajaxSubmit(options);

		}

	});

	return ProductView;
});