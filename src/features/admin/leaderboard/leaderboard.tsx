import { Typography } from "@material-tailwind/react";
import LeaderBoardTable from "./components/leaderboard-table";
import LeaderBoardOptions from "./components/options";
import useLeaderBoardModel from "./leaderboard-model";

export default function LeaderBoard() {
  const data = useLeaderBoardModel()
  return (
    <div className="border border-[#D0D3D9] ">
      <div className="text-[#404446] border-b border-b-[#D0D3D9] rounded-tl-md rounded-tr-md px-8 py-6 bg-[#FFF]">
        <Typography variant="h3">Leaderboard</Typography>
      </div>
      <div className="flex gap-4 px-3 bg-[#FFF] border-b border-[#D0D3D9] py-4">
        <Typography
          variant="h6"
          className="font-[400] hover:border-b-2 hover:border-[#20519F] hover:text-[#20519F] cursor-pointer"
          value="kecamatan"
        >
          Kecamatan
        </Typography>
        <Typography
          variant="h6"
          className="font-[400] hover:border-b-2 hover:border-[#20519F] hover:text-[#20519F] cursor-pointer"
          value="kota"
        >
          Kota/Kabupaten
        </Typography>
      </div>
      <LeaderBoardOptions />
      <LeaderBoardTable />
    </div>
  );
}
