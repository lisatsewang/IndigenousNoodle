angular.module('app', [
  'ui.router'
  ])

.config(router)


router.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];



function router($urlRouterProvider, $stateProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('homepage',{
      url: '/',
      templateUrl: './homepage/homepageTemplate.html',
      controller: 'homepageController'
    })
}