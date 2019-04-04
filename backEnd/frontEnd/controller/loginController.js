/*****************************************************************************************************
*  @Purpose  :
*              
*  @file     :user.routes.js             
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/

app.controller('loginController', function ($scope, $location, loginService) {

    $scope.login = function () {
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        console.log(data);

        loginService.login(data);
    }

    $scope.go = function (path) {
        $location.path("/register");
    };
    $scope.go2 = function (path) {
        $location.path("/forgotPassword");
    };
});