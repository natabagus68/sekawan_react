import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAdmin() {
  const [headerName, setHeaderName] = useState("Overview");
  const changeHeaderName = (params: string) => {
    setHeaderName(params);
  };

  return {
    headerName,
    changeHeaderName,
  };
}
