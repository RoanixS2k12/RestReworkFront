(function(){

  angular
    .module('rw.api.rest')
    .factory('restService', restService);

  restService.$inject = ['$http', 'REST_CONFIG'];

  function restService($http, REST_CONFIG) {

    return {
      get: getRequest,
      post: postRequest,
      put: putRequest,
      delete: deleteRequest
    }

    // Function declarations
    function getRequest(path) {
      return $http.get(REST_CONFIG.BASE_URL + path);
    }

    function postRequest() {

    }

    function putRequest() {

    }

    function deleteRequest() {

    }

  }

})();
