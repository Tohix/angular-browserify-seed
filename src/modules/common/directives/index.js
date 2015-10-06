'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('exampleDirective', require('./example.directive'))
        .directive('infinityDirective', require('./infinity.directive'));
