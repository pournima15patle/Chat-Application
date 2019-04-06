app.controller('resetPassController',function($scope,resetPassService,$routeParams){
//  console.log($routeParams.token)
    $scope.resetPassword=function(){
        $scope.token=$routeParams.token
        
        console.log('token',$routeParams.token)
        var data={
            'password':$scope.password
        }
        console.log("this is from controller");
        $scope.go=function(path){
            $location.path("/login");
        };
        console.log(data);

        resetPassService.resetPassword(data,$scope);
        
    }
});
