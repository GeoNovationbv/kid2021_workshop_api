$(document).ready(function() {
    /**
     * Deel 2
     */

    var url = 'OPENAPIURL'
    // // De data via de url ophalen
    $.get( url, function( resultaat ) {
    
        // Door alle resultaten heen gaan
        resultaat.features.map(function(feature) {

            // De regels aan de tabel toevoegen
            $('#table tbody').append('<tr><td>' +  + '</td><td>' +  + '</td><td>' +  + '</td></tr')
        });
    });
});