/**
 * Created by ABULA on 11/5/2015.
 */
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate' , 'firebase', 'ngDialog' , 'ngMessages']);

var myApp  =  angular.module('myApp', ['ngRoute', 'ngAnimate' , 'firebase', 'ngDialog' , 'ngMessages']);

angular.module("CombineModule", ["scotchApp", "myApp"]);

