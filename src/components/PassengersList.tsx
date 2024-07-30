import { useState } from "react";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  initialStateInterface,
  updatePassengersData,
  setPassengersData
} from "../redux/mainSlice";

interface passengerProps {
  passData: any;
  onDeletePassenger: (id: number) => void;
  elementId: number;
}


function Passenger({ passData, onDeletePassenger, elementId }: passengerProps) {
  const dispatch = useDispatch();
  const [openState, setOpenState] = useState(true);

  const passengersItem = useSelector(
    (state: {main: initialStateInterface}) => state.main.secondStep.passengersData
  )[elementId];


  return (
    <div className="w-full border border-[#C4C4C4]">
      <div className="flex justify-between items-center py-4 px-5 bg-[#F9F9F9] text-[18px]">
        <div
          className="cursor-pointer select-none flex items-center gap-4"
          onClick={() => setOpenState(!openState)}
        >
          <img
            className={`w-[20px] h-[20px] cursor-pointer`}
            src={`../../vecs/${!openState ? "minus" : "plus"}.svg`}
            alt=""
          />
          <p>Пассажир {elementId + 1}</p>
        </div>
        <img
          onClick={() => onDeletePassenger(elementId)}
          className="cursor-pointer w-[15px] h-[15px]"
          src="../../vecs/cross.svg"
          alt="cross"
        />
      </div>
      <div
        className={`${
          openState ? "hidden" : ""
        } flex flex-col bg-white w-full border-t-2 border-b-2 border-dotted`}
      >
        <div className="flex flex-col gap-7 border-b-2 p-7 border-dotted">
          <select
            defaultValue={`${passData.age === "adult" ? "adult" : "child"}`}
            className="w-[calc(33.333%-1rem)] passengers-input mb-7"
            name="passengers-input"
          >
            <option value="adult">Взрослый</option>
            <option value="child">Ребенок</option>
          </select>
          <div className="grid grid-cols-3 gap-[22px]">
            <div className="flex flex-col">
              <p className="text-[#928F94]">Фамилия</p>
              <input
                required
                value={passengersItem.familia}
                onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setPassengersData({
                      inputType: "familia",
                      id: elementId,
                      value: ev.target.value,
                    })
                  )
                }
                type="text"
                className="passengers-input"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#928F94]">Имя</p>
              <input
                required
                value={passengersItem.name}
                onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setPassengersData({
                      inputType: "name",
                      id: elementId,
                      value: ev.target.value,
                    })
                  )
                }
                type="text"
                className="passengers-input"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#928F94]">Отчество</p>
              <input
                required
                value={passengersItem.surName}
                onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setPassengersData({
                      inputType: "surName",
                      id: elementId,
                      value: ev.target.value,
                    })
                  )
                }
                type="text"
                className="passengers-input"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col">
              <p className="text-[#928F94]">Пол</p>
              <div className="flex font-bold cursor-pointer">
                <div
                  onClick={() =>
                    dispatch(
                      setPassengersData({
                        inputType: "gender",
                        id: elementId,
                        value: "male",
                      })
                    )
                  }
                  className={`${
                    passengersItem.gender === "male" ? "bg-[#FFA800]" : ""
                  } border-[2px] border-r-[1px] border-[#928F94] rounded-l-[5px] text-[20px] py-1 px-5 `}
                >
                  М
                </div>
                <div
                  onClick={() =>
                    dispatch(
                      setPassengersData({
                        inputType: "gender",
                        id: elementId,
                        value: "female",
                      })
                    )
                  }
                  className={`${
                    passengersItem.gender === "female" ? "bg-[#FFA800]" : ""
                  } border-[2px] border-l-[1px] border-[#928F94] rounded-r-[5px] text-[20px] py-1 px-5 `}
                >
                  Ж
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#928F94]">Дата рождения</p>
              <Calendar
                onInput={(data: string | undefined) => 
                  dispatch(
                  setPassengersData({
                    inputType: "birthday",
                    id: elementId,
                    value: data,
                  }))
                }
                past={true}
                inputClass={"passengers-input input-template"}
              />
            </div>
          </div>
          <label className="ml-2 w-fit flex gap-4 container select-none">
            <input type="checkbox" className="big-checkbox" />
            <p>ограниченная подвижность</p>
          </label>
        </div>
        <div className="flex h-full w-full border-b-2 p-5 border-dotted ">
          <div className="flex w-full gap-5">
            <div className="w-1/3 flex flex-col">
              <p className="text-[#928F94] leading-normal">Тип документа</p>
              <select
                defaultValue={"passport"}
                onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
                  dispatch(
                    setPassengersData({
                      inputType: "document",
                      id: elementId,
                      value: ev.target.value,
                    })
                  )
                }
                className="passengers-input"
                name="passengers-input"
              >
                <option value="passport">Паспорт</option>
                <option value="childPassport">Свидетельство</option>
              </select>
            </div>
            <div
              className={`${
                passengersItem.document !== "passport" ? "hidden" : ""
              }  w-1/3 flex flex-col`}
            >
              <p className="text-[#928F94]">Серия</p>
              <input
                required
                value={passengersItem.docSeria}
                onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setPassengersData({
                      inputType: "docSeria",
                      id: elementId,
                      value: ev.target.value,
                    })
                  )
                }
                type="tel"
                placeholder="____"
                maxLength={4}
                className={`passengers-input tracking-widest`}
              />
            </div>
            <div className="w-1/3 flex flex-col">
              <p className="text-[#928F94]">Номер</p>
              <input
                required
                value={passengersItem.docNumber}
                onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setPassengersData({
                      inputType: "docNumber",
                      id: elementId,
                      value: ev.target.value,
                    })
                  )
                }
                type="tel"
                placeholder={`${
                  passengersItem.document !== "childPassport"
                    ? "______"
                    : "____________"
                }`}
                name="passport-number"
                maxLength={passengersItem.document === "childPassport" ? 12 : 6}
                className="passengers-input tracking-widest"
                pattern={
                  passengersItem.document === "childPassport"
                    ? "d{1,12}"
                    : "d{6}"
                }
              />
            </div>
          </div>
        </div>
        <div className="p-5 ml-auto">
          <div
            onClick={() => setOpenState(true)}
            className="btn-template  border-black py-2 px-4 text-black "
          >
            Следующий пассажир
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PassengersList() {
  const dispatch = useDispatch();

  const passengersList = useSelector(
    (state: {main: initialStateInterface}) => state.main.secondStep.passengersData
  );

  const onDeletePassenger = (id: number) => {
    dispatch(updatePassengersData({ id, actionType: "delete" }));
  };

  const onAddPassenger = () => {
    dispatch(updatePassengersData({ actionType: "add" }));
  };

  return (
    <>
      <form className="flex flex-col gap-5">
        {passengersList.map((el, ind) => {
          return (
            <Passenger
              key={ind}
              elementId={ind}
              passData={el}
              onDeletePassenger={onDeletePassenger}
            />
          );
        })}

        <div
          onClick={onAddPassenger}
          className="flex cursor-pointer border border-[#C4C4C4] justify-between items-center py-4 px-5 bg-[#F9F9F9] text-[18px]"
        >
          <p>Добавить пассажира</p>
          <img
            className="cursor-pointer w-[20px] h-[20px]"
            src="../../vecs/plus.svg"
            alt="cross"
          />
        </div>
        <input
          type="submit"
          className="btn-template  border-black py-2 px-4 text-black "
        />
      </form>
    </>
  );
}
