import { Link, useParams } from "react-router-dom";
import { useLazyGetTrainOptionsQuery } from "../redux/templateApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trainOptionsInterface } from "../intefaces/trainOptionsInterface";
import { fromUnixTime, format, addSeconds } from "date-fns";
import {
  setCurrVagonData,
  initialStateInterface,
  setSelectedPassengersCount,
  setSelectedOptions,
  setStepsIndex,
} from "../redux/mainSlice";
import { InputNumber, Space, ConfigProvider } from "antd";
import Seats from "./Seats";
import { itemsInterface } from "../intefaces/trainCardInterface";

interface seatsProps {
  data: trainOptionsInterface[];
  currTrainData: itemsInterface | undefined;
}

interface SeatsCounterProps {
  type: "adult" | "child" | "baby";
}

export const SeatsCounter = ({ type }: SeatsCounterProps) => {
  const dispatch = useDispatch();
  const seatCounterValue = useSelector(
    (state: { main: initialStateInterface }) =>
      state.main.firstStep.selectedPassengersCount
  )[type];

  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            handleHoverColor: "#FFA800",
            hoverBorderColor: "#FFA800",
            activeBorderColor: "#FFA800",
          },
        },
      }}
    >
      <Space>
        <InputNumber
          min={0}
          max={10}
          value={seatCounterValue}
          onChange={(ev) => {
            const counterValue = ev ?? 0;
            dispatch(
              setSelectedPassengersCount({ type: type, value: counterValue })
            );
          }}
        />
      </Space>
    </ConfigProvider>
  );
};

