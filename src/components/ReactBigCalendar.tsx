import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fa"; // بارگذاری locale فارسی
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import 'moment-timezone'

moment.tz.setDefault('Asia/Tehran')
// end optional time zone support

// تنظیم locale moment به فارسی
moment.locale("fa");

// Localizer برای moment
const localizer = momentLocalizer(moment);

// تنظیمات برای مدال
Modal.setAppElement("#root"); // به آنالیز صفحه خود توجه کنید

const PersianCalendar = () => {
  const [events, setEvents] = useState([]); // حالت برای رویدادها
  const [eventTitle, setEventTitle] = useState(""); // حالت برای عنوان رویداد
  const [selectedDate, setSelectedDate] = useState(null); // حالت برای تاریخ انتخاب شده
  const [modalIsOpen, setModalIsOpen] = useState(false); // حالت برای وضعیت باز بودن مدال

  const openModal = (start) => {
    setSelectedDate(start);
    setEventTitle(""); // پاک کردن عنوان قبلی
    setModalIsOpen(true); // باز کردن مدال
  };

  const closeModal = () => {
    setModalIsOpen(false); // بستن مدال
  };

  const handleAddEvent = () => {
    if (selectedDate && eventTitle) {
      const newEvent = {
        title: eventTitle,
        start: selectedDate,
        end: selectedDate,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      closeModal(); // بستن مدال پس از افزودن رویداد
    }
  };

  return (
    <div>
      <h1>تقویم فارسی</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={({ start }) => openModal(start)} // مدیریت کلیک روی روز
        style={{ height: 500, margin: "50px" }}
        messages={{
          next: "بعدی",
          previous: "قبلی",
          today: "امروز",
          month: "ماه",
          week: "هفته",
          day: "روز",
          agenda: "برنامه",
          date: "تاریخ",
          time: "زمان",
          event: "رویداد",
          allDay: "تمام روز",
          sunday: "یکشنبه",
          monday: "دوشنبه",
          tuesday: "سه‌شنبه",
          wednesday: "چهارشنبه",
          thursday: "پنج‌شنبه",
          friday: "جمعه",
          saturday: "شنبه",
        }}
      />

      {/* مدال برای افزودن رویداد */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Event"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            position:"fixed", 
            zIndex:"999",
          },
          content: {
            top: "40%",
            left: "40%",
            right: "40%",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>افزودن رویداد جدید</h2>
        <input
          type="text"
          placeholder="عنوان رویداد"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <button onClick={handleAddEvent}>اضافه کردن رویداد</button>
        <button onClick={closeModal}>بستن</button>
      </Modal>
    </div>
  );
};

export default PersianCalendar;
