$(document).ready(function() {
    /**
     * Deel 2
     */

    var url = 'https://workshop.kaartviewer.nl/admin/rest/openapi/bookmark/20/domain/13/presentation/4/info?maxFeatures=10'
    // // De data via de url ophalen
    $.get( url, function( resultaat ) {

        // Door alle resultaten heen gaan
        resultaat.features.map(function(feature) {

            // De regels aan de tabel toevoegen
            $('#table tbody').append('<tr data-identificatie="' + feature.properties.identificatie + '"><td>' + feature.properties.postcode + '</td><td>' + feature.properties.woonplaats +  '</td><td>' + feature.properties.status +  '</td></tr')
        });
    });
});