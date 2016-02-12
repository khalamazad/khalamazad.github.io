/**
 * Created by ABULA on 11/5/2015.
 */

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $http){
    $http.get('unique-because.json').success(function (data){
        $scope.uniquebecause = data;
    });
    // We will create an seo variable on the scope and decide which fields we want to populate
    $scope.seo = {
        pageTitle : '',
        metaDescription : ""
    };
    $scope.$parent.seo = {
        pageTitle : 'SharePoint UX Expert / UI Architect, Sri Lanka',
        metaDescription : "I'm Unique Because, I create clean, exciting and cutting edge solutions"
    };
});
myApp.controller('ContactController', function($scope, $http) {
    $http.get('contact.json').success(function (data){
        $scope.contact = data;
    });
});
myApp.controller('ServicesIOffer', function($scope, $http) {
    $http.get('offers.json').success(function (data){
        $scope.offer = data;
    });
});
myApp.controller('SkillsLevel', function($scope, $http) {
    $http.get('skill.json').success(function (data){
        $scope.skill = data;
    });
});
myApp.controller('Contact2Controller', function($scope, $http) {
    $http.get('me-elsewhere.json').success(function (data){
        $scope.linksurl = data;
    });
});
myApp.controller('featured2Controller', function($scope, $http, ngDialog) {
    $http.get('featured.json').success(function (data){
        $scope.featuredwork = data;
        //alert($scope.featuredwork[0].technologytitle);
    });
    $scope.toggleVar = true;
    $scope.toggle = function() {
        $scope.toggleVar = !$scope.toggleVar;
    };
    $scope.open = function () {
        ngDialog.open({
            template: 'firstDialog',
            className: 'ngdialog-theme-default',
        });
    };
});

scotchApp.controller('aboutController', function($scope) {
    $scope.$parent.seo = {
        pageTitle : 'UI Architect / UX Consultant, Sri Lanka',
        metaDescription : "Hi I'm Abul Khalam Azad, an UI Architect / UX Consultant based in Colombo, Sri Lanka"
    };
});

scotchApp.controller('featuredController', function($scope) {
     $scope.$parent.seo = {
        pageTitle : 'Art Director / Visual effects creator / UI Architect / SharePoint Brander Expert / Media Director',
        metaDescription : "A passionate SharePoint Brander Expert / UI Architect / UX Consultant, based in Colombo, Sri Lanka"
    };
});

myApp.controller('ContactFeedController', function($scope) {
   $scope.$parent.seo = {
        pageTitle : 'Contact UI Architect / UX Consultant based in Colombo, Sri Lanka',
        metaDescription : ""
    };
});

scotchApp.controller('personCtrl', function($scope, $http) {
    $scope.newFeedBack = {};
    $scope.submitForm = function() {
        //return $scope.newFeedBack.userFirstName + " " + $scope.newFeedBack.lastName;
       $http({
            method: 'POST',
            url: 'feedback.php',
            data: $scope.newFeedBack,  // pass in data as strings
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                console.log(data);

                if (!data.success) {
                    // if not successful, bind errors to error variables
                    //$scope.errorName = data.errors.name;
                    //$scope.errorSuperhero = data.errors.superheroAlias;
                }
                else {
                    // if successful, bind success message to message
                    //$scope.message = data.message;

                }
            });


    };
});





