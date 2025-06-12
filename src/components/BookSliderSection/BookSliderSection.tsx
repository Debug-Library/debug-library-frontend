import BookSlider from "../BookSliderSection/BookSlider";

const books = {
  iniciante: [
    { 
      title: "Pense em Python", 
      image: "src/assets/livros_imgs/inciante/pense_em_python.png",
      description: "Introdução prática à programação com Python."
    },
    { 
      title: "Use a Cabeça! Java", 
      image: "src/assets/livros_imgs/inciante/use_a_cabeca_java.png",
      description: "Aprenda Java com uma abordagem visual e interativa."
    },
    { 
      title: "Lógica de Programação e Algoritmos com JavaScript", 
      image: "src/assets/livros_imgs/inciante/logica_de_programacao_js.png",
      description: "Conceitos fundamentais de lógica com exemplos em JS."
    },
    { 
      title: "Introdução à Programação com Linguagem C", 
      image: "src/assets/livros_imgs/inciante/introducao_a_programacao_c.png",
      description: "Base sólida em programação estruturada com C."
    },
    { 
      title: "PHP para quem conhece PHP", 
      image: "src/assets/livros_imgs/inciante/php_para_quem_conhece.png",
      description: "Aprofundamento em boas práticas e recursos modernos do PHP."
    },
    { 
      title: "Java Como Programar", 
      image: "src/assets/livros_imgs/inciante/java_como_programar.png",
      description: "Curso completo de programação em Java do básico ao intermediário."
    },
  ],
  intermediario: [
    { 
      title: "Design Patterns",
      image: "src/assets/livros_imgs/intermediario/domain_driven_design.png",
      description: "Soluções reutilizáveis para problemas recorrentes de design." 
    },
    { 
      title: "Trabalho Eficaz com Código Legado", 
      image: "src/assets/livros_imgs/intermediario/trabalho_eficaz_codigo_legado.png",
      description: "Técnicas para melhorar e refatorar sistemas legados."
    },
    { 
      title: "Programação Web com Node & Express",
      image: "src/assets/livros_imgs/intermediario/programacao_web_node_express.png",
      description: "Crie aplicações web robustas com Node.js e Express."
    },
    { 
      title: "Programação Utilizando IA", 
      image: "src/assets/livros_imgs/intermediario/programacao_utilizando_ia.jpg",
      description: "Introdução prática à integração de IA em seus projetos." 
    },
    { 
      title: "Guia do Python para Data Science", 
      image: "src/assets/livros_imgs/intermediario/guia_python_data_science.jpg",
      description: "Ferramentas e técnicas com Python para análise de dados."
    },
    { 
      title: "Entendendo Algoritmos",
      image: "src/assets/livros_imgs/intermediario/entendendo_algoritmos.jpg",
      description: "Explicações visuais para os algoritmos mais importantes." 
    }
  ],
  avancado: [
    { 
      title: "Padrões de Projeto",
      image: "src/assets/livros_imgs/avancado/padroes_de_projeto.png",
      description: "Catálogo clássico de padrões de design em software." 
    },
    { 
      title: "Código Limpo", 
      image: "src/assets/livros_imgs/avancado/codigo_limpo.png",
      description: "Práticas para escrever código legível, testável e elegante."
    },
    { 
      title: "Redes Neurais Artificiais", 
      image: "src/assets/livros_imgs/avancado/redes_neurais_artificiais.png",
      description: "Fundamentos e aplicações de redes neurais profundas." 
    },
    { 
      title: "O Programador Pragmático", 
      image: "src/assets/livros_imgs/avancado/programador_pragmatico.jpg",
      description: "Conselhos valiosos para desenvolver software com qualidade." 
    },
    { 
      title: "Arquitetura Limpa", 
      image: "src/assets/livros_imgs/avancado/arquitetura_limpa.jpg",
      description: "Princípios para manter a estrutura e escalabilidade do código." 
    },
    { 
      title: "Arquitetura de Software: As Partes Difíceis", 
      image: "src/assets/livros_imgs/avancado/arquitetura_software_as_partes_dificieis.jpg",
      description: "Exploração profunda dos desafios de arquitetura moderna." 
    }
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