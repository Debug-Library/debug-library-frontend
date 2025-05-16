import { useState } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';

// Componente Modal Reutilizável
const Modal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-8 rounded-lg text-black min-w-[400px] max-w-[600px] text-center cursor-default shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lg">{message}</p>
        <button
          onClick={handleClose}
          className="mt-6 px-6 py-2 rounded bg-[#9D4EDD] text-white cursor-pointer"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

const BtnAvaliacaoLivros = () => {
  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem('bookRating');
    return saved ? parseInt(saved) : 0;
  });

  const [showFavoritosModal, setShowFavoritosModal] = useState(false);
  const [showLivrosModal, setShowLivrosModal] = useState(false);

  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem('bookRating', value.toString());
  };

  const handleFavoritar = () => {
    setShowFavoritosModal(true);
  };

  const handleAdicionarLivro = () => {
    setShowLivrosModal(true);
  };

  return (
    <div className="flex items-center">
      <div className="flex gap-2 items-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <FaHeart
            key={index}
            className={`text-3xl cursor-pointer transition-colors ${
              index <= rating ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => handleRating(index)}
          />
        ))}

        {/* Botão Favoritar */}
        <button
          aria-label="Favoritar"
          onClick={handleFavoritar}
          title="Favoritar"
          className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#9D4EDD] text-white cursor-pointer border-none"
        >
          <FaHeart className="text-lg" />
        </button>

        {/* Botão Adicionar Livro */}
        <button
          aria-label="Adicionar Livro"
          onClick={handleAdicionarLivro}
          title="Adicionar Livro"
          className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#9D4EDD] text-white cursor-pointer border-none"
        >
          <FaPlus className="text-lg" />
        </button>
      </div>

      {/* Modal Favoritos */}
      {showFavoritosModal && (
        <Modal
          message="📚 Livro adicionado à sua lista de favoritos!"
          onClose={() => setShowFavoritosModal(false)}
        />
      )}

      {/* Modal Livros */}
      {showLivrosModal && (
        <Modal
          message="📚 Livro adicionado à sua lista de livros!"
          onClose={() => setShowLivrosModal(false)}
        />
      )}
    </div>
  );
};

export default BtnAvaliacaoLivros;