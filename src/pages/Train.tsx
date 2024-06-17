


export default function Train() {
  return (
    <>
    <main>
        <div className="steps overflow-hidden flex w-full text-white ">
          <div className="arrow arrow-active gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem] ">1</div>
            Билеты
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">2</div>
            Пассажиры
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">3</div>
            Оплата
          </div>
          <div className="arrow gap-2 ">
            <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">4</div>
            Проверка
          </div>
        </div>
        <div className="">
          <div className="date"></div>
          <div className="trains"></div>
        </div>
      </main>
    </>
  )
}