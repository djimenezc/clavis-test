(function () {
    'use strict';

    var root = this;

    root.define([
            'collections/AncientsCollection'
        ],
        function (Ancientscollection) {

            describe('Ancientscollection Collection', function () {

                it('should be an instance of Ancientscollection Collection', function () {
                    var AncientsCollection = new Ancientscollection();
                    expect(AncientsCollection).to.be.an.instanceof(Ancientscollection);
                });

                it('should have more test written', function () {
                    expect(true).to.be.ok;
                });

                //it('should fetch a success response', function () {
                //
                //    var ancientsCollection = new Ancientscollection();
                //    debugger;
                //    ancientsCollection.fetch(function (response) {
                //        debugger;
                //
                //        console.log('After fetching');
                //
                //        expect(false).to.be.ok;
                //        expect(response).to.not.be.null();
                //    });
                //});
            });

        });

}).call(this);