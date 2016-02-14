/**
 * Simple about page to inform the user about the app
 */

let aboutTemplate = `
    <header>About</header>
    <p>
        This app is a simple project for the purposes of learning Angular 1, trying to use
        Angular best practises where possible.
    </p>

    <p>
        To View the source code and build instructions, visit the GitHub project page.
    </p>

    <a href="https://github.com/NLilley/TastyBook" target="_blank">
            <img class="link-image" src="../assets/img/GitHub-64.png">
    </a>

    <p>
        Credit for the icons goes to <a href="https://icons8.com/">Icons 8</a>
    </p>
`;

let aboutController = $scope => {

};

export {aboutTemplate, aboutController};