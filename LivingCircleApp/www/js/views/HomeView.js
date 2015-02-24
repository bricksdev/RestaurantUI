/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 8/9/12
 * Time: 11:36 AM
 */

define(['jquery', 'underscore', 'Backbone','./HomeView','./CountView','./ServiceView','./UserinfoView',
        "./ProductsView","../models/Product",'text!../../templates/HomeView.html'],
    function ($, _, Backbone, HomeView, CountView,ServiceView,UserinfoView, ProductsView, Product, HomeTemplate) {

        var HomeView = Backbone.View.extend({


            events:{
                
                'click a.btnPlus':'btnPlus_clickHandler',
                'click a.btnProductDetail':'btnProductDetail_clickHandler',
                'click #btnPublish':'btnPublish_clickHandler',
                'click #btnHome':'btnHome_clickHandler',
                'click #btnCount':'btnCount_clickHandler',
                'click #btnService':'btnService_clickHandler',
                'click #btnUser':'btnUser_clickHandler'
            },

            initialize:function (options) {


                // Creating opportunities collection
//                this.opportunities = new (Force.Collection.extend({
//                    query:'SELECT Id, Name, ExpectedRevenue, CloseDate, Account.Id, Account.Name, StageName, Description' +
//                        ', LeadSource, (select DurationInMinutes from Events) FROM Opportunity WHERE IsClosed = false'
//                }));

            },

            render:function () {
                // Rendering a view from a template
            	console.log(_.template(HomeTemplate, {datas: Product.getProducts()}));
                this.$el.html(_.template(HomeTemplate, {datas: Product.getProducts()}));
                
//                return this;
            },

            firstShow:true,

//            this_pageshowHandler:function (event) {
//                if (this.firstShow) {
//                    // Loading opportunities
//                    this.loadOpportunities();
//
//                    this.firstShow = false;
//                }
//            $.mobile.loading( "show");
//            },
            btnPublish_clickHandler:function (event) {
            	
            	$.mobile.jqmNavigator.pushView(new ProductsView());

            },

            btnPlus_clickHandler:function (event) {
            	console.log(event);
            	 
//                var opportunity = $(event.currentTarget).jqmData('model');
//                $.mobile.jqmNavigator.pushView(new OpportunityView({model:opportunity}));
            },
            btnProductDetail_clickHandler:function (event) {
            	console.log(event);
//                var opportunity = $(event.currentTarget).jqmData('model');
//                $.mobile.jqmNavigator.pushView(new OpportunityView({model:opportunity}));
            },
            btnHome_clickHandler:function (event) {
            	
            	$.mobile.jqmNavigator.pushView(new HomeView());
            },
            btnCount_clickHandler:function (event) {
            	
            	$.mobile.jqmNavigator.pushView(new CountView());
            },
            btnService_clickHandler:function (event) {
            	
            	$.mobile.jqmNavigator.pushView(new ServiceView());
            },
            btnUser_clickHandler:function (event) {

            	$.mobile.jqmNavigator.pushView(new UserinfoView());
            }


        });

        return HomeView;
    });