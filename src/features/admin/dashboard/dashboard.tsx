import { Typography } from "@material-tailwind/react"
import { Breadcrumbs } from "@common/components"
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon"
import PerformChart from "./components/perform-chart"

export default function Dashboard() {
  return (
    <>
      <Breadcrumbs items={["Dashboard"]}/>
      <div className="grid grid-cols-4 py-6 text-[#404446] gap-5">
        <div className="bg-[#FFF] border border-[#D0D3D9] rounded-lg p-4">
          <Typography variant="small" className="font-[500] mb-2">Karang Taruna</Typography>
          <div className="flex justify-between">
            <Typography variant="h4">210</Typography>
            <div className="flex gap-1 text-[#12B76A] items-center justify-center">
              <span>+10% </span>
              <ArrowUpIcon color={"#12B76A"} className="w-4"/>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF] border border-[#D0D3D9] rounded-lg p-4">
          <Typography variant="small" className="font-[500] mb-2">Total Anggota</Typography>
          <div className="flex justify-between">
            <Typography variant="h4">1.040</Typography>
            <div className="flex gap-1 text-[#12B76A] items-center justify-center">
              <span>+6% </span>
              <ArrowUpIcon color={"#12B76A"} className="w-4"/>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF] border border-[#D0D3D9] rounded-lg p-4">
          <Typography variant="small" className="font-[500] mb-2">Total Acara</Typography>
          <Typography variant="h4">120</Typography>
        </div>
        <div className="bg-[#FFF] border border-[#D0D3D9] rounded-lg p-4">
          <Typography variant="small" className="font-[500] mb-2">karang taruna</Typography>
          <Typography variant="h4">78</Typography>
        </div>
      </div>
      <PerformChart />
    </>
  )
}