/**
 * RecipeList Controller used for presenting a simple interactive recipe list to the user.
 * When a recipe item is clicked you are routed to the recipe itself.
 */

import {recipes} from '../data.js'
import './RecipeList.css'

const recipeListTemplate = `
<recipe-list>
    <header>TastyBook!</header>
    <recipe-list-item class="recipe-list-item" ng-repeat="recipe in recipeList" ng-click="navigate('/recipe/' + recipe.id)"></recipe-list-item>
</recipe-list>
`;

let recipeListController = ($scope, $location) => {
    $scope.recipeList = recipes;
    $scope.navigate = path => {
        $location.path(path);
    };
};

const recipeListItemTemplate = `
        <div class="recipe-list-item-name">{{ recipe.name }}</div>
        <div class="recipe-list-item-spacer">
            <div class="recipe-list-item-icon-container">
                <div class="recipe-list-item-icon">
                    <img src="./assets/img/{{ recipe.icon }}">
                </div>
            </div>
        </div>
`;

let recipeListItemDirective = () => {
    return {
        template: recipeListItemTemplate
    }
};


export {recipeListItemDirective, recipeListController, recipeListTemplate}