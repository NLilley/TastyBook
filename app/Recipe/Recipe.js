/**
 * Recipe controller used for presenting users with explicit recipe instructions
 */

import {recipes} from '../data.js'
import './Recipe.css';


let recipeTemplate = `
    <header class="recipe-header">{{recipe.name}}</header>

    <div class="text-center recipe-icon">
        <img src="./assets/img/{{recipe.icon}}">
    </div>

    <div class="recipe-description">
        {{recipe.description}}
    </div>

    <div class="recipe-feeds">
        <b>Feeds: {{recipe.feeds}}</b>
    </div>

    <div class="recipe-ingredients">
        <b>Ingredients:</b>
        <ingredient ng-repeat="ingredient in recipe.ingredients"></ingredient>
    </div>

    <div class="recipe-steps">
        <b>Steps:</b>
        <step ng-repeat="step in recipe.steps"></step>
    </div>
`;

const ingredientTemplate = `
{{ingredient.name}} : {{ ingredient.quantity }}
`;

let stepTemplate = `
Step {{step.step}} : {{step.description}} <img src="./assets/img/{{step.icon}}" width="50" height="50">
`;


let recipeController = ($scope, $route) => {
    let recipeId = $route.current.params.recipeId;

    $scope.recipe = recipes.find(recipe => {
        return recipe.id == recipeId;
    });

    if ($scope.recipe == null) $scope.recipe = {
        id: 0,
        name: 'Error',
        description: 'Recipe does not exist.'
    };
};


let ingredientDirective = () => ({
    template: ingredientTemplate
});

let stepDirective = () => ({
   template: stepTemplate
});


export {recipeController, recipeTemplate, ingredientDirective, stepDirective}