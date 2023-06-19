import { Line } from "react-chartjs-2";
import { Typography, Select, Option } from "@material-tailwind/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useDashboardModel from "../dashboard-modal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PerformChart() {
  const data = useDashboardModel();
  return (
    <div className="flex items-center justify-between border border-[#D0D3D9] p-4 rounded-md max-w-[750px]">
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <Typography>Performa Stats</Typography>
          <div className="flex gap-3">
            <div className="flex items-center gap-3">
              <Typography variant="small">Lokasi</Typography>
              <Select label="Lokasi">
                <Option>Semarang</Option>
                <Option>Bandung</Option>
                <Option>Jakarta</Option>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Typography variant="small">Tahun</Typography>
              <Select label="Tahun">
                <Option>2013</Option>
                <Option>2015</Option>
                <Option>2018</Option>
              </Select>
            </div>
          </div>
        </div>
        <Line options={data.charts_opts} data={data.charts} />
      </div>
    </div>
  );
}
