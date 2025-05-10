import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cadastroSchema = z
  .object({
    email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
    apelido: z.string().min(3, "O apelido precisa ter no mínimo 3 caracteres"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.password === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

type CadastroFormData = z.infer<typeof cadastroSchema>;

export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
  });

  const onSubmit = (data: CadastroFormData) => {
    console.log("Dados cadastrados:", data);
  };

  return (
    <div className="bg-purple-950 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex justify-center mb-8 mt-10">
        <img 
          src="/src/assets/Logotipo-Debug-Library.png" 
          className="w-70 h-auto" 
          alt="Logotipo Debug Library" 
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-800 w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 rounded-md shadow-md mt-5"
      >
        <h1 className="font-montserrat text-white text-2xl sm:text-3xl text-center mb-6">
          Cadastro
        </h1>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-white">
            E-mail
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full bg-gray-100 text-black px-3 py-2 rounded outline-none"
          />
          {errors.email && (
            <p className="text-white text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-white">
            Apelido
          </label>
          <input
            type="text"
            {...register("apelido")}
            className="w-full bg-gray-100 text-black px-3 py-2 rounded outline-none"
          />
          {errors.apelido && (
            <p className="text-white text-sm mt-1">{errors.apelido.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-white">
            Senha
          </label>
          <input
            type="password"
            {...register("password")}
            className="w-full bg-gray-100 text-black px-3 py-2 rounded outline-none"
          />
          {errors.password && (
            <p className="text-white text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-white">
            Confirmar Senha
          </label>
          <input
            type="password"
            {...register("confirmarSenha")}
            className="w-full bg-gray-100 text-black px-3 py-2 rounded outline-none"
          />
          {errors.confirmarSenha && (
            <p className="text-white text-sm mt-1">
              {errors.confirmarSenha.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="block w-full sm:w-1/2 mx-auto bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-600 transition"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
}

export default Cadastro;