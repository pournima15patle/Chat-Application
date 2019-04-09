app.service('serviceRegister', function ($http) {
    try {
        this.register = function (data) {
            //send the data and get responce
            $http({
                method: 'POST',
                url: 'http://localhost:4000/register',
                data: data,
            }).then(
                function successCallBack(response) {
                    console.log("register successful at service register in client side", response);

                },
                function errorCallBack(error) {
                    console.log('Registered unsuccessful');
                    console.log(error);
                    loginMessage = 'EmailId or Password Incorrect';

                }
            );
        }
    } catch (err) {
        console.log('err', err);
    }
});