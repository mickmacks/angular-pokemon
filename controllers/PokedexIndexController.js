angular
  .module('pokedex')
  .controller('PokedexIndexController', PokedexIndexController);

PokedexIndexController.$inject = ['$http'];
function PokedexIndexController ($http) {

  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data.pokemons;
  }, function errorCallback(error) {
    console.log('There was an error getting the data', error);
  });

}