function SeatsOptions({ data, currTrainData }: seatsProps) {
  type ClassType = "first" | "second" | "third" | "fourth";
  const currVagon = useSelector(
    (state: { main: initialStateInterface }) =>
      state.main.firstStep.trainOptions.currVagon
  );
  const dispatch = useDispatch();
  const [trainType, setTrainType] = useState<ClassType | "">("");

  const allOptions: Record<ClassType, { vagons: any[] }> = {
    first: {
      vagons: [],
    },
    second: {
      vagons: [],
    },
    third: {
      vagons: [],
    },
    fourth: {
      vagons: [],
    },
  };

  data.forEach((el: trainOptionsInterface) => {
    const key = el.coach.class_type as ClassType;
    if (allOptions[key]) {
      allOptions[key].vagons.push(el);
    }
  });

  const onTrainTypeClick = (type: ClassType) => {
    setTrainType(type);
    const allData = allOptions[type].vagons;

    dispatch(
      setCurrVagonData({
        name: allData[0].coach.name,
        data: allData[0],
      })
    );
  };

  function VagonPrices() {
    type ClassType = "first" | "second" | "third" | "fourth";

    const classType: ClassType = currVagon.vagonData.coach
      .class_type as ClassType;
    const classTypePrices = currTrainData?.departure.price_info[classType];

    if (classTypePrices) {
      let prices;
      let seats;

      switch (classType) {
        case "first":
          prices = (
            <div className="flex gap-2 text-[16px] text-[#928F94]">
              <p className="font-semibold text-black">
                {classTypePrices.price}
              </p>{" "}
              ₽
            </div>
          );
          break;
        case "second":
          prices = (
            <>
              <div className="flex gap-2 text-[16px] text-[#928F94]">
                <p className="font-semibold text-black">
                  {classTypePrices.top_price}
                </p>
                ₽
              </div>
              <div className="flex gap-2 text-[16px] text-[#928F94]">
                <p className="font-semibold text-black">
                  {classTypePrices.bottom_price}
                </p>
                ₽
              </div>
            </>
          );
          seats = (
            <>
              <div className="flex gap-2 text-[16px]">
                Верхние{" "}
                <p className="font-semibold">{currVagon.vacantSeats.top}</p>
              </div>
              <div className="flex gap-2 text-[16px]">
                Нижние{" "}
                <p className="font-semibold">{currVagon.vacantSeats.bottom}</p>
              </div>
            </>
          );
          break;
        case "third":
          prices = (
            <>
              <div className="flex gap-2 text-[16px] text-[#928F94]">
                <p className="font-semibold text-black">
                  {classTypePrices.top_price}
                </p>{" "}
                ₽
              </div>
              <div className="flex gap-2 text-[16px] text-[#928F94]">
                <p className="font-semibold text-black">
                  {classTypePrices.bottom_price}
                </p>{" "}
                ₽
              </div>
              <div className="flex gap-2 text-[16px] text-[#928F94]">
                <p className="font-semibold text-black">
                  {classTypePrices.side_price}
                </p>{" "}
                ₽
              </div>
            </>
          );
          seats = (
            <>
              <div className="flex gap-2 text-[16px]">
                Верхние{" "}
                <p className="font-semibold">{currVagon.vacantSeats.top}</p>
              </div>
              <div className="flex gap-2 text-[16px]">
                Нижние{" "}
                <p className="font-semibold">{currVagon.vacantSeats.bottom}</p>
              </div>
              <div className="flex gap-2 text-[16px]">
                Боковые{" "}
                <p className="font-semibold">{currVagon.vacantSeats.side}</p>
              </div>
            </>
          );

          break;
        case "fourth":
          prices = (
            <div className="flex gap-2 text-[16px] text-[#928F94]">
              <p className="font-semibold text-black">
                {classTypePrices.top_price}
              </p>{" "}
              ₽
            </div>
          );
          break;
        default:
          break;
      }

      const onOptionClick = (ev: React.MouseEvent<HTMLLIElement>) => {
        const target = ev.currentTarget as HTMLElement;
        const optionType = target.getAttribute("data-name");

        if (optionType === "wifi" && currVagon.vagonData.coach.have_wifi) {
          dispatch(
            setSelectedOptions({
              optionType,
              price: currVagon.vagonData.coach.wifi_price,
            })
          );
        }
        if (
          optionType === "linens" &&
          !currVagon.vagonData.coach.is_linens_included
        ) {
          dispatch(
            setSelectedOptions({
              optionType,
              price: currVagon.vagonData.coach.linens_price,
            })
          );
        }
      };

      return (
        <div className="w-full grid grid-cols-3">
          <div className="flex flex-col">
            <div className="flex gap-2 text-[13px]">
              <p className="text-[#928F94]">Места</p>
              {currVagon.vacantSeats.total}
            </div>
            {seats ? seats : null}
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2 text-[13px] text-[#928F94]">
              Стоимость
            </div>
            {prices}
          </div>

          <div className="">
            <div className="flex gap-2 text-[13px] text-[#928F94]">
              Обслуживание ФПК
            </div>
            <ul className="flex gap-2">
              <li
                data-name={"air_conditioning"}
                className={`air_conditioning add-option ${
                  currVagon.vagonData.coach.have_air_conditioning
                    ? ""
                    : "add-option_inactive opacity-50 hover:bg-white"
                }`}
              >
                <svg
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0993 11.641C7.71469 11.8691 7.35884 12.0788 7.00299 12.2885C6.38474 12.6527 5.77369 13.0205 5.15184 13.3774C5.02963 13.4473 4.9865 13.5319 4.97931 13.6643C4.93258 14.3964 4.87867 15.1321 4.82834 15.8642C4.79959 16.2946 4.49406 16.5889 4.08788 16.5742C3.69249 16.5595 3.40134 16.2284 3.41572 15.798C3.4301 15.4632 3.45526 15.1248 3.47683 14.79C3.48402 14.6576 3.4912 14.5251 3.49839 14.3633C3.39056 14.4258 3.30789 14.47 3.22521 14.5178C2.68245 14.8378 2.13969 15.1616 1.59333 15.4816C1.31296 15.6435 0.989462 15.603 0.759416 15.3897C0.547343 15.1947 0.453887 14.8489 0.590477 14.584C0.66596 14.4369 0.795361 14.2934 0.935545 14.2051C1.49269 13.8556 2.06061 13.5319 2.62494 13.1971C2.67526 13.1677 2.72558 13.1346 2.79388 13.0941C2.36973 12.8807 1.96715 12.6821 1.56457 12.4798C1.21232 12.2995 1.05776 11.9537 1.1584 11.5969C1.28061 11.1738 1.73351 10.9604 2.13969 11.1554C2.80107 11.4718 3.45526 11.8029 4.10945 12.134C4.23526 12.2002 4.33231 12.1965 4.45452 12.1229C5.3747 11.5711 6.29848 11.0303 7.21866 10.4859C7.26898 10.4564 7.3193 10.4233 7.39479 10.3755C7.1935 10.2578 7.01018 10.1474 6.82686 10.0407C6.03968 9.57354 5.24889 9.11369 4.4653 8.63913C4.32871 8.55452 4.22447 8.56188 4.08788 8.63177C3.45167 8.95918 2.81185 9.27556 2.16844 9.58825C1.78743 9.77587 1.37766 9.63975 1.20153 9.27556C1.01822 8.904 1.16559 8.48462 1.5502 8.28597C1.90245 8.10203 2.25831 7.92913 2.61056 7.74887C2.66448 7.72312 2.7148 7.69369 2.78669 7.65322C2.24393 7.33317 1.72273 7.02415 1.20153 6.71514C1.10448 6.65628 1.00384 6.6011 0.906789 6.53856C0.547343 6.31783 0.428726 5.89478 0.622827 5.54161C0.820522 5.18477 1.24826 5.07073 1.61849 5.2841C2.20079 5.62255 2.7795 5.96835 3.35821 6.31047C3.39415 6.33255 3.4301 6.35094 3.49839 6.39141C3.47683 6.03457 3.45885 5.71084 3.44088 5.38343C3.4301 5.22892 3.41572 5.07809 3.41213 4.92358C3.40494 4.51892 3.69249 4.19519 4.07351 4.17679C4.47249 4.1584 4.7924 4.44534 4.82115 4.85736C4.87507 5.60783 4.92899 6.36198 4.97572 7.11244C4.9829 7.23752 5.02963 7.30742 5.13747 7.36628C6.06843 7.91074 6.99221 8.45887 7.91958 9.00701C7.9699 9.03644 8.02022 9.06587 8.09571 9.10633C8.0993 9.0254 8.10649 8.96654 8.10649 8.91136C8.10649 7.81509 8.10289 6.71514 8.11008 5.61887C8.11008 5.48643 8.06695 5.40918 7.95912 5.3356C7.35165 4.9199 6.74419 4.5042 6.14392 4.08115C5.68742 3.76109 5.72336 3.08788 6.20502 2.83405C6.46023 2.70161 6.71543 2.72368 6.95267 2.88555C7.27617 3.10627 7.59967 3.327 7.92317 3.54773C7.9699 3.58083 8.02022 3.61394 8.10649 3.66912C8.10649 3.57348 8.10649 3.50726 8.10649 3.44472C8.10649 2.78254 8.10289 2.12037 8.10649 1.45819C8.11008 0.957879 8.48031 0.62679 8.93321 0.704044C9.24953 0.755547 9.49036 1.02778 9.51552 1.35886C9.51911 1.40669 9.51552 1.45819 9.51552 1.50601C9.51552 7.41778 9.51552 13.3259 9.51552 19.2376C9.51552 19.6349 9.34658 19.9145 9.03745 20.0175C8.56658 20.1794 8.10649 19.8373 8.1029 19.3149C8.0993 18.6454 8.1029 17.9795 8.1029 17.31C8.1029 17.2438 8.1029 17.1812 8.1029 17.0708C7.85128 17.2438 7.63202 17.3909 7.41635 17.5381C7.26179 17.6447 7.11082 17.7514 6.95267 17.8544C6.58963 18.0972 6.16189 18.0236 5.93903 17.6815C5.70899 17.332 5.80604 16.8943 6.17267 16.6404C6.77295 16.2247 7.37322 15.8127 7.9699 15.3933C8.03101 15.3492 8.09571 15.2535 8.09571 15.1836C8.1029 14.0432 8.10289 12.9028 8.0993 11.7624C8.11008 11.7366 8.10649 11.7072 8.0993 11.641Z"
                    fill="#F4F2F6"
                  />
                  <path
                    d="M19.1595 5.619C18.9474 5.87652 18.7137 6.11564 18.5268 6.38787C18.2536 6.79253 17.9697 7.20455 17.7648 7.64968C17.4161 8.40383 17.6102 9.11015 18.2501 9.62885C18.8324 10.1034 19.5153 10.3609 20.2198 10.5706C20.3025 10.5964 20.3888 10.6184 20.4211 10.6295C19.8496 10.887 19.2529 11.1482 18.6634 11.4278C18.4873 11.5124 18.3255 11.6411 18.1746 11.7699C17.621 12.2371 17.4485 12.8478 17.6749 13.5504C17.8619 14.139 18.2141 14.6246 18.5987 15.0881C18.7641 15.2868 18.9438 15.4744 19.1487 15.6988C18.8935 15.6473 18.6778 15.5958 18.4585 15.559C17.8906 15.4634 17.3227 15.3861 16.744 15.456C15.9208 15.559 15.3925 16.0777 15.2774 16.9165C15.1696 17.7111 15.3062 18.48 15.5003 19.2415C15.5111 19.2819 15.5183 19.3224 15.5398 19.4033C15.3421 19.2231 15.1768 19.0649 15.0043 18.9177C14.5657 18.5425 14.1128 18.193 13.588 17.9576C12.7649 17.5897 12.0496 17.792 11.5212 18.5388C11.1402 19.0759 10.9066 19.6829 10.7197 20.312C10.7017 20.3672 10.6873 20.426 10.6514 20.4738C10.6514 19.2562 10.6514 18.0422 10.6514 16.8098C12.5744 16.7436 14.156 15.9674 15.3565 14.4296C16.2587 13.2708 16.6901 11.9354 16.6505 10.4529C16.5643 7.06844 13.7965 4.41973 10.6586 4.43812C10.6586 3.16527 10.6586 1.89242 10.6586 0.579102C10.6873 0.656356 10.7053 0.700501 10.7161 0.744646C10.9389 1.46568 11.2013 2.16833 11.6434 2.78268C12.1574 3.49268 12.844 3.68765 13.642 3.34553C14.289 3.06962 14.8245 2.63185 15.3206 2.13522C15.3889 2.06532 15.4572 1.9991 15.5255 1.92921C15.5326 1.92185 15.547 1.92185 15.5614 1.91817C15.4967 2.28605 15.4068 2.65024 15.3781 3.01812C15.3421 3.49268 15.3134 3.9746 15.3601 4.44548C15.4392 5.24377 15.9748 5.75144 16.7584 5.8618C17.5024 5.96481 18.2249 5.84341 18.9438 5.65579C19.0085 5.6374 19.0696 5.62268 19.1343 5.60797C19.1379 5.60797 19.1451 5.61165 19.1595 5.619Z"
                    fill="#F4F2F6"
                  />
                  <path
                    d="M10.655 15.5333C10.655 12.2666 10.655 8.99614 10.655 5.69629C12.3624 5.77722 13.7427 6.47986 14.6521 7.95505C15.752 9.73925 15.7268 11.5749 14.6233 13.3555C13.5594 15.0624 11.701 15.6069 10.655 15.5333Z"
                    fill="#F4F2F6"
                  />
                </svg>
              </li>
              <li
                data-name={"wifi"}
                onClick={onOptionClick}
                className={`wifi add-option ${
                  currVagon.selectedOptions.some(
                    (obj) => obj.optionType === "wifi"
                  )
                    ? ""
                    : "add-option_inactive"
                } ${
                  currVagon.vagonData.coach.have_wifi
                    ? ""
                    : "add-option_inactive opacity-50 hover:bg-white"
                } `}
              >
                <svg
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 5.05721C23.7201 5.32164 23.4402 5.58607 23.1683 5.85852C22.8964 6.13096 22.6405 6.41944 22.3525 6.73195C19.4335 3.90332 16.0027 2.41289 11.988 2.41289C7.98934 2.41289 4.57448 3.90332 1.73542 6.65182C1.16761 6.0909 0.623792 5.54601 0 4.92099C0.863712 4.24789 1.70343 3.48664 2.63912 2.86162C9.3009 -1.56161 17.89 -0.792353 23.6961 4.72066C23.7921 4.8088 23.896 4.88893 24 4.96906C24 5.00112 24 5.02516 24 5.05721Z"
                    fill="#E5E5E5"
                  />
                  <path
                    d="M11.6041 19C11.5001 18.9519 11.3961 18.8958 11.2842 18.8477C10.4365 18.4872 9.96461 17.5977 10.1406 16.6922C10.3165 15.7948 11.1082 15.1457 12.0279 15.1457C12.9396 15.1537 13.7314 15.8108 13.8993 16.7082C14.0672 17.6057 13.5794 18.4952 12.7237 18.8477C12.6117 18.8958 12.5078 18.9439 12.3958 18.992C12.1319 19 11.868 19 11.6041 19Z"
                    fill="#E5E5E5"
                  />
                  <path
                    d="M5.11053 10.0413C4.54272 9.4804 3.9989 8.94352 3.45508 8.39863C7.5897 3.9113 15.611 3.31833 20.5374 8.35055C19.9856 8.89545 19.4258 9.44034 18.8579 10.0013C16.9866 8.20632 14.6913 7.19667 11.9882 7.20468C9.29313 7.2127 7.00589 8.21433 5.11053 10.0413Z"
                    fill="#E5E5E5"
                  />
                  <path
                    d="M17.2023 11.7722C16.6344 12.3331 16.0906 12.878 15.5468 13.4148C13.4115 11.3955 10.3325 11.6119 8.48516 13.4068C7.94134 12.8619 7.39752 12.3251 6.8457 11.7802C9.03697 9.20797 14.0673 8.55891 17.2023 11.7722Z"
                    fill="#E5E5E5"
                  />
                </svg>
              </li>
              <li
                data-name={"linens"}
                onClick={onOptionClick}
                className={`linens add-option 
                ${
                  currVagon.vagonData.coach.is_linens_included
                    ? ""
                    : currVagon.selectedOptions.some(
                        (obj) => obj.optionType === "linens"
                      )
                    ? ""
                    : "add-option_inactive"
                }`}
              >
                <svg
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.545 12.1613C20.6815 12.5772 20.8553 13.1645 21.0538 13.7395C21.3641 14.6815 20.7312 15.6235 19.7259 15.6235C14.4764 15.6357 9.21447 15.6357 3.96494 15.6113C2.19028 15.599 0.936843 14.7304 0.651408 13.2256C0.514895 12.5283 0.589357 11.7575 0.725869 11.0602C1.17264 8.68681 1.69387 6.32564 2.20269 3.95225C2.28956 3.53629 2.42607 3.12033 2.61222 2.74108C2.99694 1.9581 3.56781 1.43204 4.5234 1.28523C5.33007 1.16289 6.11191 0.857043 6.89375 0.600129C7.39016 0.428853 7.84934 0.404385 8.30852 0.698001C9.15242 1.24853 10.0708 1.38311 11.076 1.35864C13.3098 1.3097 15.5437 1.3464 17.7775 1.35864C18.5718 1.35864 18.5718 1.37087 18.7952 2.10491C19.0806 3.08363 19.3536 4.06235 19.6515 5.04107C19.7259 5.26129 19.8873 5.45703 20.0238 5.65277C20.334 6.08096 20.7436 6.44798 20.9421 6.91288C21.4758 8.13628 21.4882 9.45755 21.3393 10.7666C21.2896 11.1948 20.8925 11.574 20.545 12.1613ZM1.63182 10.1794C2.72392 9.33521 3.87807 9.27404 5.06945 9.28627C9.78534 9.29851 14.5012 9.28627 19.2047 9.29851C19.6639 9.29851 20.1355 9.35968 20.7312 9.39638C20.6195 8.72351 20.5574 8.09958 20.3961 7.50011C20.0486 6.20331 19.1923 5.70171 17.8644 6.03203C16.946 6.26448 16.0153 6.50916 15.1714 6.90064C12.6521 8.06287 10.0335 7.87936 7.40257 7.54905C7.11714 7.51234 7.00545 7.36554 7.04268 7.09639C7.07991 6.79054 7.11714 6.49692 7.14196 6.19107C7.21642 5.11448 7.30329 4.03789 7.36534 2.96129C7.39016 2.423 7.36534 1.87247 7.36534 1.24853C7.10473 1.33417 6.89375 1.39534 6.68278 1.45651C5.96299 1.65225 5.2556 1.8847 4.53581 2.03151C3.95253 2.14161 3.54299 2.43523 3.31961 2.94906C3.14586 3.34055 3.00935 3.74427 2.91007 4.16023C2.72392 4.9065 2.5874 5.66501 2.42607 6.42352C2.17787 7.63468 1.91725 8.83362 1.63182 10.1794ZM11.6593 14.9139C14.2034 14.9139 16.7475 14.9139 19.2916 14.9139C19.4529 14.9139 19.6267 14.9262 19.788 14.9017C20.1479 14.8527 20.4457 14.498 20.3961 14.1676C20.3464 13.8251 20.1355 13.6293 19.7632 13.6416C19.6018 13.6416 19.4281 13.6416 19.2668 13.6416C14.4888 13.6538 9.71088 13.666 4.93294 13.666C4.6475 13.666 4.34966 13.6905 4.06422 13.6538C3.46853 13.5926 3.03417 13.0788 3.04658 12.4671C3.05899 11.8799 3.4313 11.4884 4.05181 11.4517C4.68473 11.415 5.33007 11.3783 5.9754 11.3661C10.5424 11.3171 15.1093 11.2804 19.6763 11.2315C19.7756 11.2315 19.8873 11.2315 19.9865 11.2192C20.3464 11.1825 20.6443 10.9012 20.6567 10.6075C20.6567 10.2161 20.3713 10.0937 20.061 10.0081C19.9245 9.97138 19.7756 9.97138 19.6267 9.97138C14.4392 9.97138 9.23929 9.95915 4.05181 9.99585C3.51817 9.99585 2.9473 10.1916 2.47571 10.4485C0.998894 11.2682 0.874792 13.4091 2.20269 14.3634C2.74874 14.7549 3.40648 14.8772 4.07663 14.8772C6.60832 14.9139 9.14001 14.9139 11.6593 14.9139ZM8.14719 1.46874C8.0355 3.32831 7.9238 5.09001 7.81211 6.81501C11.1629 7.54905 14.191 6.79054 17.0826 5.37139C14.0172 4.45384 11.2001 2.85119 8.14719 1.46874ZM19.7135 11.9655C19.4529 11.9655 19.2295 11.9655 18.9937 11.9655C17.1322 11.99 15.2707 12.0389 13.4091 12.0512C10.5424 12.0756 7.6756 12.0756 4.79643 12.1001C4.54822 12.1001 4.28761 12.1001 4.06422 12.1857C3.94012 12.2347 3.77879 12.4426 3.7912 12.565C3.80361 12.6996 3.96494 12.8708 4.10145 12.9442C4.21314 13.0054 4.38689 12.9687 4.5234 12.9687C9.52472 12.9565 14.5385 12.9565 19.5398 12.9442C19.6887 12.9442 19.8376 12.9075 20.0114 12.8953C19.9493 12.6873 19.9121 12.5283 19.8624 12.3692C19.8252 12.2469 19.7756 12.1368 19.7135 11.9655ZM11.3242 2.06821C11.3118 2.10491 11.3118 2.15385 11.2994 2.19055C13.7318 3.35278 16.1518 4.53948 18.9193 5.11448C18.6462 4.14799 18.4104 3.24267 18.1126 2.36183C18.063 2.21502 17.7651 2.08044 17.579 2.08044C15.494 2.06821 13.4091 2.06821 11.3242 2.06821Z"
                    fill="#F4F2F6"
                  />
                </svg>
              </li>
              <li
                className={`add-option ${
                  currVagon.vagonData.coach
                    ? ""
                    : "add-option_inactive opacity-50 hover:bg-white"
                }`}
              >
                <svg
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.39887 0.526367C2.65965 0.526367 2.84931 0.526367 3.03897 0.526367C7.78042 0.526367 12.5219 0.526367 17.2633 0.526367C18.745 0.526367 19.4681 1.25024 19.4681 2.75733C19.4681 3.56428 19.48 4.38309 19.4681 5.19003C19.4562 6.37671 18.6739 7.15992 17.5004 7.17179C16.9077 7.18366 16.3269 7.17179 15.6868 7.17179C15.6868 8.0974 15.6868 8.95182 15.6868 9.81809C15.6749 12.1915 14.0747 13.8053 11.7158 13.8172C9.93778 13.8172 8.15973 13.8291 6.38169 13.8172C4.04652 13.8053 2.42258 12.2033 2.42258 9.87743C2.38702 6.78019 2.39887 3.70668 2.39887 0.526367ZM15.7223 2.43693C15.7223 3.36254 15.7223 4.30002 15.7223 5.2375C16.3387 5.2375 16.9314 5.2375 17.5241 5.2375C17.5241 4.28815 17.5241 3.36254 17.5241 2.43693C16.9077 2.43693 16.3387 2.43693 15.7223 2.43693Z"
                    fill="white"
                  />
                  <path
                    d="M17.5363 15.7515C17.5363 16.3685 17.5363 16.9619 17.5363 17.579C11.8584 17.579 6.20426 17.579 0.526367 17.579C0.526367 16.9619 0.526367 16.3804 0.526367 15.7515C6.18055 15.7515 11.8347 15.7515 17.5363 15.7515Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return <></>;
  }

  return (
    <div className="border-t border-dotted py-5">
      <p className="font-semibold text-[22px] ml-[15px]">Тип вагона</p>

      <ul className="flex justify-between items-center px-[15%] py-5">
        <li
          onClick={() => onTrainTypeClick("fourth")}
          className={`${allOptions.fourth.vagons.length ? "block" : "hidden"} 
          ${trainType === "fourth" ? "carriage-type-active" : ""}
          carriage-type`}
        >
          <svg
            className="big-svg-template"
            viewBox="0 0 14 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.75326C0.141674 8.57335 0.25759 8.35002 0.437903 8.21975C1.03036 7.7979 1.79669 8.08947 1.97056 8.80288C2.12512 9.44806 2.25391 10.0994 2.38914 10.7508C2.62741 11.8737 2.85925 13.0027 3.10396 14.1256C3.42594 15.5834 4.41122 16.3527 5.9632 16.3589C7.07084 16.3651 8.17203 16.3527 9.27967 16.3651C9.93008 16.3713 10.2971 16.6566 10.4002 17.2025C10.5032 17.7919 10.0846 18.3378 9.46642 18.344C8.03036 18.3564 6.5943 18.3936 5.15823 18.3316C3.39374 18.2572 1.75161 16.8551 1.29439 15.0809C0.99816 13.9208 0.779209 12.7422 0.521619 11.5759C0.354186 10.8004 0.173873 10.0312 0 9.25575C0 9.08825 0 8.92075 0 8.75326Z"
              fill="#C4C4C4"
            />
            <path
              d="M4.54015 0C5.04889 0.105461 5.51899 0.266754 5.9247 0.601748C6.7683 1.29655 7.02589 2.56829 6.49783 3.51123C5.9247 4.54103 4.72046 5.04972 3.61927 4.73334C2.52451 4.41696 1.86766 3.65392 1.78394 2.50625C1.71954 1.62534 2.20896 0.694802 3.22644 0.235737C3.45827 0.130275 3.71586 0.0806467 3.96701 0C4.15377 0 4.34696 0 4.54015 0Z"
              fill="#C4C4C4"
            />
            <path
              d="M11.3467 15.875C11.1921 15.875 11.0826 15.875 10.9796 15.875C9.33104 15.875 7.68246 15.8812 6.02745 15.875C4.76526 15.8688 3.91521 15.1988 3.6705 14.0077C3.24548 11.9853 2.82689 9.96296 2.40187 7.94058C1.97041 5.8872 3.88301 4.89462 5.25468 5.32267C6.13048 5.59563 6.58126 6.22839 6.76158 7.05347C7.1222 8.70983 7.46351 10.3662 7.79838 12.0225C7.85633 12.3203 7.95293 12.432 8.2878 12.4258C9.62726 12.4134 10.9667 12.4134 12.3062 12.4568C13.2142 12.4816 13.9161 13.1888 13.9805 14.0635C13.9934 14.2124 13.9998 14.3613 13.9998 14.5102C13.9998 16.8117 13.9998 19.1071 13.9998 21.4086C13.9998 21.6133 13.9998 21.8242 13.9548 22.0227C13.8131 22.6493 13.2464 23.0401 12.5831 22.9967C11.9327 22.9533 11.424 22.4756 11.3596 21.8428C11.3467 21.6939 11.3467 21.5451 11.3467 21.3962C11.3467 19.6778 11.3467 17.9532 11.3467 16.2348C11.3467 16.1293 11.3467 16.0177 11.3467 15.875Z"
              fill="#C4C4C4"
            />
          </svg>
          <p>Сидячий</p>
        </li>
        <li
          onClick={() => onTrainTypeClick("third")}
          className={`${allOptions.third.vagons.length ? "block" : "hidden"} 
          ${trainType === "third" ? "carriage-type-active" : ""} carriage-type`}
        >
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
              fill="#C4C4C4"
            />
          </svg>
          <p>Плацкарт</p>
        </li>
        <li
          onClick={() => onTrainTypeClick("second")}
          className={`${allOptions.second.vagons.length ? "block" : "hidden"}
          ${
            trainType === "second" ? "carriage-type-active" : ""
          } carriage-type`}
        >
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
              fill="#C4C4C4"
            />
          </svg>
          <p>Купе</p>
        </li>
        <li
          onClick={() => onTrainTypeClick("first")}
          className={`${allOptions.first.vagons.length ? "block" : "hidden"} 
          ${trainType === "first" ? "carriage-type-active" : ""} carriage-type`}
        >
          <svg
            className="big-svg-template"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0L13.5857 7.63103H22L15.2072 12.369L17.7928 20L11 15.304L4.20717 20L6.79283 12.369L0 7.63103H8.41434L11 0Z"
              fill="#C4C4C4"
            />
          </svg>
          <p>Люкс</p>
        </li>
      </ul>

      {trainType ? (
        <>
          <div className="flex justify-between items-center pl-6 pr-4 text-[12px] bg-[rgba(255,168,0,0.44)]">
            <div className="flex items-center gap-2">
              Вагоны
              {allOptions[trainType].vagons.map(
                (el: trainOptionsInterface, ind: number) => {
                  const vagon = el.coach.name?.split("-")[1];

                  return (
                    <p
                      key={ind}
                      onClick={() =>
                        dispatch(
                          setCurrVagonData({ name: el.coach.name, data: el })
                        )
                      }
                      className={`cursor-pointer text-[16px] font-semibold ${
                        currVagon.name === el.coach.name ? "text-white" : ""
                      }`}
                    >
                      {vagon}
                    </p>
                  );
                }
              )}
            </div>
            <div className="">Нумерация вагонов начинается с головы поезда</div>
          </div>
          <div className="flex">
            <div className="w-fit flex-col pl-7 pr-10 pt-7 pb-5 bg-[rgba(255,168,0,0.44)] leading-[35px]">
              <p className="text-[50px] font-semibold ">
                {currVagon.name.split("-")[1]}
              </p>
              <p className="text-[18px] ">вагон</p>
            </div>
            <VagonPrices />
          </div>
          <Seats data={currVagon.vagonData} />
        </>
      ) : null}
    </div>
  );
}

export default function TrainOptions() {
  const { trainId } = useParams();
  const dispatch = useDispatch();
  const [trigger, { data = [], isFetching }] = useLazyGetTrainOptionsQuery();
  const filtersData = useSelector(
    (state: { main: initialStateInterface }) => state.main.filters
  );
  const currVagon = useSelector(
    (state: { main: initialStateInterface }) =>
      state.main.firstStep.trainOptions.currVagon
  );
  const currTrainData = useSelector(
    (state: { main: initialStateInterface }) => state.main.currTrainCardData
  );

  const getTimePhrase = (hours: number, minutes: number) => {
    const hourForms = ["час", "часа", "часов"];
    const minuteForms = ["минута", "минуты", "минут"];

    const hourFormIndex =
      hours % 10 === 1 && hours % 100 !== 11
        ? 0
        : hours % 10 >= 2 &&
          hours % 10 <= 4 &&
          (hours % 100 < 10 || hours % 100 >= 20)
        ? 1
        : 2;
    const minuteFormIndex =
      minutes % 10 === 1 && minutes % 100 !== 11
        ? 0
        : minutes % 10 >= 2 &&
          minutes % 10 <= 4 &&
          (minutes % 100 < 10 || minutes % 100 >= 20)
        ? 1
        : 2;
    return [
      `${hours} ${hourForms[hourFormIndex]}`,
      `${minutes} ${minuteForms[minuteFormIndex]}`,
    ];
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
  const formattedTravelTime = getTimePhrase(
    travelTime.getHours(),
    travelTime.getMinutes()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await trigger({
          trainId,
          have_first_class: filtersData.have_first_class,
          have_second_class: filtersData.have_second_class,
          have_third_class: filtersData.have_third_class,
          have_fourth_class: filtersData.have_fourth_class,
          have_wifi: filtersData.have_wifi,
          have_air_conditioning: filtersData.have_air_conditioning,
          have_express: filtersData.have_express,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [trainId]);

  const onSubmitTick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (currVagon.selectedSeats.length === 0) {
      event.preventDefault();
      return;
    }

    dispatch(setStepsIndex({ index: 2 }));
  };

  return (
    <>
      {!isFetching && data ? (
        <div className="">
          <div className="text-[20px] mb-2">ВЫБОР МЕСТ</div>
          <div className="w-full bg-white border border-[#928F94] shadow-lg ">
            <div className="flex gap-2 h-24 px-3 py-6 items-stretch">
              <img
                src="../../../tickets-booking/vecs/departure_icon.svg"
                className=""
                alt="forward-icon"
              />
              <Link
                to={"/tickets-booking/booking"}
                className="btn-template border-[#000000] px-5 py-1 cursor-pointer flex items-center"
              >
                Выбрать другой поезд
              </Link>
            </div>
            <div className="flex gap-[2px] mb-[20px]">
              {currTrainData ? (
                <>
                  <div className="flex w-1/4 bg-[#F7F6F6] justify-center items-center gap-4">
                    <img
                      src="../../../tickets-booking/vecs/train_circle.svg"
                      className="h-[35px] w-[35px]"
                      alt="train"
                    />
                    <div className="flex flex-col text-[14px] py-3">
                      <p className="text-[20px] font-semibold">
                        {currVagon.name}
                      </p>
                      {currTrainData.departure.from.city.name} →
                      <br />
                      {currTrainData.departure.to.city.name}
                    </div>
                  </div>
                  <div className="flex w-1/2 justify-between items-center px-8  bg-[#F7F6F6]">
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
                    <div className="">
                      <img
                        src="../../../tickets-booking/vecs/arrow_r_orange.svg"
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
                  <div className="flex w-1/4 items-center justify-center bg-[#F7F6F6]">
                    <div className="h-[30px] flex items-center leading-[1.2] gap-2">
                      <img src="../../../tickets-booking/vecs/clock.svg" alt="" />
                      <div className="flex-col">
                        <p>{formattedTravelTime[0]}</p>
                        <p>{formattedTravelTime[1]}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mx-auto w-full text-center text-red-500 ">
                  Выберите билеты на поезд
                </div>
              )}
            </div>

            <div className="mb-[30px] ">
              <p className="font-semibold text-[22px] ml-[15px]">
                Количество билетов
              </p>
              <div className="grid grid-cols-3">
                <div className="bg-[#F7F6F6] px-[15%] py-4 flex flex-col gap-5">
                  <div className="flex flex-col items-center justify-center px-4 py-2 border border-[#928F94] rounded">
                    Взрослых —
                    <div className="">
                      <SeatsCounter type="adult" />
                    </div>
                  </div>
                  <p className="text-[14px]">Можно добавить еще 3 пассажиров</p>
                </div>
                <div className="items-center justify-center px-[15%] py-4 border border-orange flex flex-col gap-5">
                  <div className="px-4 py-2 border border-[#928F94] rounded">
                    Детских —
                    <div className="">
                      <SeatsCounter type="child" />
                    </div>
                  </div>
                  <p className="text-[14px]">
                    Можно добавить еще 3 детей до 10 лет.Свое место в вагоне,
                    как у взрослых, но дешевле в среднем на 50-65%
                  </p>
                </div>
                <div className="px-[15%] py-4 flex flex-col gap-5">
                  <div className="flex flex-col items-center justify-center px-4 py-2 border border-[#928F94] rounded">
                    Детских «без места» —
                    <div className="">
                      <SeatsCounter type="baby" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SeatsOptions data={data} currTrainData={currTrainData} />

            <div className="text-orange text-[20px] text-end my-3 mx-5">
              {currVagon.totalPrice === 0 ? null : `${currVagon.totalPrice} ₽`}{" "}
            </div>
          </div>
          <Link
            onClick={onSubmitTick}
            to={"/tickets-booking/booking/passengers"}
            className="block ml-auto my-5 btn-template bg-orange text-white btn-orange"
          >
            Далее
          </Link>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
