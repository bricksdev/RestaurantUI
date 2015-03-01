/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 8/9/12 Time: 11:36 AM
 */

define([ 'jquery', 'underscore', 'Backbone', "Bricksutil", 
		 "./ProductsView",
		"./ProductItemsView",
		"../models/Product", 'text!templates/HomeView.html' ], function(
		$, _, Backbone, Bricksutil,  ProductsView,ProductItemsView, Product, HomeTemplate) {

	var HomeView = Backbone.View.extend({
		
		events : {
		

			'click a.btnProductDetail' : 'btnProductDetail_clickHandler'
		},
		
		initialize : function(options) {

			this.productListItems = [];
		},
		productListItems:null,
		renderDatas : function() {

			// Rendering a view from a template for datas
			var that = this;
			Product.getProducts(function(model, response) {
				console.log(model, response);
				if (response.success) {

					console.log(response);
					$.each(response.datas, function (index, opp) {
						var li = new ProductItemsView({model:model, data: opp}).render();
						that.productListItems.push(li);
                    });
                    
					
                    this.$('#productItems').html(_.pluck(that.productListItems, 'el')).listview("refresh");
               
					 
					Bricksutil.displayMessage("SUCCESS", "加载数据成功");
					
				} else {
					Bricksutil.displayMessage("ERROR", response.message);
				}
			});
			return this;
		},
		render : function(){
//			var temple = _. template(HomeTemplate);
			this.$el.html(HomeTemplate);
			
			return this;
		},
		addSpecialClass:function(){
			
			$("#btnHome").addClass("ui-btn-active");
		}

	});

	return HomeView;
});