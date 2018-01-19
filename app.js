var app = angular.module('calendar', []);
app.controller('mainCtrl',function($scope){
    $scope.date=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    $scope.monthArray=['Janueary', 'Feburary','March','April','May','June','July','August','September','October','November','December'];





})

app.directive('month',function(){


    return {
        restrict:'AE',
        scope:{
            date:'=',
            day:'=',
            monthArray:'='
        },
        link:(scope)=>{
            scope.feburaryDays=28;

            scope.dayOfMonths=[31,scope.feburaryDays,31,30,3130,31,31,30,31,30,31];

            //get the today
            scope.day=(()=>{
                var today = new Date();
                var dd=today.getDate();
                var mm = today.getMonth()+1;
                var yyyy=today.getFullYear();
                if(dd<10){

                    dd ='0'+dd;
                }
                if(mm<10){
                    mm='0'+mm;
                }

                return `${yyyy}-${mm}-${dd}`;
            })();
            //set today as the default value in the input
            $("#theday").val(scope.day);

            //get the value from input field and set the calendar
            scope.getmonth=()=>{
                scope.weeks=[];
                scope.week=[];
                //get the input value
                var month = $("#theday").val().substring(5,7);
                var year = $("#theday").val().substring(0,4);
                //check the year is leap year or not
                if(year%4==0&&year%100!==0||year%400==0)
                    scope.feburaryDays=29;
                //get the day of first date of the month
                var firstDayOfMonth=new Date(year,month-1,01);
                var dateofFirstDay=firstDayOfMonth.getDay();
                //generate days of the month
                var len =scope.dayOfMonths[Number(month-1)];



                var p=0;
                while(p<dateofFirstDay){
                    scope.week.push('');
                    p++;
                }

                for(let i=1;i<=len;i++){

                    if(scope.week.length<7){

                        scope.week.push(i);
                        if(i==len){
                            if(scope.week.length<7){
                                var x =6-scope.week.length;
                                while(x>=0){
                                    scope.week.push('');
                                    x--;
                                }

                            }
                            scope.weeks.push(scope.week); 
                        }
                    }else{
                        scope.weeks.push(scope.week);
                        scope.week=[];
                        scope.week.push(i);
                    }
                }
                console.log(scope.weeks);
                return scope.weeks;



            };



        },
        templateUrl:'month.html'
    }
})