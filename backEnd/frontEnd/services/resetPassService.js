app.service('resetPassService', function ($http) {

    this.resetPassword = function (data, $scope) {
        //send the data and get response
        $http({
            method:'POST',
            url: 'http://localhost:4000/resetPassword',
            data: data,
            headers:{'token':$scope.token}

        }).then(
            function successCallBack(response) {
                console.log("Reset password successfully in client side", response);

            },
            function errorCallBack(error) {
                console.log('Failed to reset the password');
                console.log(error);
                loginMessage = ' Password does not match ';

            }
        );
    }
});