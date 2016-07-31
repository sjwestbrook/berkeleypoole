var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'js/views/home.html'
        })
        
        .state('profile', {
            url: '/profile',
            templateUrl: 'js/views/profile.html'       
        })
        
        .state('contact', {
            url: '/contact',
            templateUrl: 'js/views/contact.html'
        });
});
