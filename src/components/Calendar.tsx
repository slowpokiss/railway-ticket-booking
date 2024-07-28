import { useEffect, useRef, useState } from "react";
import VanillaCalendar from "vanilla-calendar-pro";
import { IOptions } from "vanilla-calendar-pro/types";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";
import "../css/Calendar.css";
import { useDispatch } from "react-redux";
import { setDepartureDates } from "../redux/mainSlice";

interface calendarProps {
  inputClass: string;
  dateInputDirection?: string
  past?: boolean;
}

export default function Calendar({ inputClass, dateInputDirection, past = false }: calendarProps) {
  const calendarRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const ticketsSearchConfig: IOptions = {
    input: true,
    type: "default",
    settings: {
      lang: "RU",
      range: {
        disablePast: !past,
      },
      visibility: {
        daysOutside: false,
        theme: "light",
      },
    },
    actions: {
      changeToInput(e, self) {
        const date = self.selectedDates[0]
        dispatch(setDepartureDates({dateInputDirection, date}))
        if (!self.HTMLInputElement) return;
        if (date) {
          self.HTMLInputElement.value = date;
          self.hide();
        } else {
          self.HTMLInputElement.value = "";
        }
      },
    },
  };

  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new VanillaCalendar(calendarRef.current, ticketsSearchConfig);
      calendar.init();
    }
  }, []);

  return (
    <>
      <input
        ref={calendarRef}
        placeholder="ДД/ММ/ГГ"
        name="dateInput"
        className={`${inputClass} bg-[url('../../vecs/calendar_logo.svg')]`}
        type="text"
        // required
      />
    </>
  );
}
