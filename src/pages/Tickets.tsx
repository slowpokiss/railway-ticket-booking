import { Outlet } from "react-router-dom";

export default function Tickets() {
  return (
    <>
      <header className="flex flex-col justify-around overflow-hidden w-full h-full bg-no-repeat bg-center bg-cover bg-[url('../../img/tickets_back.png')] bg-[rgba(0,0,0,0.7)]">
        <div className="head-first">
          <div className="w-full text-[1.31rem] font-bold text-white py-[6px] px-44 bg-[rgba(0,0,0,0.5)] ">
            Лого
          </div>
          <nav className="w-full h-auto bg-[rgba(41,41,41,1)]">
            <ul className="flex gap-10 w-auto h-fit mx-44 py-4">
              <li className="text-white text-[1.31rem]">О нас</li>
              <li className="text-white text-[1.31rem]">Как это работает</li>
              <li className="text-white text-[1.31rem]">Отзывы</li>
              <li className="text-white text-[1.31rem]">Контакты</li>
            </ul>
          </nav>
        </div>

        <div className="flex min-h-[330px] items-end justify-center ">
          <div className="flex flex-roe h-auto justify-center items-center w-full gap-24">
            <div className="flex flex-col gap-5 bg-[rgba(41,41,41,0.8)] p-6">
              <form className="flex flex-col gap-6 items-end">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] text-white">Направление</p>
                    <div className="flex gap-1">
                      <input
                        placeholder="Откуда"
                        className="input-template bg-[url('../../public/vecs/geo_icon.svg')]"
                        type="text"
                      />
                      <img src="../vecs/switch_icon.svg" alt="switch" />
                      <input
                        placeholder="Куда"
                        className="input-template bg-[url('../../public/vecs/geo_icon.svg')]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <p className="text-[20px] text-white">Дата</p>
                    <div className="flex gap-[30px]">
                      <input
                        placeholder="ДД/ММ/ГГ"
                        className="input-template bg-[url('../../public/vecs/calendar_logo.svg')]"
                        type="text"
                      />
                      <input
                        placeholder="ДД/ММ/ГГ"
                        className="input-template bg-[url('../../public/vecs/calendar_logo.svg')]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="НАЙТИ БИЛЕТЫ"
                  className="btn-template btn-orange bg-orange border-orange text-black "
                />
              </form>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
      {/* <main>
        <div className="steps overflow-hidden flex w-full text-white ">
          <div className="arrow arrow-active gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem] ">1</div>
            Билеты
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">2</div>
            Пассажиры
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">3</div>
            Оплата
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">4</div>
            Проверка
          </div>
        </div>
        <div className="">
          <div className="date"></div>
          <div className="trains"></div>
        </div>
      </main> */}
    </>
  );
}
