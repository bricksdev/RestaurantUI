/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 8/9/12 Time: 11:36 AM
 */

define([ 'jquery', 'underscore', 'Backbone', "Bricksutil", './HomeView',
		'./CountView', './ServiceView', './UserinfoView', "./ProductsView",
		"./ProductItemsView",
		"../models/Product", 'text!templates/HomeView.html' ], function(
		$, _, Backbone, Bricksutil, HomeView, CountView, ServiceView,
		UserinfoView, ProductsView,ProductItemsView, Product, HomeTemplate) {

	var HomeView = Backbone.View.extend({

		events : {
			'pageshow' : 'this_pageshowHandler',

			'click a.btnProductDetail' : 'btnProductDetail_clickHandler',
			'click #btnPublish' : 'btnPublish_clickHandler',
			'click #btnHome' : 'btnHome_clickHandler',
			'click #btnCount' : 'btnCount_clickHandler',
			'click #btnService' : 'btnService_clickHandler',
			'click #btnUser' : 'btnUser_clickHandler'
		},
		
		initialize : function(options) {

			// Creating opportunities collection
			// this.opportunities = new (Force.Collection.extend({
			// query:'SELECT Id, Name, ExpectedRevenue, CloseDate, Account.Id,
			// Account.Name, StageName, Description' +
			// ', LeadSource, (select DurationInMinutes from Events) FROM
			// Opportunity WHERE IsClosed = false'
			// }));
			this.productListItems = [];
		},
		productListItems:null,
		renderDatas : function() {
			$.mobile.loading( "show");
			// Rendering a view from a template for datas
			var that = this;
			Product.getProducts(function(model, response) {
				console.log(model, response);
				if (response.success) {
//					var datas = {
//							models : response.datas
//						};
//					
					console.log(response);
					$.each(response.datas, function (index, opp) {
						var li = new ProductItemsView({model:model, data: opp}).render();
						that.productListItems.push(li);
                    });
                    
					
                    this.$('#productItems').html(_.pluck(that.productListItems, 'el')).listview("refresh");
                    $.mobile.loading("hide")
					 
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

		firstShow : true,

		this_pageshowHandler : function(event) {
			 if (this.firstShow) {
                 // Loading productitems
                 this.renderDatas();

                 this.firstShow = false;
             }
			// $.mobile.loading( "show");
		},

		btnPublish_clickHandler : function(event) {

			$.mobile.jqmNavigator.pushView(new ProductsView());

		},

		
		btnProductDetail_clickHandler : function(event) {
			console.log(event);
			// var opportunity = $(event.currentTarget).jqmData('model');
			// $.mobile.jqmNavigator.pushView(new
			// OpportunityView({model:opportunity}));
		},
		btnHome_clickHandler : function(event) {

			$.mobile.jqmNavigator.pushView(new HomeView());
		},
		btnCount_clickHandler : function(event) {

			$.mobile.jqmNavigator.pushView(new CountView());
		},
		btnService_clickHandler : function(event) {
			var serviceView = new ServiceView();
			serviceView.homeView(this);
			$.mobile.jqmNavigator.pushView(serviceView);
		},
		btnUser_clickHandler : function(event) {

			$.mobile.jqmNavigator.pushView(new UserinfoView());
		}

	});

	return HomeView;
});