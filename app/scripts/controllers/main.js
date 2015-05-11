'use strict';

//var awsrangeurl = "https://ip-ranges.amazonaws.com/ip-ranges.json";
var awsrangeurl = "ip-ranges.json";

angular
  .module('awsrangesApp')
  .controller('MainCtrl', ['$scope', '$http', 
    function ($scope, $http) {

      $scope.x = 'hello';

      $scope.regionfilter = [];
      $scope.servicefilter = [];

      $http.get(awsrangeurl).success(function (ranges) {
        $scope.awsranges = ranges;

        for (var i = 0, length = ranges.prefixes.length; i < length; i++) {
          if ($scope.regionfilter.indexOf(ranges.prefixes[i].region) === -1) {
            $scope.regionfilter.push(ranges.prefixes[i].region);
          }
        }

        for (var i = 0, length = ranges.prefixes.length; i < length; i++) {
          if ($scope.servicefilter.indexOf(ranges.prefixes[i].service) === -1) {
            $scope.servicefilter.push(ranges.prefixes[i].service);
          }
        }


      });

      

    }
  ]);
  // .factory('awsrangejson', ['$resource', 
  //   function ($resource) {
  //     return $resource (awsrangejson)
  //         githubapi + '/user' + '?access_token=:accessToken&per_page=100',
  //         { accessToken: '@accessToken'}, 
  //         { 
  //           query: { method: 'GET', isArray: false}
  //         }     
  //       ),

  // ;
