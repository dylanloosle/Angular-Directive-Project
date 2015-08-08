var app = angular.module('directivePractice');

app.service('weatherService', function($http, $q){
    this.getWeather = function(city){
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
        }).then(function(res){
            var parsedInfo = {
                temperature: res.main.temp,
                weatherDescription: res.weather.description
            };
            dfd.resolve(parsedInfo);
        });
        return dfd.promise;

    }

});