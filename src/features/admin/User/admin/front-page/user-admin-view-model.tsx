import { config } from "@common/utils";
import { useNavigate } from "react-router-dom";

export const useUserAdmin = () => {
  const navigate = useNavigate();
  const toFormCreate = () => {
    navigate(`${config.pathPrefix}admin/user/admin/form`);
  };
  return {
    toFormCreate,
  };
};
