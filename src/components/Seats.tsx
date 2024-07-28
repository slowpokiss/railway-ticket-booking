import { useSelector } from "react-redux";
import { mainDataInterface } from "../redux/mainSlice";
import { useState } from "react";

function LuxuryTemplate() {
  const data = [
    {
      available: false,
      index: 1,
    },
    {
      available: false,
      index: 2,
    },
    {
      available: false,
      index: 3,
    },
    {
      available: false,
      index: 4,
    },
    {
      available: false,
      index: 5,
    },
    {
      available: true,
      index: 6,
    },
    {
      available: true,
      index: 7,
    },
    {
      available: true,
      index: 8,
    },
    {
      available: true,
      index: 9,
    },
    {
      available: true,
      index: 10,
    },
    {
      available: true,
      index: 11,
    },
    {
      available: true,
      index: 12,
    },
    {
      available: true,
      index: 13,
    },
    {
      available: true,
      index: 14,
    },
    {
      available: true,
      index: 15,
    },
    {
      available: true,
      index: 16,
    },
    {
      available: true,
      index: 17,
    },
    {
      available: true,
      index: 18,
    },
  ];

  const [currentSeats, setCurrentSeats] = useState<number[]>([]);

  const onSeatClick = (el: { available: boolean; index: number }) => {
    if (el.available) {
      if (currentSeats.includes(el.index)) {
        setCurrentSeats(currentSeats.filter((seat) => seat !== el.index));
      } else {
        setCurrentSeats([...currentSeats, el.index]);
      }
    }
  };

  return (
    <>
      {data.map((el: any, ind: number) => {
        const left =
          el.index % 2 !== 0
            ? 133 + 86 * Math.floor(el.index / 2)
            : 169 + 86 * (el.index / 2 - 1);

        return (
          <div
            key={el.index}
            onClick={() => onSeatClick(el)}
            className={`seat cursor-pointer`}
            style={{ left: `${left}px` }}
          >
            <svg
              width="31"
              height="67"
              viewBox="0 0 31 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {el.available ? (
                currentSeats.includes(el.index) ? (
                  <rect width="31" height="67" rx="4" fill="#FFA800"></rect>
                ) : (
                  <rect
                    width="30"
                    height="66"
                    x="0.5"
                    y="0.5"
                    rx="3.5"
                    stroke="#FFA800"
                  ></rect>
                )
              ) : (
                <rect width="31" height="67" rx="4" fill="#EFEFEF"></rect>
              )}
            </svg>
            <div
              className={`seat__content ${
                el.available
                  ? currentSeats.includes(el.index)
                    ? "text-[white]"
                    : "text-[#FFA800]"
                  : ""
              }`}
            >
              {el.index}
            </div>
          </div>
        );
      })}
    </>
  );
}

