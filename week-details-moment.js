var moment = require('moment');
var date = '2019-02-14';

var weekdata = getWeek(date);

console.log({
    week_number : weekdata.week_number,
    week_start_date : weekdata.week_start_date,
    week_end_date : weekdata.week_end_date,
    date_day : weekdata.date_day
});

function getWeek(date)
{
    moment(date).isoWeek(1);
    var from_date = moment(date).startOf('week');
    var to_date = moment(date).endOf('week');
    var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var monthname = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'];

    var weekdetails = {
        week_number : moment(date).week(),
        week_start_date : monthname[from_date.month()] + ' ' + from_date.date(),
        week_end_date : monthname[to_date.month()] + ' ' + to_date.date(),
        date_day : weekdays[moment(date).day()]
    }

    return weekdetails;
}


