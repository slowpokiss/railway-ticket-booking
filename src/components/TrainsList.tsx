import {
  availableSeatsInterface
} from "../intefaces/trainCardInterface";
import { fromUnixTime, format } from "date-fns";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLazyGetTrainOptionsQuery } from "../redux/templateApi";


const availableSeatsObj = {
  first: "Люкс",
  second: "Купе",
  third: "Плацкарт",
  fourth: "Сидячий",
};

export default function TrainsList() {
  const trainsListData = useSelector((state: unknown) => state.main.mainData)
  // let [trigger, { data = [] }] = useLazyGetTrainOptionsQuery()
  const dispatch = useDispatch();
  


  return (
    <>
      <div className="filters flex justify-between items-center text-[#928F94]">
        <div className="">Найдено: {trainsListData.total_count}</div>
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
        {trainsListData.total_count
          ? trainsListData.items.map((item: any, ind: number) => {
              const fromDatetime = fromUnixTime(item.departure.from.datetime);
              const toDatetime = fromUnixTime(item.departure.to.datetime);
              const travelTime = fromUnixTime(item.departure.duration);

              const formattedFromDatetime = format(fromDatetime, "HH:mm");
              const formattedToDatetime = format(toDatetime, "HH:mm");
              const formattedTravelTime = format(travelTime, "HH : mm");

              return (
                <div key={item.departure._id} className="train-card grid grid-cols-[20%_50%_30%] bg-white border border-[#928F94] shadow-lg">
                  <div className="flex flex-col gap-2 items-center justify-center bg-[#E4E0E9] p-2">
                    <div className="flex flex-col items-center">
                      <img
                        src="../vecs/train.svg"
                        className="h-[55px] w-[55px]"
                        alt="train"
                      />
                      <div className="text-center text-[20px] font-semibold">
                        {item.departure.train.name}
                      </div>
                    </div>
                    <div className="flex flex-col text-[14px]">
                      {/* <p className="text-[#928F94]">Адлер →</p> */}
                      {item.departure.from.city.name} →
                      <br />
                      {item.departure.to.city.name}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col gap-10 border-r border-[#928F94]">
                    <div className="departure flex justify-between items-center">
                      <div className="from w-fit text-[16px]">
                        <div className="time text-[20px] font-bold">
                          {formattedFromDatetime}
                        </div>
                        <div className="leading-none">
                          <div className="">
                            {item.departure.from.city.name}
                          </div>
                          <div className="text-[#928F94]">
                            {item.departure.from.railway_station_name}
                          </div>
                        </div>
                      </div>
                      <div className="time flex flex-col items-center ">
                        <div className="text-[#928F94]">{formattedTravelTime}</div>
                        <img
                          src="../vecs/arrow_r_orange.svg"
                          className="h-[30px] w-[30px]"
                          alt="train"
                        />
                      </div>
                      <div className="to w-fit text-[16px]">
                        <div className="time text-[20px] font-bold">
                          {formattedToDatetime}
                        </div>
                        <div className="leading-none">
                          <div className="">{item.departure.to.city.name}</div>
                          <div className="text-[#928F94]">
                            {item.departure.to.railway_station_name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 p-4 justify-between">
                    <div className="comfort-options">
                    {Object.entries(item.available_seats_info).map(
                          (el: [string, unknown | number], ind: number) => {
                            const seatType =
                              availableSeatsObj[
                                el[0] as keyof availableSeatsInterface
                              ];
                            return (
                              <div className="flex items-center w-full" key={ind}>
                                <div className="w-1/2 flex justify-between">
                                  <div className="text-[#3E3C41]">
                                    {seatType}
                                  </div>
                                  <div className="text-orange font-semibold">
                                    {String(el[1])}
                                  </div>
                                </div>
                                <div className="w-1/2 flex items-center  justify-end gap-1">
                                  от
                                  <div className="font-bold text-[22px] text-black">
                                    {item.min_price}
                                  </div>
                                  <p className="text-[22px]">₽</p>
                                </div>
                              </div>
                            );
                          }
                    )}

                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex justify-between items-center text-[#928F94]">
                        
                        <div className="flex w-fit gap-2">
                          <img
                            src="../vecs/wifi.svg"
                            className={`h-[20px] ${item.have_wifi ? 'block' : 'hidden'}`}
                            alt="wifi"
                          />
                          <img
                            src="../vecs/express.svg"
                            className={`h-[20px] ${item.is_express ? 'block' : 'hidden'}`}
                            alt="express"
                          />
                          <img
                            src="../vecs/cup.svg"
                            className={`h-[20px]`}
                            alt="cup"
                          />
                        </div>

                      </div>
                      <Link
                        // onClick={ async () => {
                        //   await trigger({
                        //     trainId: item.departure._id,
                        //     have_first_class: item.have_first_class,
                        //     have_second_class: item.have_second_class,
                        //     have_third_class: item.have_third_class,
                        //     have_fourth_class: item.have_fourth_class,
                        //     have_wifi: item.have_wifi,
                        //     have_air_conditioning: item.have_air_conditioning,
                        //   });
                        // }}
                        to={`/booking/${item.departure._id}`}
                        className="btn-template btn-orange text-white border-orange bg-orange py-[2px] px-5"
                      >
                        Выбрать места
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

