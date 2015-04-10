define([
        'backbone'
    ],
    function (Backbone) {
        'use strict';

        /* Return a collection class definition */
        return Backbone.Collection.extend({
            initialize: function (opts) {
                console.log("initialize a Ancientscollection collection");
                this.opts = opts;
            },

            url: function () {

                var url = 'https://athena-7.herokuapp.com/ancients.json';

                console.log('Endpoint with URL ' + url);

                return url;
            }
        });
    });
