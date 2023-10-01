import { Auth } from "@domain/models/auth";
import { IUser } from "@domain/models/user";

export interface AuthRepository {
  login(props: IUser): Promise<Auth>;
  me(id: string): Promise<Auth>;
}
