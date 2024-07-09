

export default function Payment() {
  return (
    <>
      <div className="w-full border border-[#C4C4C4]">
        <div className="">
          <div className="flex justify-between items-center text-[20px] py-5 px-6 bg-[#F9F9F9]">
            <div className="flex items-center gap-4">
              <p>Персональные данные</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-6 bg-white border-t-2 border-b-2 border-dotted">
            <div className="flex flex-col gap-7 ">
              <div className="grid grid-cols-3 gap-[22px]">
                <div className="flex flex-col">
                  <p className="text-[#928F94]">Фамилия</p>
                  <input type="text" className="passengers-input" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#928F94]">Имя</p>
                  <input type="text" className="passengers-input" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#928F94]">Отчество</p>
                  <input type="text" className="passengers-input" />
                </div>
              </div>
            </div>
            <div className="flex mt-4 flex-col w-[40%] gap-5">
              <div className="flex flex-col">
                <p className="text-[#928F94]">Контактный телефон</p>
                <input
                  type="tel"
                  name="phone_number"
                  className="passengers-input"
                  maxLength={11}
                  placeholder="+7 ___ ___ __ __"
                  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#928F94]">E-mail</p>
                <input
                  type="tel"
                  placeholder="example@gmail.com"
                  name=""
                  maxLength={6}
                  className="passengers-input"
                  pattern="\d{6}"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between border-b-2 border-dotted items-center text-[20px] py-5 px-6 bg-[#F9F9F9]">
            <div className="flex items-center gap-4">
              <p>Способ оплаты</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 bg-white ">
            <div className="border-b-2 border-dotted p-6">
              <div className="">
                <label className="ml-2 w-fit flex gap-4 container select-none">
                  <input type="checkbox" className="big-checkbox" />
                  <p className="text-[#928F94]">Онлайн</p>
                </label>
              </div>
              <div className="w-[60%] mt-[20px] flex justify-between font-semibold">
                <p className="">
                  Банковской <br />
                  картой
                </p>
                <p className="">PayPal</p>
                <p className="">Visa QIWI Wallet</p>
              </div>
            </div>
            <div className="p-6">
              <label className="ml-2 w-fit flex gap-4 container select-none">
                <input type="checkbox" className="big-checkbox" />
                <p className="text-[#928F94]">Наличными</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto mt-14 btn-template btn-orange bg-orange border-orange text-white ">Купить билеты</div>
    </>
  );
}
