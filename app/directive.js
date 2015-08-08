var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){
    return {

        templateUrl: '/Javascript/Angular-Directive-Project/app/dir.html',
        link: function(scope, elem, attrs) {
            console.log(scope, elem, attrs);
            elem.on('click', function(){
                elem = false;
                scope.$apply();
            })
        }

    }

});