import { User } from "@domain/models/user";
import { useState } from "react";

export const useLogin = () => {
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    console.log("yes");
    setEye(!eye);
  };

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
  return {
    eye,
    user,
    handleEye,
    handleForm,
  };
};
