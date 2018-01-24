var app = angular.module('calendar', ['monthJS', 'yearJS']);
app.controller('mainCtrl',function($scope){
    $scope.day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 
    $scope.monthArray=['Janueary','Feburary','March','April','May','June','July','August','September','October','November','December'];
    $scope.monthShow=true;
     $scope.yearShow=true;
//    $scope.chen=function(){
//        $scope.monthShow=false;
//        $scope.yearShow=true;
//        
//    }




 


})

