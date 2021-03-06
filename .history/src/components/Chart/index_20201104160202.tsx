// @flow
import { createChart, CrosshairMode, ISeriesApi } from "lightweight-charts";
import * as React from "react";
import { Legend } from "../Legend";
import "./index.css";

interface ChartProps {}
export const Chart: React.FC<ChartProps> = (props) => {
  const containerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const candleSeriesRef = React.useRef() as React.MutableRefObject<ISeriesApi<"Candlestick">>
  React.useEffect(() => {
    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      layout: {
        backgroundColor: "#253248",
        textColor: "rgba(255,255,255,0.9)",
      },
      grid: {
        vertLines: {
          color: "#334158",
        },
        horzLines: {
          color: "#334158",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      //@ts-ignore
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
      },
    });
  }, []);

  return <div className="Chart" ref={containerRef}>
    <Legend legend="BTC"/>
  </div>;
};
