
app.controller('registerController', function ($scope, $location, serviceRegister) {
    $scope.register = function () {
        var data = {
            'name': $scope.name,
            'email': $scope.email,
            'password': $scope.password
        }
        console.log(data);
        serviceRegister.register(data);
    }
    $scope.go=function(path){
        $location.path("/login");
    };
});
