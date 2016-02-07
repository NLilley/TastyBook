import '../assets/css/reset.css'
import '../assets/css/app.css'
import 'font-awesome/css/font-awesome.css'
import 'mozilla-fira-pack/Fira/fira.css'

import angular from 'angular';
import angulerRoute from 'angular-route'

import {recipeTemplate, recipeController, ingredientDirective, stepDirective} from './Recipe/Recipe'
import {recipeListItemDirective, recipeListController, recipeListTemplate} from './RecipeList/RecipeList'

let app = angular.module('tasty', [
        'ngRoute'
    ])
    .controller('recipe', recipeController)
    .controller('recipeList', recipeListController)
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
            .otherwise({
                redirectTo: '/'
            });
    }]);