export const Login = () => {
    return (
      <>
        <div className="bg-purple-950 min-h-screen flex items-center justify-center">
        <section className="bg-purple-800 w-full max-w-md p-8 rounded-xl shadow-xl mx-4 sm:mx-8">
            <h2 className="font-montserrat text-4xl text-white text-center mb-6">Login</h2>
  
            <form className="space-y-4" action="">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full p-3 rounded-md border bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
  
              <input 
                type="password" 
                placeholder="Senha" 
                className="w-full p-3 rounded-md border bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
  
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button 
                  type="button"
                  className="w-full sm:w-1/2 bg-white text-purple-800 font-semibold py-3 rounded-md hover:bg-purple-100 transition"
                >
                  Criar conta
                </button>
  
                <button 
                  type="submit"
                  className="w-full sm:w-1/2 bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-600 transition"
                >
                  Login
                </button>
              </div>
            </form>
          </section>
        </div>
      </>
    );
  };
  
export default Login;  