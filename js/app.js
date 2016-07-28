var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html'
        })
        
        .state('profile', {
            url: '/profile',
            templateUrl: '/views/profile.html'       
        })
        
        .state('contact', {
            url: '/contact',
            templateUrl: '/views/contact.html'
        });
});
