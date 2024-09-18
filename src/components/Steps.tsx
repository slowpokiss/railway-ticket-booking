import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initialStateInterface, setStepsIndex } from "../redux/mainSlice";


export default function Steps() {
  const stepsIndex = useSelector((state: {main: initialStateInterface}) => state.main.stepsIndex)
  const dispatch = useDispatch();

  const onStepClick = (stepIndex: number) => {
    dispatch(setStepsIndex({ index: stepIndex }))
  };


  return (
    <div className="steps relative z-0 flex w-full text-white">
      <Link onClick={() => onStepClick(1)} to={'/tickets-booking/booking'} className={`${stepsIndex / 4 >= 0.25 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem] ">
          1
        </div>
        Билеты
      </Link>
      <Link onClick={() => onStepClick(2)} to={'/tickets-booking/booking/passengers'} className={`${stepsIndex / 4 >= 0.50 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
          2
        </div>
        Пассажиры
      </Link>
      <Link onClick={() => onStepClick(3)} to={'/tickets-booking/booking/payment'} className={`${stepsIndex / 4 >= 0.75 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
          3
        </div>
        Оплата
      </Link>
      <Link onClick={() => onStepClick(4)} to={'/tickets-booking/booking/review'} className={`${stepsIndex / 4 >= 1.00 ? 'arrow-active' : ''} arrow gap-2`}>
        <div className="number border-2 w-fit rounded-[50%] text-[20px] px-[0.6rem]">
          4
        </div>
        Проверка
      </Link>
    </div>
  );
}
