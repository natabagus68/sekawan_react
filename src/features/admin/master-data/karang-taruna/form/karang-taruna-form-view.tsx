import { Breadcrumbs, Input } from "@common/components";
import ChevrontLeft from "@common/components/icons/ChevrontLeft";
import SaveIcon from "@common/components/icons/SaveIcon";
import {
  Button,
  Card,
  Option,
  Typography,
  Select,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import { useKarangTarunaForm } from "./karang-taruna-form-view-model";

export const KarangTarunaForm = () => {
  const model = useKarangTarunaForm();
  return (
    <>
      <main>
        <Breadcrumbs
          items={["Master Data Karang Taruna", "Add Data Karang Taruna"]}
        />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="px-12 py-6 flex items-center justify-between border-b border-gray-300">
          <Typography variant="h3" color="black">
            Add Data Karang Taruna
          </Typography>
          <button
            onClick={model.onBack}
            className="flex items-center gap-3 border border-gray-500 text-gray-500 px-8 py-3 rounded-md active:scale-95 duration-100 cursor-pointer"
          >
            <ChevrontLeft className={"w-6 h-6"} />
            <Typography variant="small">Back</Typography>
          </button>
        </div>
        <form className="w-full py-12 pl-6 pr-40">
          <div className="w-full flex flex-col gap-4">
            <label htmlFor="name" className="text-xl">
              Nama Karang Taruna
            </label>
            <Input
              id="name"
              placeholder="Tulis nama Karang Taruna"
              className="outline-none border border-gray-500"
            />
          </div>
          <div className="w-full flex flex-col gap-4 mt-5">
            <label htmlFor="Tingkatan" className="text-xl">
              Tingkatan
            </label>
            <Select label="Pilih Salah Satu">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className="mt-5">
            <Typography className="text-xl">
              Keanggotaan (Checklist yang sesuai)
            </Typography>
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="ketua"
                  className=" py-2 flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="ketua"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Ketua
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="Wakit Ketua"
                  className=" py-2 flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="Wakit Ketua"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Wakil Ketua
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="Sekretaris"
                  className=" py-2 flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="Sekretaris"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Sekretaris
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="Bendahara"
                  className=" py-2 flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="Bendahara"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Bendahara
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="Anggota"
                  className=" py-2 flex items-center w-full cursor-pointer"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="Anggota"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Anggota
                  </Typography>
                </label>
              </ListItem>
            </List>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            <label className="text-xl">Provinsi</label>
            <Input
              value="Jawa Barat"
              disabled
              className="borde border-gray-400"
            />
          </div>
          <div className="w-full flex flex-col gap-4 mt-5">
            <label htmlFor="Kota/Kabupaten" className="text-xl">
              Kota/Kabupaten
            </label>
            <Input
              id="Kota/Kabupaten"
              placeholder="Pilih Kota/Kabupaten"
              className="outline-none border border-gray-500"
            />
          </div>
          <div className="w-full flex flex-col gap-4 mt-5">
            <label htmlFor="Kecamatan" className="text-xl">
              Kecamatan
            </label>
            <Input
              id="Kecamatan"
              placeholder="Pilih Kecamatan"
              className="outline-none border border-gray-500"
            />
          </div>
          <div className="w-full flex flex-col gap-4 mt-5">
            <label htmlFor="Desa/Kelurahan" className="text-xl">
              Desa/Kelurahan
            </label>
            <Input
              id="Desa/Kelurahan"
              placeholder="Pilih Desa/Kelurahan"
              className="outline-none border border-gray-500"
            />
          </div>
          <div className="mt-8">
            <button
              disabled
              className="py-4 px-32 flex gap-2 items-center bg-[#194E86] text-white rounded-md active:scale-95 duration-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Save
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};
