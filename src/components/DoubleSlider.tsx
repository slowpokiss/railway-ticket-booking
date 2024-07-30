import { Slider, ConfigProvider } from "antd";
import { format, addSeconds } from "date-fns";

const onChangeComplete = (value: number | number[]) => {
  console.log(value);
};

interface props {
  minim: number;
  maxim: number;
  type?: string;
}

function RangeSliderTemplate({ minim, maxim }: props) {
  return (
    <Slider
      range
      defaultValue={[3000, 7000]}
      min={minim}
      max={maxim}
      tooltip={{
        open: true,
        placement: 'bottom'
      }}
      marks={{
        [minim]: {
          style: {
            bottom: '25px',
            color: "#f50",
          },
          label: <strong>{minim}</strong>,
        },
        [maxim]: {
          style: {
            bottom: '25px',
            color: "#f50",
          },
          label: <strong>{maxim}</strong>,
        },
      }}
      onChangeComplete={onChangeComplete}
    />
  );
}

function TimeRangeSliderTemplate() {
  const formatTooltip = (value: any) => {
    if (value) {
      const date = new Date(0, 0);
      const formattedDate = addSeconds(date, value);
      return format(formattedDate, "HH:mm");
    }
    
  };

  return (
    <Slider
      range
      defaultValue={[14400, 72000]}
      min={0}
      max={84600}
      step={1800}
      
      tooltip={{
        formatter: formatTooltip,
        //open: true,
      }}
      marks={{
        0: {
          style: {
            color: "#f50",
          },
          label: <strong>0:00</strong>,
        },
        84600: {
          style: {
            color: "#f50",
          },
          label: <strong>23:30</strong>,
        },
      }}
      onChangeComplete={onChangeComplete}
    />
  );
}

export default function DoubleSlider({ type, minim, maxim }: props) {


  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            dotSize: 10,
            dotBorderColor: 'white',
            handleActiveColor: "#FFA800",
            handleActiveOutlineColor: "transparent",
            handleColor: "#dcdcdc",
            handleLineWidth: 1,
            handleSize: 14,
            railSize: 10,
            railBg: 'white',
            trackBg: "#FFA800",
            trackHoverBg: "#ffbd39",
          },
        },
      }}
    >
      {type === "time" ? (
        <TimeRangeSliderTemplate />
      ) : (
        <RangeSliderTemplate minim={minim} maxim={maxim} />
      )}
    </ConfigProvider>
  );
}
