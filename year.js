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
             //create month object with numbers of days and name
            scope.obj=[];

            //initial the year value with current year
            let theyear=new Date();
            scope.year=theyear.getFullYear();

            //when the button was clicked, go to the previous/post year
            scope.getpreyear=function(){
                scope.year-=1;
                scope.populate();

                console.log(scope.year);
            }


            scope.getpostyear=function(){
                scope.year+=1;
                scope.populate();
            }
            scope.getDatawithYear=()=>{
                 //check the year is leap year or not
            if(scope.year%4==0&&scope.year%100!==0||scope.year%400==0){
            
                scope.feburaryDays=29;
            }else{
                scope.feburaryDays=28;
            }
            //get numbers of days in a month
            scope.dayOfMonths=[31,scope.feburaryDays,31,30,31,30,31,31,30,31,30,31];
                 //get the first day of the week of the year

            let fd=new Date(scope.year,00,01);
            scope.firstDay=fd.getDay();

            //populate the callendar with the days value
            scope.week=[];
            scope.month=[];
            scope.weeks=[];
            scope.temp=[]
            var p=scope.firstDay;
            while(p>0){
                scope.temp.push('');
                p--;
            }
                
            }
           
           
           

            scope.populate=function(){
                scope.getDatawithYear();
                for(let i =0; i<12;i++){
                    for(let j=1;j<=scope.dayOfMonths[i];j++){
                        //get the start position of the first day of the first week of a month
                        if(scope.temp.length){
                            scope.week=scope.week.concat(scope.temp);
                            scope.temp=[];
                        }
                        //if the number of days is 7, put it to weeks array


                        if(scope.week.length==7){

                            scope.weeks.push(scope.week);
                            scope.week=[];

                        }


                        scope.week.push(j);
                        if(j==scope.dayOfMonths[i]){
                            if(scope.week.length<7){
                                p=scope.week.length;
                                while(p>0){
                                    scope.temp.push('');
                                    p--;
                                }

                            }


                            scope.weeks.push(scope.week);
                            scope.month.push(scope.weeks);
                            scope.weeks=[];
                            scope.week=[];
                            // console.log(scope.month);
                        }


                    }

                }

                for(let m=0;m<12;m++){
                    scope.obj[m]={};
                    scope.obj[m].name=scope.monthArray[m];
                    scope.obj[m].days=scope.month[m];

                }
              


            }
            scope.populate();

        },
        templateUrl:'year.html'
    }

})
