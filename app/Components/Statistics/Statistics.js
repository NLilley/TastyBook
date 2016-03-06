import './Statistics.css'

let statisticsTemplate = `
    <header>Statistics!</header>

    <div class="statistics-image">
        <img src="./assets/img/Chef Hat-100.png">
    </div>

    <p>
    You have {{recipes}} different recipes.
    </p>

    <p>
        These recipes require
        {{ingredients}}
            different ingredients and will take
        {{steps}}
        steps to complete!
    </p>

    <p>
        Isn't that interesting?
    </p>
`;

let statisticsController = ($scope, Data) => {
    $scope.recipes = Data.recipes.length;

    $scope.ingredients = Data.recipes.reduce((acc, recipe) => {
        return acc + recipe.ingredients.length
    }, 0);

    $scope.steps = Data.recipes.reduce((acc, recipe) => {
        return acc + recipe.steps.length
    }, 0);
};

export {statisticsTemplate, statisticsController}