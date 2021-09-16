$(document).ready(function() {
    /**
     * Opdracht 1
     */


    // URL van API 1
    var url = 'https://acceptatie.kaartviewer.nl/admin/rest/openapi/bookmark/109/domain/5/presentation/535/info?maxFeatures=10'
    // De data via de url ophalen
    $.get( url, function( resultaat ) {

        // Het resultaat bestaat uit een featureCollection

        // Door alle resultaten heen gaan
        resultaat.features.map(function(feature) {
            // De regels aan de tabel toevoegen
            $('#table tbody').append('<tr data-id="' + feature.properties.identificatie + '"><td>' + feature.properties.identificatie + '</td><td>' + feature.properties.status + '</td><td>' + feature.properties.gebruiksdoel + '</td></tr')
        });
    });

    // Klik in de tabel
    $('#table').on('click', 'tr', function () {
        // De feature id van de geklikte regel ophalen
        var id = $(this).attr('data-id');
        // URL van API 2
        var url = 'https://acceptatie.kaartviewer.nl/admin/rest/openapi/bookmark/109/domain/5/presentation/535/info/'
        // De data via de url ophalen
        $.get( url + id, function( resultaat ) {

            /**
             * Het resultaat bestaat uit de API die ook in KaartViewer wordt gebruikt
             * 1.  mainTabs: de presentaties die zijn geopend. Voor een WFS is dit altijd 1
             * 2.  features: de features die zijn gevonden. Voor een WFS is dit altijd 1. Voor WMS kunnen dit er meer zijn als je meer vlakken tegelijk openend
             * 3.1 feature: de feature ID en de geometry
             * 3.2 featureInfo: de formulieren die zijn gekopeld aan de presentatie
             * 4.  records: de (gekopelde) records die zijn gevonden. Voor een formulier van dezelfde presentatie is dit er altijd 1. Voor gekopelde data kan dit 1 of meer zijn
             * 5.  attributes: de attributen die in het formulier zitten. In de attributen zit nog 1 extra diepte om ze achter elkaar te zetten.
             */

            // Titel presentatie
            $('#modal-presentation-title').html(resultaat.mainTabs[0].Name)

            // Formulier info
            var featureInfo = resultaat.mainTabs[0].features[0].featureInfo[0];

            // Titel van formulier zetten
            $('#modal-form-title').html(featureInfo.FormName)

            // Tabel leeg maken
            $('#modal-table tbody').html('')

            // Door de attributen van het 1ste record heen
            featureInfo.records[0].attributes.map(function(attributes) {
                attributes.map(function(attribute) {
                    // De regels aan de tabel toevoegen
                    $('#modal-table tbody').append('<tr><td>' + attribute.DisplayName + '</td><td>' + attribute.Value + '</td></tr')
                });
            });

            //Opdracht 2 (zie opdracht2.js)
            opdracht2(resultaat)

            //Opdracht 3 (zie opdracht3.js)
            opdracht3(resultaat)

            // De modal tonen
            $('#modal').modal('show')
        });
    });
});