import { useState, useCallback, ChangeEvent, useRef, forwardRef, useEffect } from "react";
import { useLazyGetCitiesQuery } from "../redux/templateApi";
import debounce from "lodash/debounce";
import "../css/RotateSwitch.css";
import { useDispatch, useSelector } from "react-redux";
import { setDepartureCity, initialStateInterface, changeDepartureCity } from "../redux/mainSlice";

interface dataInterface {
  name: string;
  _id: string;
}

type CityInputDirection = 'fromCity' | 'toCity';
interface searchInputProps {
  cityInputDirection: CityInputDirection
}

const SearchInput = forwardRef<HTMLInputElement, searchInputProps>(
  (props, ref) => {
    const { cityInputDirection } = props;
    const [trigger, { data = [] }] = useLazyGetCitiesQuery();
    const dispatch = useDispatch();
    const inputData = useSelector((state: {main: initialStateInterface}) => state.main.firstStep.searchData.departureCities);

    useEffect(() => {
      debouncedSearch(inputData[cityInputDirection].name);
    }, [inputData[cityInputDirection].name]);

    const debouncedSearch = useCallback(
      debounce((searchTerm: string) => {
        if (searchTerm) {
          trigger(searchTerm);
        }
      }, 100),
      [trigger]
    );
    
    const onCityInput = (ev: ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      dispatch(setDepartureCity({ cityInputDirection, value, id: null }));
      debouncedSearch(value);
    };

    const onCityClick = (value: string, id: string) => {
      if (value) {
        dispatch(setDepartureCity({ cityInputDirection, value, id }));
        debouncedSearch(value);
      }
    };

    const [citiesListState, setCitiesListState] = useState(false);

    return (
      <>
        <div className="w-full relative z-10">
          <input
            value={inputData[cityInputDirection].name}
            type="text"
            name="cityInput"
            ref={ref}
            className="input-template bg-[url('../../tickets-booking/vecs/geo_icon.svg')] appearance-none"
            onChange={onCityInput}
            onBlur={() => {
              setTimeout(() => {
                setCitiesListState(false);
              }, 250);
            }}
            onFocus={() => setCitiesListState(true)}
            required
          />

          <ul
            className={`absolute top-[55px] bg-white  w-full rounded-[5px] 
              ${ref && typeof ref === 'object' && ref.current && citiesListState ? "block" : "hidden"}`}
          >
            {data.map((data: dataInterface, ind: number) => (
              <li
                key={ind}
                onClick={() => onCityClick(data.name, data._id)}
                className="cursor-pointer px-3 py-[2px] overflow-visible z-10 uppercase text-[14px]"
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
);


export default function SearchCities() {
  const [rotate, setRotate] = useState(false);
  const dispatch = useDispatch();

  const searchRef1 = useRef<HTMLInputElement | null>(null);
  const searchRef2 = useRef<HTMLInputElement | null>(null);

  const onSwitch = () => {
    setRotate(!rotate);
    dispatch(changeDepartureCity())
  };

  return (
    <>
      <SearchInput
        ref={searchRef1}
        cityInputDirection={'fromCity'}
      />
      <img
        onClick={onSwitch}
        src="../../../tickets-booking/vecs/switch_icon.svg"
        alt="switch"
        className={`switch-cities cursor-pointer ${rotate ? "animate" : ""}`}
      />
      <SearchInput
        ref={searchRef2}
        cityInputDirection={'toCity'}
      />
    </>
  );
}
