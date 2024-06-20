import LeftForm from "../components/LeftForm";
import TrainsOptions from "../components/TrainsOptions";

function LastTickets() {
  return (
    <>
      <div className="lasts flex flex-col gap-5 text-[18px]">
        <div className=" font-medium">ПОСЛЕДНИЕ ПОЕЗДКИ</div>
        <ul className="flex flex-col gap-4">
          <li className="card w-full p-4 flex flex-col gap-3 bg-white border border-[#928F94] shadow-lg">
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2">
                  <div className="text-[16px]">Санкт-Петербург</div>
                  <div className="text-[#928F94] text-[13px]">
                    Курский возкал
                  </div>
                </div>
                <div className="flex w-1/2 flex-col items-end">
                  <div className="text-[16px]">Самара</div>
                  <div className="text-[#928F94] text-[13px] text-end">
                    Московский возкал
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[#928F94]">
              <div className="flex w-fit gap-2">
                <img src="../vecs/wifi.svg" className="h-[20px]" alt="wifi" />
                <img
                  src="../vecs/express.svg"
                  className="h-[20px]"
                  alt="express"
                />
                <img src="../vecs/cup.svg" className="h-[20px]" alt="cup" />
              </div>
              <div className="flex items-center gap-1">
                от
                <div className="font-bold text-[30px] text-orange">2 500 ₽</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Train() {
  return (
    <>
      <main className="">
        <div className="steps overflow-hidden flex w-full text-white ">
          <div className="arrow arrow-active gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem] ">
              1
            </div>
            Билеты
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
              2
            </div>
            Пассажиры
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
              3
            </div>
            Оплата
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
              4
            </div>
            Проверка
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 bg-[#F7F5F9] pt-12 px-28">
          <div className="col-span-1">
            <LeftForm />
            <LastTickets />
          </div>
          <div className="trains col-span-3">
            <TrainsOptions />
          </div>
        </div>
      </main>
    </>
  );
}
