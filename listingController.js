angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.latitude = undefined;
    $scope.longitude = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {

      if($scope.listings[index].coordinates)
      {
        $scope.latitude = $scope.listings[index].coordinates.latitude;
        $scope.longitude = $scope.listings[index].coordinates.longitude;
    
      }
      $scope.detailedInfo = $scope.listings[index].name;
    };
  }
]);