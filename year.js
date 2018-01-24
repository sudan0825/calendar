var month=angular.module('yearJS',[]);
month.directive('year',function(){


    return {
        restrict:'AE',
        scope:{
            day:'=',
            monthArray:'=',
            fd:'='
          
           
           
            
        },
        link:(scope)=>{
            scope.dayShort=['S','M','T','W','T','F','S'];
            scope.fd=9;
            //create a new date object with the first day of the year
          scope.getfd=function(){
              scope.fd=8;
              return scope.fd;
            
            
          }
        },
        templateUrl:'year.html'
    }
})
