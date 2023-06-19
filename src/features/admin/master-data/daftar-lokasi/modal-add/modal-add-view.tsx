import { Input } from "@common/components";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
export const ModalAdd = ({
  tittle,
  confirm = null,
  open = false,
  handleOpen = null,
}) => {
  return (
    <>
      <main>
        <Dialog open={open} handler={handleOpen} size="md">
          <DialogHeader>Tambah {tittle}</DialogHeader>
          <DialogBody divider>
            <Input
              size="lg"
              className="outline-none focus:outline-[#2D8DF4] w-full bg-[#F2F4F5]"
              placeholder={tittle}
            />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              color="blue"
              onClick={handleOpen}
              className="w-full"
            >
              <span>Tambah</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </main>
    </>
  );
};
