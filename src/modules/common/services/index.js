'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('exampleService', require('./example.service'))
        .factory('pictureService', require('./picture.service'));
