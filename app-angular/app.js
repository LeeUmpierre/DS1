const appJS = angular.module('appJS', ['ngStorage','ngRoute']);

//Configuracao das rotas
appJS.config(function($routeProvider){
    
    $routeProvider.when('/clientes', {
        templateUrl: 'app/view/cliente.view.html'
    })
        .when('/estados', {
        templateUrl: 'app/view/estado.view.html'
    })
    .otherwise({redirectTo: '/clientes'});

});