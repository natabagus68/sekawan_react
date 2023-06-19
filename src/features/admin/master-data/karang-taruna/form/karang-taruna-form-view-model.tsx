import { config } from "@common/utils";
import { useNavigate } from "react-router-dom";

export const useKarangTarunaForm = () => {
  const navigate = useNavigate();
  const onBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${config.pathPrefix}admin/master-data/karang-taruna`);
  };

  return {
    onBack,
  };
};
