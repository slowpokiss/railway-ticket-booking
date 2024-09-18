import { useState } from "react";
import "../css/Switcher.css";
import { useDispatch, useSelector } from "react-redux";
import { initialStateInterface, setParamsToUrlQuery } from "../redux/mainSlice";
import { RangeSliderTemplate, TimeRangeSliderTemplate } from "./DoubleSlider";
import { fromUnixTime, format, addSeconds } from "date-fns";

interface filterTimeProps {
  direction?: string;
  title?: string;
}

function FilterTime({ direction, title }: filterTimeProps) {
  const [extensionState, setExtensionState] = useState(false);
  const dispatch = useDispatch();

  const onExtendClick = () => {
    setExtensionState(!extensionState);
  };

  return (
    <>
      <div className="border-b border-white">
        <div className="flex p-5  justify-between">
          <div className="flex gap-2">
            <img src={`../../tickets-booking/vecs/${direction}_icon.svg`} alt={direction} />
            <p className="font-semibold">{title}</p>
          </div>

          <img
            onClick={onExtendClick}
            className={`cursor-pointer`}
            src={`../../tickets-booking/vecs/${extensionState ? "collapse" : "extend"}.svg`}
            alt="collapse"
          />
        </div>

        <div className={`${extensionState ? "" : "hidden"}`}>
          <div className="p-5 text-[16px]">
            <p>Время отбытия</p>
            <TimeRangeSliderTemplate
              onChangeComplete={(timeData: number[]) => {
                dispatch(
                  setParamsToUrlQuery({
                    [`start_${direction}_hour_to`]: timeData[0] / 3600,
                  })
                );
                dispatch(
                  setParamsToUrlQuery({
                    [`start_${direction}_hour_from`]: timeData[1] / 3600,
                  })
                );
              }}
              minim={0}
              maxim={84600}
            />
          </div>
          <div className="p-5 text-[16px]">
            <p className="text-end">Время прибытия</p>
            <TimeRangeSliderTemplate
              onChangeComplete={(timeData: number[]) => {
                dispatch(
                  setParamsToUrlQuery({
                    [`end_${direction}_hour_to`]: timeData[0] / 3600,
                  })
                );
                dispatch(
                  setParamsToUrlQuery({
                    [`end_${direction}_hour_from`]: timeData[1] / 3600,
                  })
                );
              }}
              minim={0}
              maxim={84600}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function TicketsInfo({ direction, title }: filterTimeProps) {
  const [extensionState, setExtensionState] = useState(true);

  const onExtendClick = () => {
    setExtensionState(!extensionState);
  };

  const currTrainData = useSelector(
    (state: { main: initialStateInterface }) => state.main.currTrainCardData
  );

  if (!currTrainData) {
    return;
  }

  const fromDatetime = currTrainData
    ? fromUnixTime(currTrainData.departure.from.datetime)
    : 0;
  const toDatetime = currTrainData
    ? fromUnixTime(currTrainData.departure.to.datetime)
    : 0;
  const travelTime = currTrainData
    ? addSeconds(new Date(0, 0, 0), currTrainData.departure.duration)
    : new Date(0);

  const formattedFromDatetime = format(fromDatetime, "HH:mm");
  const formattedToDatetime = format(toDatetime, "HH:mm");
  const formattedTravelTime = `${travelTime.getHours()}:${travelTime.getMinutes()}`;

  return (
    <>
      <div className="border-b border-white">
        <div className="flex p-5  justify-between">
          <div className="flex gap-2">
            <img src={`../../tickets-booking/vecs/${direction}_icon.svg`} alt={direction} />
            <p className="font-semibold">{title}</p>
          </div>

          <img
            onClick={onExtendClick}
            className={`cursor-pointer`}
            src={`../../tickets-booking/vecs/${extensionState ? "collapse" : "extend"}.svg`}
            alt="collapse"
          />
        </div>

        {currTrainData === undefined ? (
          <div className="">hhkhkh</div>
        ) : (
          <div className={`${extensionState ? "" : "hidden"}`}>
            <div className="flex flex-col gap-4 p-2 text-[16px]">
              <div className="flex justify-between">
                <p className="text-[#E5E5E5]">№ Поезда</p>
                <p className="font-semibold text-[22px]">
                  {currTrainData.departure.train.name.split("-")[1]}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#E5E5E5]">Название</p>
                <div className="">
                  {currTrainData.departure.train.name.split("-")[0]}
                </div>
              </div>
            </div>

            <div className="flex w-full justify-between items-center px-3 py-4">
              <div className="from w-fit text-[16px]">
                <div className="time text-[20px] font-bold">
                  {formattedFromDatetime}
                </div>
                <div className="text-[#928F94]">
                  {format(toDatetime, "dd.mm.yyyy")}
                </div>
              </div>
              <div className="">
                <div className="text-[14px]">{formattedTravelTime}</div>
                <img
                  src={`../../tickets-booking/vecs/arrow_${
                    direction === "departure" ? "r" : "l"
                  }_orange.svg`}
                  className="h-[30px] w-[30px]"
                  alt="train"
                />
              </div>
              <div className="to w-fit text-end text-[16px]">
                <div className="time text-[20px] font-bold">
                  {formattedToDatetime}
                </div>
                <div className="text-[#928F94]">
                  {format(fromDatetime, "dd.mm.yyyy")}
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[15px] p-4">
              <div className="leading-none">
                <div className="">{currTrainData.departure.from.city.name}</div>
                <div className="text-[#928F94]">
                  {currTrainData.departure.from.railway_station_name}
                </div>
              </div>
              <div className="leading-none">
                <div className="">{currTrainData.departure.to.city.name}</div>
                <div className="text-[#928F94]">
                  {currTrainData.departure.to.railway_station_name}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function LeftForm() {
  const dispatch = useDispatch();
  const firstStep = useSelector(
    (state: { main: initialStateInterface }) => state.main.firstStep
  );
  const stepsIndex = useSelector(
    (state: { main: initialStateInterface }) => state.main.stepsIndex
  );

  return (
    <div className="form flex flex-col  bg-[#3E3C41] mb-10 text-white text-[22px]">
      {stepsIndex === 1 ? (
        <>
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
                className="text-white input-template py-1 px-3 bg-[url('../../../tickets-booking/vecs/calendar_logo.svg')]"
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
                className="text-white input-template py-1 px-3 bg-[url('../../../tickets-booking/vecs/calendar_logo.svg')]"
              />
            </div>
          </div>
          <ul className="flex justify-start flex-col text-[15px] gap-5 px-[10%] py-5 border-b border-white">
            <li className="flex justify-between">
              <div className="w-1/2 flex justify-between">
                <img src="../../tickets-booking/vecs/kype.svg" alt="kype" />
                <p className="">Купе</p>
              </div>
              <label className="switch">
                <input
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setParamsToUrlQuery({
                        have_second_class: ev.target.checked,
                      })
                    )
                  }
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </li>

            <li className="flex justify-between">
              <div className="w-[60%] flex justify-between">
                <img src="../../tickets-booking/vecs/plazc.svg" alt="plazc" />
                <p className="">Плацкарт</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setParamsToUrlQuery({
                        have_third_class: ev.target.checked,
                      })
                    )
                  }
                />
                <span className="slider round"></span>
              </label>
            </li>

            <li className="flex justify-between">
              <div className="w-1/2 flex justify-between">
                <img src="../../tickets-booking/vecs/sitting.svg" alt="sitting" />
                <p className="">Сидячий</p>
              </div>

              <label className="switch">
                <input
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setParamsToUrlQuery({
                        have_fourth_class: ev.target.checked,
                      })
                    )
                  }
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </li>

            <li className="flex justify-between">
              <div className="w-1/2 flex justify-between">
                <img src="../../tickets-booking/vecs/luxury.svg" alt="luxury" />
                <p className="">Люкс</p>
              </div>
              <label className="switch">
                <input
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setParamsToUrlQuery({
                        have_first_class: ev.target.checked,
                      })
                    )
                  }
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </li>

            <li className="flex justify-between">
              <div className="w-1/2 flex justify-between">
                <img src="../../tickets-booking/vecs/wifi.svg" alt="wifi" />
                <p className="">Wi-Fi</p>
              </div>

              <label className="switch">
                <input
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setParamsToUrlQuery({ have_wifi: ev.target.checked })
                    )
                  }
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </li>

            <li className="flex justify-between">
              <div className="w-1/2 flex justify-between">
                <img src="../../tickets-booking/vecs/express.svg" alt="express" />
                <p className="">Экспресс</p>
              </div>

              <label className="switch">
                <input
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      setParamsToUrlQuery({ have_express: ev.target.checked })
                    )
                  }
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
          <div className="flex flex-col border-b p-5 border-white">
            <div className="mb-3">Стоимость</div>
            <div className="mt-5">
              <RangeSliderTemplate
                onChangeComplete={(moneyData: number[]) => {
                  dispatch(setParamsToUrlQuery({ price_from: moneyData[0] }));
                  dispatch(setParamsToUrlQuery({ price_to: moneyData[1] }));
                }}
                minim={1600}
                maxim={9900}
              />
            </div>
          </div>

          <FilterTime direction="departure" title="Туда" />
          <FilterTime direction="arrival" title="Обратно" />
        </>
      ) : (
        <>
          <TicketsInfo direction="departure" title="Туда" />
          <TicketsInfo direction="arrival" title="Обратно" />
        </>
      )}
    </div>
  );
}
