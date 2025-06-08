import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-6 px-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        {/* Logo e nome */}
        <div className="flex justify-center md:justify-start items-center">
          <img 
            src="src/assets/Logotipo-Debug-Library.png"
            alt="Logotipo Debug Library"
            className="w-40 h-auto"
          />
        </div>

        {/* Navegação */}
        <nav className="flex flex-wrap justify-center md:justify-center gap-4 text-sm">
          <a href="#" className="hover:underline font-semibold">Novidades</a>
          <a href="#" className="hover:underline font-semibold">Populares</a>
          <a href="#" className="hover:underline font-semibold">Categorias</a>
          <a href="#" className="hover:underline font-semibold">Listas</a>
        </nav>

        {/* Redes sociais */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-sm">
          <span className="text-center md:text-left">Acompanhe nossas redes</span>
          <div className="flex items-center gap-3">
            <a href="#" className="text-purple-900 hover:text-white" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-white" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-white" aria-label="Github">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;