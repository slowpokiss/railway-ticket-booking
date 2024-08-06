import { Slider, ConfigProvider } from "antd";
import { format, addSeconds } from "date-fns";

interface sliderPropsSlider {
  minim: number;
  maxim: number;
  onChangeComplete: (timeData: number[]) => void;
}

export function RangeSliderTemplate({
  minim,
  maxim,
  onChangeComplete,
}: sliderPropsSlider) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            dotSize: 10,
            dotBorderColor: "white",
            handleActiveColor: "#FFA800",
            handleActiveOutlineColor: "transparent",
            handleColor: "#dcdcdc",
            handleLineWidth: 1,
            handleSize: 14,
            railSize: 10,
            railBg: "white",
            trackBg: "#FFA800",
            trackHoverBg: "#ffbd39",
          },
        },
      }}
    >
      <Slider
        range
        defaultValue={[3000, 7000]}
        min={minim}
        max={maxim}
        tooltip={{
          open: true,
        }}
        marks={{
          [minim]: {
            style: {
              bottom: "-25px",
              color: "#f50",
            },
            label: <strong>{minim}</strong>,
          },
          [maxim]: {
            style: {
              bottom: "-25px",
              color: "#f50",
            },
            label: <strong>{maxim}</strong>,
          },
        }}
        onChangeComplete={(value: number[]) => onChangeComplete(value)}
      />
    </ConfigProvider>
  );
}

export function TimeRangeSliderTemplate({
  onChangeComplete,
}: sliderPropsSlider) {
  const formatTooltip = (value: any) => {
    if (value) {
      const date = new Date(0, 0);
      const formattedDate = addSeconds(date, value);
      return format(formattedDate, "HH:mm");
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            dotSize: 10,
            dotBorderColor: "white",
            handleActiveColor: "#FFA800",
            handleActiveOutlineColor: "transparent",
            handleColor: "#dcdcdc",
            handleLineWidth: 1,
            handleSize: 14,
            railSize: 10,
            railBg: "white",
            trackBg: "#FFA800",
            trackHoverBg: "#ffbd39",
          },
        },
      }}
    >
      <Slider
        range
        defaultValue={[14400, 72000]}
        min={0}
        max={82800}
        step={3600}
        tooltip={{
          formatter: formatTooltip,
        }}
        marks={{
          0: {
            style: {
              color: "#f50",
            },
            label: <strong>0:00</strong>,
          },
          82800: {
            style: {
              color: "#f50",
            },
            label: <strong>23:00</strong>,
          },
        }}
        onChangeComplete={(value: number[]) => onChangeComplete(value)}
      />
    </ConfigProvider>
  );
}
