'use strict';

module.exports = /*@ngInject*/
    function pictureService($http) {
        return {
            getAllPicture: getAllPicture,
            getAlbum: getAlbum,
            getPicture: getPicture
        };

        /**
         * Get All Picture
         * @returns {*}
         */
        function getAllPicture(){
            return $http.get('http://jsonplaceholder.typicode.com/photos');
        }

        /**
         * Get Album
         * @param id
         * @returns {HttpPromise}
         */
        function getAlbum(id){
            return $http.get('http://jsonplaceholder.typicode.com/albums/' + id + '/photos');
        }

        /**
         * Get Picture
         * @param id
         * @returns {HttpPromise}
         */
        function getPicture(id){
            return $http.get('http://jsonplaceholder.typicode.com/photos/' + id);
        }
    };

