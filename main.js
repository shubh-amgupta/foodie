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
   bestDish: {
   	name: 'Corn Pizza',
   	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'https://noblepig.com/images/2017/07/Grilled-Curried-Yogurt-Chicken-Thighs-xxxxx.jpg'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
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
   bestDish: {
   	name: 'Corn Pizza',
   	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
   },
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg' }
]
	$scope.restaurant = restaurants[$routeParams.id - 1];

   var protein = ['chicken', 'egg', 'meat', 'pork', 'beef', 'fish', 'beans', 'cheese', 'lean turkey', 'veal', 'tofu', 'yogurt', 'milk', 'soy', 'beans', 'nuts'];
   var carbs = ['sugar', 'cereals', 'snaks', 'cookies', 'refined flours', 'jam', 'bread', 'toast', 'potato'];
   var fats = ['avocados', 'cheese', 'dark chocolate', 'whole eggs', 'egg white', 'fatty fish', 'nuts', 'chia seeds', 'coconut', 'coconut oil'];
   $scope.macros = '';

   $scope.ingredients = [];

   $scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key ce04b125186749c59e20342e6b13719c',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
         var ingredients = response.data.outputs[0].data.concepts;
         for (var i = 0; i < ingredients.length; i++) {
            if(ingredients[i].value > 0.7) {
               $scope.ingredients.push(ingredients[i].name);
            }
         }
         for(var j = 0; j < $scope.ingredients.length; j++) {
            if($scope.macros == '') {
               for(var k = 0; k < protein.length; k++) {
                  if(protein[j] == $scope.ingredients[k]) {
                     $scope.macros = 'Protein';
                     break;
                  }
                  if(carbs[j] == $scope.ingredients[k]) {
                     $scope.macros = 'Carbs';
                     break;
                  }
                  if(fats[j] == $scope.ingredients[k]) {
                     $scope.macros = 'Healthy Fats';
                     break;
                  }
               }
            }
         }
    		 //$('.ingredients').html(list);
    		console.log(response.data);
        }, function (xhr) {
        	console.log(xhr);
      });
	}
})
