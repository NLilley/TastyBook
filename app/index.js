import '../assets/css/reset.css'
import '../assets/css/app.css'
import 'font-awesome/css/font-awesome.css'

import angular from 'angular';
import {recipeListItemDirective, recipeListDirective} from './RecipeList/RecipeList'

import {recipes} from './data.js'


let baseController = ($scope) => {
    $scope.recipes = recipes;
};

angular.module('tasty', [])
    .controller('baseController', baseController)
    .directive('recipeList', recipeListDirective)
    .directive('recipeListItem', recipeListItemDirective);