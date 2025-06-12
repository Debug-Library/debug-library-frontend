import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

type NavbarProps = {
  user: { name: string; avatar: string } | null;
  onLogout: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = !!user;
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkStyle =
    "text-white font-bold hover:text-purple-200 transition-colors duration-300";

  return (
    <nav className="bg-purple-400 px-6 py-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src="src/assets/Logotipo-Debug-Library.png"
            alt="Logotipo Debug Library"
            className="w-40"
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl transition-transform duration-300"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 items-center">
            <li><a className={linkStyle} href="#">NOVIDADES</a></li>
            <li><a className={linkStyle} href="#">POPULARES</a></li>
            <li><a className={linkStyle} href="#">CATEGORIAS</a></li>
            <li><a className={linkStyle} href="#">LISTAS</a></li>
          </ul>

          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="pl-10 pr-4 py-1 rounded-full text-sm bg-white focus:outline-none transition-all duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <img
                src={user!.avatar}
                alt={`Foto de perfil de ${user!.name}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="text-white font-semibold">
                <p>Bem-vinda,</p>
                <p>{user!.name}</p>
              </div>
              <button
                onClick={onLogout}
                className="bg-white text-purple-700 font-semibold px-4 py-1 rounded-md hover:bg-purple-100 transition-all duration-300"
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex space-x-3">
              <Link to="/login">
                <button className="bg-white text-purple-700 font-semibold px-4 py-1 rounded-md hover:bg-purple-100 transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link to="/cadastro">
                <button className="bg-purple-700 text-white font-semibold px-4 py-1 rounded-md hover:bg-purple-800 transition-all duration-300">
                  Cadastro
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-300 origin-top ${
          menuOpen ? "scale-y-100 opacity-100 mt-4" : "scale-y-0 opacity-0 h-0"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <a className={linkStyle} href="#">NOVIDADES</a>
          <a className={linkStyle} href="#">POPULARES</a>
          <a className={linkStyle} href="#">CATEGORIAS</a>
          <a className={linkStyle} href="#">LISTAS</a>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="pl-10 pr-4 py-1 w-full rounded-full text-sm bg-white focus:outline-none transition-all duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {isAuthenticated ? (
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src={user!.avatar}
                  alt={`Foto de perfil de ${user!.name}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="text-white font-semibold">
                  <p>Bem-vinda,</p>
                  <p>{user!.name}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="bg-white text-purple-700 font-semibold px-4 py-1 rounded-md hover:bg-purple-100 w-full transition-all duration-300"
              >
                Sair
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-white text-purple-700 font-semibold px-4 py-1 rounded-md hover:bg-purple-100 w-full transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link to="/cadastro">
                <button className="bg-purple-700 text-white font-semibold px-4 py-1 rounded-md hover:bg-purple-800 w-full transition-all duration-300">
                  Cadastro
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;