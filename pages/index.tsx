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
                            Educação, acolhimento e oportunidades reais.
                        </h1>
                        <p className="p-banner">
                            No Instituto Gênesis, nossa missão é transformar vidas através da fé, do cuidado e da inclusão.
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
                            Capacitação que <span className="text-white">transforma</span> realidades
                        </h1>
                        <p className="p-banner ">
                            Promovemos fé, amor e inclusão por meio da educação, da arte e da inovação social. Juntos, criamos futuros.
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
              <h2>Nossos projetos</h2>
              <p className="descricao">
                Somos uma organização comprometida com a transformação social através do acolhimento, educação e fé. Atuamos em comunidades locais oferecendo apoio a crianças, adolescentes e famílias.
              </p>

              <div className="equipe">
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Escola de Futebol</h3>
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/gt.jpg" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Genêsis Tech</h3>
                </div>

                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Rede de cuidado</h3>
                  
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Entendes o que lês?</h3>
                </div>

                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Ballet</h3>
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Ginástica Rítmica</h3>
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Educar Transforma</h3>
                </div>
              </div>
            </div>
          </section>

          

          <section className="valores">
            <div className="valores-container">
              <h2>Nossos Princípios</h2>
              <div className="card-valores">
                <div className="valor">
                  <span className="icone">💖</span>
                  <h3>Amor ao Próximo</h3>
                  <p>Promovemos relações baseadas no respeito, cuidado e empatia com todos ao nosso redor.</p>
                </div>
                <div className="valor">
                  <span className="icone">📘</span>
                  <h3>Educação Transformadora</h3>
                  <p>Acreditamos na educação como ferramenta essencial para libertação e mudança social.</p>
                </div>
                <div className="valor">
                  <span className="icone">🕊️</span>
                  <h3>Fé que Move</h3>
                  <p>Nosso trabalho é sustentado pela fé cristã, que nos inspira a servir e transformar.</p>
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