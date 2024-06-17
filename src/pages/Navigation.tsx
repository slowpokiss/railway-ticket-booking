import { Outlet } from "react-router-dom";

const pageUp = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
});

export default function Navigation() {
  return (
    <>
      <Outlet />
      <footer className="bg-darkGrey text-white">
        <div className="contacts mx-auto w-[60%] grid grid-cols-[40%,60%] gap-12 p-[30px]">
          <div className="w-[60%] flex flex-col gap-4">
            <div className="text-white font-medium text-[20px]">
              Свяжитесь с нами
            </div>
            <div className="flex gap-5">
              <img
                src="../vecs/tel_icon.svg"
                alt="tel"
                className="contact-img"
              />
              <div className="contact-info">8 (800) 000 00 00</div>
            </div>
            <div className="flex gap-5">
              <img
                src="../vecs/mail_icon.svg"
                alt="mail"
                className="contact-img"
              />
              <div className="contact-info">inbox@mail.ru</div>
            </div>
            <div className="flex gap-5">
              <img
                src="../vecs/skype_icon.svg"
                alt="skype"
                className="contact-img"
              />
              <div className="contact-info">tu.train.tickets</div>
            </div>
            <div className="flex gap-5">
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
          <div className="subscribe flex flex-col gap-[25px]">
            <div className="contats-title">Подписка</div>
            <div className="flex flex-col gap-[10px]">
              Будьте в курсе событий
              <form className="flex gap-[20px]">
                <input
                  type="text"
                  className="input-template"
                  placeholder="e-mail"
                />
                <input
                  type="submit"
                  className="btn-template border-white px-[10px] btn-goldish"
                  value="ОТПРАВИТЬ"
                />
              </form>
            </div>
            <div className="subscribe-contacts">
              <div className="contats-title">Подписывайтесь на нас</div>
              <div className="flex gap-7">
                <div className="sub-contact">
                  <img
                    src="../vecs/youtube_icon.svg"
                    className="contact-img"
                    alt="youtube"
                  />
                </div>
                <div className="sub-contact">
                  <img
                    src="../vecs/in_icon.svg"
                    className="contact-img"
                    alt="in"
                  />
                </div>
                <div className="sub-contact">
                  <img
                    src="../vecs/google_icon.svg"
                    className="contact-img"
                    alt="google"
                  />
                </div>
                <div className="sub-contact">
                  <img
                    src="../vecs/facebook_icon.svg"
                    className="contact-img"
                    alt="facebook"
                  />
                </div>
                <div className="sub-contact">
                  <img
                    src="../vecs/twitter_icon.svg"
                    className="contact-img"
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info flex pt-[15px] pb-[15px] px-[120px] justify-between items-center border-t border-solid border-white">
          <div className="info-elem contats-title">Лого</div>
          <img
            src="../vecs/arrow_up.svg"
            alt="arrow_up"
            className="cursor-pointer"
            onClick={pageUp}
          />
          <div className="info-elem">2024 WEB</div>
        </div>
      </footer>
    </>
  );
}
