import { useState, useEffect } from "react";
import ProfileImageUploader from "../ProfileImageUploader/ProfileImageUploader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BookSliderSection from "../BookSliderSection/BookSliderSection";
import BookSlider from "../BookSliderSection/BookSlider"; // importe o componente para mostrar favoritos também

const InformacoesPerfil = () => {
  const nomePerfil = "Maria de Fátima Nunes Alves";
  const apelido = "alvesmariadefatima";

  const [fotoPerfil, setFotoPerfil] = useState(
    localStorage.getItem("fotoPerfil") || "https://via.placeholder.com/150"
  );

  useEffect(() => {
    localStorage.setItem("fotoPerfil", fotoPerfil);
  }, [fotoPerfil]);

  // Salvar favoritos no localStorage para persistir
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // Função para adicionar um livro aos favoritos, evita duplicatas
  const adicionarFavorito = (book: Book) => {
    setFavoritos((prev) => {
    // Evita duplicatas
    if (prev.find((b) => b.title === book.title)) return prev;
    return [...prev, book];
  });
};


  return (
    <div className="flex flex-col min-h-screen bg-[#2d203a] text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Conteúdo do Perfil */}
        <div className="pt-24 px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 items-center">
          {/* Foto de Perfil */}
          <div className="flex justify-center md:justify-start">
            <ProfileImageUploader
              initialImage={fotoPerfil}
              onImageChange={setFotoPerfil}
            />
          </div>

          {/* Informações do Perfil */}
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

        {/* MINHAS LISTAS */}
        <div className="mt-20 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">MINHAS LISTAS</h1>
        </div>

        {/* Aqui passe a função de adicionar favorito para seu slider ou componente de livro */}
        <BookSliderSection onAddFavorite={adicionarFavorito} />

        {/* NOVA SEÇÃO: Favoritos */}
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