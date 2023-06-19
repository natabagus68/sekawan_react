import { config } from "@common/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useKarangTaruna = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handlerOpen = () => {
    setOpen(!open);
  };
  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  const toform = () => {
    navigate(`${config.pathPrefix}admin/master-data/karang-taruna/form`);
  };
  return {
    open,
    openDelete,
    setOpenDelete,
    setOpen,
    handleOpenDelete,
    handlerOpen,
    toform,
  };
};
