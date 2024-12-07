import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import faLocale from "@fullcalendar/core/locales/fa";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const FullCalendarTest = () => {
  const [events, setEvents] = useState([]); // State برای ذخیره رویدادها
  const [eventTitle, setEventTitle] = useState(""); // State برای عنوان رویداد
  const [selectedDate, setSelectedDate] = useState(null); // State برای تاریخ انتخاب‌شده
  // console.log(selectedDate);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr); // تاریخ انتخاب‌شده را ذخیره می‌کند
    setEventTitle(""); // عنوان رویداد را پاک می‌کند
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && eventTitle) {
      const newEvent = {
        title: eventTitle,
        start: selectedDate,
        allDay: true,
      };
      // اضافه کردن رویداد جدید به state
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setSelectedDate(null); // پاک کردن تاریخ انتخاب‌شده
    }
  };

  return (
    <div>
      <h1>FullCalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[faLocale]}
        locale={faLocale}
        direction="rtl"
        firstDay={6}
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        dateClick={handleDateClick} // تابع برای تاریخ کلیک شده
      />

      {selectedDate && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              عنوان رویداد:
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">اضافه کردن رویداد</button>
        </form>
      )}
    </div>
  );
};

export default FullCalendarTest;
