import Header from '@/components/header/header';
import './styles.css'
import '../../app/globals.css';
import Footer from '@/components/footer/footer';

export default function Campanha(){
    return (
        <>
            <Header/>
            <main className="campanha-page">
                <section className="hero-campanha">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1>Campanha de Construção</h1>
                        <p>Ajude-nos a construir o Instituto Gênesis e transformar vidas na comunidade de Jaguaribe.</p>
                    </div>
                </section>

                <section className="video-maquete">
                    <div className="container-campanha">
                        <h2>Conheça a Maquete</h2>
                        <div className="video-wrapper">
                            <video controls width="100%" playsInline>
                                <source src="/assets/videos/maqueteGeesis.mp4" type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        </div>
                    </div>
                </section>

                <section className="etapas">
                    <div className="container-campanha">
                        <h2>Etapas da Construção</h2>
                        <div className="etapas-grid">
                            <div className="etapa-card etapa-ativa">
                                <div className="etapa-badge">Etapa 1</div>
                                <h3>Campo Society</h3>
                                <p className="etapa-descricao">
                                    Construção do campo de futebol society com gramado sintético, 
                                    que será o espaço principal para a Escola de Futebol e outras atividades esportivas do Instituto.
                                </p>
                                <div className="etapa-meta">
                                    <p className="alvo">Alvo: R$ 250.000</p>
                                    <div className="progresso-container-campanha">
                                        <div className="progresso-barra-campanha" style={{width: '36.8%'}}></div>
                                    </div>
                                    <p className="porcentagem-campanha">36,8% alcançado</p>
                                </div>
                            </div>

                            <div className="etapa-card etapa-desabilitada">
                                <div className="etapa-badge etapa-badge-disabled">Etapa 2</div>
                                <h3>Estrutura e Fundações</h3>
                                <p className="etapa-descricao">
                                    Construção da estrutura principal e fundações do prédio do Instituto Gênesis, 
                                    incluindo salas de aula, espaços de atendimento e área administrativa.
                                </p>
                                <div className="etapa-meta">
                                    <p className="alvo">Em breve</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
