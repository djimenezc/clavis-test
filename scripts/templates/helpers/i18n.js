define(
    [
        'hbs/handlebars',
        'utilities/i18n'
    ],
    function(hb, i18n) {
        'use strict';

        window.Handlebars = hb;

        var translate = i18n.create();

        hb.registerHelper('i18n', function(val) {
            return translate(val);
        });
    }
);
