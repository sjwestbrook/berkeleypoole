var bpApp = angular.module('bpApp', ['ui.router']);

bpApp.config(function($stateProvider, $urlRouterProvider) {
    
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
        })
});
