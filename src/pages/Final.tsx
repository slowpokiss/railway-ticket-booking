import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { initialStateInterface } from "../redux/mainSlice";

export default function Final() {
  const [star, setStars] = useState(0);
  const main = useSelector(
    (state: { main: initialStateInterface }) =>
      state.main
  );

  const starsArray = [];
  for (let i = 1; i < 6; i++) {
    starsArray.push(
      <div className="">
        <svg
          key={i}
          width="30"
          height="30"
          viewBox="0 0 46 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setStars(i)}
          className="cursor-pointer"
        >
          <path
            d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
            stroke="white"
            strokeWidth="2"
            className="hover:fill-white"
            fill={`${star >= i ? "white" : ""} `}
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <>
      <header className="relative mb-70 min-h-[350px] flex flex-col justify-around overflow-hidden w-full h-full bg-no-repeat bg-center bg-cover bg-[url('../../../tickets-booking/img/final.png')] bg-[rgba(0,0,0,0.7)]">
        <div className="head-first">
          <div className="w-full text-[1.31rem] font-bold text-white py-[6px] px-44 bg-[rgba(0,0,0,0.5)] ">
            <Link to={"/tickets-booking"}>Лого</Link>
          </div>
          <nav className="w-full h-auto bg-[rgba(41,41,41,1)]">
            <ul className="flex gap-10 w-auto h-fit mx-44 py-4">
              <Link to={"/tickets-booking/#about"} className="text-white text-[1.31rem]">
                О нас
              </Link>
              <Link to={"/tickets-booking/#how-it-works"} className="text-white text-[1.31rem]">
                Как это работает
              </Link>
              <Link to={"/tickets-booking/#reviews"} className="text-white text-[1.31rem]">
                Отзывы
              </Link>
              <Link to={"/tickets-booking/#contacts"} className="text-white text-[1.31rem]">
                Контакты
              </Link>
            </ul>
          </nav>
        </div>

        <div className="flex min-h-[350px] items-end justify-center "></div>
      </header>

      <main className="min-h-[950px]">
        <div className="absolute top-[200px] w-full p-20">
          <p className="text-[50px] text-white font-semibold">Благодарим Вас за заказ!</p>
          <div className="bg-white">
            <div className="flex justify-between text-[25px] border-b p-10 border-[#928F94]">
              <p className="font-semibold text-[#3E3C41]">№ Заказа 285АА</p>
              <div className="flex gap-4">
                сумма <p> {main.firstStep.trainOptions.currVagon.totalPrice ?? 0}</p> ₽
              </div>
            </div>
            <div className="bg-[#F4F3F6]">
              <div className="flex gap-20 justify-center p-10">
                <div className="flex flex-col break-words text-center w-[150px]">
                  <img
                    className="w-[150px] h-[150px]"
                    src="../../tickets-booking/vecs/tickets_komp.svg"
                    alt=""
                  />
                  <div className="">
                    билеты будут отправлены на ваш{" "}
                    <p className="font-semibold">e-mail</p>
                  </div>
                </div>

                <div className="w-[150px] flex flex-col text-center break-words">
                  <img
                    className="w-[150px] h-[150px]"
                    src="../../tickets-booking/vecs/tickets_cirle.svg"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold">распечатайте </p>и сохраняйте
                    билеты до даты поездки
                  </div>
                </div>

                <div className="w-[150px] flex flex-col text-center break-words">
                  <img
                    className="w-[150px] h-[150px]"
                    src="../../tickets-booking/vecs/man_circle.svg"
                    alt=""
                  />
                  <div className="">
                    <p className="font-semibold">предьявите</p> распечатанные
                    билеты при посадке
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-28">
              <p className="text-[25px] font-semibold text-[#292929]">
                {main.thirdStep.name ?? ''} {main.thirdStep.surName?? ''} !
              </p>
              <p>
                Ваш заказ успешно оформлен.
                <br />В ближайшее время с вами свяжется наш оператор для
                подтверждения.
              </p>
              <p className="font-semibold">
                Благодарим Вас за оказанное доверие и желаем приятного
                путешествия!
              </p>
            </div>
            <div className="flex justify-between items-center bg-orange px-5 py-8">
              <div className="flex gap-5 items-center">
                <p>Оценить сервис</p>
                <div className="flex gap-1">
                  {starsArray.map((el) => {
                    return el;
                  })}
                </div>
              </div>
              <Link
                to={"/tickets-booking"}
                className="btn-template px-5 border-[black] active:text-[orange] active:border-[black] active:bg-[black]"
              >
                ВЕРНУТЬСЯ НА ГЛАВНУЮ
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
