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
         <recipe-list-item-icon><i class="fa {{recipe.icon}}"></i></recipe-list-item-icon>
    </div>
`;

let recipeListItemDirective = () => {
    return {
        template: recipeListItemTemplate
    }
};


export {recipeListItemDirective, recipeListController, recipeListTemplate}