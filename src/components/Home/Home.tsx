import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import BookSliderSection from "../BookSliderSection/BookSliderSection";
import Footer from "../Footer/Footer";

export function Home() {
  const [user, setUser] = useState({
    name: "Maria de Fátima",
    avatar: "https://avatars.githubusercontent.com/u/94319702?v=4",
  });

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-purple-950 text-white">
      {/* Cabeçalho */}
      <Navbar user={user} onLogout={handleLogout} />

      {/* Conteúdo principal */}
      <main className="flex-grow">
        <BookSliderSection />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default Home;