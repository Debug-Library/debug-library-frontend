import React from "react";
import BookActionButtons from "../BookActionButtons/BookActionButtons";

type Book = {
  title: string;
  image: string;
  description?: string;
  rating?: string;
};

type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  book: Book | null;
  onAddFavorite: (book: Book) => void;  // nova prop
};

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose, book, onAddFavorite }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full flex gap-4 border-2 border-blue-200">
        <img
          src={book.image}
          alt={book.title}
          className="w-32 h-48 object-cover rounded shadow-2xl border border-gray-200"
        />

        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-mono text-gray-800 mb-2">{book.title}</h1>

          <p className="text-gray-700 text-sm mb-2">
            {book.description ||
              "Descrição indisponível. Clique para saber mais sobre este livro."}
          </p>

          <p className="text-sm text-gray-600 mb-2">
            Avaliação: {book.rating || "não avaliado"}
          </p>

          <BookActionButtons onAddFavorite={() => onAddFavorite(book)} />

          <div className="mt-6 flex justify-start">
            <button
              onClick={onClose}
              className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-6 py-2 rounded-md transition"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;