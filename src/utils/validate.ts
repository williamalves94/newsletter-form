import { User } from "../types/user";

type Error = {
  [key: string]: string;
};

export const Validate = (data: User) => {
  const error: Error = {};

  if (!data.name) {
    error["name"] = "O nome é obrigatório!";
  }
  if (!data.email) {
    error["email"] = "O e-mail é obrigatório!";
  }
  if (!data.agree) {
    error["agree"] = "Voce precisa concordar com os termos";
  }

  return error;
};
