(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/TableView'
		],
		function( Tableview ) {

			describe('Tableview Compositeview', function () {

				it('should be an instance of Tableview Compositeview', function () {
					var TableView = new Tableview();
					expect( TableView ).to.be.an.instanceof( Tableview );
				});

				it('should have more test written', function(){
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );