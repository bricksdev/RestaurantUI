/**
 * Created by kete jiang (szldkj.net| @kete2003)
 *
 * User: kete
 * Date: 8/28/12
 * Time: 2:32 PM
 */
define(['jquery', 'underscore', 'Backbone', 'text!templates/ProductItemsView.html'],
    function ($, _, Backbone, ProductItmesTemplate) {

        var ProductItmesView = Backbone.View.extend({

            tagName:'li',

            initialize:function (options) {
                
            	this.data = options.data;
                // Binding model object with list item element
                this.$el.jqmData('model', this.model);

                // Registering change:Events event handler
                this.model.on('changed:success', this.events_changeHadler, this);
            },

            remove:function () {

                // Removing change:Events event handler
                this.model.off('changed:success', this.events_changeHadler);

                // Calling Backbone's original remove function
                Backbone.View.prototype.remove.call(this);

                return this;
            },

            render:function () {
//                console.log(this.data);
            	var viewData = {data:this.data};
            	var template = _.template(ProductItmesTemplate);
                // Rendering list item element content based on a template
                this.$el.html(template(viewData));

                return this;
            },

            events_changeHadler:function (event) {
                // Rerendering list item
                this.render();
            }

        });

        return ProductItmesView;
    });