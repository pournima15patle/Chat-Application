app.service('serviceRegister', function ($http) {

    this.register = function (data, $scope) {
        //send the data and get responce
        $http({
            method: 'POST',
            url: 'http://localhost:4000/register',
            data: data,
        }).then(
            function successCallBack(response) {
                console.log("register successful at service register in client side",response);

                // var userId = response.data.result._id;
                // var name = response.data.result.name;
                // var token = response.data.result.token;
                // var email = response.data.result.email;

                // localStorage.setItem("userId", userId);
                // localStorage.setItem("Name", name);
                // localStorage.setItem("Token", token);
                // localStorage.setItem("email", email);

                //after login successful go to direct homepage
                // $state.go('homePage');
            },
            function errorCallBack(error) {
                console.log('Registered unsuccessful');
                console.log(error);
                loginMessage = 'EmailId or Password Incorrect';

            }
        );
    }
});