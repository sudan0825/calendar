var app = angular.module('calendar', []);
app.controller('mainCtrl',function($scope){
    $scope.date=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];




})

app.directive('month',function(){


    return {
        restrict:'AE',
        scope:{
            date:'=',
            day:'='
        },
        link:(scope)=>{

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

            scope.getmonth=()=>{
                var month = $("#theday").val().substring(5,7);
                var year = $("#theday").val().substring(0,4);
                console.log("the month is " +month+" "+year)
            };

            $("#theday").val(scope.day);

        },
        templateUrl:'month.html'
    }
})