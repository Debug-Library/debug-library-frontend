import { useState, useEffect } from "react";
import ProfileImageUploader from "../ProfileImageUploader/ProfileImageUploader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const InformacoesPerfil = () => {
  const nomePerfil = "Maria de Fátima Nunes Alves";
  const apelido = "alvesmariadefatima";

  const [fotoPerfil, setFotoPerfil] = useState(
    localStorage.getItem("fotoPerfil") || "https://via.placeholder.com/150"
  );

  useEffect(() => {
    localStorage.setItem("fotoPerfil", fotoPerfil);
  }, [fotoPerfil]);

  return (
    <div className="bg-purple-950 min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Conteúdo do Perfil com responsividade */}
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
          <h1 className="text-white text-3xl font-bold text-center">MINHAS LISTAS</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InformacoesPerfil;