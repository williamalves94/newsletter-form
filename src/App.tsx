import { Form } from "./components/form";

export const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">Inscreva-se</h1>
      <p className="text-white">Assine nossa Newsletter</p>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
      <p className="text-slate text-xs w-96 mt-2 text-center text-white">
        Ao se inscrever, voce passara a receber os nossos e-mails
      </p>
    </div>
  );
};
