angular.
  module('photoDetail').
  component('photoDetail', {
    templateUrl: 'photography/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        $http.get('phones/' + $routeParams.photoId + '.json').then(function(response) {
          self.photo = response.data;
        });
      }
    ]
  });