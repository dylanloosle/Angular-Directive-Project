var app = angular.module('directivePractice');

app.directive('dirWeather', function(){
    return {
        restrict: 'E',
        templateUrl: '/Javascript/Angular-Directive-Project/app/dirWeather.html',
        scope: {
            currentUser: "=",
            weatherCall: "&"
        },
        link: function(scope, elem, attrs){


        },
        //controller: function($scope) {
        //    $scope.weatherCall ({city: $scope.user.city}).then(function(){
        //        $scope.currentTemp = currentUser.temperature;
        //        $scope.currentWeather = currentUser.weatherDescription;
        //    })
        //}



    }

});