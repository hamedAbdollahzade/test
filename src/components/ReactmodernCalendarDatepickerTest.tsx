import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const ReactmodernCalendarDatepickerTest = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [event, setEvent] = useState(""); // برای نگهداری رویداد ورودی
  const [events, setEvents] = useState({}); // برای نگهداری رویدادها

  console.log("events ====>", events);

  const handleAddEvent = () => {
    if (selectedDay && event) {
      const dateKey = `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`;
      // اگر این تاریخ در رویدادها موجود نباشد، آن را ایجاد می‌کنیم
      setEvents((prevEvents) => ({
        ...prevEvents,
        [dateKey]: [...(prevEvents[dateKey] || []), event],
      }));
      setEvent(""); // پاک کردن ورودی بعد از اضافه کردن
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <h2>تقویم فارسی</h2>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        calendarClassName="my-calendar"
        locale="fa" // تنظیم زبان به فارسی
      />
      {selectedDay && (
        <div>
          <h3>رویدادها برای تاریخ انتخاب‌شده:</h3>
          <h3>{`${selectedDay.year} - ${selectedDay.month} - ${selectedDay.day} `}</h3>
          <ul>
            {events[
              `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`
            ]?.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="text"
        placeholder="رویداد جدید را وارد کنید"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <button onClick={handleAddEvent}>اضافه کردن رویداد</button>
    </div>
  );
};

export default ReactmodernCalendarDatepickerTest;
