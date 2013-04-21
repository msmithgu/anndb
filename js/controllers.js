function VolunteerCtrl($scope) {
  $scope.volunteers = [
  { name: 'Ann Margaret' , email: 'ann@example.net' },
  { name: 'Margaret Ann', email: 'margaret@example.net' }
  ];

  $scope.addVolunteer = function() {
    $scope.volunteers.unshift({name:$scope.volunteerName});
    $scope.volunteerName = '';
  };
}
