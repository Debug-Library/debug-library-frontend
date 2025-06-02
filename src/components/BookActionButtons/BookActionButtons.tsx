import { useState } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';

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
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-8 rounded-lg text-black min-w-[400px] max-w-[600px] text-center cursor-default shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lg">{message}</p>
        <button
          onClick={handleClose}
          className="mt-6 px-6 py-2 bg-[#9D4EDD] cursor-pointer text-white rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

const BookActionsButtons = () => {
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

  const heartsCount = 5;

  return (
    <div className="flex items-center space-x-4">
      {/* Corações para avaliação */}
      {[...Array(heartsCount)].map((_, index) => {
        const heartIndex = index + 1;
        return (
          <FaHeart
            key={heartIndex}
            onClick={() => handleRating(heartIndex)}
            className={`text-2xl cursor-pointer transition-colors ${
              heartIndex <= rating ? 'text-purple-500' : 'text-gray-300'
            }`}
          />
        );
      })}

      {/* Botão Favoritar */}
      <button
        aria-label="Favoritar"
        onClick={handleFavoritar}
        title="Favoritar"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9D4EDD] text-white cursor-pointer border-none"
      >
        <FaHeart className="text-lg" />
      </button>

      {/* Botão Adicionar Livro */}
      <button
        aria-label="Adicionar Livro"
        onClick={handleAdicionarLivro}
        title="Adicionar Livro"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9D4EDD] text-white cursor-pointer border-none"
      >
        <FaPlus className="text-lg" />
      </button>

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

export default BookActionButtons;