let recipeListTemplate = `
    <recipe-list-item ng-repeat="recipe in recipeList"></recipe-list-item>
`;

let recipeListDirective = () => ({
    restrict: 'E',
    scope: {
        recipeList: "=recipes"
    },
    template: recipeListTemplate
});

let recipeListItemTemplate = `
    <div class="recipe-list-item">
        {{ recipe.name }}
         <recipe-list-item-icon><i class="fa {{recipe.icon}}"></i></recipe-list-item-icon>
    </div>
`;

let recipeListItemDirective = () => {
    return {
        template: recipeListItemTemplate
    }
};


export {recipeListItemDirective, recipeListDirective}