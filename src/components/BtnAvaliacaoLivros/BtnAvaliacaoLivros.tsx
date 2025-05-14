import { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // Importando o ícone de coração

const BtnAvaliacaoLivros = () => {
  // Inicializa o estado com base no localStorage
  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem('bookRating');
    return saved ? parseInt(saved) : 0; // Retorna a avaliação salva ou 0 se não houver
  });

  // Função para alterar a avaliação
  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem('bookRating', value); // Salva a avaliação no localStorage
  };

  // Estilo para os corações
  const heartStyle = {
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#888', // Cor padrão dos corações vazios
    transition: 'color 0.3s ease',
  };

  // Estilo para o container dos corações (layout flex para alinhá-los na horizontal)
  const heartsContainerStyle = {
    display: 'flex', // Flexbox para alinhar na horizontal
    gap: '10px', // Espaçamento entre os corações
    justifyContent: 'center', // Centraliza os corações
  };

  return (
    <div>
      <div style={heartsContainerStyle}>
        {[1, 2, 3, 4, 5].map((index) => (
          <FaHeart
            key={index}
            style={{
              ...heartStyle,
              color: index <= rating ? 'white' : '#888', // Cor do coração preenchido ou vazio
            }}
            onClick={() => handleRating(index)} // Define a avaliação ao clicar
          />
        ))}
      </div>
    </div>
  );
};

export default BtnAvaliacaoLivros;