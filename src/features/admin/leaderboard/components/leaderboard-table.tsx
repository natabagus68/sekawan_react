import { Typography, Button } from "@material-tailwind/react";
import InformationIcon from "@common/components/icons/InformationIcon";
import ShowDetail from "../popup/detail";
import useLeaderBoardModel from "../leaderboard-model";

export default function LeaderBoardTable() {
  const data = useLeaderBoardModel();
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="bg-[#FAFAFB]">
            <th className="p-4 font-[600] border-y border-[#D0D3D9] text-sm text-left">Peringkat</th>
            <th className="p-4 font-[600] border-y border-[#D0D3D9] text-sm text-left">Nama Karang Taruna</th>
            <th className="p-4 font-[600] border-y border-[#D0D3D9] text-sm text-left">Points</th>
            <th className="p-4 font-[600] border-y border-[#D0D3D9] text-sm text-left">Kecamatan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#FFF] text-[#404446]">
            <td className="px-4 py-2 border border-[#D0D3D9] text-center">1</td>
            <td className="px-4 py-2 border border-[#D0D3D9] text-left">Panca Karya Muda</td>
            <td className="px-4 py-2 border border-[#D0D3D9] text-left">2430</td>
            <td className="px-4 py-2 border-b border-[#D0D3D9] text-left flex items-center">
              <span className="w-6/12">Banjarbangu</span>
              <Button
                className="bg-[#20519F] flex items-center gap-3"
                onClick={data.onOpenDetail}
              >
                <InformationIcon />
                <span className="font-[400]">Detail</span>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Typography variant="small" className="py-4 px-6 font-[400]"><span className="font-[600]">50</span> list (All data has been displayed)</Typography>
      <ShowDetail open={data.openDetail} close={data.onCloseDetail} />
    </>
  );
}
