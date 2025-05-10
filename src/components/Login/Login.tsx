import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div className="bg-purple-950 min-h-screen flex items-center justify-center">
      <div className="fixed top-0 left-0 right-0 flex justify-center items-start h-[100px]">
        <img 
          src="/src/assets/Logotipo-Debug-Library.png" 
          className="w-70 h-auto py-20" 
          alt="Logotipo Debug Library" 
        />
      </div>
      <section className="font-montserrat bg-purple-800 w-full max-w-md p-8 rounded-xl shadow-xl mx-4 sm:mx-8">
        <h2 className="font-montserrat text-4xl text-white text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 rounded-md bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              {...register("email")}
            />
              
            {errors.email && (
              <p className="text-white text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-3 rounded-md bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-white text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link to="/cadastro" className="w-full">
              <button
                type="button"
                className="w-full bg-white text-purple-800 font-semibold py-4 rounded-md hover:bg-purple-100 transition"
              >
                Criar conta
              </button>
            </Link>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-4 rounded-md hover:bg-purple-600 transition"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;