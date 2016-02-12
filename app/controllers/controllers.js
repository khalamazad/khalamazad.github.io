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

scotchApp.controller("personCtrl", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'feedback.php';

        $scope.submitForm = function (isValid) {


            if (isValid) {


                $http.post($scope.url, {
                    "FirstName": $scope.newFeedBack.userName,
                    "LastName": $scope.newFeedBack.lastName,
                    "Email": $scope.newFeedBack.email,
                    "PhoneNumber": $scope.newFeedBack.phoneNumber,

                    "message": $scope.newFeedBack.message
                }).
                    success(function (data, status) {
                        console.log(data);
                        $scope.status = status;
                        $scope.data = data;
                        $scope.result = data;
                    })
            } else {

                alert('Form is not valid');
            }

        }
}]);

/*scotchApp.controller('personCtrlold', function($scope, $http) {
    // creating a blank object to hold our form information.
    //$scope will allow this to pass between controller and view
    $scope.newFeedBack = {};
    // submission message doesn't show when page loads
    $scope.submission = false;

    var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
                returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
    };

    $scope.submitForm = function() {
        //return $scope.newFeedBack.userFirstName + " " + $scope.newFeedBack.lastName;
       $http({
            method: 'POST',
            url: 'feedback.php',
            data: param($scope.newFeedBack), // pass in data as strings
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
           .success(function(data) {
               if (!data.success) {
                   // if not successful, bind errors to error variables
                   $scope.submissionMessage = data.messageError;
                   $scope.submission = true; //shows the error message
               } else {
                   // if successful, bind success message to message
                   $scope.submissionMessage = data.messageSuccess;
                   $scope.newFeedBack = {}; // form fields are emptied with this line
                   $scope.submission = true; //shows the success message
               }
            });


    };
});*/