function KypeTemplate() {
  const data = [
    {
      available: false,
      index: 1,
    },
    {
      available: false,
      index: 2,
    },
    {
      available: false,
      index: 3,
    },
    {
      available: false,
      index: 4,
    },
    {
      available: false,
      index: 5,
    },
    {
      available: true,
      index: 6,
    },
    {
      available: true,
      index: 7,
    },
    {
      available: true,
      index: 8,
    },
    {
      available: true,
      index: 9,
    },
    {
      available: true,
      index: 10,
    },
    {
      available: true,
      index: 11,
    },
    {
      available: true,
      index: 12,
    },
    {
      available: true,
      index: 13,
    },
    {
      available: true,
      index: 14,
    },
    {
      available: true,
      index: 15,
    },
    {
      available: true,
      index: 16,
    },
    {
      available: true,
      index: 17,
    },
    {
      available: true,
      index: 18,
    },
    {
      available: false,
      index: 19,
    },
    {
      available: false,
      index: 20,
    },
    {
      available: false,
      index: 21,
    },
    {
      available: false,
      index: 22,
    },
    {
      available: false,
      index: 23,
    },
    {
      available: true,
      index: 24,
    },
    {
      available: true,
      index: 25,
    },
    {
      available: true,
      index: 26,
    },
    {
      available: true,
      index: 27,
    },
    {
      available: true,
      index: 28,
    },
    {
      available: true,
      index: 29,
    },
    {
      available: true,
      index: 30,
    },
    {
      available: true,
      index: 31,
    },
    {
      available: true,
      index: 32,
    },
  ];

  const [currentSeats, setCurrentSeats] = useState<number[]>([]);

  const onSeatClick = (el: { available: boolean; index: number }) => {
    if (el.available) {
      if (currentSeats.includes(el.index)) {
        setCurrentSeats(currentSeats.filter((seat) => seat !== el.index));
      } else {
        setCurrentSeats([...currentSeats, el.index]);
      }
    }
  };

  return (
    <>
      {data.map((el: any, ind: number) => {
        const left =
          Math.floor((el.index - 1) / 2) % 2 === 0
            ? 133 + 86 * Math.floor((el.index - 1) / 4)
            : 169 + 86 * Math.floor((el.index - 1) / 4);

        const top = el.index % 2 === 0 ? 15 : 51;

        return (
          <div
            onClick={() => onSeatClick(el)}
            key={el.index}
            style={{ left: `${left}px`, top: `${top}px` }}
            className="seat-kype select-none cursor-pointer absolute w-[31px] h-[31px]"
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="top_taken"
                transform={`${top === 51 ? "rotate(180 16 16)" : ""}`}
              >
                {el.available ? (
                  currentSeats.includes(el.index) ? (
                    <rect width="32" height="32" rx="4" fill="#FFA800"></rect>
                  ) : (
                    <rect
                      width="31"
                      height="31"
                      rx="3.5"
                      x="0.5"
                      y="0.5"
                      stroke="#FFA800"
                    ></rect>
                  )
                ) : (
                  <rect width="32" height="32" rx="4" fill="#EFEFEF"></rect>
                )}

                <path
                  className="seatLevel"
                  d="M12.3136 5.64003C11.9767 5.88105 11.899 6.34952 12.14 6.68639C12.3811 7.02327 12.8495 7.10098 13.1864 6.85996L16.0018 4.84569L18.8172 6.85996C19.1541 7.10098 19.6226 7.02327 19.8636 6.68639C20.1046 6.34952 20.0269 5.88105 19.69 5.64003L16.0036 3.00262V3.00003L16.0018 3.00132L12.3136 5.64003Z"
                  fill={`${
                    el.available
                      ? currentSeats.includes(el.index)
                        ? "white"
                        : "#FFA800"
                      : "#a3a3a3"
                  }`}
                ></path>
              </g>
            </svg>
            <div
              className={`seat__content ${
                el.available
                  ? currentSeats.includes(el.index)
                    ? "text-[white]"
                    : "text-[#FFA800]"
                  : ""
              }`}
            >
              {el.index}
            </div>
          </div>
        );
      })}
    </>
  );
}

