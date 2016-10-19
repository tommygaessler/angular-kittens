(function() {

  'use strict';

  angular
    .module('myApp.components.single', [])
    .controller('singleController', singleController);

  singleController.$inject = ['$scope', '$rootScope', '$routeParams'];

  function singleController($scope, $rootScope, $routeParams) {
    /*jshint validthis: true */
    this.cat = $rootScope.cats[$routeParams.id];

    $rootScope.new = function(form) {

      $rootScope.cats[$routeParams.id].comments.push(form.comment.$modelValue);

      $scope.comment = '';

    };
  }

})();
