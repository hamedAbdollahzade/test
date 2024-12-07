import React, { useState } from 'react';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/fa';


moment.locale('fa', {
     calendarType: 'jalali',
  weekdays: [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
  ],
  weekdaysShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  weekdaysMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  months: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ],
  monthsShort: [
    'ف',
    'ار',
    'خ',
    'ت',
    'م',
    'ش',
    'م',
    'آ',
    'آ',
    'د',
    'ب',
    'ا',
  ],
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  calendar: {
    sameDay: '[امروز ساعت] LT',
    nextDay: '[فردا ساعت] LT',
    nextWeek: 'dddd [ساعت] LT',
    lastDay: '[دیروز ساعت] LT',
    lastWeek: 'dddd [گذشته ساعت] LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'در %s',
    past: '%s پیش',
    s: 'چند ثانیه',
    m: 'یک دقیقه',
    mm: '%d دقیقه',
    h: 'یک ساعت',
    hh: '%d ساعت',
    d: 'یک روز',
    dd: '%d روز',
    M: 'یک ماه',
    MM: '%d ماه',
    y: 'یک سال',
    yy: '%d سال',
  },
  week: {
    dow: 6, // Saturday is the first day of the week.
    doy: 12, // The week that contains Jan 1st is the first week of the year.
  },
});





const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'جلسه مهم',
      allDay: false,
      start: new Date(2023, 11, 25, 10, 0),
      end: new Date(2023, 11, 25, 12, 0),
    },
    // ...other events
  ]);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: 500, margin: "50px" }}
      defaultDate={new Date()}
      defaultView="month"
      rtl={true}
    />
  );
};

export default MyCalendar;