$(document).ready(function() {

    /**
     * Deel 2
     */

    var url = 'OPENAPI'
    $.get( url, function( resultaat ) {

        // Door alle resultaten heen gaan
        resultaat.features.map(function(feature) {

            // De regels aan de tabel toevoegen
            //$('#table tbody').append('<tr data-identificatie="' + '"><td>' + '</td><td>' +  '</td><td>' + '</td></tr')
        });
    });
});