import BookActionButtons from "../BookActionButtons/BookActionButtons";

const BookModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full flex gap-4 border-2 border-blue-200">
        
        <img
          src="https://m.media-amazon.com/images/I/81RXMnEXrdL._AC_UF1000,1000_QL80_.jpg"
          alt="Livro sobre Padrões de Projeto"
          className="w-32 h-48 object-cover rounded shadow-2xl border border-gray-200"
        />

        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-mono text-gray-800 mb-2">Debug Library</h1>

          <p className="text-gray-700 text-sm mb-2">
            O pequeno príncipe é um clássico da literatura infantil que narra a amizade entre um menino e um piloto de avião.
            O principezinho vem do asteroide B 612, e encontra o piloto no deserto do Saara. A obra fala de amor, amizade e sobre a sabedoria infantil.
          </p>

          <p className="text-sm text-gray-600 mb-2">Avaliada 1.7K de usuários</p>

          <BookActionButtons />

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