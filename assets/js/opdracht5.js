$(document).ready(function() {

    /**
     * Deel 5
     */

    $('#autocomplete').autocomplete({
        serviceUrl: 'https://workshop.kaartviewer.nl/admin/rest/routeapi/location/lng/0/lat/0',
        dataType: "json",

        onSelect: function (response) {

            var id = response.data.id

            $.get('https://workshop.kaartviewer.nl/admin/rest/routeapi/location/lookup/' + id, function (data, status) {

                var identificatie = data.response.docs[0].identificatie.split('-')[0]

                console.log(identificatie)

                loadFeatureInfo(identificatie)
            });
        }
    });
});