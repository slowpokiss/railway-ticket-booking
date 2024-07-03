import { useState } from "react";
import "../css/Switcher.css";

interface filterTimeProps {
  direction?: string;
  title?: string
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

        <div className={`${extensionState ? "block" : "hidden"}`}>
          <div className="p-5 text-[16px]">
            <p>Время отбытия</p>
            <input type="text" className="input-template text-[14px] p-2" />
          </div>
          <div className="p-5 text-[16px]">
            <p className="text-end">Время прибытия</p>
            <input type="text" className="input-template text-[14px] p-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default function LeftForm() {
  return (
    <>
      <div className="form flex flex-col  bg-[#3E3C41] mb-20 text-white text-[22px]">
        <div className="flex flex-col text-[18px] gap-4 border-b border-white p-7">
          <div className="">
            <div>Дата поездки</div>
            <input
              type="text"
              className="input-template py-1 px-3 bg-[url('../../vecs/calendar_logo.svg')]"
            />
          </div>
          <div className="">
            <div>Дата возвращения</div>
            <input
              type="text"
              className="input-template py-1 px-3 bg-[url('../../vecs/calendar_logo.svg')]"
            />
          </div>
        </div>
        <ul className="flex justify-start flex-col text-[15px] gap-5 px-[17%] py-5 border-b border-white">
          <li className="flex gap-7 justify-between">
            <img src="../vecs/kype.svg" alt="kype" />
            <p className="mr-auto">Купе</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="flex gap-7 justify-between">
            <img src="../vecs/plazc.svg" alt="plazc" />
            <p className="mr-auto">Плацкарт</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="flex gap-7 justify-between">
            <img src="../vecs/sitting.svg" alt="sitting" />
            <p className="mr-auto">Сидячий</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="flex gap-7 justify-between">
            <img src="../vecs/luxury.svg" alt="luxury" />
            <p className="mr-auto">Люкс</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="flex gap-7 justify-between">
            <img src="../vecs/wifi.svg" alt="wifi" />
            <p className="mr-auto">Wi-Fi</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="flex gap-7 justify-between">
            <img src="../vecs/express.svg" alt="express" />
            <p className="mr-auto">Экспресс</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <div className="flex flex-col border-b p-5 border-white">
          <div className="">Стоимость</div>
          <input type="text" className="input-template text-[14px] p-2" />
        </div>

        <FilterTime direction="forward" title="Туда" />
        <FilterTime direction="backward" title="Обратно" />
      </div>
    </>
  );
}
