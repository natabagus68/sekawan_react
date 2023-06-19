import { Typography, Input, Select, Option } from "@material-tailwind/react";
import SearchIcon from "@common/components/icons-new/SearchIcon";

export default function LeaderBoardOptions() {
  return (
    <div className="p-3 bg-[#F2F4F5]">
      <div className="flex gap-4">
        <Typography variant="h6" className="mb-3">
          {"dynamic options !"}
        </Typography>
      </div>
      <div className="flex justify-between mb-3">
        <div className="flex gap-2 w-[60%]">
          <Select label="kab/kabupaten" className="bg-[#FFF]">
            <Option value="bandung">kab.Bandung</Option>
            <Option value="cianjur">kab.Cianjur</Option>
          </Select>
          <Input
            label="Search Nama Karang Taruna"
            className="bg-[#FFF]"
            icon={<SearchIcon color={"#b0bec5"} />}
          />
        </div>
        <div className="flex gap-3 items-center">
          <Typography variant="small" className="font-[400] w-1/2">Sort by</Typography>
          <Select label="Sorted by" className="bg-[#FFF]">
            <Option value="ASC">Peringkat Tertinggi</Option>
            <Option value="DESC">Peringkat Terendah</Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
