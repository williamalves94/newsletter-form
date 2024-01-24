import { useState, FormEvent } from "react";
import { User } from "../types/user";
import { Validate } from "../utils/validate";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validateError = Validate(data);
    if (Object.keys(validateError).length > 0) {
      setError(validateError);
      return;
    }

    setName("");
    setEmail("");
    setAgree(false);
    alert("Obrigado por se inscrever!");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="">
          Nome:
        </label>
        <input
          className="rounded-lg py-2 px-2 text-sm"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error?.name && (
          <small className="text-xs text-red-500 mt-1">{error?.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="e-mail">
          E-mail:
        </label>
        <input
          className="rounded-lg py-2 px-2 text-sm"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error?.email && (
          <small className="text-xs text-red-500 mt-1">{error?.email}</small>
        )}
      </div>
      <div className="flex flex-col">
        <a className="text-xs underline mb-2" href="#">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            className="text-sm"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
        {error?.agree && (
          <small className="text-xs text-red-500 mt-1">{error?.agree}</small>
        )}
      </div>
      <button className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">
        Cadastrar
      </button>
    </form>
  );
};
