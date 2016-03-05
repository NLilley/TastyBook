import '../assets/css/reset.css'
import '../assets/css/app.css'
import 'font-awesome/css/font-awesome.css'
import 'mozilla-fira-pack/Fira/fira.css'

import angular from 'angular';
import angulerRoute from 'angular-route'

import {DataService} from './Services/Data'
import {navController} from './Components/Nav/Nav';
import {recipeTemplate, recipeController, ingredientDirective, stepDirective} from './Components/Recipe/Recipe'
import {recipeListItemDirective, recipeListController, recipeListTemplate} from './Components/RecipeList/RecipeList'
import {aboutTemplate, aboutController} from './Components/About/About';
import {statisticsTemplate, statisticsController} from './Components/Statistics/Statistics'

let app = angular.module('tasty', [
        'ngRoute'
    ])
    .service('Data', DataService)
    .controller('nav', navController)
    .controller('recipe', recipeController)
    .controller('recipeList', recipeListController)
    .controller('statistics', statisticsController)
    .directive('recipeListItem', recipeListItemDirective)
    .directive('ingredient', ingredientDirective)
    .directive('step', stepDirective);

app.config(['$routeProvider',
    $routeProvider => {
        $routeProvider
            .when('/', {
                template: recipeListTemplate,
                controller: recipeListController
            })
            .when('/recipe/:recipeId', {
                template: recipeTemplate,
                controller: recipeController
            })
            .when('/about', {
                template: aboutTemplate,
                controller: aboutController
            })
            .when('/statistics', {
                template: statisticsTemplate,
                controller: statisticsController
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);