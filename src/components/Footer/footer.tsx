import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Esquerda: Logo e navegação */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐞</span>
          <span className="font-bold text-lg">Debug Library</span>
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <a href="#">Novidades</a>
          <a href="#">Populares</a>
          <a href="#">Categorias</a>
          <a href="#">Listas</a>
        </nav>
      </div>

      {/* Direita: Redes sociais */}
      <div className="flex items-center gap-4">
        <span className="text-sm">Acompanhe nossas redes</span>
        <div className="flex gap-3 text-white text-lg">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
