var datediff = require('date-diff');

var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthname = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'];

var strdate = '2019-01-02';
var curdate = strdate.split('-');
var date = new Date(curdate[0],curdate[1]-1,curdate[2]);

var sourcedate = new Date(2019,0,1);
var weekdata = getWeek(date,sourcedate);

console.log('week data = '+JSON.stringify(weekdata));

function getWeek(date,sourcedate) 
{
    var date_number = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth();

    var diff = new datediff(date,sourcedate);
    var day_of_week = date.getDay();

    var total_days = Math.ceil(diff.days());
    var week = Math.floor(total_days/7) + 1 ;
    var day = total_days % 7;
    
    var start_date = new Date(year,month,date_number - day );
    var week_start = monthname[start_date.getMonth()] + ' ' + start_date.getDate();    

    var end_date = new Date(year,month,date_number - day + 6);
    var week_end = monthname[end_date.getMonth()] + ' ' + end_date.getDate();

    var weekdetails = {
        week_number : week,
        week_start_date : week_start,
        week_end_date : week_end,
        date_day : weekdays[day_of_week]
    }
    return weekdetails;
}
