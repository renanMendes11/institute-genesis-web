import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import '../app/globals.css';
import './styles.css';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';


export default function Home() {
const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef<NodeListOf<HTMLElement> | null>(null);

  // Exibe slide com base no índice
  const showSlide = (index: number) => {
    if (!slidesRef.current) return;
    slidesRef.current.forEach((slide, idx) => {
      slide.style.opacity = idx === index ? "1" : "0";
      slide.style.zIndex = idx === index ? "10" : "0";
    });
  };

  // Intervalo automático de troca de slides
  useEffect(() => {
    slidesRef.current = document.querySelectorAll<HTMLElement>(".slide");
    showSlide(slideIndex); // Exibe slide inicial apenas uma vez

    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        const next = (prev + 1) % (slidesRef.current?.length || 1);
        showSlide(next);
        return next;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header/>
      <>
        <main>
          <section className="video-campanha">
          <div className="video-campanha-container">
            <h2>Campanha de Construção</h2>
            <video controls width="100%" playsInline>
              <source src="/assets/videos/genesisihavadream.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </section>
        
          <section className="hero relative h-[800px] md:h-[900px] overflow-hidden">
            
            <div id="carousel" className="relative h-full w-full">
                
                
                {/* Slide 1 */}
                <div
                className="slide h-full w-full absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100 z-10"
                style={{ backgroundImage: "url('/assets/banner2.jpg')" }}
                >
                    <div className="overlay">
                    </div>
                    
                    <div className="relative z-30 flex flex-col justify-center items-start h-full text-left px-6 ml-10 md:px-20 container-banner-texto">
                        <h1 className="texto-banner">
                            Lugar de novos começos.
                        </h1>
                        <p className="p-banner">
                            Promover ações de desenvolvimento integrais, por meio da mobilização e capacitação do indivíduo com excelência, criatividade e mentalidade empreendedora, fundamentadas na cosmovisão cristã.
                        </p>
                        <Link href="/contribua" className="botao-contribua">
                            Contribua com essa missão
                        </Link>
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                className="slide h-full w-full absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100 z-0"
                style={{ backgroundImage: "url('/assets/banner3.jpg')" }}
                >
                    <div className="overlay">
                    </div>
                
                    <div className="relative z-30 flex flex-col justify-center items-start h-full text-left px-6 md:px-20 container-banner-texto">
                        <h1 className=" texto-banner">
                            Lugar de novos começos.
                        </h1>
                        <p className="p-banner ">
                            Promover ações de desenvolvimento integrais, por meio da mobilização e capacitação do indivíduo com excelência, criatividade e mentalidade empreendedora, fundamentadas na cosmovisão cristã.
                        </p>
                        <Link href="/contribua" className="botao-contribua ">
                            Apoie essa causa
                        </Link>
                    </div>
                </div>

                {/* Controles */}
                {/* Botão anterior (esquerda) */}
                {/* <button
                onClick={() => changeSlide(-1)}
                aria-label="Slide anterior"
                className="absolute inset-y-0 left-0 flex items-center justify-center px-4 z-50 bg-black/30 hover:bg-black/50 text-white transition"
                >
                <span className="text-4xl select-none">‹</span>
                </button> */}

                {/* Botão próximo (direita) */}
                {/* <button
                onClick={() => changeSlide(1)}
                aria-label="Próximo slide"
                className="absolute inset-y-0 right-0 flex items-center justify-center px-4 z-50 bg-black/30 hover:bg-black/50 text-white transition"
                >
                <span className="text-4xl select-none">›</span>
                </button> */}
            </div>
          </section>         
        </main>

        

        <section className="contribua">
            <Image 
                className="banner-contribua"
                src="/assets/contribua.png"
                alt="Contribua com a construção do projeto Gênesis"
                width={850}
                height={500}
                priority
            />

            <div className="container">
              <h1>Faça parte da nossa história</h1>
              <p className="descricao">
                Vamos continuar sonhando juntos!
                Sua contribuição vai ajudar na construção do Instituto Gênesis, onde nossos projetos vão fazer meninos e meninas realizarem seus sonhos.
                Participe para que o amor transborde para fora das nossas paredes.
              </p>

              <div className="progresso-container">
                <div className="progresso-barra"></div>
              </div>
              <p className="porcentagem">3%</p>

               <Link href="/contribua" className="botao-contribua">
                Quero fazer parte
              </Link>
            </div>
          </section>

          <section className="quem-somos">
            <div className="quem-somos-container">
              <h2>Nossos Projetos</h2>
              <p className="descricao">
                Atuamos em diversas frentes para promover o desenvolvimento integral de crianças, adolescentes e famílias em João Pessoa.
              </p>

              <div className="projetos-grid">
                <div className="projeto-card">
                  <div className="projeto-icone">⚽</div>
                  <h3>Escola de Futebol</h3>
                  <p>Formação de caráter e valores através do futebol para crianças e adolescentes de baixa renda.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">💻</div>
                  <h3>Gênesis Tech</h3>
                  <p>Curso de iniciação à programação para adolescentes e jovens, abrindo portas para o mercado de tecnologia.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">🩺</div>
                  <h3>Rede de Cuidado</h3>
                  <p>Sessões de fisioterapia e terapia psicológica para a comunidade, cuidando da saúde física e emocional.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">📖</div>
                  <h3>Entendes o que lês?</h3>
                  <p>Aulas de português para jovens africanos residentes em João Pessoa, preparando-os para o Celpe-Bras.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">🩰</div>
                  <h3>Escola de Ballet</h3>
                  <p>Aulas de dança que desenvolvem disciplina, autoestima e o potencial de meninas de baixa renda.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">🤸</div>
                  <h3>Ginástica Rítmica</h3>
                  <p>Desenvolvimento físico, relacional e autoestima para meninas por meio da ginástica rítmica.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">🎓</div>
                  <h3>Educar Transforma</h3>
                  <p>Curso preparatório para o ENEM voltado a alunos de escola pública, abrindo portas para o ensino superior.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">🌾</div>
                  <h3>Banco de Alimentos</h3>
                  <p>Distribuição mensal de cestas básicas para famílias de baixa renda, combatendo a insegurança alimentar.</p>
                </div>
                <div className="projeto-card">
                  <div className="projeto-icone">🥋</div>
                  <h3>Jiu-Jitsu</h3>
                  <p>Aulas semanais para crianças e adolescentes de baixa renda, formando caráter com disciplina, respeito e gratidão.</p>
                </div>
              </div>

              <Link href="/projetos" className="btn-ver-projetos">Conheça todos os projetos</Link>
            </div>
          </section>

          

          <section className="valores">
            <div className="valores-container">
              <h2>Nossos Valores</h2>
              <div className="card-valores">
                <div className="valor">
                  <span className="icone">🚀</span>
                  <h3>Identidade Empreendedora</h3>
                  <p>Construção de uma mentalidade criativa, capaz de traduzir demandas e trazer soluções, de liderar e com poder de decisão.</p>
                </div>
                <div className="valor">
                  <span className="icone">🧩</span>
                  <h3>Integralidade do Indivíduo</h3>
                  <p>Todo indivíduo possui talentos, identidade, capacidade relacional e espiritualidade para transformar seu contexto.</p>
                </div>
                <div className="valor">
                  <span className="icone">💡</span>
                  <h3>Inovação</h3>
                  <p>Realizar entregas que se destaquem em um contexto social, econômico e espiritual cada vez mais exigente.</p>
                </div>
                <div className="valor">
                  <span className="icone">⭐</span>
                  <h3>Excelência nos Processos</h3>
                  <p>Construção e execução de processos com o melhor de nossos esforços, talentos, habilidades e competências.</p>
                </div>
                <div className="valor">
                  <span className="icone">✝️</span>
                  <h3>Compromisso com o Evangelho</h3>
                  <p>O melhor de nós está em Deus e o compartilhamento é tarefa primordial para a manutenção do Seu Reino.</p>
                </div>
                <div className="valor">
                  <span className="icone">🔍</span>
                  <h3>Ética e Transparência</h3>
                  <p>Diretrizes fundamentais para sustentabilidade, fundamentação do caráter e fidelidade de nossos stakeholders.</p>
                </div>
                <div className="valor">
                  <span className="icone">🤝</span>
                  <h3>Integridade nas Relações</h3>
                  <p>Relações tratadas com retidão, generosidade, respeito, dignidade, responsabilidade e livres de corrupção.</p>
                </div>
                <div className="valor">
                  <span className="icone">❤️‍🔥</span>
                  <h3>Paixão</h3>
                  <p>Paixão por quem nos faz existir e por toda obra que Ele nos capacita para fazer.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="galeria">
            <div className="galeria-container">
              <h2>Veja o Genêsis em Ação</h2>
              <div className="grid-fotos">
                <Image src="/assets/galeria/ef1.jpeg" alt="Aula de futebol com as crianças" width={200} height={200}/>
                <Image src="/assets/galeria/el1.jpeg" alt="Voluntários em atividade" width={200} height={200} />
                <Image src="/assets/galeria/rc1.jpeg" alt="Projeto rede de cuidado" width={200} height={200}/>
                <Image src="/assets/galeria/ef2.jpeg" alt="Aula de futebol com as crianças" width={200} height={200}/>
              </div>
            </div>
          </section>
      </>
      <Footer/>
    </>
    
  );
}