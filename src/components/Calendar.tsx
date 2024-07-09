import { useEffect, useRef, useState } from "react";
import VanillaCalendar from "vanilla-calendar-pro";
import { IOptions } from "vanilla-calendar-pro/types";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";
import '../css/Calendar.css'

const config: IOptions = {
  input: true,
  type: "default",
  settings: {
    lang: 'RU',
    range: {
      disablePast: true,
    },
    // selection: {
    //   day: "multiple-ranged",
    // },
    visibility: {
      daysOutside: false,
      theme: 'light',
    },
  },
  actions: {
    // changeToInput(e, self) {
    //   if (!self.HTMLInputElement) return;
    //   if (self.selectedDates[1]) {
    //     self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
    //     self.HTMLInputElement.value = `${self.selectedDates[0]} — ${
    //       self.selectedDates[self.selectedDates.length - 1]
    //     }`;
    //   } else if (self.selectedDates[0]) {
    //     self.HTMLInputElement.value = self.selectedDates[0];
    //   } else {
    //     self.HTMLInputElement.value = "";
    //   }
    // },
    changeToInput(e, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates[0]) {
        self.HTMLInputElement.value = self.selectedDates[0];
        self.hide();
      } else {
        self.HTMLInputElement.value = '';
      }
    },
  },
};

interface calendarProps {
  inputClass: string;
}

export default function Calendar({ inputClass }: calendarProps) {
  const calendarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new VanillaCalendar(calendarRef.current, config);
      calendar.init()
    }
  }, []); 

  return (
    <>
    <input
      ref={calendarRef}
      placeholder="ДД/ММ/ГГ"
      className={`${inputClass} bg-[url('../../vecs/calendar_logo.svg')]`}
      type="text"
    />
    </>
  );
}
