


export default function TrainsOptions() {
  return (
    <>
      <div className="filters flex justify-between items-center text-[#928F94]">
        <div className="">Найдено: 20</div>
        <div className="flex gap-6 items-center">
          <form>
            <label htmlFor="city-select">сортировать по: </label>
            <select className="text-black bg-transparent">
              <option value="time">времени</option>
              <option value="value">стоимости</option>
              <option value="duration">длительности</option>
            </select>
          </form>
          <div className="flex items-center">
            показывать по:
            <div className="py-1 px-2 cursor-pointer">5</div>
            <div className="py-1 px-2 cursor-pointer text-black font-bold">
              10
            </div>
            <div className="py-1 px-2 cursor-pointer">20</div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="train-card grid grid-cols-[20%_50%_30%] bg-white border border-[#928F94] shadow-lg">
          <div className="flex flex-col gap-2 items-center justify-center bg-[#E4E0E9] p-2">
            <div className="">
              <div className="flex border-[2px] p-3 border-white rounded-[50px]">
                <img
                  src="../vecs/train.svg"
                  className="h-[30px] w-[30px]"
                  alt="train"
                />
              </div>
              <div className="text-center text-[20px] font-semibold">116C</div>
            </div>
            <div className="flex flex-col text-[14px]">
              <p className="text-[#928F94]">Адлер →</p>
              Москва →
              <br />
              Санкт-Петербург
            </div>
          </div>
          <div className="p-7 flex flex-col gap-10 border-r border-[#928F94]">
            <div className="departure flex justify-between items-center">
              <div className="from w-fit text-[16px]">
                <div className="time text-[20px] font-bold">00:10</div>
                <div className="leading-none">
                  <div className="">Москва</div>
                  <div className="text-[#928F94]">Курский вокзал</div>
                </div>
              </div>
              <div className="">
                <div className="text-[#928F94]">9 : 42</div>
                <img
                  src="../vecs/arrow_r_orange.svg"
                  className="h-[30px] w-[30px]"
                  alt="train"
                />
              </div>
              <div className="to w-fit text-[16px]">
                <div className="time text-[20px] font-bold">09:52</div>
                <div className="leading-none">
                  <div className="">Санкт-петербург</div>
                  <div className="text-[#928F94]">Ладожский вокзал</div>
                </div>
              </div>
            </div>
            <div className="destination flex justify-between items-center">
              <div className="from w-fit text-[16px]">
                <div className="time text-[20px] font-bold">00:10</div>
                <div className="leading-none">
                  <div className="">Москва</div>
                  <div className="text-[#928F94]">Курский вокзал</div>
                </div>
              </div>
              <div className="">
                <div className="text-[#928F94]">9 : 42</div>
                <img
                  src="../vecs/arrow_l_orange.svg"
                  className="h-[30px] w-[30px]"
                  alt="train"
                />
              </div>
              <div className="to w-fit text-[16px]">
                <div className="time text-[20px] font-bold">09:52</div>
                <div className="leading-none">
                  <div className="">Санкт-петербург</div>
                  <div className="text-[#928F94]">Ладожский вокзал</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 justify-between">
            <div className="comfort-options">
              <div className="flex justify-between items-center text-[#928F94]">
                <div className="w-1/2 flex justify-between">
                  <div className="text-[#3E3C41]">Сидячий</div>
                  <div className="text-orange font-semibold">88</div>
                </div>
                <div className="w-1/2 flex items-center justify-end gap-1">
                  от
                  <div className="font-bold text-[22px] text-black">2 500</div>
                  <p className="text-[22px]">₽</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[#928F94]">
                <div className="w-1/2 flex justify-between">
                  <div className="text-[#3E3C41]">Сидячий</div>
                  <div className="text-orange font-semibold">88</div>
                </div>
                <div className="w-1/2 flex items-center justify-end gap-1">
                  от
                  <div className="font-bold text-[22px] text-black">2 500</div>
                  <p className="text-[22px]">₽</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
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
              </div>
              <div className="btn-template btn-orange text-white border-orange bg-orange py-[2px] px-5">
                Выбрать места
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
