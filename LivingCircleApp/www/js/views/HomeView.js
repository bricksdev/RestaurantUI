/**
 * Created by Piotr Walczyszyn (outof.me |
 * 
 * @pwalczyszyn)
 * 
 * User: pwalczys Date: 8/9/12 Time: 11:36 AM
 */

define([ 'jquery', 'underscore', 'Backbone', "Bricksutil", './HomeView',
		'./CountView', './ServiceView', './UserinfoView', "./ProductsView",
		"../models/Product", 'text!../../templates/HomeView.html' ], function(
		$, _, Backbone, Bricksutil, HomeView, CountView, ServiceView,
		UserinfoView, ProductsView, Product, HomeTemplate) {

	var HomeView = Backbone.View.extend({

		events : {
			'pageshow' : 'this_pageshowHandler',
			'click a.btnPlus' : 'btnPlus_clickHandler',
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
			
		},

		renderDatas : function(callback) {
			// Rendering a view from a template
			var that = this;
			Product.getProducts(function(collection, response) {
				if (response.success) {
					var datas = {
						models : response.datas
					};

					 var temple = _. template(HomeTemplate);

					// console.log(temple(datas));
//					 datas = datas;
					 that.$el.html(temple(datas));
					Bricksutil.displayMessage("SUCCESS", "加载数据成功");
					callback();
				} else {
					Bricksutil.displayMessage("ERROR", response.message);
				}
			});
			return this;
		},
		render : function(){
			var temple = _. template(HomeTemplate);
			this.$el.html(temple());
			return this;
		},

		firstShow : true,

		this_pageshowHandler : function(event) {
			if (this.firstShow) {
				// var that = this;
				// Product.getProducts(function(collection, response){
				// var datas = {models:response};
				//                		
				// var temple = _.template(HomeTemplate);
				//                		
				// // console.log(temple(datas));
				// that.$el.html(temple(datas));
				// // $.mobile.loading( "hidden");
				// });
				//                    

				this.firstShow = false;
			}
			// $.mobile.loading( "show");
		},

		btnPublish_clickHandler : function(event) {

			$.mobile.jqmNavigator.pushView(new ProductsView());

		},

		btnPlus_clickHandler : function(event) {
			console.log(event);

			// var opportunity = $(event.currentTarget).jqmData('model');
			// $.mobile.jqmNavigator.pushView(new
			// OpportunityView({model:opportunity}));
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

			$.mobile.jqmNavigator.pushView(new ServiceView());
		},
		btnUser_clickHandler : function(event) {

			$.mobile.jqmNavigator.pushView(new UserinfoView());
		}

	});

	return HomeView;
});