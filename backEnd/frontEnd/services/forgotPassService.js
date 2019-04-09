app.service('serviceAbcd', function ($http) {
    try {
        this.register = function (data) {

            //send the data and get response
            $http({
                method: 'POST',
                url: 'http://localhost:4000/forgotPassword',
                data: data,
            }).then(
                function successCallBack(response) {
                    console.log("Forgot password successfully in client side", response);

                    var userId = response.data.result._id;
                },
                function errorCallBack(error) {
                    console.log('Failed to forgot the password');
                    console.log(error);
                }
            );
        }
    } catch (err) {
        console.log('err', err);
    }
});