function PlazCartTemplate() {
  const data = [
    {
      available: false,
      index: 1,
    },
    {
      available: false,
      index: 2,
    },
    {
      available: false,
      index: 3,
    },
    {
      available: false,
      index: 4,
    },
    {
      available: false,
      index: 5,
    },
    {
      available: true,
      index: 6,
    },
    {
      available: true,
      index: 7,
    },
    {
      available: true,
      index: 8,
    },
    {
      available: true,
      index: 9,
    },
    {
      available: true,
      index: 10,
    },
    {
      available: true,
      index: 11,
    },
    {
      available: true,
      index: 12,
    },
    {
      available: true,
      index: 13,
    },
    {
      available: true,
      index: 14,
    },
    {
      available: true,
      index: 15,
    },
    {
      available: true,
      index: 16,
    },
    {
      available: true,
      index: 17,
    },
    {
      available: true,
      index: 18,
    },
    {
      available: false,
      index: 19,
    },
    {
      available: false,
      index: 20,
    },
    {
      available: false,
      index: 21,
    },
    {
      available: false,
      index: 22,
    },
    {
      available: false,
      index: 23,
    },
    {
      available: true,
      index: 24,
    },
    {
      available: true,
      index: 25,
    },
    {
      available: true,
      index: 26,
    },
    {
      available: true,
      index: 27,
    },
    {
      available: true,
      index: 28,
    },
    {
      available: true,
      index: 29,
    },
    {
      available: true,
      index: 30,
    },
    {
      available: true,
      index: 31,
    },
    {
      available: true,
      index: 32,
    },
  ];

  const [currentSeats, setCurrentSeats] = useState<number[]>([]);

  const onSeatClick = (el: { available: boolean; index: number }) => {
    if (el.available) {
      if (currentSeats.includes(el.index)) {
        setCurrentSeats(currentSeats.filter((seat) => seat !== el.index));
      } else {
        setCurrentSeats([...currentSeats, el.index]);
      }
    }
  };

  return (
    <>
      {data.map((el: any, ind: number) => {

        let left;
        let top;

        const n = 22
        top = el.index % 2 === 0 ? 15 : 51;
        
        if ((Math.floor((el.index - 1) / 2) % 2 === 0) && el.index <= n) {
          left = 133 + 86 * Math.floor((el.index - 1) / 4)
        } else if ((Math.floor((el.index - 1) / 2) % 2 !== 0) && el.index <= n) {
          left = 169 + 86 * Math.floor((el.index - 1) / 4);
        } else {
          left = el.index % 2 !== 0 ? 133 + 86 * Math.floor((el.index - n) / 2) : 169 + 86 * ((el.index - n) / 2 - 1);
          top = 110
        }

        return (
          <div
            onClick={() => onSeatClick(el)}
            key={el.index}
            style={{ left: `${left}px`, top: `${top}px` }}
            className="seat-kype select-none cursor-pointer absolute w-[31px] h-[31px]"
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="top_taken"
                transform={`${top === 51 ? "rotate(180 16 16)" : ""}`}
              >
                {el.available ? (
                  currentSeats.includes(el.index) ? (
                    <rect width="32" height="32" rx="4" fill="#FFA800"></rect>
                  ) : (
                    <rect
                      width="31"
                      height="31"
                      rx="3.5"
                      x="0.5"
                      y="0.5"
                      stroke="#FFA800"
                    ></rect>
                  )
                ) : (
                  <rect width="32" height="32" rx="4" fill="#EFEFEF"></rect>
                )}

                <path
                  className="seatLevel"
                  d="M12.3136 5.64003C11.9767 5.88105 11.899 6.34952 12.14 6.68639C12.3811 7.02327 12.8495 7.10098 13.1864 6.85996L16.0018 4.84569L18.8172 6.85996C19.1541 7.10098 19.6226 7.02327 19.8636 6.68639C20.1046 6.34952 20.0269 5.88105 19.69 5.64003L16.0036 3.00262V3.00003L16.0018 3.00132L12.3136 5.64003Z"
                  fill={`${
                    el.available
                      ? currentSeats.includes(el.index)
                        ? "white"
                        : "#FFA800"
                      : "#a3a3a3"
                  }`}
                ></path>
              </g>
            </svg>
            <div
              className={`seat__content ${
                el.available
                  ? currentSeats.includes(el.index)
                    ? "text-[white]"
                    : "text-[#FFA800]"
                  : ""
              }`}
            >
              {el.index}
            </div>
          </div>
        );
      })}
    </>
  );
}



