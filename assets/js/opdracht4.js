$(document).ready(function() {

    /**
     * Deel 4
     */

    // // Klik in de tabel
    $('#table').on('click', 'tr', function () {

        // alert('het klikken werkt')

        var identificatie = $(this).data('identificatie')

        loadFeatureInfo(identificatie)
    });

    window.loadFeatureInfo = function (identificatie) {

        // URL van API 2
        var url = 'OPENAPI'
        // De data via de url ophalen
        $.get( url + identificatie, function( resultaat ) {

            $('#modal-body tbody').html('')

            /**
             * Het resultaat bestaat uit de API die ook in KaartViewer wordt gebruikt
             * 1.  mainTabs:    Lijst    de presentaties die zijn geopend. Voor een WFS is dit altijd 1
             * 2.  features:    Lijst    de features die zijn gevonden. Voor een WFS is dit altijd 1. Voor WMS kunnen dit er meer zijn als je meer vlakken tegelijk openend
             * 3.1 feature:     Object   de feature ID en de geometry
             * 3.2 featureInfo: Lijst    de formulieren die zijn gekopeld aan de presentatie
             * 4.  records:     Lijst    de (gekopelde) records die zijn gevonden. Voor een formulier van dezelfde presentatie is dit er altijd 1. Voor gekopelde data kan dit 1 of meer zijn
             * 5.  attributes:  Lijst    de attributen die in het formulier zitten. In de attributen zit nog 1 extra diepte om ze achter elkaar te zetten.
             */

            // loadData('featureInfo')
        });
    }
    /**
     * Opdracht 2
     * @param featureInfo
     * @param key
     */
    window.loadData = function (featureInfo, key = 0) {

        // Titel van de gekopelde formulier zetten
        // $('#modal-title-' + key).html(featureInfo.FormName)

        if(featureInfo.records.length > 0) {
            featureInfo.records[0].attributes.map(function (attributes) {
                attributes.map(function (attribute) {
                    // De regels aan de tabel toevoegen
                    //$('#modal-table-' + key + ' tbody').append('<tr><td>' + '</td><td>' + '</td></tr')
                });
            });
        } else {
            $('#modal-table-' + key + ' tbody').html('<tr><td>Geen data gevonden.</td></tr>')
        }
    }
});