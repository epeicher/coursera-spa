(function() {
"use strict"

angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController)

LunchCheckController.$inject = ['$scope']

function LunchCheckController($scope) {
    $scope.message = "";
    $scope.items = "";
    $scope.success = true;

    $scope.checkIfTooMuch = function() {
        if(!$scope.items) {
            // Populate message and exit
            $scope.success = false;
            return $scope.message = "Please enter data first";
        }
        $scope.success = true;
        var arr = $scope.items.split(',').filter(function(e) {
            return !!e; // returns false if the array element is empty, undefined or null
        });
        if(arr.length > 3){
            $scope.message = "Too much!";
        } else {
            $scope.message = "Enjoy!";
        }
    }
}

}());