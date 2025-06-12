import BookSlider from "../BookSliderSection/BookSlider";


const books = {
  iniciante: [
    { title: "Pense em Python", image: "src/assets/livros_imgs/inciante/pense_em_python.png" },
    { title: "Use a Cabeça! Java", image: "src/assets/livros_imgs/inciante/use_a_cabeca_java.png"},
    { title: "Lógica de Programação e Algoritmos com JavaScript", image: "src/assets/livros_imgs/inciante/logica_de_programacao_js.png" },
    { title: "Introdução à Programação com Linguagem C", image: "src/assets/livros_imgs/inciante/introducao_a_programacao_c.png" },
    { title: "PHP para quem conhece PHP", image: "src/assets/livros_imgs/inciante/php_para_quem_conhece.png" },
    { title: "Java Como Programar", image: "src/assets/livros_imgs/inciante/java_como_programar.png" },
  ],
  intermediario: [
    { title: "Design Patterns", image: "src/assets/livros_imgs/intermediario/domain_driven_design.png" },
    { title: "Trabalho Eficaz com Código Legado", image: "src/assets/livros_imgs/intermediario/trabalho_eficaz_codigo_legado.png" },
    { title: "Programação Web com Node & Express", image: "src/assets/livros_imgs/intermediario/programacao_web_node_express.png" },
    { title: "Programação Utilizando IA", image: "src/assets/livros_imgs/intermediario/programacao_utilizando_ia.jpg" },
    { title: "Guia do Python para Data Science", image: "src/assets/livros_imgs/intermediario/guia_python_data_science.jpg" },
    { title: "Entendendo Algoritmos", image: "src/assets/livros_imgs/intermediario/entendendo_algoritmos.jpg" }
  ],
  avancado: [
    { title: "Padrões de Projeto", image: "src/assets/livros_imgs/avancado/padroes_de_projeto.png" },
    { title: "Código Limpo", image: "src/assets/livros_imgs/avancado/codigo_limpo.png" },
    { title: "Redes Neurais Artificiais", image: "src/assets/livros_imgs/avancado/redes_neurais_artificiais.png" },
    { title: "O Programador Pragmático", image: "src/assets/livros_imgs/avancado/programador_pragmatico.jpg" },
    { title: "Arquitetura Limpa", image: "src/assets/livros_imgs/avancado/arquitetura_limpa.jpg" },
    { title: "Arquitetura de Software: As Partes Difíceis", image: "src/assets/livros_imgs/avancado/arquitetura_software_as_partes_dificieis.jpg" }
  ],
};

const BookSliderSection: React.FC = () => (
<section className="bg-[#2d203a] py-4 px-1 sm:px-4 md:px-8 rounded-none sm:rounded-xl md:rounded-2xl flex flex-col items-center justify-center p-8">
  <div className="w-full sm:max-w-7xl sm:mx-auto space-y-6 sm:space-y-10 md:space-y-14 flex flex-col items-center">
    <BookSlider title="INICIANTE" books={books.iniciante} />
    <BookSlider title="INTERMEDIÁRIO" books={books.intermediario} />
    <BookSlider title="AVANÇADO" books={books.avancado} />
  </div> 
</section>
);

export default BookSliderSection;



