/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('pokedex', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/pokedex-index.html',
      controllerAs: 'pokedexIndexCtrl',
      controller: 'PokedexIndexController'
    })
    .when('/pokedex/:id', {
      templateUrl: '/templates/pokemon-show.html',
      controllerAs: 'PokemonShowCtrl',
      controller: 'PokemonShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}