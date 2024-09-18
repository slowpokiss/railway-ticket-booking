import { useEffect, useRef } from "react";
import VanillaCalendar from "vanilla-calendar-pro";
import { IOptions } from "vanilla-calendar-pro/types";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";
import "../css/Calendar.css";

interface calendarProps {
  inputClass: string;
  past?: boolean;
  data?: string
  dataId?: string;
  onInput?: (data: string | undefined, dataId: string | undefined) => void;
}

export default function Calendar({ inputClass, past = false, onInput, dataId }: calendarProps) {
  const calendarRef = useRef<HTMLInputElement>(null);

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
        if (onInput && date && e) {
          onInput(date, dataId);
        } 
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
        className={`${inputClass} bg-[url('../../tickets-booking/vecs/calendar_logo.svg')]`}
        type="text"
      />
    </>
  );
}
