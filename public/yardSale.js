angular.module('yardSaleApp')
.controller('yardSaleController', function($scope, $http) {
  $scope.getItems = function() {
    $http.get('/getItems')
    .then(function(response) {
      $scope.items = response.data;
      console.log(response.data);
    });
  }
  $scope.loginUser = function() {
    $http.post('/login', { username: $scope.userName, password:$scope.userPassword })
    .then(function(loginResponse) {
      $scope.users = loginResponse.data;
      //$scope.loggedIn = true;
      if ($scope.userName === loginResponse.data[0].name) {
        $scope.loggedIn = true;
      }
      console.log(loginResponse.data[0].name);
      console.log(loginResponse.data);
      //console.log($scope.userName);
    });
  }

  $scope.listItem = function() {
    $http.post('/listItem', {
      owner: $scope._id,
      name: $scope.itemName,
      description:$scope.itemDescription,
      price: $scope.itemPrice,
      sold: false })
    .then(function(response) {
    });
    $scope.getItems();
  }

  //*** not working ****
  $scope.postComment = function() {
    $http.post('/postComment', {
      owner: $scope._id,
      link: $scope.item.itemName,
      message: $scope.addComment })
    .then(function(response) {
    });
    $scope.getItems();
  }


});
