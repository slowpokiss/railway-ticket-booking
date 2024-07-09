import { useState } from "react";
import Calendar from "./Calendar";

interface passengerProps {
  first?: boolean;

}

function Passenger({ first }: passengerProps) {
  const [turn, setTurn] = useState(true);

  return (
    <>
      <div className="w-full border border-[#C4C4C4]">
        <div className="flex justify-between items-center py-4 px-5 bg-[#F9F9F9] text-[18px]">
          <div className="flex items-center gap-4">
            <img
              className={`w-[20px] h-[20px] cursor-pointer`}
              onClick={() => setTurn(!turn)}
              src={`../../vecs/${!turn ? "minus" : "plus"}.svg`}
              alt=""
            />
            <p>Пассажир 1</p>
          </div>
          <img
            className="cursor-pointer w-[15px] h-[15px]"
            src="../../vecs/cross.svg"
            alt="cross"
          />
        </div>
        <div
          className={`${
            turn ? "hidden" : ""
          } flex flex-col bg-white w-full border-t-2 border-b-2 border-dotted`}
        >
          <div className="flex flex-col gap-7 border-b-2 p-7 border-dotted">
            <select
              className="w-[calc(33.333%-1rem)] passengers-input mb-7"
              name="passengers-input"
            >
              <option value="adult">Взрослый</option>
              <option value="child">Ребенок</option>
            </select>
            <div className="grid grid-cols-3 gap-[22px]">
              <div className="flex flex-col">
                <p className="text-[#928F94]">Фамилия</p>
                <input type="text" className="passengers-input" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#928F94]">Имя</p>
                <input type="text" className="passengers-input" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#928F94]">Отчество</p>
                <input type="text" className="passengers-input" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col">
                <p className="text-[#928F94]">Пол</p>
                <div className="flex font-bold cursor-pointer  ">
                  <div className="border-[2px] border-r-[1px] border-[#928F94] rounded-l-[5px] text-[20px] py-1 px-5 bg-[#FFA800]  ">
                    М
                  </div>
                  <div className="border-[2px] border-l-[1px] border-[#928F94] rounded-r-[5px] text-[20px] py-1 px-5 ">
                    Ж
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#928F94]">Дата рождения</p>
                <Calendar inputClass={"passengers-input input-template"} />
              </div>
            </div>
            <label className="ml-2 w-fit flex gap-4 container select-none">
              <input type="checkbox" className="big-checkbox" />
              <p>ограниченная подвижность</p>
            </label>
          </div>
          <div className="flex h-full border-b-2 p-7 border-dotted gap-5">
            <div className="h-full">
              <p className="text-[#928F94] leading-normal">Тип документа</p>
              <select className="passengers-input" name="passengers-input">
                <option value="passport">Паспорт</option>
                <option value="child-passport">Свидетельство</option>
              </select>
            </div>
            <div className="flex flex-col">
              <p className="text-[#928F94]">Серия</p>
              <input
                type="tel"
                placeholder="____"
                maxLength={4}
                className="passengers-input tracking-widest"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#928F94]">Номер</p>
              <input
                type="tel"
                placeholder="______"
                name="passport-number"
                maxLength={6}
                className="passengers-input tracking-widest"
                pattern="\d{6}"
              />
            </div>
          </div>
          <div className="p-5 ml-auto">
            <div className="btn-template  border-black py-2 px-4 text-black ">
              Следующий пассажир
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PassengersList() {
  const [list, setList] = useState([]);

  return (
    <>
    <div className="flex flex-col gap-5">
      <Passenger />
      <Passenger />
        {/* {list.map(() => {
          return <Passenger />;
        })} */}

        <div className="flex cursor-pointer border border-[#C4C4C4] justify-between items-center py-4 px-5 bg-[#F9F9F9] text-[18px]">
          <p>Добавить пассажира</p> 
          <img
            className="cursor-pointer w-[20px] h-[20px]"
            src="../../vecs/plus.svg"
            alt="cross"
          />
        </div>
    </div>
    </>
  );
}
