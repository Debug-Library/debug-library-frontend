import { useState } from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export function Home() {
  const [user, setUser] = useState({
    name: "Maria de Fátima",
    avatar: "https://avatars.githubusercontent.com/u/94319702?v=4",
  });

  const handleLogout = () => {
    setUser(null);
    // Aqui você pode limpar o token, contexto etc.
  };

  return (
    <div className="flex flex-col min-h-screen bg-purple-950">
      {/* Cabeçalho */}
      <Navbar user={user} onLogout={handleLogout} />

      {/* Conteúdo principal (cresce para empurrar o footer) */}
      <main className="flex-grow">
        <Banner />
      </main>

      {/* Rodapé fixado no fim da página */}
      <Footer />
    </div>
  );
}

export default Home;