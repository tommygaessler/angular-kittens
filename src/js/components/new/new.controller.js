(function() {

  'use strict';

  angular
    .module('myApp.components.new', [])
    .controller('newController', newController);

  newController.$inject = ['$scope', '$rootScope'];

  function newController($scope, $rootScope) {
    /*jshint validthis: true */
    $rootScope.new = function(form) {

      $rootScope.cats.push({
        name: form.name.$modelValue,
        image: form.image.$modelValue,
        bio: form.bio.$modelValue,
        likes: 0
      })
    }
  }

})();
