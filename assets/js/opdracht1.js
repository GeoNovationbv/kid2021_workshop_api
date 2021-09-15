$( document ).ready(function() {
    // Opdracht 1

    // URL van API 1
    var url = 'https://acceptatie.kaartviewer.nl/admin/rest/openapi/bookmark/108/domain/5/presentation/528/info?maxFeatures=10'
    // De data via de url ophalen
    $.get( url, function( resultaat ) {
        // Door alle resultaten heen gaan
        resultaat.features.map(function(feature) {
            // De regels aan de tabel toevoegen
            $('#table tbody').append('<tr data-id="' + feature.id + '"><td>' + feature.id + '</td><td>' + feature.properties.projectnaam + '</td><td>' + feature.properties.url + '</td></tr')
        });
    });

    // Klik in de tabel
    $('#table').on('click', 'tr', function () {
        // De feature id van de geklikte regel ophalen
        var id = $(this).attr('data-id');
        // URL van API 2
        var url = 'https://acceptatie.kaartviewer.nl/admin/rest/openapi/bookmark/108/domain/5/presentation/528/info/'
        // De data via de url ophalen
        $.get( url + id, function( resultaat ) {

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

            // Opdracht 2 (Dit zouden we kunenn verplaatsen na opdracht2.js en dan dit in een functie maken)

            // Formulier info gekoppeld
            var featureInfoLinked = resultaat.mainTabs[0].features[0].featureInfo[1];

            // Checken of er een gekopeld formulier is toegevoegd
            if(featureInfoLinked !== undefined) {
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

            // Opdracht 3 (Dit zouden we kunenn verplaatsen na opdracht2.js en dan dit in een functie maken)

            // Formulier info geometry
            var featureInfoLinkedGeometry = resultaat.mainTabs[0].features[0].featureInfo[2];
            // Checken of er een gekopeld formulier is toegevoegd
            if(featureInfoLinkedGeometry !== undefined) {

                // Titel van de gekopelde formulier zetten
                $('#modal-form-title-linked-geometry').html(featureInfoLinkedGeometry.FormName)

                // Tabel gekoppeld leeg maken
                $('#modal-table-linked-geometry tbody').html('')

                // Checken of er gekopelde gegevens zijn
                if (featureInfoLinkedGeometry.records.length > 0) {
                    featureInfoLinkedGeometry.records[0].attributes.map(function (attributes) {
                        attributes.map(function (attribute) {
                            // De regels aan de tabel toevoegen
                            $('#modal-table-linked-geometry tbody').append('<tr><td>' + attribute.DisplayName + '</td><td>' + attribute.Value + '</td></tr')
                        });
                    });
                } else {
                    // Als er geen gekopelde data is gevonden dit tonen in de tabel
                    $('#modal-table-linked-geometry tbody').html('Geen data gevonden.')
                }
            }

            // De modal tonen
            $('#modal').modal('show')
        });
    });
});