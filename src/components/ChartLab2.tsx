import React, { useEffect, useRef } from 'react'
import { Chart } from "chart.js/auto";

interface ChartLab2Props {
  labels: string[];
  values: number[];
}

const ChartLab2: React.FC<ChartLab2Props> = ({ labels, values }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // якщо графік вже існує — знищуємо
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Кількість факультетів",
            data: values,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            ticks: {
              color: "#ffffff",
            },
            title: {
              display: true,
              text: "Університети",
              color: "#ffffff",
            },
          },
          y: {
            grid: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            ticks: {
              color: "#ffffff",
            },
            title: {
              display: true,
              text: "Кількість факультетів",
              color: "#ffffff",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff",
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [labels, values]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <canvas style={{ maxWidth: "900px", height: "700px" }} ref={canvasRef} />
    </div>
  );
};

export default ChartLab2;