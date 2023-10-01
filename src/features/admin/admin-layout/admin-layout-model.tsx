import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAdmin() {
  const route = useNavigate();
  const [headerName, setHeaderName] = useState("Overview");
  const changeHeaderName = (params: string) => {
    setHeaderName(params);
  };

  const isMe = async () => {
    const data = await localStorage.getItem("token");
    if (!data) route("/");
  };
  const logout = async () => {
    await localStorage.clear();
    route("/");
  };
  useEffect(() => {
    isMe();
  }, []);
  return {
    headerName,
    changeHeaderName,
    logout,
  };
}
