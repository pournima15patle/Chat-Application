app.service('loginService', function ($http) {

    this.login = function (data, $scope) {
        //send the data and get response
        $http({
            method: 'POST',
            url: 'http://localhost:4000/login',
            data: data,
        }).then(
            function successCallBack(response) {
                console.log("Login successful at service login in client side", response);

                var userId = response.data.result._id;
                var name = response.data.result.name;
                var token = response.data.result.token;
                var email = response.data.result.email;

                localStorage.setItem("userId", userId);
                localStorage.setItem("Name", name);
                localStorage.setItem("Token", token);
                localStorage.setItem("email", email);

                //after login successful go to direct homepage
                // $state.go('homePage');
            },
            function errorCallBack(error) {
                console.log('Login failed please check your username or password');
                console.log(error);
                loginMessage = 'EmailId or Password Incorrect';

            }
        );
    }
});