import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import SaveIcon from "@common/components/icons/SaveIcon";
import TrashIcon from "@common/components/icons/TrashIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useKeanggotaanMasterData } from "./keanggotaan-view-model";

export const KeanggotaanMasterData = () => {
  const model = useKeanggotaanMasterData();
  return (
    <>
      <ModalDelete
        tittle=""
        message={["Apakah anda yakin ingin menghapus data ini?"]}
        open={model.openModelDelete}
        setOpen={model.setOpenModalDelete}
      />
      <main>
        <Breadcrumbs items={["Master Data Keanggotaan"]} />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="px-12 py-6 border-b border-gray-300">
          <Typography variant="h3" color="black">
            Keanggotaan
          </Typography>
        </div>
        <main className="pr-32 pl-12 py-12">
          <form action=" " className="w-full">
            <Typography className="mb-4">Pilihan</Typography>
            <div className="w-full bg-white mb-5 flex items-center gap-3">
              <Input
                size="lg"
                className="outline-none"
                label="Tulis Pilihan Keanggotaan"
              />
              <Button
                onClick={() => model.handleOpenModalDelete()}
                color="red"
                size="sm"
              >
                <TrashIcon className="w-6 h-6" />
              </Button>
            </div>
            <section>
              <Button
                variant="outlined"
                color="blue"
                className="flex gap-3 items-center"
              >
                <PlusIcon color="#2980DE" className="w-5 h-5" />
                Tambah Pilihan
              </Button>
            </section>
            <div className="mt-8 w-48">
              <Button
                variant="filled"
                className="flex gap-3 items-center justify-center bg-[#194E86] text-center w-full"
              >
                <SaveIcon className="w-5 h-5" />
                Save
              </Button>
            </div>
          </form>
        </main>
      </Card>
    </>
  );
};
