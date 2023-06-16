import { Breadcrumbs, Input } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import SaveIcon from "@common/components/icons/SaveIcon";
import TrashIcon from "@common/components/icons/TrashIcon";
import ModalDialog from "@common/components/modals/ModalDialog";
import {
  Button,
  Card,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { ModalAdd } from "../modal-add/modal-add-view";
import { useDaftarLokasi } from "./daftar-lokasi-view-model";
import ModalDelete from "@common/components/modals/ModalDelete";

export const DaftarLokasi = () => {
  const model = useDaftarLokasi();
  return (
    <>
      {/* modal delete */}
      <ModalDelete
        open={model.openModalDelete}
        setOpen={model.setOpenModalDelete}
        message={model.messageDelete.message}
        tittle={model.messageDelete.title}
      />
      {/* modal add data */}
      <ModalAdd
        tittle={model.titleDialog}
        open={model.open}
        handleOpen={model.handleOpenDialog}
      />
      <main>
        <Breadcrumbs items={["Master Data Daftar Lokasi"]} />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8 px-12 pb-8">
        <div className=" py-6">
          <Typography variant="h3" color="black">
            Master Data Daftar Lokasi
          </Typography>
        </div>
        <section className="w-full  rounded-md border border-gray-300">
          <header className="py-6 px-4 bg-[#F2F4F5] flex justify-between">
            <div className=" flex flex-col gap-4">
              <Typography variant="h5" color="black">
                Provinsi
              </Typography>
              <div className="w-96 bg-white">
                <Select label="Pilih Provinsi" size="lg">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>

            <div className=" w-1/2 flex items-end justify-end gap-4">
              <Button
                onClick={() => model.handleOpenDialog("Provinsi")}
                className="bg-[#2980DE] flex items-center gap-3"
                size="md"
              >
                <PlusIcon className="w-5 h-5" />
                Provinsi
              </Button>
              <Button
                onClick={() => model.handleOpenDialog("Kota/Kabupaten")}
                className="bg-[#2980DE] flex items-center gap-3"
                size="md"
              >
                <PlusIcon className="w-5 h-5" />
                Kota/Kabupaten
              </Button>
              <Button
                className="bg-[#194E86] flex items-center gap-3"
                size="md"
              >
                <SaveIcon className="w-5 h-5" />
                Save
              </Button>
            </div>
          </header>
          <header className="bg-[#F2F4F5] flex border-y border-gray-300">
            <div className="py-4 w-full pl-4">Kota/Kabupaten</div>
            <div className="py-4 w-full pl-4">Kecamatan</div>
            <div className="py-4 w-full pl-4">Desa/Kelurahan</div>
          </header>
          <section className="pb-3">
            {/* main for Kota/Kabupaten */}
            <main className="border-b border-black py-4 px-4 flex">
              <div className="w-1/2 ">
                <div className="w-full bg-white flex items-center gap-4">
                  <Input
                    size="lg"
                    className="outline-none border border-gray-300"
                  />
                  <Button
                    onClick={() =>
                      model.handleOpenModalDelete("Kota/Kabupaten", [
                        "Apakah anda yakin ingin menghapus Kota/Kabupaten ini?",
                        " Data Kecamatan & Desa/Kelurahan di dalamnya akan ikut terhapus",
                      ])
                    }
                    color="red"
                    size="sm"
                  >
                    <TrashIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>
              {/* section for kecamatan */}
              <section className="flex justify-between w-full border-b border-black pb-5">
                <div className="w-full pl-4">
                  <div className="w-full bg-white flex items-center gap-4">
                    <Input
                      size="lg"
                      className="outline-none border border-gray-300"
                    />
                    <Button
                      onClick={() =>
                        model.handleOpenModalDelete("Kecamatan", [
                          "Apakah anda yakin ingin menghapus Kecamatan ini? Data Desa/Kelurahan di dalamnya akan ikut terhapus",
                        ])
                      }
                      color="red"
                      size="sm"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </Button>
                  </div>
                  <Button className="flex items-center gap-4 ml-8 mt-5">
                    <PlusIcon className="w-5 h-5" />
                    Kecamatan
                  </Button>
                </div>
                <div className="w-full pl-4">
                  <div className="w-full bg-white flex items-center gap-4">
                    <Input
                      size="lg"
                      className="outline-none border border-gray-300"
                    />
                    <Button
                      onClick={() =>
                        model.handleOpenModalDelete("Kelurahan/Desa", [
                          "Apakah anda yakin ingin menghapus Desa/Kelurahan ini?",
                        ])
                      }
                      color="red"
                      size="sm"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </Button>
                  </div>

                  <Button className="flex items-center gap-4 ml-8 mt-5">
                    <PlusIcon className="w-5 h-5" />
                    Kelurahan/Desa
                  </Button>
                </div>
              </section>
            </main>
          </section>
        </section>
      </Card>
    </>
  );
};
