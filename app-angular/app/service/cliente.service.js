//provedor de dados
(function( app ){
    'use strict';

    app.service('ClienteService', function( $http ) {

        function loadJSON() {
	    //mockaroo
            //return $http.get('https://my.api.mockaroo.com/clientes.json?key=d66f5df0');
            return $http.get('data/clientes.json');
        }
        
        return {
            listar: loadJSON
        }

    });

})( appJS );