import { useGetLastRoutesQuery } from "../redux/templateApi";
import { itemsInterface } from "../intefaces/trainCardInterface";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setParamsToUrlQuery,
  setStepsIndex,
  setDepartureCity,
} from "../redux/mainSlice";

export default function LastTickets() {
  const { data } = useGetLastRoutesQuery({});
  const dispatch = useDispatch();

  const onLastRouteClick = (route: itemsInterface) => {
    dispatch(
      setParamsToUrlQuery({
        from_city_id: route.departure.from.city._id,
        to_city_id: route.departure.to.city._id,
      })
    );
    dispatch(
      setDepartureCity({
        cityInputDirection: "toCity",
        value: route.departure.to.city.name,
        id: route.departure.to.city._id,
      })
    );
    dispatch(
      setDepartureCity({
        cityInputDirection: "fromCity",
        value: route.departure.from.city.name,
        id: route.departure.from.city._id,
      })
    );
    dispatch(setStepsIndex({ index: 1 }));
  };

  return (
    <div className="lasts flex flex-col gap-5 mb-5 text-[18px] cursor-pointer">
      <div className=" font-medium">ПОСЛЕДНИЕ ПОЕЗДКИ</div>

      <div className="flex flex-col gap-4">
        {data &&
          data.map((el: itemsInterface, ind: number) => {
            return (
              <Link
                to={"/booking"}
                onClick={() => onLastRouteClick(el)}
                key={ind}
                className="cursor-pointer card w-full p-3 flex flex-col gap-3 bg-white border border-[#928F94] shadow-lg"
              >
                <div className="flex flex-col ">
                  <div className="flex justify-between">
                    <div className="flex flex-col w-1/2">
                      <div className="text-[16px]">
                        {el.departure.from.city.name}
                      </div>
                      <div className="text-[#928F94] text-[13px]">
                        {el.departure.from.railway_station_name}
                      </div>
                    </div>
                    <div className="flex w-1/2 flex-col items-end">
                      <div className="text-[16px]">
                        {el.departure.to.city.name}
                      </div>
                      <div className="text-[#928F94] text-[13px] text-end">
                        {el.departure.to.railway_station_name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[#928F94]">
                  <div className="flex w-fit gap-2">
                    <img
                      src="../vecs/wifi.svg"
                      className={`h-[20px] ${
                        el.departure.have_wifi === true ? "block" : "hidden"
                      }`}
                      alt="wifi"
                    />
                    <img
                      src="../vecs/express.svg"
                      className={`h-[20px] ${
                        el.departure.is_express === true ? "block" : "hidden"
                      }`}
                      alt="express"
                    />
                    <img
                      src="../vecs/cup.svg"
                      className={`h-[20px]`}
                      alt="cup"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    от
                    <div className="font-bold text-[22px] text-orange">
                      {el.min_price} ₽
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
