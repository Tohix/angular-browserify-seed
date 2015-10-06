'use strict';

module.exports = /*@ngInject*/
    function infinityDirective($window) {
        return{
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var raw = elem[0];
                var checkBounds = function (evt) {
                    var rectObject = raw.getBoundingClientRect();
                    if ($window.innerHeight+1000 > rectObject.bottom) {
                        if (scope.pictures.length < scope.tmpPictures.length) {
                            var tmp = [];
                            for(var i = scope.pictures.length; i < scope.tmpPictures.length && i <= scope.pictures.length + 30 ; i++ ){
                                if (scope.tmpPictures[i]){
                                    tmp.push(scope.tmpPictures[i]);
                                }
                            }
                            angular.forEach(tmp, function(item, key){
                                scope.pictures.push(item);
                            });
                            scope.$apply(scope.pictures);
                        }
                    }
                };
                angular.element($window).bind('scroll', checkBounds);
            }
        };
    };
