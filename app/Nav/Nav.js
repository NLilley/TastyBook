/**
 * Navigation controller used for allowing users to move throughout then app
 */
import './Nav.css'


let navController = ($scope, $location) => {
  $scope.navigate = path => {
      $location.path(path);
  }
};

export {navController};