import { useState } from "react";

export const useUserAdminForm = () => {
  const [openEye, setOpenEye] = useState(false);
  const handleEye = () => {
    setOpenEye(!openEye);
  };

  return {
    openEye,
    handleEye,
  };
};
