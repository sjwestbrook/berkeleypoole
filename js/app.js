var bpApp = angular.module('bpApp', ['ui.router']);

bpApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/profile');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        // .state('home', {
        //     url: '/home',
        //     templateUrl: '/js/views/home.html'
        // })
        
        .state('profile', {
            url: '/profile',
            templateUrl: '/js/views/profile.html'       
        })
        
        .state('contact', {
            url: '/contact',
            templateUrl: '/js/views/contact.html'
        });
});
