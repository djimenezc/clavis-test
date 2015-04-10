(function () {
    'use strict';

    var root = this;

    root.define([
            'views/layout/TabLayout'
        ],
        function (Tablayout) {

            describe('Tablayout Layout', function () {

                it('should be an instance of Tablayout Layout', function () {
                    var TabLayout = new Tablayout();
                    expect(TabLayout).to.be.an.instanceof(Tablayout);
                });

                it('should have more test written', function () {
                    expect(true).to.be.ok;
                });
            });

        });

}).call(this);