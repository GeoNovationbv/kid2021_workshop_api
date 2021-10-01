$(document).ready(function() {

    /**
     * Deel 5
     */

    $('#autocomplete').autocomplete({
        serviceUrl: 'OPENAPI',
        onSelect: function (response) {

            var id = response.data.id

            $.get('OPENAPI' + id, function (data) {

                var identificatie = data.response.docs[0].identificatie.split('-')[0]

                console.log(identificatie)
            });
        }
    });
});