(function (app) {
    'use strict';

    app.service('ClienteService', function ($q, $localStorage) {
        const deferred = $q.defer();

        function loadJSON() {
            //return $http.get('https://my.api.mockaroo.com/clientes.json?key=d66f5df0');
            //return $http.get('data/clientes.json');
            //reject = erro/ resolve = sucesso
            //deferred.reject({statusText:'Deu pau'});
            deferred.resolve({ data: $localStorage.clientes || [] });


            return deferred.promise;

        }

        function save(cliente) {
            var dados = $localStorage.clientes || [];
            if (!cliente.id) {

                //ultimo registro
                var ultimo = dados[dados.length - 1];

                /*
                operador ternario
                Variavel = teste_logico ? entao : senao;
                */

                //incrementa valor de id o ultimo registro
                cliente.id = ultimo ? ultimo.id + 1 : 1;

                dados.push(cliente);
                $localStorage.clientes = dados;
            }



            deferred.resolve(cliente);
            return deferred.promise;
        }

        function remove(cliente){
            var dados = $localStorage.clientes;
            //procura o index do vetor do cliente q esta indo por parametro
            var index = dados.indexOf(cliente);
            //remove a partir do indice uma qtd de elementos(exemplo 1)
            dados.splice(index, 1);
            //Atualia local storage
            $localStorage.clientes = dados;

            deferred.resolve({data : dados});
            return deferred.promise;
        }

        return {
            listar: loadJSON,
            salvar: save,
            remover: remove
        }

    });

})(appJS);