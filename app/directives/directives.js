/**
 * Created by ABULA on 11/5/2015.
 */

// configure our routes
scotchApp.config(function($routeProvider , $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/featured', {
            templateUrl : 'views/featured.html',
            controller  : 'featuredController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'ContactFeedController'
        })

        .otherwise('/404', {
            templateUrl : 'views/404.html',
            controller  : '404Controller'
        });
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

});
