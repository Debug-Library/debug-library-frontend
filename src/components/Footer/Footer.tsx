import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-600 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Logo e nome */}
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <span className="text-2xl">🐞</span>
        <span className="text-lg font-semibold">Debug Library</span>
      </div>

      {/* Navegação */}
      <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0 text-sm">
        <a href="#" className="hover:underline">Novidades</a>
        <a href="#" className="hover:underline">Populares</a>
        <a href="#" className="hover:underline">Categorias</a>
        <a href="#" className="hover:underline">Listas</a>
      </nav>

      {/* Redes sociais */}
      <div className="flex items-center space-x-2 text-sm">
        <span>Acompanhe nossas redes</span>
        <a href="#" className="hover:text-gray-200" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-gray-200" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-gray-200" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
