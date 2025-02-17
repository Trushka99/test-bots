import React, { useEffect, useState, useRef } from "react";
import jsonData from "../../utils/data.min.json";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler, // ВАЖНО: Подключаем Filler для заливки
} from "chart.js";
import style from "./Chart.module.css";
// Регистрируем Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const Chart = ({ selectedRange, selectedBot }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const chartRef = useRef(null);

  useEffect(() => {
    if (!jsonData.bots || jsonData.bots.length === 0) return;

    let datasetData;
    let labels;

    if (selectedBot) {
      const bot = jsonData.bots.find((b) => b.name === selectedBot);
      if (!bot) return;

      const { name, cost, ...data } = bot;
      labels = Object.keys(data);
      datasetData = Object.values(data);
    } else {
      labels = jsonData.bots.map((bot) => bot.name);
      datasetData = jsonData.bots.map((bot) => bot[selectedRange]);
    }

    setChartData({
      labels,
      datasets: [
        {
          label: `Profit (${selectedRange})`,
          data: datasetData,
          borderColor: "#1f8ef1",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#ffffff",
          backgroundColor: (context) => {
            const chart = context.chart;
            if (!chart) return "rgba(31, 142, 241, 0.3)";

            const { ctx, chartArea } = chart;
            if (!chartArea) return;

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );
            gradient.addColorStop(0, "rgba(31, 142, 241, 0.6)");
            gradient.addColorStop(1, "rgba(31, 142, 241, 0.1)");

            return gradient;
          },
        },
      ],
    });
  }, [selectedRange, selectedBot]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#555" } },
    },
  };

  return (
    <div className={style.chart_container}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default Chart;
