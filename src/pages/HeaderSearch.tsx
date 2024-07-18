import { Outlet } from "react-router-dom";
import Calendar from "../components/Calendar";
import SearchCities from "../components/SearchCities";
import { useLazyFindTicketsQuery } from "../redux/templateApi";
import { useSelector } from "react-redux";

export default function HeaderSearch() {
  let [trigger, { data = [], error, isLoading }] = useLazyFindTicketsQuery();
  const inputsDate = useSelector((state: unknown) => state.main.firstStep.searchData);

  const findTicketsCB = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(inputsDate);
    const dates = inputsDate.dates
    const cities = inputsDate.departureCities

    trigger({ dates, cities });
  };

  return (
    <>
      <header className="flex flex-col justify-around w-full h-full bg-no-repeat bg-center bg-cover bg-[url('../../img/tickets_back.png')] bg-[rgba(0,0,0,0.7)]">
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
        <div className="flex w-full min-h-[330px] items-end justify-center ">
          <div className="flex w-full h-auto justify-center items-center">
            <div className="flex w-[80%] gap-5 bg-[rgba(41,41,41,0.8)] p-6">
              <form
                onSubmit={findTicketsCB}
                className="flex w-full flex-col gap-6 items-end font-normal"
              >
                <div className="flex w-full gap-5">
                  <div className="w-1/2 flex flex-col gap-2">
                    <p className="text-[20px] text-white">Направление</p>
                    <div className="flex gap-1">
                      <SearchCities />
                    </div>
                  </div>
                  <div className="w-1/2 grid gap-2 ">
                    <p className="text-[20px] text-white">Дата</p>
                    <div className="flex gap-[30px]">
                      <Calendar inputClass="input-template" dateInputDirection={'to'} />
                      <Calendar inputClass="input-template" dateInputDirection={'from'} />
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
    </>
  );
}
