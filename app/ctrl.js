var app = angular.module('directivePractice');

app.controller('ctrl', function($scope, weatherService){
    $scope.users =
        [
        {
            name: "Geoff McMammy",
            age: 43,
            email: "geofdude@gmail.com",
            city: "Provo"
        },
        {
            name: "Frederick Deeder",
            age: 26,
            email: "fredeed@gmail.com",
            city: "Austin"
        },
        {
            name: "Spencer Rentz",
            age: 35,
            email: "spencerrentz@gmail.com",
            city: "Sacramento"
        },
        {
            name: "Geddup Ngo",
            age: 43,
            email: "geddupngo@gmail.com",
            city: "Orlando"
        },
        {
            name: "Donst Opbie Leevin",
            age: 67,
            email: "gernee@gmail.com",
            city: "Phoenix"
        }
        ];

    $scope.showing = true;

    $scope.getWeather = function(city){
        weatherService.getWeather(city).then(function(res){
            console.log(res);
        })


    }
});