export default function Seats() {
  
  // купе люкс
  //const backgr = '../../vecs/bg_lux-kype.svg'
  

  // плацкарt
  const backgr = 'bg-plazc'



  return (
    <div className="">
      <div className="max-w-[948px]">
        <div className="max-h-[148px]">
          <div className="h-[148px] left-[16px] w-[948px]">
            <div className={`absolute top-0 left-0 w-[948px] h-[148px] bg-[url('../../vecs/bg_lux-kype.svg')]`}></div>

            {/* <KypeTemplate /> */}
            {/* <LuxuryTemplate /> */}
            <PlazCartTemplate />

            <div className="absolute top-[14px] left-[86px] w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white"></rect>
                <path
                  id="conductor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.01053 5L6.35334 3.05623C6.32543 2.97369 6.31119 2.88714 6.31119 2.8C6.31119 2.35817 6.66936 2 	7.11119 2L16.8561 2C16.9487 2 17.0407 2.01611 17.1279 2.0476C17.5434 2.19773 17.7586 2.65629 17.6085 3.07183L16.9118 	5H7.01053ZM12 14.5C15.3375 14.5 22 16.175 22 19.5V20.75C22 21.4375 21.4375 22 20.75 22H3.25C2.5625 22 2 21.4375 2 	20.75V19.5C2 16.175 8.6625 14.5 12 14.5ZM17.0043 7.8147C17.0043 10.667 14.7583 13.0001 11.9858 13C9.1651 13 7.08039 	10.6824 7.00139 8.00443H5.00429L7.27801 6H16.6934C16.8848 6.5653 17.0043 7.1785 17.0043 7.8147Z"
                  fill="#A0ACC0"
                >
                  {" "}
                </path>
              </svg>
            </div>

            <div className="absolute top-[14px] left-[50px] w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="Rectangle 2"
                  width="24"
                  height="24"
                  fill="white"
                ></rect>
                <path
                  id="wc"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.47102 15.9736L6.74476 9.01583L4.99666 15.9736C4.8607 16.5013 4.75266 16.8799 4.67253 17.1095C4.59241 17.3391 4.45281 17.5449 4.25372 17.7269C4.05463 17.909 3.78999 18 3.45979 18C3.19271 18 2.97299 17.9459 2.80061 17.8377C2.62822 17.7296 2.48862 17.5765 2.38179 17.3786C2.27496 17.1807 2.18756 16.9459 2.11958 16.6741C2.05159 16.4024 1.9909 16.1504 1.93748 15.9182L0.160243 8.10554C0.0534137 7.65171 0 7.30607 0 7.0686C0 6.76781 0.0971159 6.51451 0.291351 6.30871C0.485585 6.1029 0.725947 6 1.01244 6C1.40577 6 1.67041 6.1372 1.80637 6.41161C1.94234 6.68602 2.0613 7.08443 2.16328 7.60686L3.56176 14.3826L5.12777 8.04222C5.24431 7.55673 5.34871 7.18734 5.44097 6.93404C5.53323 6.68074 5.68376 6.46174 5.89256 6.27704C6.10137 6.09235 6.38543 6 6.74476 6C7.10895 6 7.3918 6.09631 7.59332 6.28892C7.79484 6.48153 7.93445 6.69129 8.01214 6.91821C8.08983 7.14512 8.19423 7.51979 8.32534 8.04222L9.90592 14.3826L11.3044 7.60686C11.3724 7.2533 11.4367 6.97625 11.4974 6.77573C11.5581 6.5752 11.6625 6.39578 11.8106 6.23747C11.9587 6.07915 12.1736 6 12.4552 6C12.7369 6 12.976 6.10158 13.1727 6.30475C13.3693 6.50792 13.4677 6.76253 13.4677 7.0686C13.4677 7.28496 13.4143 7.6306 13.3074 8.10554L11.5302 15.9182C11.4088 16.4459 11.308 16.8325 11.2279 17.0778C11.1478 17.3232 11.0118 17.5383 10.82 17.723C10.6282 17.9077 10.3575 18 10.0079 18C9.67769 18 9.41305 17.9103 9.21396 17.7309C9.01487 17.5514 8.87648 17.3496 8.79879 17.1253C8.72109 16.9011 8.61184 16.5172 8.47102 15.9736ZM24 14.1372C24 14.5066 23.9162 14.9063 23.7487 15.3364C23.5812 15.7665 23.3178 16.1887 22.9584 16.6029C22.5991 17.0172 22.1402 17.3536 21.5818 17.6121C21.0234 17.8707 20.3727 18 19.6297 18C19.0665 18 18.5542 17.942 18.0929 17.8259C17.6316 17.7098 17.2127 17.529 16.8364 17.2836C16.4601 17.0383 16.1141 16.715 15.7985 16.314C15.5168 15.9499 15.2765 15.5422 15.0774 15.091C14.8783 14.6398 14.729 14.1583 14.6294 13.6464C14.5299 13.1346 14.4801 12.591 14.4801 12.0158C14.4801 11.0818 14.6052 10.2454 14.8552 9.5066C15.1053 8.76781 15.4634 8.13589 15.9296 7.61082C16.3958 7.08575 16.942 6.68602 17.5684 6.41161C18.1948 6.1372 18.8625 6 19.5715 6C20.4358 6 21.2055 6.18733 21.8804 6.56201C22.5554 6.93668 23.0725 7.39973 23.4319 7.95119C23.7912 8.50264 23.9709 9.02374 23.9709 9.51451C23.9709 9.78364 23.8835 10.0211 23.7086 10.2269C23.5338 10.4327 23.3226 10.5356 23.075 10.5356C22.7982 10.5356 22.5906 10.4644 22.4522 10.3219C22.3138 10.1794 22.1596 9.93404 21.9897 9.58575C21.708 9.01055 21.3766 8.58048 20.9954 8.29551C20.6143 8.01055 20.1445 7.86807 19.586 7.86807C18.6974 7.86807 17.9897 8.23482 17.4628 8.96834C16.936 9.70185 16.6725 10.7441 16.6725 12.095C16.6725 12.9974 16.7891 13.748 17.0222 14.347C17.2552 14.9459 17.5854 15.3931 18.0127 15.6887C18.4401 15.9842 18.9402 16.1319 19.5132 16.1319C20.1348 16.1319 20.6604 15.9644 21.0901 15.6293C21.5199 15.2942 21.844 14.8021 22.0625 14.153C22.1548 13.847 22.2689 13.5976 22.4049 13.405C22.5408 13.2124 22.7593 13.1161 23.0604 13.1161C23.3178 13.1161 23.5387 13.2137 23.7232 13.409C23.9077 13.6042 24 13.847 24 14.1372Z"
                  fill="#A0ACC0"
                ></path>
              </svg>
            </div>

            <div className="absolute top-[14px] left-[910px] w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="Rectangle 2"
                  width="24"
                  height="24"
                  fill="white"
                ></rect>
                <path
                  id="wc"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.47102 15.9736L6.74476 9.01583L4.99666 15.9736C4.8607 16.5013 4.75266 16.8799 4.67253 17.1095C4.59241 17.3391 4.45281 17.5449 4.25372 17.7269C4.05463 17.909 3.78999 18 3.45979 18C3.19271 18 2.97299 17.9459 2.80061 17.8377C2.62822 17.7296 2.48862 17.5765 2.38179 17.3786C2.27496 17.1807 2.18756 16.9459 2.11958 16.6741C2.05159 16.4024 1.9909 16.1504 1.93748 15.9182L0.160243 8.10554C0.0534137 7.65171 0 7.30607 0 7.0686C0 6.76781 0.0971159 6.51451 0.291351 6.30871C0.485585 6.1029 0.725947 6 1.01244 6C1.40577 6 1.67041 6.1372 1.80637 6.41161C1.94234 6.68602 2.0613 7.08443 2.16328 7.60686L3.56176 14.3826L5.12777 8.04222C5.24431 7.55673 5.34871 7.18734 5.44097 6.93404C5.53323 6.68074 5.68376 6.46174 5.89256 6.27704C6.10137 6.09235 6.38543 6 6.74476 6C7.10895 6 7.3918 6.09631 7.59332 6.28892C7.79484 6.48153 7.93445 6.69129 8.01214 6.91821C8.08983 7.14512 8.19423 7.51979 8.32534 8.04222L9.90592 14.3826L11.3044 7.60686C11.3724 7.2533 11.4367 6.97625 11.4974 6.77573C11.5581 6.5752 11.6625 6.39578 11.8106 6.23747C11.9587 6.07915 12.1736 6 12.4552 6C12.7369 6 12.976 6.10158 13.1727 6.30475C13.3693 6.50792 13.4677 6.76253 13.4677 7.0686C13.4677 7.28496 13.4143 7.6306 13.3074 8.10554L11.5302 15.9182C11.4088 16.4459 11.308 16.8325 11.2279 17.0778C11.1478 17.3232 11.0118 17.5383 10.82 17.723C10.6282 17.9077 10.3575 18 10.0079 18C9.67769 18 9.41305 17.9103 9.21396 17.7309C9.01487 17.5514 8.87648 17.3496 8.79879 17.1253C8.72109 16.9011 8.61184 16.5172 8.47102 15.9736ZM24 14.1372C24 14.5066 23.9162 14.9063 23.7487 15.3364C23.5812 15.7665 23.3178 16.1887 22.9584 16.6029C22.5991 17.0172 22.1402 17.3536 21.5818 17.6121C21.0234 17.8707 20.3727 18 19.6297 18C19.0665 18 18.5542 17.942 18.0929 17.8259C17.6316 17.7098 17.2127 17.529 16.8364 17.2836C16.4601 17.0383 16.1141 16.715 15.7985 16.314C15.5168 15.9499 15.2765 15.5422 15.0774 15.091C14.8783 14.6398 14.729 14.1583 14.6294 13.6464C14.5299 13.1346 14.4801 12.591 14.4801 12.0158C14.4801 11.0818 14.6052 10.2454 14.8552 9.5066C15.1053 8.76781 15.4634 8.13589 15.9296 7.61082C16.3958 7.08575 16.942 6.68602 17.5684 6.41161C18.1948 6.1372 18.8625 6 19.5715 6C20.4358 6 21.2055 6.18733 21.8804 6.56201C22.5554 6.93668 23.0725 7.39973 23.4319 7.95119C23.7912 8.50264 23.9709 9.02374 23.9709 9.51451C23.9709 9.78364 23.8835 10.0211 23.7086 10.2269C23.5338 10.4327 23.3226 10.5356 23.075 10.5356C22.7982 10.5356 22.5906 10.4644 22.4522 10.3219C22.3138 10.1794 22.1596 9.93404 21.9897 9.58575C21.708 9.01055 21.3766 8.58048 20.9954 8.29551C20.6143 8.01055 20.1445 7.86807 19.586 7.86807C18.6974 7.86807 17.9897 8.23482 17.4628 8.96834C16.936 9.70185 16.6725 10.7441 16.6725 12.095C16.6725 12.9974 16.7891 13.748 17.0222 14.347C17.2552 14.9459 17.5854 15.3931 18.0127 15.6887C18.4401 15.9842 18.9402 16.1319 19.5132 16.1319C20.1348 16.1319 20.6604 15.9644 21.0901 15.6293C21.5199 15.2942 21.844 14.8021 22.0625 14.153C22.1548 13.847 22.2689 13.5976 22.4049 13.405C22.5408 13.2124 22.7593 13.1161 23.0604 13.1161C23.3178 13.1161 23.5387 13.2137 23.7232 13.409C23.9077 13.6042 24 13.847 24 14.1372Z"
                  fill="#A0ACC0"
                ></path>
              </svg>
            </div>

            <div className="absolute top-[110px] left-[50px] w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="cooler"
                  d="M19 3H5C3.9 3 3 3.9 3 5V13C3 15.21 4.79 17 7 17H13C15.21 17 17 15.21 17 13V10H19C20.11 10 21 9.1 21 8V5C21 3.9 20.1 3 19 3ZM19 8H17V5H19V8ZM4 19H18C18.55 19 19 19.45 19 20C19 20.55 18.55 21 18 21H4C3.45 21 3 20.55 3 20C3 19.45 3.45 19 4 19Z"
                  fill="#A0ACC0"
                ></path>
              </svg>
            </div>

            <div className="absolute top-[110px] left-[910px] w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="hint-garbage">
                  <path
                    id="garbage"
                    d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7.7C18 7.3134 17.6866 7 17.3 7H6.7C6.3134 7 6 7.3134 6 7.7V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z"
                    fill="#A0ACC0"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
