'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/foo/templates/image.html',
                controller: 'imageController'
            })
            .when('/:entity?/:id', {
                templateUrl: 'app/foo/templates/image.html',
                controller: 'imageController'
            })
            .when('/bar', {
                templateUrl: 'app/foo/templates/bar.html',
                controller: 'barController'
            })
            .otherwise({
                redirectTo: '/bar'
            });
    };