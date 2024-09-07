import { initialStateInterface, setStepsIndex } from "../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fromUnixTime, addSeconds, format } from "date-fns";
import { useFinalOrderMutation } from "../redux/templateApi";
import { seatInfoInterface } from "../intefaces/trainCardInterface";

export default function Review() {
  const currTrainData = useSelector(
    (state: { main: initialStateInterface }) => state.main.currTrainCardData
  );
  const firstStepData = useSelector(
    (state: { main: initialStateInterface }) => state.main.firstStep
  );
  const secondStepData = useSelector(
    (state: { main: initialStateInterface }) =>
      state.main.secondStep.passengersData
  );
  const thirdStepData = useSelector(
    (state: { main: initialStateInterface }) => state.main.thirdStep
  );
  const dispatch = useDispatch();

  const onStepClick = (stepIndex: number) => {
    dispatch(setStepsIndex({ index: stepIndex }));
  };

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
  const formattedTravelTime = `${travelTime.getHours()} : ${travelTime.getMinutes()}`;

  const [trigger] = useFinalOrderMutation();
  const navigate = useNavigate();

  const onFinalSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    
    if (
      firstStepData.trainOptions.currVagon.selectedSeats.length === 0 ||
      !Object.values(thirdStepData).every((value) => value !== undefined) ||
      !Object.values(secondStepData).every((value) => value !== undefined)
    ) {
      return;
    }

    try {
      const response = await trigger({
        user: {
          first_name: thirdStepData.name ?? "",
          last_name: thirdStepData.familia ?? "",
          patronymic: thirdStepData.surName ?? "",
          phone: thirdStepData.tel ?? "",
          email: thirdStepData.email ?? "",
          payment_method: thirdStepData.method ?? "",
        },
        departure: {
          route_direction_id: currTrainData?.departure._id ?? "",
          seats: secondStepData.map((el, ind: number): seatInfoInterface => {
            return {
              coach_id: currTrainData?.departure._id ?? "",
              person_info: {
                is_adult: true,
                first_name: el.name ?? "",
                last_name: el.familia ?? "",
                patronymic: el.surName ?? "",
                gender: true,
                birthday: el.birthday ?? "",
                document_type: el.document ?? "",
                document_data: `${el.docSeria} ${el.docNumber ?? ''}`
              },
              seat_number: firstStepData.trainOptions.currVagon.selectedSeats[ind].seat,
              is_child: el.age === 'child' ? true : false,
              include_children_seat: true
            }
          })
        },
      })
  
      if (response.data && response.data.status === true) {
        navigate('/final');
      } else {
        alert('Что-то пошло не так');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <div className="p-4 text-[22px] border bg-white border-[#928F94]">
          Поезд
        </div>
        {currTrainData !== undefined ? (
          <div className="train-card grid grid-cols-[20%_50%_30%] bg-white border border-[#928F94] shadow-lg">
            <div className="flex flex-col gap-2 items-center justify-center bg-[#E4E0E9] p-2">
              <div className="flex flex-col items-center">
                <img
                  src="../vecs/train.svg"
                  className="h-[55px] w-[55px]"
                  alt="train"
                />
                <div className="text-center text-[20px] font-semibold">
                  {currTrainData.departure.train.name}
                </div>
              </div>
              <div className="flex flex-col text-[14px]">
                {currTrainData.departure.from.city.name} →
                <br />
                {currTrainData.departure.to.city.name}
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
                      {currTrainData.departure.from.city.name}
                    </div>
                    <div className="text-[#928F94]">
                      {currTrainData.departure.from.railway_station_name}
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
                    <div className="">
                      {currTrainData.departure.to.city.name}
                    </div>
                    <div className="text-[#928F94]">
                      {currTrainData.departure.to.railway_station_name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-4 justify-between">
              <div className="flex flex-col items-end gap-3">
                <div className=""></div>
                <div className="flex justify-between items-center text-[#928F94]">
                  <div className="flex w-fit gap-2">
                    <img
                      src="../vecs/wifi.svg"
                      className={`h-[20px] ${currTrainData.have_wifi === true ? "block" : "hidden"
                        }`}
                      alt="wifi"
                    />
                    <img
                      src="../vecs/express.svg"
                      className={`h-[20px] ${currTrainData.is_express === true ? "block" : "hidden"
                        }`}
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
                  onClick={() => onStepClick(1)}
                  to={"/booking"}
                  className="btn-template border-black px-9 py-1 m-auto"
                >
                  Изменить
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full text-center text-red-500 ">
            Выберите билеты на поезд
          </div>
        )}
      </div>

      <div className="bg-white border border-[#928F94]">
        <div className="p-4 text-[22px] border-b bg-white border-[#928F94]">
          Пассажиры
        </div>
        <div className="">
          <div className="flex items-end">
            <div className="w-[70%] ">
              {secondStepData.map((el, ind: number) => {
                let documentTemplate;
                if (el.document === "passport") {
                  documentTemplate = (
                    <div className="flex gap-2">
                      {el.docSeria && el.docSeria !== "" ? (
                        <p>Паспорт РФ: {el.docSeria}</p>
                      ) : (
                        <p className="text-[#ff0f0f]">введите серию</p>
                      )}

                      {el.docNumber && el.docNumber !== "" ? (
                        <p>{el.docNumber}</p>
                      ) : (
                        <p className="text-[#ff0f0f]">введите номер</p>
                      )}
                    </div>
                  );
                } else {
                  documentTemplate =
                    el.docNumber && el.docNumber !== "" ? (
                      <p>Свидетельство о рождении: {el.docNumber}</p>
                    ) : (
                      <p className="text-[#ff0f0f]">введите номер</p>
                    );
                }

                return (
                  <div
                    key={ind}
                    className="flex gap-7 p-10 border-r border-b border-dotted"
                  >
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="w-[50px]"
                        src="../../vecs/passenger_icon.svg"
                        alt=""
                      />
                      <p>{el.age === "adult" ? "Взрослый" : "Ребенок"}</p>
                    </div>
                    <div className="flex flex-col  text-[#928F94]">
                      <div className="flex gap-1">
                        {el.familia && el.familia !== "" ? (
                          <div className="text-black mb-2">{el.familia}</div>
                        ) : (
                          <div className="text-[#ff0f0f] mb-2">—</div>
                        )}
                        {el.name && el.name !== "" ? (
                          <div className="text-black mb-2">{el.name}</div>
                        ) : (
                          <div className="text-[#ff0f0f] mb-2">—</div>
                        )}
                        {el.surName && el.surName !== "" ? (
                          <div className="text-black mb-2">{el.surName}</div>
                        ) : (
                          <div className="text-[#ff0f0f] mb-2">—</div>
                        )}
                      </div>
                      <p>{el.gender}</p>
                      {el.birthday && el.birthday !== "" ? (
                        <p>Дата рождения: {el.birthday}</p>
                      ) : (
                        <p className="text-[#ff0f0f]">
                          Введите дату рождения пассажира!
                        </p>
                      )}
                      {documentTemplate}

                      {/* <p>Паспорт РФ 4204 380694</p> */}
                      {/* <p>Свидетельство о рождении: VIII УН 256319</p> */}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col w-[30%] mb-4">
              <div className="text-[20px] flex justify-center gap-5 py-2">
                <p className="">Всего</p>
                <p className="font-semibold">
                  {firstStepData.trainOptions.currVagon.totalPrice} ₽
                </p>
              </div>
              <Link
                onClick={() => onStepClick(2)}
                to={"/booking/passengers"}
                className="btn-template border-black px-9 py-1 m-auto"
              >
                Изменить
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#928F94]">
        <div className="p-4 text-[22px] border-b bg-white border-[#928F94]">
          Способ оплаты
        </div>

        <div className="flex items-end">
          <div className="w-[70%] border-r border-dotted p-5">
            {thirdStepData.method
              ? thirdStepData.method === "online"
                ? "Онлайн"
                : "Наличными"
              : "Укажите способ оплаты"}{" "}
          </div>
          <div className="w-[30%] mb-4 flex ">
            <Link
              onClick={() => onStepClick(3)}
              to={"/booking/payment"}
              className="btn-template border-black px-9 py-1 m-auto"
            >
              Изменить
            </Link>
          </div>
        </div>
      </div>

      <form
        onSubmit={onFinalSubmit}
      >
        <input type="submit" className="btn-template btn-orange ml-auto bg-orange text-white" value={'ПОДТВЕРДИТЬ'} />
        
      </form>
    </div>
  );
}
