


export default function Steps() {
  const stepsIndex = 1

  return (
    <div className="steps relative z-0 flex w-full text-white">
      <div className={`${stepsIndex / 4 >= 0.25 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem] ">
          1
        </div>
        Билеты
      </div>
      <div className={`${stepsIndex / 4 >= 0.50 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
          2
        </div>
        Пассажиры
      </div>
      <div className={`${stepsIndex / 4 >= 0.75 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
          3
        </div>
        Оплата
      </div>
      <div className={`${stepsIndex / 4 >= 1.00 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
          4
        </div>
        Проверка
      </div>
    </div>
  );
}
