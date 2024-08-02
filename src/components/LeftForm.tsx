import { useState } from "react";
import "../css/Switcher.css";
import DoubleSlider from "./DoubleSlider";
import { useSelector } from "react-redux";
import { initialStateInterface } from "../redux/mainSlice";

interface filterTimeProps {
  direction?: string;
  title?: string;
}

function FilterTime({ direction, title }: filterTimeProps) {
  const [extensionState, setExtensionState] = useState(false);

  const onExtendClick = (ev: React.MouseEvent<HTMLImageElement>) => {
    setExtensionState(!extensionState);
  };

  return (
    <>
      <div className="border-b border-white">
        <div className="flex p-5  justify-between">
          <div className="flex gap-2">
            <img src={`../vecs/${direction}_icon.svg`} alt={direction} />
            <p className="font-semibold">{title}</p>
          </div>

          <img
            onClick={onExtendClick}
            className={`cursor-pointer`}
            src={`../vecs/${extensionState ? "collapse" : "extend"}.svg`}
            alt="collapse"
          />
        </div>

        <div className={`${extensionState ? "" : "hidden"}`}>
          <div className="p-5 text-[16px]">
            <p>Время отбытия</p>
            <DoubleSlider type="time" minim={0} maxim={84600} />
          </div>
          <div className="p-5 text-[16px]">
            <p className="text-end">Время прибытия</p>
            <DoubleSlider type="time" minim={0} maxim={84600} />
          </div>
        </div>
      </div>
    </>
  );
}

export default function LeftForm() {
  const firstStep = useSelector(
    (state: { main: initialStateInterface }) => state.main.firstStep
  );

  return (
    <>
      <div className="form flex flex-col  bg-[#3E3C41] mb-20 text-white text-[22px]">
        <div className="flex flex-col text-[18px] gap-4 border-b border-white p-7">
          <div className="">
            <div>Дата поездки</div>
            <input
              disabled
              type="text"
              value={
                firstStep.searchData.dates.firstDate
                  ? firstStep.searchData.dates.firstDate
                  : ""
              }
              className="text-white input-template py-1 px-3 bg-[url('../../vecs/calendar_logo.svg')]"
            />
          </div>
          <div className="">
            <div>Дата возвращения</div>
            <input
              type="text"
              disabled
              value={
                firstStep.searchData.dates.lastDate
                  ? firstStep.searchData.dates.lastDate
                  : ""
              }
              className="text-white input-template py-1 px-3 bg-[url('../../vecs/calendar_logo.svg')]"
            />
          </div>
        </div>
        <ul className="flex justify-start flex-col text-[15px] gap-5 px-[10%] py-5 border-b border-white">
          <li className="flex justify-between">
            <div className="w-1/2 flex justify-between">
              <img src="../vecs/kype.svg" alt="kype" />
              <p className="">Купе</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>

          <li className="flex justify-between">
            <div className="w-[60%] flex justify-between">
              <img src="../vecs/plazc.svg" alt="plazc" />
              <p className="">Плацкарт</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(ev.target.checked);
                }}
              />
              <span className="slider round"></span>
            </label>
          </li>

          <li className="flex justify-between">
            <div className="w-1/2 flex justify-between">
              <img src="../vecs/sitting.svg" alt="sitting" />
              <p className="">Сидячий</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>

          <li className="flex justify-between">
            <div className="w-1/2 flex justify-between">
              <img src="../vecs/luxury.svg" alt="luxury" />
              <p className="">Люкс</p>
            </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>

          <li className="flex justify-between">
            <div className="w-1/2 flex justify-between">
              <img src="../vecs/wifi.svg" alt="wifi" />
              <p className="">Wi-Fi</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>

          <li className="flex justify-between">
            <div className="w-1/2 flex justify-between">
              <img src="../vecs/express.svg" alt="express" />
              <p className="">Экспресс</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <div className="flex flex-col border-b p-5 border-white">
          <div className="mb-3">Стоимость</div>
          <DoubleSlider minim={1600} maxim={9900} />
        </div>

        <FilterTime direction="forward" title="Туда" />
        <FilterTime direction="backward" title="Обратно" />
      </div>
    </>
  );
}
