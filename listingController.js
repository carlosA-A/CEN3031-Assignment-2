angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.hide = true;
    $scope.latitude = 0;
    $scope.longitude = 0;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      var newListing = {
        "code": $scope.code,
        "name": $scope.name
      }
      $scope.listings.push(newListing);

    };
    $scope.deleteListing = function(index) {
    };
    $scope.showDetails = function(index) {

      if($scope.listings[index].coordinates)
      {
        $scope.latitude = $scope.listings[index].coordinates.latitude;
        $scope.longitude = $scope.listings[index].coordinates.longitude;
        $scope.initialize();
      }
      $scope.detailedInfo = $scope.listings[index].name;
    };
    $scope.initialize = function() {
      var map = new google.maps.Map(document.getElementById('map_div'), {
         center: {lat: $scope.latitude, lng: $scope.longitude},
         zoom: 18
      });
   }    
   
   google.maps.event.addDomListener(window, 'load', $scope.initialize);   

  }
]);
