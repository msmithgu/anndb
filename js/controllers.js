function VolunteerCtrl($scope) {
  $scope.volunteers = [
  {name: 'Ann'}];

  $scope.addVolunteer = function() {
    $scope.volunteers.unshift({name:$scope.volunteerName});
    $scope.volunteerName = '';
  };
}
