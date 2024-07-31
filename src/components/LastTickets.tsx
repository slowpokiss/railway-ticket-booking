import { useGetLastRoutesQuery } from "../redux/templateApi";



export default function LastTickets() {
  const {data, isLoading} = useGetLastRoutesQuery({})

  return (
    <>
      <div className="lasts flex flex-col gap-5 text-[18px] cursor-pointer">
        <div className=" font-medium">ПОСЛЕДНИЕ ПОЕЗДКИ</div>
        <ul className="flex flex-col gap-4">
          <li className="card w-full p-3 flex flex-col gap-3 bg-white border border-[#928F94] shadow-lg">
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2">
                  <div className="text-[16px]">Санкт-Петербург</div>
                  <div className="text-[#928F94] text-[13px]">
                    Курский возкал
                  </div>
                </div>
                <div className="flex w-1/2 flex-col items-end">
                  <div className="text-[16px]">Самара</div>
                  <div className="text-[#928F94] text-[13px] text-end">
                    Московский возкал
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[#928F94]">
              <div className="flex w-fit gap-2">
                <img src="../vecs/wifi.svg" className="h-[15px]" alt="wifi" />
                <img
                  src="../vecs/express.svg"
                  className="h-[15px]"
                  alt="express"
                />
                <img src="../vecs/cup.svg" className="h-[15px]" alt="cup" />
              </div>
              <div className="flex items-center gap-1">
                от
                <div className="font-bold text-[22px] text-orange">2 500 ₽</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}