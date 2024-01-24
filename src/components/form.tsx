import { useState, FormEvent } from "react";
import { User } from "../types/user";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [erro, setError] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="">
          Nome:
        </label>
        <input className="rounded-lg py-2 px-2 text-sm" type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="e-mail">
          E-mail:
        </label>
        <input className="rounded-lg py-2 px-2 text-sm" type="email" />
      </div>
      <div className="flex flex-col">
        <a className="text-xs underline mb-2" href="#">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input className="text-sm" type="checkbox" />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
      </div>
      <button className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">
        Cadastrar
      </button>
    </form>
  );
};
