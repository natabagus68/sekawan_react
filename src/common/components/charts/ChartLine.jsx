import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const ChartLine = ({ datas, labels, height, maxValue = 300 }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Data",
        data: [10, 20, 15, 25, 30],
        fill: false, // Jangan mengisi area di bawah garis
        borderColor: "indigo", // Warna garis indigo
        borderWidth: 2,
        cubicInterpolationMode: "monotone", // Mode interpolasi bezier
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <Line data={data} options={options} height={height} />
    </>
  );
};
