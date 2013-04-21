function VolunteerCtrl($scope) {
  $scope.volunteers = [
    { name: 'Ann Margaret'
    , email: 'ann@example.net'
    , comment: 'Gets things done.'
    , email: 'alice@example.com'
    , address1: '975 Quaker Street'
    , address2: 'Alexandria, VA 22304'
    , phone: '555.555.3214'
    , member: true
    },
    { name: 'Margaret Ann'
    , email: 'margaret@example.net'
    , comment: 'Talks.. A lot.'
    , address1: '123 Main Street'
    , address2: 'Manassass, VA'
    , phone: '555.555.3214'
    , member: true
    }
  ];

  $scope.addVolunteer = function() {
    $scope.volunteers.unshift({name:$scope.volunteerName});
    $scope.volunteerName = '';
  };
}
