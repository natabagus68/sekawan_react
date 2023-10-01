import { AuthApiRepository } from "@data/auth-api-repository";
import { User } from "@domain/models/user";
import { AuthRepository } from "@domain/repositories/auth-repository";
import { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

export const useLogin = () => {
  const route = useNavigate();
  const authRep: AuthRepository = new AuthApiRepository();
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    console.log("yes");
    setEye(!eye);
  };
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [validateError, setValidateError] = useState<boolean>(false);
  const [user, setUser] = useState(
    User.create({
      email: "",
      password: "",
    })
  );

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return User.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleLogin = async () => {
    try {
      const data = await authRep.login(user);
      await localStorage.setItem("token", data.unmarshall().token);
      route("/admin/overview");
    } catch (error) {
      setErrorMsg("Password atau Email salah");
      setValidateError(true);
    }
  };

  const isMe = async () => {
    const token = await localStorage.getItem("token");
    if (!!token) {
      route("/admin/overview");
    }
  };
  useEffect(() => {
    isMe();
  }, []);
  return {
    errorMsg,
    validateError,
    eye,
    user,
    handleEye,
    handleForm,
    handleLogin,
  };
};
