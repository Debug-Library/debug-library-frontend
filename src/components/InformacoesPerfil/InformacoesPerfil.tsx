import { useState, useEffect } from "react";
import ProfileImageUploader from "../ProfileImageUploader/ProfileImageUploader";

const InformacoesPerfil = () => {
  const nomePerfil = "Maria de Fátima Nunes Alves";
  const apelido = "alvesmariadefatima";

  const [fotoPerfil, setFotoPerfil] = useState(
    localStorage.getItem("fotoPerfil") || "https://via.placeholder.com/150"
  );

  // Atualiza localStorage sempre que a foto mudar
  useEffect(() => {
    localStorage.setItem("fotoPerfil", fotoPerfil);
  }, [fotoPerfil]);

  return (
    <div className="bg-purple-950 min-h-screen text-white relative">
      <div className="absolute top-10 left-10 grid grid-cols-[150px_1fr] gap-8 items-center">
        
        {/* Foto de Perfil */}
        <ProfileImageUploader
          initialImage={fotoPerfil}
          onImageChange={setFotoPerfil}
        />

        {/* Informações do Perfil */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="font-semibold text-white mb-1">Nome do perfil:</span>
            <span className="text-2xl font-bold text-white">{nomePerfil}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white mb-1">Apelido:</span>
            <span className="text-xl font-semibold text-white">{apelido}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center absolute inset-x-0" style={{ top: "250px", height: "50px" }}>
        <h1 className="text-white text-3xl font-bold">MINHAS LISTAS</h1>
      </div>
    </div>
  );
};

export default InformacoesPerfil;