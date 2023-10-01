import { Auth } from "@domain/models/auth";
import { IUser, User } from "@domain/models/user";
import { AuthRepository } from "@domain/repositories/auth-repository";
import { api } from "./_api";

export class AuthApiRepository implements AuthRepository {
  async me(id: string): Promise<Auth> {
    const { data } = await api.get("users/" + id);
    return Auth.create({
      token: await localStorage.getItem("token"),
      user: User.create({
        email: data?.email ?? "",
      }),
    });
  }
  async login(props: IUser): Promise<Auth> {
    const { data } = await api.post("login", {
      email: props.unmarshall().email,
      password: props.unmarshall().password,
    });
    return Auth.create({
      token: data?.accessToken ?? "",
      user: User.create({
        email: data?.user?.email ?? "",
      }),
    });
  }
}
