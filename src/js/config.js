(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($rootScope) {

      $rootScope.cats = [
        {
          name: 'Tommy',
          image: 'http://placekitten.com/200/300',
          bio: 'Pop-up chartreuse keffiyeh, whatever neutra messenger bag wolf tote bag chicharrones yuccie gentrify. Asymmetrical single-origin coffee live-edge, man braid af normcore iPhone tbh cornhole celiac fashion axe plaid fixie XOXO. Yuccie artisan gluten-free, kombucha kitsch man bun trust fund la croix narwhal.',
          likes: 0,
          comments: ['I love cats']
        },
        {
          name: 'Wes',
          image: 'http://placekitten.com/200/300',
          bio: 'Pop-up chartreuse keffiyeh, whatever neutra messenger bag wolf tote bag chicharrones yuccie gentrify. Asymmetrical single-origin coffee live-edge, man braid af normcore iPhone tbh cornhole celiac fashion axe plaid fixie XOXO. Yuccie artisan gluten-free, kombucha kitsch man bun trust fund la croix narwhal.',
          likes: 0,
          comments: ['I love cats and stuff']
        }
      ];
    });

  function appConfig($routeProvider) {
    $routeProvider
     .when('/', {
      templateUrl: '/js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/new', {
      templateUrl: '/js/components/new/new.view.html',
      controller: 'newController',
      controllerAs: 'newCtrl'
    })
    .when('/:id', {
      templateUrl: '/js/components/single/single.view.html',
      controller: 'singleController',
      controllerAs: 'singleCtrl'
    })
    .otherwise('/');
  }

})();
