'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, pictureService, $route, $location, $window) {
        var params = $route.current.params;
        var entityId = params.id || null;
        entityId = parseInt(entityId);

        $scope.pictures = {};
        $scope.entity = params.entity;
        $scope.tmpPictures = [];

        switch(params.entity) {
            case 'image':
                // Get picture by id
                if (angular.isNumber(entityId)) {
                    pictureService.getPicture(entityId).then(function(response){
                        if (response.data) {
                            $scope.pictures = response.data;
                        }
                    });
                }
                break;

            case 'album':
                // Get album by id
                var id = parseInt(params.id);
                if (angular.isNumber(id)) {
                    pictureService.getAlbum(params.id).then(function(response){
                        if (response.data) {
                            $scope.pictures = response.data;
                        }
                    });
                }
                break;

            default:
                // Get all pictures
                pictureService.getAllPicture().then(function(response){
                    if (response.data) {
                        var partial = [];
                        $scope.tmpPictures = response.data;
                        for(var i = 0; i < 30; i++){
                            partial.push(response.data[i]);
                        }
                        $scope.pictures = partial
                    }
                });
        }

        $scope.isOpen = false;
        $scope.menu = {
            isOpen: false,
            count: 0,
            selectedDirection: 'left'
        };

        $scope.goResource = goResource;

        /**
         * Go to Resource
         * @param id
         */
        function goResource(id) {
            switch(params.entity) {
                case 'image':
                    break;
                case 'album':
                    $location.path("/image/" + id);
                    break;

                default:
                    $location.path("/album/" + id);
                    break;
            }
        }
    };