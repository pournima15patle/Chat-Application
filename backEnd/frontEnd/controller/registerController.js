/*****************************************************************************************************
*  @Purpose  :To write the Register controller
*              
*  @file     :registerController.js             
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/
app.controller('registerController', function ($scope, $location, serviceRegister) {

    try {
        $scope.register = function () {
            var data = {
                'name': $scope.name,
                'email': $scope.email,
                'password': $scope.password
            }
            console.log(data);
            serviceRegister.register(data);
        }
        $scope.go = function (path) {
            $location.path("/login");
        };
    }
    catch (err) {
        console.log('err', err);
    }
});
