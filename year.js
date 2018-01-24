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
            //the short expression of date
            scope.dayShort=['S','M','T','W','T','F','S'];
            //initial the year value with current year
            let theyear=new Date();
           scope.year=theyear.getFullYear();
            
           //when the button was clicked, go to the previous/post year
            scope.getpreyear=function(){
                scope.year-=1;
            }
            scope.getpostyear=function(){
                scope.year+=1;
            }
            //check the year is leap year or not
             if(scope.year%4==0&&scope.year%100!==0||scope.year%400==0){
                    scope.feburaryDays=29;
                }else{
                     scope.feburaryDays=28;
                }
            //get numbers of days in a month
                scope.dayOfMonths=[31,scope.feburaryDays,31,30,31,30,31,31,30,31,30,31];
            //populate the callendar with the days value
          scope.populate=function(){
              for(let i =0; i<12;i++){
                  for(let j=1;j<scope.dayOfMonths[i];j++){
                      
                      
                  }
              }
            
            
          }
        },
        templateUrl:'year.html'
    }
})
