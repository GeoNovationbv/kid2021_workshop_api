$(document).ready(function() {

    /**
     * Opdracht 2
     * @param resultaat
     */
    window.opdracht2 = function (resultaat) {

        /**
         * Het resultaat bestaat uit de API die ook in KaartViewer wordt gebruikt
         * 1.  mainTabs: de presentaties die zijn geopend. Voor een WFS is dit altijd 1
         * 2.  features: de features die zijn gevonden. Voor een WFS is dit altijd 1. Voor WMS kunnen dit er meer zijn als je meer vlakken tegelijk openend
         * 3.1 feature: de feature ID en de geometry
         * 3.2 featureInfo: de formulieren die zijn gekopeld aan de presentatie
         * 4.  records: de (gekopelde) records die zijn gevonden. Voor een formulier van dezelfde presentatie is dit er altijd 1. Voor gekopelde data kan dit 1 of meer zijn
         * 5.  attributes: de attributen die in het formulier zitten. In de attributen zit nog 1 extra diepte om ze achter elkaar te zetten.
         */

        // Formulier info gekoppeld
        var featureInfoLinked = resultaat.mainTabs[0].features[0].featureInfo[1];

        // Checken of er een gekopeld formulier is toegevoegd
        if (featureInfoLinked !== undefined) {

            // Titel van de gekopelde formulier zetten
            $('#modal-form-title-linked').html(featureInfoLinked.FormName)

            // Tabel gekoppeld leeg maken
            $('#modal-table-linked tbody').html('')

            // Checken of er gekopelde gegevens zijn
            if (featureInfoLinked.records.length > 0) {
                featureInfoLinked.records[0].attributes.map(function (attributes) {
                    attributes.map(function (attribute) {
                        // De regels aan de tabel toevoegen
                        $('#modal-table-linked tbody').append('<tr><td>' + attribute.DisplayName + '</td><td>' + attribute.Value + '</td></tr')
                    });
                });
            } else {
                // Als er geen gekopelde data is gevonden dit tonen in de tabel
                $('#modal-table-linked tbody').html('Geen data gevonden.')
            }
        }
    }
});