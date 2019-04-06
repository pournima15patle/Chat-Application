app.service('chatService', function ($http) {

    this.getUserMsg = function (data) {
        $http({
            method: 'POST',
            url: 'http://localhost:4000/forgotPassword',
            data: data,
        }).then(
            function successCallBack(response){
                
            }
        )
    }
})