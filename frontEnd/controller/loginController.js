/*****************************************************************************************************
*  @Purpose  :
*              
*  @file     :user.routes.js             
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/

app.controller('loginControl',function($scope,$location,serviceLogin){

    $scope.login=function(){
        var data={
            'email':$scope.email,
            'password':$scope.password
        }
        $scope.go=function(path){
            $location.path("/register");
        };
        $scope.go2=function(path){
            $location.path("/forgotPassword");
        };
        console.log(data);

        serviceLogin.login(data);
        
    }
});