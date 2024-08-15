import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Calendar from "../components/Calendar";
import { setDepartureDates } from "../redux/mainSlice";
import SearchCities from "../components/SearchCities";

export default function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <header className="flex flex-col justify-around overflow-hidden w-full h-full border-b-[7px] border-orange bg-no-repeat bg-center bg-cover bg-train-main bg-[rgba(0,0,0,0.7)]">
        <div className="head-first">
          <div className="w-full text-[1.31rem] font-bold text-white py-[6px] px-44 bg-[rgba(0,0,0,0.5)] ">
            <Link to={"/"}>Лого</Link>
          </div>
          <nav className="w-full h-auto bg-[rgba(41,41,41,1)]">
            <ul className="flex gap-10 w-auto h-fit mx-44 py-4">
              <Link to={"/#about"} className="text-white text-[1.31rem]">
                О нас
              </Link>
              <Link to={"/#how-it-works"} className="text-white text-[1.31rem]">
                Как это работает
              </Link>
              <Link to={"/#reviews"} className="text-white text-[1.31rem]">
                Отзывы
              </Link>
              <Link to={"/#contacts"} className="text-white text-[1.31rem]">
                Контакты
              </Link>
            </ul>
          </nav>
        </div>

        <div className="flex min-h-[500px] items-end justify-center ">
          <div className="flex h-auto justify-center items-center w-full gap-24">
            <div className="w-fit text-white text-[3.125em]">
              Вся жизнь - <br />
              <strong>путешествие!</strong>
            </div>
            <div className="flex flex-col gap-5 bg-[rgba(41,41,41,0.8)] p-5">
              <div className="flex flex-col gap-6 items-end">
                <div className="flex flex-col gap-2 ">
                  <p className="text-[20px] text-white">Направление</p>
                  <div className="flex gap-1">
                    <SearchCities />
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <p className="text-[20px] text-white">Дата</p>
                  <div className="flex gap-[30px]">
                    <Calendar
                      inputClass="input-template"
                      onInput={(data: string | undefined) =>
                        dispatch(
                          setDepartureDates({
                            date: data,
                            dateInputDirection: "from",
                          })
                        )
                      }
                    />
                    <Calendar
                      inputClass="input-template"
                      onInput={(data: string | undefined) =>
                        dispatch(
                          setDepartureDates({
                            date: data,
                            dateInputDirection: "to",
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <input
                  onClick={() => navigate("/booking")}
                  type="submit"
                  value="НАЙТИ БИЛЕТЫ"
                  className="btn-template btn-orange bg-orange border-orange text-black "
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="about w-[70%] mx-auto mt-[75px] mb-0">
          <div id="about" className="title-25">
            О НАС
          </div>
          <div className="flex gap-[0.95rem] items-stretch">
            <div className="w-[0.64rem] bg-[#FFA800]"></div>
            <div className="flex flex-col gap-3">
              <div>
                Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
                наблюдаем, как с каждым днем все больше людей заказывают жд
                билеты через интернет.
              </div>
              <div>
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                клика, но стоит ли это делать? Мы расскажем о преимуществах
                заказа через интернет.
              </div>
              <div>
                <strong>
                  Покупать жд билеты дешево можно за 90 суток до отправления
                  поезда. Благодаря динамическому ценообразованию цена на билеты
                  в это время самая низкая.
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="advantage flex flex-col justify-between items-center w-full h-[400px] mt-[75px] pt-[45px] pb-[85px] bg-no-repeat bg-center bg-cover bg-road-main">
          <div className="w-[75%] flex flex-row justify-between m-5">
            <div id="how-it-works" className="advantage-title">
              КАК ЭТО РАБОТАЕТ
            </div>
            <div className="btn-template text-white border-white btn-goldish">
              Узнать больше
            </div>
          </div>
          <div className="flex gap-16 justify-between">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[100px]"
                src="../img/advantage_1.png"
                alt="advantage_1"
              />
              <div className="step-title text-[1rem] text-white">
                Удобный заказ на сайте
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[100px]"
                src="../img/advantage_2.png"
                alt="advantage_2"
              />
              <div className="text-[1rem] text-white">
                Нет необходимости ехать в офис
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[100px]"
                src="../img/advantage_3.png"
                alt="advantage_3"
              />
              <div className="text-[1rem] text-white">
                Огромный выбор направлений
              </div>
            </div>
          </div>
        </div>
        <div className="reviews w-[70%] flex flex-col mx-auto my-[75px]">
          <div id="reviews" className="title-25">
            ОТЗЫВЫ
          </div>
          <div className="flex gap-[70px]">
            <div className="flex gap-[30px]">
              <img
                src="../img/rewiev_person_1.png"
                alt="rewiev_person_1.png"
                className="w-[160px] h-[160px]"
              />
              <div className="review-info">
                <div className="review-name">Екатерина Вальнова</div>
                <div className="mt-[20px] text-[1rem] text-lightGrey relative">
                  Доброжелательные подсказки на всех этапах помогут правильно
                  заполнить поля и без затруднений купить авиа или ж/д билет,
                  даже если вы заказываете онлайн билет впервые
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <img
                src="../img/rewiev_person_2.png"
                alt="rewiev_person_2.png"
                className="w-[160px] h-[160px]"
              />
              <div className="review-info">
                <div className="review-name">Евгений Стрыкало</div>
                <div className="mt-[20px] text-[1rem] text-lightGrey relative">
                  СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                  за 3 часа до отправления мы пришлем вам СМС-напоминание о
                  поездке.
                </div>
              </div>
            </div>
          </div>
          <img
            src="../img/toremove_1.png"
            alt="rewiev_person_2.png"
            className="remove-img"
          />
        </div>
      </main>
    </>
  );
}
