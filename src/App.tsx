import { Link, NavLink, Outlet } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <>
      <header className="head">
        <div className="head-first">
          <div className="logo">Лого</div>
          <nav className="nav">
            <ul className="navbar">
              <li className="nav-item">О нас</li>
              <li className="nav-item">Как это работает</li>
              <li className="nav-item">Отзывы</li>
              <li className="nav-item">Контакты</li>
            </ul>
          </nav>
        </div>

        <div className="header-main">
          <div className="header-title">
            Вся жизнь - <br /><strong>путешествие!</strong>
          </div>
          <div className="header-logic">
            <form className="order-form">
              <p className="order-form-title">Направление</p>
              
              <div className="direction">
                <input placeholder="Откуда" className="input-template input-geo" type="text" />
                <img src="../vecs/switch_icon.svg" alt="switch" />
                <input placeholder="Куда" className="input-template input-geo" type="text" />
              </div>
            </form>
            <input type="date" name="month" />
          </div>
        </div>
      </header>
      <main>
        <div className="about">
          <div className="title-25">О НАС</div>
          <div className="about-main">
            <div className="line-vert"></div>
            <div className="about-text">
              <div className="about-text-elem">
                Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
                наблюдаем, как с каждым днем все больше людей заказывают жд
                билеты через интернет.
              </div>
              <div className="about-text-elem">
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                клика, но стоит ли это делать? Мы расскажем о преимуществах
                заказа через интернет.
              </div>
              <div className="about-text-elem">
                <strong>
                  Покупать жд билеты дешево можно за 90 суток до отправления
                  поезда. Благодаря динамическому ценообразованию цена на билеты
                  в это время самая низкая.
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="advantage">
          <div className="advantage-top">
            <div className="advantage-title">КАК ЭТО РАБОТАЕТ</div>
            <div className="btn-template">Узнать больше</div>
          </div>
          <div className="advantage-steps">
            <div className="advantage-step">
              <img
                className="advantage-img"
                src="../img/advantage_1.png"
                alt="advantage_1"
              />
              <div className="step-title">Удобный заказ на сайте</div>
            </div>
            <div className="advantage-step">
              <img
                className="advantage-img"
                src="../img/advantage_2.png"
                alt="advantage_2"
              />
              <div className="step-title">Нет необходимости ехать в офис</div>
            </div>
            <div className="advantage-step">
              <img
                className="advantage-img"
                src="../img/advantage_3.png"
                alt="advantage_3"
              />
              <div className="step-title">Огромный выбор направлений</div>
            </div>
          </div>
        </div>
        <div className="reviews-area">
          <div className="title-25">ОТЗЫВЫ</div>
          <div className="reviews">
            <div className="review">
              <img
                src="../img/rewiev_person_1.png"
                alt="rewiev_person_1.png"
                className="review-img"
              />
              <div className="review-info">
                <div className="review-name">Екатерина Вальнова</div>
                <div className="review-body">
                  Доброжелательные подсказки на всех этапах помогут правильно
                  заполнить поля и без затруднений купить авиа или ж/д билет,
                  даже если вы заказываете онлайн билет впервые
                </div>
              </div>
            </div>
            <div className="review">
              <img
                src="../img/rewiev_person_2.png"
                alt="rewiev_person_2.png"
                className="review-img"
              />
              <div className="review-info">
                <div className="review-name">Евгений Стрыкало</div>
                <div className="review-body">
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
      <footer>
        <div className="contacts">
          <div className="contats-ways">
            <div className="contats-title">Свяжитесь с нами</div>
            <div className="contact">
              <img
                src="../vecs/tel_icon.svg"
                alt="tel"
                className="contact-img"
              />
              <div className="contact-info">8 (800) 000 00 00</div>
            </div>
            <div className="contact">
              <img
                src="../vecs/mail_icon.svg"
                alt="mail"
                className="contact-img"
              />
              <div className="contact-info">inbox@mail.ru</div>
            </div>
            <div className="contact">
              <img
                src="../vecs/skype_icon.svg"
                alt="skype"
                className="contact-img"
              />
              <div className="contact-info">tu.train.tickets</div>
            </div>
            <div className="contact">
              <img
                src="../vecs/geo_icon.svg"
                alt="geo"
                className="contact-img"
              />
              <div className="contact-info">
                г. Москва ул. Московская 27-35 555 555
              </div>
            </div>
          </div>
          <div className="subscribe">
            <div className="contats-title">Подписка</div>
            <div className="subscribe-form-area">
              Будьте в курсе событий
              <form className="subscribe-form">
                <input type="text" className="form-input" placeholder="e-mail" />
                <input type="submit" className="btn-template" value="ОТПРАВИТЬ" />
              </form>
            </div>
            <div className="subscribe-contacts">
              <div className="contats-title">Подписывайтесь на нас</div>
              <div className="sub-list">
                <div className="sub-contact">
                  <img src="../vecs/youtube_icon.svg" className="contact-img" alt="" />
                </div>
                <div className="sub-contact">
                  <img src="../vecs/in_icon.svg" className="contact-img" alt="" />
                </div>
                <div className="sub-contact">
                  <img src="../vecs/google_icon.svg" className="contact-img" alt="" />
                </div>
                <div className="sub-contact">
                  <img src="../vecs/facebook_icon.svg" className="contact-img" alt="" />
                </div>
                <div className="sub-contact">
                  <img src="../vecs/twitter_icon.svg" className="contact-img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info-elem contats-title">Лого</div>
          <img src="../vecs/arrow_up.svg" alt="" className="info-elem contact-img" />
          <div className="info-elem">2024 WEB</div>
        </div>
      </footer>
    </>
  );
}

export default App;
