import { useState, useEffect } from "react";
import ProfileImageUploader from "../ProfileImageUploader/ProfileImageUploader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BookSliderSection from "../BookSliderSection/BookSliderSection";
import BookSlider from "../BookSliderSection/BookSlider";

type Book = {
  title: string;
  image: string;
  description?: string;
  rating?: string;
};

const InformacoesPerfil = () => {
  const nomePerfil = "Maria de Fátima Nunes Alves";
  const apelido = "alvesmariadefatima";

  const [fotoPerfil, setFotoPerfil] = useState(() => {
    const stored = localStorage.getItem("fotoPerfil");
    return stored && stored !== "" ? stored : "https://avatars.githubusercontent.com/u/94319702?v=4";
  });

  const [favoritos, setFavoritos] = useState<Book[]>(() => {
    const stored = localStorage.getItem("favoritos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (fotoPerfil && fotoPerfil !== "") {
      localStorage.setItem("fotoPerfil", fotoPerfil);
    }
  }, [fotoPerfil]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarFavorito = (book: Book) => {
    setFavoritos((prev) => {
      if (prev.find((b) => b.title === book.title)) return prev;
      return [...prev, book];
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#2d203a] text-white">
      <Navbar />

      <main className="flex-grow">
        <div className="pt-24 px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <ProfileImageUploader
              initialImage={fotoPerfil}
              onImageChange={setFotoPerfil}
            />
          </div>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="font-semibold mb-1">Nome do perfil:</span>
              <span className="text-2xl font-bold">{nomePerfil}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold mb-1">Apelido:</span>
              <span className="text-xl font-semibold">{apelido}</span>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">MINHAS LISTAS</h1>
        </div>

        <BookSliderSection onAddFavorite={adicionarFavorito} />

        {favoritos.length > 0 && (
          <div className="mt-20 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6">Meus Favoritos</h2>
            <BookSlider title="FAVORITOS" books={favoritos} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default InformacoesPerfil;