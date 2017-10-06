(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider

  // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })

    // List of menu categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categoriesList.html',
      controller: 'CategoriesListController as catList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories().then(function (response) {
            consol.log("Response: "+response.data);
            return response.data;
          });
        }]
      }
    })

  // Items menu categories
   .state('items', {
     url: '/items/{catId}',
     templateUrl: 'src/templates/itemsList.html',
     controller: 'ItemsListController as itemList',
     resolve: {
        items: ['MenuDataService', '$stateParams',
          function(MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.catId)
              .then(function(response) {
                  return response.data.menu_items;
              });
        }]
     }
    });
  }

})();
