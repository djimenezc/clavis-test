define([
        'backbone',
        'communicator',
        'hbs!tmpl/layout/TabLayout_tmpl'
    ],
    function (Backbone, Communicator, TablayoutTmpl) {
        'use strict';

        /* Return a Layout class definition */
        return Backbone.Marionette.Layout.extend({

            initialize: function (opts) {
                console.log("initialize a Tablayout Layout");

                this.opts = opts;

                Communicator.mediator.on('displayView', this.displayView, this);
            },

            template: TablayoutTmpl,

            /* Layout sub regions */
            regions: {
                //content : '#contentContainer'
            },

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {
                'click .tab': 'openTab'
            },

            serializeData: function () {
                console.log('Returning serialize data');

                return {
                    tabs: this.opts.tabs
                };
            },

            displayView: function (viewId) {
                console.log('displayView: ' + viewId);

                this.regions.content.show(this.getTabView(viewId));
            },

            getTabView : function(viewId) {

                var tab = _.find(this.opts.tabs, function(tab) {
                    return tab.id === viewId;
                });

                return tab.view;
            },

            /* on render callback */
            onRender: function () {
                console.log('onRender');

                this.regions.content = this.addRegion("content", "#contentContainer");
            },

            openTab: function (e) {
                console.log('openTab');

                this.displayView(e.target.id);
            }

        });

    });
