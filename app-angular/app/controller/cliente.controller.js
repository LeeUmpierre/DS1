//controla Js dentro de um escopo
(function (app) {
    'use strict';

    app.controller('ClienteController', function ($scope, ClienteService) {

        $scope.filterColumn = 'nome';
        $scope.setFilterColumn = function (columnName) {
            $scope.filterColumn = columnName;
        }
        $scope.filter = function () {
            var filtro = {};
            filtro[filterColumn] = textFilter;


            return filtro;
        }

        //Carrega uma lista de clientes
        //Promise
        //then = operacao finalizada
        ClienteService.listar().then(function (result) {//controla Js dentro de um escopo
            (function (app) {
                'use strict';

                app.controller('ClienteController', function ($scope, ClienteService) {

                    $scope.decrescente = false;
                    $scope.selectedColumn = 'nome';

                    $scope.setColumn = function (columnName) {
                        $scope.selectedColumn = columnName;

                        //determina o ordenação decrescente (false)
                        $scope.decrescente = !$scope.decrescente;
                    }

                    $scope.filter = function () {
                        var filtro = {};

                        filtro[$scope.selectedColumn] = $scope.textFilter;

                        return filtro;
                    }

                    //Carrega uma lista de clientes

                    //Promise
                    //then = operacao finalizada
                    ClienteService.listar().then(function (result) {
                        $scope.clientes = result.data;
                    }).catch(function (error) {
                        if (error.status == 404) {
                            $scope.msgerro = 'O recurso não foi encontrado';
                        } else {
                            $scope.msgerro = error.statusText;
                        }

                    });

                });

            })(appJS);
            $scope.clientes = result.data;
            //catch = pega erro
        }).catch(function (error) {
            if (error.status == 404) {
                $scope.msgerro = 'O recurso não foi encontrado';
            } else {
                $scope.msgerro = error.statusText;
            }

        });

    });

})(appJS);