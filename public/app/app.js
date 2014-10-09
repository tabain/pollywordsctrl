angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'IOS Developer',
        description: 'you will fight'
    }, {
        title: 'Web Developer',
        description: 'you will fight'
    }];
});