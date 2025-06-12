import React, { useState } from "react";
import BookModal from "../BookModal/BookModal"; // ajuste o caminho conforme necessário

type Book = {
  title: string;
  image: string;
  description?: string;
  rating?: string;
};

type BookSliderProps = {
  title: string;
  books: Book[];
};

const VISIBLE_CARDS = 5;

const BookSlider: React.FC<BookSliderProps> = ({ title, books }) => {
  const [start, setStart] = useState(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canGoBack = start > 0;
  const canGoForward = start + VISIBLE_CARDS < books.length;

  const handlePrev = () => canGoBack && setStart(start - 1);
  const handleNext = () => canGoForward && setStart(start + 1);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const visibleBooks = books.slice(start, start + VISIBLE_CARDS);

  return (
    <div className="w-full">
      <h2 className="text-white font-bold mb-4 text-lg md:text-1.8xl">{title}</h2>

      {/* Modal do livro */}
      <BookModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        book={selectedBook}
      />

      {/* Mobile: scroll horizontal */}
      <div className="flex sm:hidden overflow-x-auto gap-2 pb-2 w-full">
        {books.map((book) => (
          <div
            key={book.title}
            onClick={() => handleBookClick(book)}
            className="w-32 h-48 flex-shrink-0 rounded-lg shadow-xl bg-white overflow-hidden cursor-pointer"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop/tablet: carrossel com botões */}
      <div className="hidden sm:flex items-center gap-2 justify-center w-full">
        <button
          onClick={handlePrev}
          disabled={!canGoBack}
          className="text-purple-400 disabled:opacity-30"
        >
          <span className="text-4xl md:text-5xl">&#9664;</span>
        </button>
        <div className="flex gap-4 justify-center">
          {Array.from({ length: VISIBLE_CARDS }).map((_, idx) => {
            const book = visibleBooks[idx];
            return book ? (
              <div
                key={book.title}
                onClick={() => handleBookClick(book)}
                className="w-32 h-48 rounded-lg shadow-xl bg-white overflow-hidden flex-shrink-0 cursor-pointer"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                key={idx}
                className="w-32 h-48 bg-gray-300 rounded-lg opacity-30 flex-shrink-0"
              />
            );
          })}
        </div>
        <button
          onClick={handleNext}
          disabled={!canGoForward}
          className="text-purple-400 disabled:opacity-30"
        >
          <span className="text-4xl md:text-5xl">&#9654;</span>
        </button>
      </div>
    </div>
  );
};

export default BookSlider;