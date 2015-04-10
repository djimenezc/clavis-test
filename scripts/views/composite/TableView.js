define([
        'backbone',
        'hbs!tmpl/composite/TableView_tmpl',
        'hbs!tmpl/itemView/AncientView_tmpl'
    ],
    function (Backbone, TableViewTmpl, AncientTmpl) {
        'use strict';

        /* Return a CompositeView class definition */
        return Backbone.Marionette.CompositeView.extend({

            initialize: function () {
                console.log("initialize a TableView CompositeView");
            },

            template: TableViewTmpl,

            /* ui selector cache */
            ui: {},

            /* where are we appending the items views */
            itemViewContainer: "tbody",

            /* Ui events hash */
            events: {
                'click #refresh' : 'refreshCollection'
            },

            itemView: Backbone.Marionette.ItemView.extend({
                tagName: 'tr',
                template: AncientTmpl,

                events: {
                },

                select : function(e) {
                    e.preventDefault();

                }
            }),

            /* on render callback */
            onRender: function () {
            },

            refreshCollection : function() {
                console.log('Refresh collection');

                this.collection.fetch();
            }
        });

    });
