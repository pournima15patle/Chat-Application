
app.controller('forgotPassController', function ($scope, $location, serviceAbcd) {

    $scope.forgotPassword1 = function () {
        var data = {
            'email': $scope.email
        }
        console.log(data);
        serviceAbcd.register(data);
        
        // forgotPassService.forgotPasswordService(data);
    }
    $scope.go = function (path) {
        $location.path("/login");
    };
});