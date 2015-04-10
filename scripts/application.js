define([
        'backbone',
        'communicator',
        'views/layout/TabLayout',
        'views/composite/TableView',
        'collections/AncientsCollection',
        'hbs!tmpl/welcome'
    ],

    function (Backbone, Communicator, TabLayout, TableView, AncientsCollection, Welcome_tmpl) {
        'use strict';

        var welcomeTmpl = Welcome_tmpl;

        var App = new Backbone.Marionette.Application();

        /* Add application regions here */
        App.addRegions({});

        /* Add initializers here */
        App.addInitializer(function () {
            document.body.innerHTML = welcomeTmpl({success: "CONGRATS!"});
            Communicator.mediator.trigger("APP:START");
        });

        App.on('start', function () {
            if (Backbone.history) {
                Backbone.history.start();
            }

            App.views = {
                good: new TableView({
                    collection: new AncientsCollection({
                    })
                }),
                searchable: new TableView({
                    displaySearch: true,
                    collection: new AncientsCollection({
                    })
                }),
                erroneous: new TableView({
                    collection: new AncientsCollection({
                    })
                })
            };

            App.views.tabLayout = new TabLayout({
                el: $("#tab"),
                tabs: [
                    {
                        id: 'tab1',
                        text: 'Good',
                        view: App.views.good
                    },
                    {
                        id: 'tab2',
                        text: 'Searchable',
                        view: App.views.searchable
                    },
                    {
                        id: 'tab3',
                        text: 'Erroneous',
                        view: App.views.erroneous
                    }
                ]
            });

            App.views.tabLayout.render();

            Communicator.mediator.trigger('displayView', 'tab1');
        });

        return App;
    });
