/**
 * RecipeList Controller used for presenting a simple interactive recipe list to the user.
 * When a recipe item is clicked you are routed to the recipe itself.
 */

import {recipes} from '../data.js'

const recipeListTemplate = `
<recipe-list>
    <header>TastyBook!</header>
    <recipe-list-item ng-repeat="recipe in recipeList"></recipe-list-item>
</recipe-list>
`;

let recipeListController = ($scope, $location) => {
    $scope.recipeList = recipes;
    $scope.navigate = path => {
      $location.path(path);
    };
};

const recipeListItemTemplate = `
    <div class="recipe-list-item" ng-click="navigate('/recipe/' + recipe.id)">
        {{ recipe.name }}
         <img class="recipe-list-item-icon" src="./assets/img/{{ recipe.icon }}">
    </div>
`;

let recipeListItemDirective = () => {
    return {
        template: recipeListItemTemplate
    }
};


export {recipeListItemDirective, recipeListController, recipeListTemplate}