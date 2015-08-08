var app = angular.module('directivePractice', ['ngRoute']);

app.config(['$routeProvider', function(route){
    route
        .when('/home', {
            templateUrl: '/Javascript/Angular-Directive-Project/app/template.html',
            controller: 'ctrl'
        })
        .otherwise ({
            ridirectTo: '/home'
    })

}]);
