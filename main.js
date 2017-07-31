var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/login',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
   .when('/forgot',{
		templateUrl: 'pages/forgotpassword.html',
		controller: 'forgotController'
	})
   .when('/about',{
		templateUrl: 'pages/about.html',
		controller: 'forgotController'
	})
   .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('mainController',function($scope) {
   $scope.restaurants = [{
	name: 'Farzi Cafe',
   id: '1',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'The Espasso',
   id: '2',
   address: 'Mussorie Road , Dehradun',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'First Gear Cafe',
   id: '3',
   address: 'Mussorie Road , Dehradun',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Kalsang : Ama Cafe',
   id: '4',
   address: '68, Rajpur Road , Dehradun',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Sunburn Bistro',
   id: '5',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Orchard',
   id: '6',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Chicago BR',
   id: '7',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Bakers Elite',
   id: '8',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' }
]
})


foodieApp.controller('loginController',function($scope, $location) {
   $scope.goToHome = function() {
		$location.url('/');
	}
   $scope.goToForgot = function() {
		$location.url('/forgot');
	}
   console.log($scope);
})

foodieApp.controller('restaurantController',function($scope,$routeParams) {
   $scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Farzi Cafe',
   id: '1',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'The Espasso',
   id: '2',
   address: 'Mussorie Road , Dehradun',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'First Gear Cafe',
   id: '3',
   address: 'Mussorie Road , Dehradun',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Kalsang : Ama Cafe',
   id: '4',
   address: '68, Rajpur Road , Dehradun',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Sunburn Bistro',
   id: '5',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Orchard',
   id: '6',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Chicago BR',
   id: '7',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' },
   {
   name: 'Bakers Elite',
   id: '8',
   address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
   location: 'Connaught Place',
   category: 'Casual Dining, Bar',
   vote: '4.2',
   cuisines: 'Modern Indian',
   cost: '2200',
   hours: '12 Noon to 1 AM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' }
]
	$scope.restaurant = restaurants[$routeParams.id - 1];
})
