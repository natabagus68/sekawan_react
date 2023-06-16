import { useState } from "react";

export const useDaftarLokasi = () => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [titleDialog, setTitleDialog] = useState("");
  const [messageDelete, setMessageDelete] = useState({
    title: "",
    message: [],
  });
  const handleOpenDialog = (input?: string) => {
    if (input) {
      setTitleDialog(input);
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };

  const handleOpenModalDelete = (title?: string, message?: string[]) => {
    if (title && message) {
      setMessageDelete({
        title,
        message,
      });

      setOpenModalDelete(!openModalDelete);
    } else {
      setOpenModalDelete(!openModalDelete);
    }
  };

  return {
    open,
    titleDialog,
    openModalDelete,
    messageDelete,
    setOpenModalDelete,
    handleOpenModalDelete,
    handleOpenDialog,
  };
};
