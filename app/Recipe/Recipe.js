/**
 * Recipe controller used for presenting users with explicit recipe instructions
 */

import {recipes} from '../data.js'


let recipeTemplate = `
<header>{{recipe.name}}</header>
<div class="text-center"><i class="fa {{recipe.icon}}"></i></div>
<div>{{recipe.description}}</div>
<div>feeds: {{recipe.feeds}}
</div>
<div class="ingredients">
    <h2>Ingredients:</h2>
    <ingredient ng-repeat="ingredient in recipe.ingredients"></ingredient>
</div>
<div class="steps">
    Steps:
    <step ng-repeat="step in recipe.steps"></step>
</div>
`;

const ingredientTemplate = `
{{ingredient.name}} : {{ ingredient.quantity }}
`;

let stepTemplate = `
Step {{step.step}} : {{step.description}} <i class="fa {{step.icon}}"></i>
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