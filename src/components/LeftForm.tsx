


export default function LeftForm() {
  return (
    <>
      <div className="form flex flex-col  bg-[#3E3C41] mb-20 text-white text-[22px]">
        <div className="flex flex-col text-[18px] gap-4 border-b border-white p-7">
          <div className="">
            <div>Дата поездки</div>
            <input
              type="text"
              className="input-template py-1 px-3 bg-[url('../../public/vecs/calendar_logo.svg')]"
            />
          </div>
          <div className="">
            <div>Дата возвращения</div>
            <input
              type="text"
              className="input-template py-1 px-3 bg-[url('../../public/vecs/calendar_logo.svg')]"
            />
          </div>
        </div>
        <ul className="flex justify-start flex-col text-[15px] gap-5 px-11 py-5 border-b border-white">
          <li className="flex gap-5 ">
            <img src="../vecs/kype.svg" alt="kype" />
            Купе
          </li>
          <li className="flex gap-5">
            <img src="../vecs/plazc.svg" alt="plazc" />
            Плацкарт
          </li>
          <li className="flex gap-5">
            <img src="../vecs/sitting.svg" alt="sitting" />
            Сидячий
          </li>
          <li className="flex gap-5">
            <img src="../vecs/luxury.svg" alt="luxury" />
            Люкс
          </li>
          <li className="flex gap-5">
            <img src="../vecs/wifi.svg" alt="wifi" />
            Wi-Fi
          </li>
          <li className="flex gap-5">
            <img src="../vecs/express.svg" alt="express" />
            Экспресс
          </li>
        </ul>
        <div className="flex flex-col border-b border-white">
          <div className="">Стоимость</div>
        </div>
        <div className="flex p-5 text-[18px] justify-between border-b border-white">
          <div className="flex gap-2">
            <img src="../vecs/forward_icon.svg" alt="forward" />
            <p className="font-medium">Туда</p>
          </div>
          <img
            className="cursor-pointer"
            src="../vecs/collapse.svg"
            alt="collapse"
          />
        </div>
        <div className="flex p-5 text-[18px] justify-between">
          <div className="flex gap-2">
            <img src="../vecs/backward_icon.svg" alt="backward" />
            <p className="font-medium">Обратно</p>
          </div>
          <img
            className="cursor-pointer"
            src="../vecs/collapse.svg"
            alt="collapse"
          />
        </div>
      </div>
    </>
  );
}
