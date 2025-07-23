import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import '../app/globals.css';
import './styles.css';
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header/>
      <>
        <main>
          <section className="hero">
            <div className="overlay"></div>
            <div className="text-box">
              <h1>
                O Instituto Gênesis nasceu para promover acolhimento, educação e oportunidade para crianças, adolescentes e famílias da comunidade local. Uma iniciativa que une fé, amor e transformação social através da capacitação e criatividade, fundamentadas na cosmovisão cristã.
              </h1>
              <Link href="/contribua" className="botao-contribua">
                Contribua
              </Link>
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
              <h2>Quem Somos</h2>
              <p className="descricao">
                Somos uma organização comprometida com a transformação social através do acolhimento, educação e fé. Atuamos em comunidades locais oferecendo apoio a crianças, adolescentes e famílias.
              </p>

              <div className="equipe">
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>João Silva</h3>
                  <p>Fundador</p>
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Maria Santos</h3>
                  <p>Coordenadora</p>
                </div>

                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>João Silva</h3>
                  <p>Fundador</p>
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Maria Santos</h3>
                  <p>Coordenadora</p>
                </div>

                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>João Silva</h3>
                  <p>Fundador</p>
                </div>
                <div className="membro">
                  <Image src="/assets/equipe/ef.png" alt="Nome da pessoa" width={200} height={200} />
                  <h3>Maria Santos</h3>
                  <p>Coordenadora</p>
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
