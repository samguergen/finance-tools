angular.module('app.mortgageApp').controller("mortgageCtrl", [
  '$scope', function($scope) {
    console.log('mortgageCtrl running');
    return $scope.exampleValue = "Hello angular and rails";
  }
]);