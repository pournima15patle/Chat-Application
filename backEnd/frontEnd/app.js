var app = angular.module("chatApp", ["ngRoute"]);
app.config(function ($routeProvider) {
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
        });   
        // $routeProvider.otherwise('/login')
});
