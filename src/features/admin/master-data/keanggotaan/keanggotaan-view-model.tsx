import { useState } from "react";

export const useKeanggotaanMasterData = () => {
  const [openModelDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = () => {
    setOpenModalDelete(!openModelDelete);
  };

  return {
    openModelDelete,
    setOpenModalDelete,
    handleOpenModalDelete,
  };
};
