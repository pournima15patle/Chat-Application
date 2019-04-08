var app = angular.module("chatApp", ['ngRoute','btford.socket-io']);
app.config(function ($routeProvider,$routeProvider) {
    $routeProvider.otherwise('/login')

    $routeProvider

        .when("/login", {

            templateUrl: "/templates/login.html",
            controller: "loginController"
        })
        .when("/register", {
            templateUrl: "/templates/register.html",
            controller: "registerController"
        })
        .when("/forgotPassword", {
            templateUrl: "/templates/forgotPassword.html",
            controller: "forgotPassController"
        })
        .when("/resetPassword/:token", {
            templateUrl: "/templates/resetPassword.html",
            controller: "resetPassController"
        })
        .when("/home", {
            templateUrl: "/templates/home.html",
            controller: "chatController"
        });
});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:4000')
    });
}]);
