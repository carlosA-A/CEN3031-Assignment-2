angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    // UF location set to be default
    $scope.latitude = 29.643669;
    $scope.longitude = -82.354988;
    // Map zoom default value
    $scope.zoom = 13;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      var newListing = {
        "code": $scope.code,
        "name": $scope.name,
        "address":$scope.address,
        "coordinates":{
          "latitude":$scope.latitude,
          "longitude":$scope.longitude,
        }
      }
      // Add element to beginning of list to make it easily viewable
      $scope.listings.unshift(newListing);

    };
    $scope.deleteListing = function(index) {
    };
    $scope.showDetails = function(index) {

      if($scope.listings[index].coordinates)
      {
        $scope.latitude = $scope.listings[index].coordinates.latitude;
        $scope.longitude = $scope.listings[index].coordinates.longitude;
        $scope.zoom = 18;
      }
      //If building has no coordinates, set them to be the default UF one
      else
      {
        $scope.latitude = 29.643669;
        $scope.longitude = -82.354988;
        $scope.zoom = 13;
      }
      $scope.initialize();
      $scope.detailedInfo = $scope.listings[index].name;
    };
    $scope.initialize = function() {
      var myLatLng = {lat: $scope.latitude, lng: $scope.longitude};
      
      var map = new google.maps.Map(document.getElementById('map_div'), {
         center: myLatLng,
         zoom: $scope.zoom
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
      });
   }    
   
   google.maps.event.addDomListener(window, 'load', $scope.initialize);   

  }
]);
