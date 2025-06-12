import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import BookSliderSection from "../BookSliderSection/BookSliderSection";
import Footer from "../Footer/Footer";

export function Home() {
const [user] = useState<{ name: string; avatar: string } | null>({
  name: "Maria de Fátima",
  avatar: "https://avatars.githubusercontent.com/u/94319702?v=4",
});

  function handleLogout(): void {
    throw new Error("Function not implemented.");
  }

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