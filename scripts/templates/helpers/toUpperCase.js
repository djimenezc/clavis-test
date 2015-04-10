define(
    [
        'hbs/handlebars'
    ],
    function(hb) {
        'use strict';

        hb.registerHelper('toUpperCase', function(str) {
            return str ? str.toUpperCase() : '';
        });
    }
);
