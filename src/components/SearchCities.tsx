import { useState, useCallback, ChangeEvent, useRef, forwardRef, useEffect } from "react";
import { useLazyGetCitiesQuery } from "../redux/templateApi";
import debounce from "lodash/debounce";
import "../css/RotateSwitch.css";

interface dataInterface {
  name: string;
  _id: string;
}

interface searchInputProps {
  currentCity: string;
  setCurrentCity: (value: string) => void;
}

const SearchInput = forwardRef<HTMLInputElement, searchInputProps>(
  (props, inputRef) => {
    const { currentCity, setCurrentCity } = props;
    let [trigger, { data = [], error, isLoading }] = useLazyGetCitiesQuery();

    useEffect(() => {
      debouncedSearch(currentCity);
    }, [currentCity])

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
      setCurrentCity(value);
      debouncedSearch(value);
    };

    const onCityClick = (ev: React.MouseEvent<HTMLLIElement>) => {
      const value = ev.currentTarget.textContent;
      
      if (value) {
        setCurrentCity(value);
        debouncedSearch(value);
      }
    };

    const [show, setShow] = useState(false)

    return (
      <>
        <div className="w-full relative z-10">
          <input
            value={currentCity}
            type="text"
            ref={inputRef}
            className="input-template bg-[url('../../vecs/geo_icon.svg')] appearance-none"
            onChange={onCityInput}
            onBlur={() => {
              setTimeout(() => {
                setShow(false)
              }, 100);
            }}
            onFocus={() => setShow(true)}
            // required
          />
          {/* {error && <p>Error occurred: {error.message}</p>} */}
          <ul
            className={`absolute top-[55px] bg-white  w-full rounded-[5px] 
              ${ inputRef.current && show ? "block" : "hidden"}`}
          >
            {data.map((data: dataInterface, ind: number) => (
              <li
                key={ind}
                onClick={onCityClick}
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
  const [firstCurrentCity, setFirstCurrentCity] = useState("");
  const [secondCurrentCity, setSecondCurrentCity] = useState("");
  const [rotate, setRotate] = useState(false);
  let searchRef1 = useRef<HTMLInputElement>(null);
  let searchRef2 = useRef<HTMLInputElement>(null);

  const onSwitch = () => {
    setRotate(!rotate);
    setFirstCurrentCity(secondCurrentCity);
    setSecondCurrentCity(firstCurrentCity);
  };

  return (
    <>
      <SearchInput
        ref={searchRef1}
        currentCity={firstCurrentCity}
        setCurrentCity={setFirstCurrentCity}
      />
      <img
        onClick={onSwitch}
        src="../vecs/switch_icon.svg"
        alt="switch"
        className={`switch-cities cursor-pointer ${rotate ? "animate" : ""}`}
      />
      <SearchInput
        ref={searchRef2}
        currentCity={secondCurrentCity}
        setCurrentCity={setSecondCurrentCity}
      />
    </>
  );
}
