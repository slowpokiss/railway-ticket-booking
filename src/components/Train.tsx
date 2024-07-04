  import { useState } from "react";

  interface trainsProps {
    setPickTrain: React.Dispatch<React.SetStateAction<boolean>>;
  }

  function TrainOptions({ setPickTrain }: trainsProps) {
    return (
      <>
        <div className="">
          <div className="text-[20px] mb-2">ВЫБОР МЕСТ</div>
          <div className="w-full bg-white border border-[#928F94] shadow-lg ">
            <div className="flex gap-2 h-24 px-3 py-6 items-stretch">
              <img
                src="../../vecs/forward_icon.svg"
                className=""
                alt="forward-icon"
              />
              <div
                onClick={() => setPickTrain(false)}
                className="btn-template border-[#000000] px-5 py-1 cursor-pointer flex items-center"
              >
                Выбрать другой поезд
              </div>
            </div>
            <div className="flex gap-[2px] mb-[20px]">
              <div className="flex w-1/4 bg-[#F7F6F6] justify-center items-center gap-4">
                <img
                  src="../vecs/train_circle.svg"
                  className="h-[35px] w-[35px]"
                  alt="train"
                />
                <div className="flex flex-col text-[14px] py-3">
                  <p className="text-[20px] font-semibold">116C</p>
                  <p className="text-[#928F94]">Адлер →</p>
                  Москва →
                  <br />
                  Санкт-Петербург
                </div>
              </div>
              <div className="flex w-1/2 justify-between items-center px-8  bg-[#F7F6F6]">
                <div className="from w-fit text-[16px]">
                  <div className="time text-[20px] font-bold">00:10</div>
                  <div className="leading-none">
                    <div className="">Москва</div>
                    <div className="text-[#928F94]">Курский вокзал</div>
                  </div>
                </div>
                <div className="">
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
              <div className="flex w-1/4 items-center justify-center bg-[#F7F6F6]">
                <div className="h-[30px] flex items-center leading-[1.2] gap-2">
                  <img src="../../vecs/clock.svg" alt="" />
                  <div className="flex-col">
                    <p>9 часов</p>
                    <p>42 минуты</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[30px] ">
              <p className="font-semibold text-[22px] ml-[15px]">
                Количество билетов
              </p>
              <div className="grid grid-cols-3">
                <div className="bg-[#F7F6F6] px-[15%] py-4 flex flex-col gap-5">
                  <div className="px-4 py-2 border border-[#928F94] rounded">
                    Взрослых — 2
                  </div>
                  <p className="text-[14px]">Можно добавить еще 3 пассажиров</p>
                </div>
                <div className="px-[15%] py-4 border border-orange flex flex-col gap-5">
                  <div className="px-4 py-2 border border-[#928F94] rounded">
                    Детских — 1
                  </div>
                  <p className="text-[14px]">
                    Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как
                    у взрослых, но дешевле в среднем на 50-65%
                  </p>
                </div>
                <div className="px-[15%] py-4 flex flex-col gap-5">
                  <div className="px-4 py-2 border border-[#928F94] rounded">
                    Детских «без места» — 0
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-dotted py-5">
              <p className="font-semibold text-[22px] ml-[15px]">Тип вагона</p>
              <ul className="flex justify-between items-center px-[15%] py-5">
                <li>
                  <svg
                    className="big-svg-template"
                    viewBox="0 0 14 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8.75326C0.141674 8.57335 0.25759 8.35002 0.437903 8.21975C1.03036 7.7979 1.79669 8.08947 1.97056 8.80288C2.12512 9.44806 2.25391 10.0994 2.38914 10.7508C2.62741 11.8737 2.85925 13.0027 3.10396 14.1256C3.42594 15.5834 4.41122 16.3527 5.9632 16.3589C7.07084 16.3651 8.17203 16.3527 9.27967 16.3651C9.93008 16.3713 10.2971 16.6566 10.4002 17.2025C10.5032 17.7919 10.0846 18.3378 9.46642 18.344C8.03036 18.3564 6.5943 18.3936 5.15823 18.3316C3.39374 18.2572 1.75161 16.8551 1.29439 15.0809C0.99816 13.9208 0.779209 12.7422 0.521619 11.5759C0.354186 10.8004 0.173873 10.0312 0 9.25575C0 9.08825 0 8.92075 0 8.75326Z"
                      fill="#E5E5E5"
                    />
                    <path
                      d="M4.54015 0C5.04889 0.105461 5.51899 0.266754 5.9247 0.601748C6.7683 1.29655 7.02589 2.56829 6.49783 3.51123C5.9247 4.54103 4.72046 5.04972 3.61927 4.73334C2.52451 4.41696 1.86766 3.65392 1.78394 2.50625C1.71954 1.62534 2.20896 0.694802 3.22644 0.235737C3.45827 0.130275 3.71586 0.0806467 3.96701 0C4.15377 0 4.34696 0 4.54015 0Z"
                      fill="#E5E5E5"
                    />
                    <path
                      d="M11.3467 15.875C11.1921 15.875 11.0826 15.875 10.9796 15.875C9.33104 15.875 7.68246 15.8812 6.02745 15.875C4.76526 15.8688 3.91521 15.1988 3.6705 14.0077C3.24548 11.9853 2.82689 9.96296 2.40187 7.94058C1.97041 5.8872 3.88301 4.89462 5.25468 5.32267C6.13048 5.59563 6.58126 6.22839 6.76158 7.05347C7.1222 8.70983 7.46351 10.3662 7.79838 12.0225C7.85633 12.3203 7.95293 12.432 8.2878 12.4258C9.62726 12.4134 10.9667 12.4134 12.3062 12.4568C13.2142 12.4816 13.9161 13.1888 13.9805 14.0635C13.9934 14.2124 13.9998 14.3613 13.9998 14.5102C13.9998 16.8117 13.9998 19.1071 13.9998 21.4086C13.9998 21.6133 13.9998 21.8242 13.9548 22.0227C13.8131 22.6493 13.2464 23.0401 12.5831 22.9967C11.9327 22.9533 11.424 22.4756 11.3596 21.8428C11.3467 21.6939 11.3467 21.5451 11.3467 21.3962C11.3467 19.6778 11.3467 17.9532 11.3467 16.2348C11.3467 16.1293 11.3467 16.0177 11.3467 15.875Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                  <p>Сидячий</p>
                </li>
                <li>
                  <svg
                    className="big-svg-template"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.4648 0H1.53516C0.690918 0 0 0.689941 0 1.53326V15.4667C0 16.3101 0.690918 17 1.53516 17H6H7H15.4648C16.3091 17 17 16.3101 17 15.4667V1.53326C17 0.689941 16.3091 0 15.4648 0ZM7 16.0417H11.9536C12.376 16.0417 12.7212 15.6967 12.7212 15.2751H12.7021V13.8951C12.7021 13.4735 12.3564 13.1285 11.9346 13.1285H7V16.0417ZM6 13.1285H5.04639C4.62402 13.1285 4.27881 13.4735 4.27881 13.8951V15.2751C4.27881 15.6967 4.62402 16.0417 5.04639 16.0417H6V13.1285ZM2.24512 9.88953C1.91895 9.88953 1.6499 9.62122 1.6499 9.29535V4H4.56641V9.29535C4.56641 9.62122 4.29785 9.88953 3.97168 9.88953H2.24512ZM1.6499 2.06989V3H4.56641V2.06989C4.56641 1.74408 4.29785 1.47577 3.97168 1.47577H2.24512C1.91895 1.47577 1.6499 1.74408 1.6499 2.06989ZM12.2417 9.27618V4H15.1772V9.27618C15.1772 9.62122 14.8892 9.90869 14.5439 9.90869H12.8745C12.5293 9.90869 12.2417 9.62122 12.2417 9.27618ZM12.2417 3H15.1772V2.08905C15.1772 1.74408 14.8892 1.4566 14.5439 1.4566H12.8745C12.5293 1.4566 12.2417 1.74408 12.2417 2.08905V3Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                  <p>Плацкарт</p>
                </li>
                <li>
                  <svg
                    className="big-svg-template"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.53516 0H15.4648C16.3091 0 17 0.695465 17 1.54544V15.4546C17 16.3045 16.3091 17 15.4648 17H1.53516C0.690918 17 0 16.3045 0 15.4546V1.54544C0 0.695465 0.690918 0 1.53516 0ZM13.124 2.125C12.7021 2.125 12.3564 2.47272 12.3564 2.89774V4H15.2925V2.89774C15.2925 2.47272 14.9468 2.125 14.5249 2.125H13.124ZM15.2925 5H12.3564V10.0454C12.3564 10.4705 12.7021 10.8182 13.124 10.8182H14.5249C14.9468 10.8182 15.2925 10.4705 15.2925 10.0454V5ZM4.54736 4V2.97501C4.54736 2.51135 4.16357 2.125 3.70312 2.125H2.45605C1.99561 2.125 1.61182 2.51135 1.61182 2.97501V4H4.54736ZM1.61182 5H4.54736V9.98749C4.54736 10.4511 4.16357 10.8375 3.70312 10.8375H2.45605C1.99561 10.8375 1.61182 10.4511 1.61182 9.98749V5ZM15.2349 16.7296C16.0405 16.7296 16.7124 16.0727 16.7124 15.242V12.4796H0.287598V15.242C0.287598 16.0534 0.939941 16.7296 1.76514 16.7296H15.2349Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                  <p>Купе</p>
                </li>
                <li>
                  <svg
                    className="big-svg-template"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0L13.5857 7.63103H22L15.2072 12.369L17.7928 20L11 15.304L4.20717 20L6.79283 12.369L0 7.63103H8.41434L11 0Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                  <p>Люкс</p>
                </li>
              </ul>
              <div className="flex justify-between items-center pl-6 pr-4 text-[12px] bg-[rgba(255,168,0,0.44)]">
                <div className="flex items-center gap-2">
                  Вагоны
                  <p className="text-[16px] font-semibold text-white">07</p>
                  <p className="text-[16px] font-semibold">09</p>
                </div>
                <div className="">
                  Нумерация вагонов начинается с головы поезда
                </div>
              </div>
              <div className="flex">
                <div className="w-fit flex-col pl-7 pr-10 pt-7 pb-5 bg-[rgba(255,168,0,0.44)] leading-[35px]">
                  <p className="text-[50px] font-semibold ">07</p>
                  <p className="text-[18px] ">вагон</p>
                </div>
                <div className="w-full grid grid-cols-3">
                  <div className="flex flex-col">
                    <div className="flex gap-2 text-[13px]">
                      <p className="text-[#928F94]">Места</p> 11
                    </div>
                    <div className="flex gap-2 text-[16px]">
                      Верхние <p className="font-semibold">3</p>
                    </div>
                    <div className="flex gap-2 text-[16px]">
                      Нижние <p className="font-semibold">8</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 text-[13px] text-[#928F94]">
                      Стоимость
                    </div>
                    <div className="flex gap-2 text-[16px] text-[#928F94]">
                      <p className="font-semibold text-black">2 900</p> ₽
                    </div>
                    <div className="flex gap-2 text-[16px] text-[#928F94]">
                      <p className="font-semibold text-black">3 530</p> ₽
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 text-[13px] text-[#928F94]">
                      Обслуживание ФПК
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function TrainsList({ setPickTrain }: trainsProps) {
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
                <div
                  onClick={() => setPickTrain(true)}
                  className="btn-template btn-orange text-white border-orange bg-orange py-[2px] px-5"
                >
                  Выбрать места
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default function Train() {
    const [pickTrain, setPickTrain] = useState(false);

    return (
      <>
        {pickTrain ? (
          <TrainOptions setPickTrain={setPickTrain} />
        ) : (
          <TrainsList setPickTrain={setPickTrain} />
        )}
      </>
    );
  }
