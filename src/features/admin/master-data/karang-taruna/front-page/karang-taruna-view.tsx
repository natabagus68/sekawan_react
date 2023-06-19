import { Breadcrumbs } from "@common/components";
import DetailButtonIcons from "@common/components/icons/DetailButtonIcons";
import PencilSquer from "@common/components/icons/PencilSquer";
import TrashIcon from "@common/components/icons/TrashIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalDialog from "@common/components/modals/ModalDialog";
import PaginationNew from "@common/components/pagination/PaginationNew";
import { Table } from "@common/components/table/Table";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useKarangTaruna } from "./karang-taruna-view-model";
import NoDataImg from "../../../../../assets/no-data.png";

export const KarangTaruna = () => {
  const model = useKarangTaruna();
  return (
    <>
      <ModalDelete
        open={model.openDelete}
        setOpen={model.setOpenDelete}
        message={["Apakah anda yakin ingin menghapus Karang Taruna ini?"]}
        tittle="Hapus Karang Taruna"
      />
      <ModalDialog open={model.open} handleOpen={model.handlerOpen} />
      {/* --------- */}
      <main>
        <Breadcrumbs items={["Master Data Karang Taruna"]} />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="px-12 py-6">
          <Typography variant="h3" color="black">
            Master Data Karang Taruna
          </Typography>
        </div>
        <div className="py-4 px-6 flex items-end justify-between gap-4 bg-[#F2F4F5]">
          <div className="flex gap-4 items-end ">
            <div>
              <Typography variant="h5" color="black">
                Provinsi
              </Typography>
              <div className="bg-white mt-4 w-72">
                <Select label="Pilih Provinsi" size="lg">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
            <div className="w-72 relative bg-white">
              <Input
                size="lg"
                color="blue"
                label="Search Nama Karang Taruna"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <Typography variant="h6" className="text-center mt-4">
              Sort by:
            </Typography>
            <div className="bg-white mt-4 w-52">
              <Select label="Nama (A-Z)" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <div className="w-52">
              <Button
                className="mt-4 flex items-center gap-2 "
                size="md"
                onClick={model.toform}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Karang Taruna
              </Button>
            </div>
          </div>
        </div>
        <main>
          {/* if have not data */}
          {/* <div className="w-full h-[500px] flex justify-center hidden">
            <img src={NoDataImg} alt="no data image" />
          </div> */}
          {/* if have some data */}
          <table className="w-full">
            <thead>
              <tr className="bg-[#FAFAFB] border-y border-gray-300">
                <th className="text-start px-6 py-3">
                  <Typography variant="h6" className="text-[#404446]">
                    Nama Karang Taruna
                  </Typography>
                </th>
                <th className="text-start px-6 py-3">
                  <Typography variant="h6" className="text-[#404446]">
                    Tingkatan
                  </Typography>
                </th>
                <th className="text-start px-6 py-3">
                  <Typography variant="h6" className="text-[#404446]">
                    Jumlah Orang
                  </Typography>
                </th>
                <th className="text-start px-6 py-3">
                  <Typography variant="h6" className="text-[#404446]">
                    Kota/Kabupaten
                  </Typography>
                </th>
                <th className="text-start px-6 py-3">
                  <Typography variant="h6" className="text-[#404446]">
                    Kecamatan
                  </Typography>
                </th>
                <th className="text-start px-6 py-3">
                  <Typography variant="h6" className="text-[#404446]">
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full border-b border-gray-300">
                <td className="text-start px-6 py-5">
                  <Typography variant="paragraph" color="black">
                    Panca Karya Muda
                  </Typography>
                </td>

                <td className="text-start px-6 py-5">
                  <Typography variant="paragraph" color="black">
                    Nasional
                  </Typography>
                </td>
                <td className="text-start px-6 py-5">
                  <Typography variant="paragraph" color="black">
                    187
                  </Typography>
                </td>
                <td className="text-start px-6 py-5">
                  <Typography variant="paragraph" color="black">
                    Kab. Banjarnegara
                  </Typography>
                </td>
                <td className="text-start px-6 py-5">
                  <Typography variant="paragraph" color="black">
                    Kec. Banjarnegara
                  </Typography>
                </td>
                <td className="text-start px-6 py-5">
                  <div className="flex w-max gap-4">
                    <Button
                      color="blue"
                      className="flex gap-2 items-center"
                      onClick={model.handlerOpen}
                    >
                      <DetailButtonIcons className="w-6 h-6" />
                      Detail
                    </Button>
                    <Button className="flex gap-2 items-center bg-[#F79009]">
                      <PencilSquer className="w-6 h-6" />
                      Edit
                    </Button>
                    <Button color="red" onClick={model.handleOpenDelete}>
                      <TrashIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
        <footer className="py-8 bg-white px-5 flex justify-between">
          <Typography variant="h6" color="black" classNam="flex">
            1 - 20 of 50 <span className="font-[400]">Karang Taruna</span>
          </Typography>
          <PaginationNew />
        </footer>
      </Card>
    </>
  );
};
