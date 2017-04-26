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

  // vm.createAlbum = function () {
  //   $http({
  //     method: 'POST',
  //     url: '/api/albums',
  //     data: vm.newAlbum,
  //   }).then(function successCallback(response) {
  //     vm.albums.push(response.data);
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // }

  // vm.editAlbum = function (album) {
  //   $http({
  //     method: 'PUT',
  //     url: '/albums/'+album._id,
  //     data: album
  //   }).then(function successCallback(json) {
  //     // don't need to do anything!
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // }

  // vm.deleteAlbum = function (album) {
  //   $http({
  //     method: 'DELETE',
  //     url: '/api/albums/'+ album._id
  //   }).then(function successCallback(json) {
  //     var index = vm.albums.indexOf(album);
  //     vm.albums.splice(index,1)
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // }

}