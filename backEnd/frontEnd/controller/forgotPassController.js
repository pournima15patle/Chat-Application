/*****************************************************************************************************
*  @Purpose  :To write the forgot password controller
*              
*  @file     :user.routes.js             
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/
app.controller('forgotPassController', function ($scope, $location, serviceAbcd) {
try{
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
}catch(err){
    console.log('err',err);
}
});