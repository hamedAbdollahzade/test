import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const ReactmodernCalendarDatepickerTest = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div style={{ margin: "50px" }}>
      <h2>تقویم فارسی</h2>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        calendarClassName="my-calendar"
        locale="fa" // تنظیم زبان به فارسی
      />
      {selectedDay && (
        <p>
          تاریخ انتخاب شده:{" "}
          {`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
        </p>
      )}
    </div>
  );
};

export default ReactmodernCalendarDatepickerTest;
