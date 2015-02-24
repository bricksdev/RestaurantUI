/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 8/9/12
 * Time: 11:36 AM
 */

define(['jquery', 'underscore', 'Backbone','./LoginView',"../models/Session", 'text!../../templates/MainView.html'],
    function ($, _, Backbone, LoginView, Session, MainTemplate) {

        var MainView = Backbone.View.extend({

            opportunitiesListItems:null,

            forcetkClient:null,

            events:{
                'pageshow':'this_pageshowHandler',
                'click a.btnPlus':'li_clickHandler',
                'click #btnRefresh':'btnRefresh_clickHandler',
             
                'click #btnHome':'btnHome_clickHandler',
                'click #btnCount':'btnCount_clickHandler',
                'click #btnService':'btnService_clickHandler',
                'click #btnUser':'btnUser_clickHandler',
                'click #btnlogin':'btnLogin_clickHandler'
            },

            initialize:function (options) {


            },

            render:function () {
                // Rendering a view from a template
                this.$el.html(MainTemplate);
              
                return this;
            },



            btnRefresh_clickHandler:function (event) {
                // Loading opportunities
                this.loadOpportunities();
            },

            btnLogin_clickHandler:function (event) {
                //$.mobile.loading();
                $.mobile.jqmNavigator.pushView(new LoginView());
            }

        });

        return MainView;
    });