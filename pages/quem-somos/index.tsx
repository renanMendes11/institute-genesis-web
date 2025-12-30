import Header from '@/components/header/header';
import './styles.css'
import '../../app/globals.css';
import Footer from '@/components/footer/footer';
import Link from 'next/link';

export default function QuemSomos(){
    return (
        < >
            <Header/>
            <main className="quem-somos-page">
                <section className="hero-quem-somos">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1>Sobre o Instituto Gênesis</h1>
                        <p>Transformando vidas através da educação, fé e amor ao próximo</p>
                    </div>
                </section>

                <section className="nossa-historia">
                    <div className="container-quem-somos">
                        <h2>Nossa História</h2>
                        <div className="historia-content">
                            <p>
                                O Instituto Gênesis de Ensino e Cultura nasceu do sonho de transformar vidas através da educação, 
                                da cultura e do acolhimento social. Fundado em 2020, em João Pessoa - Paraíba, nosso instituto surge 
                                como resposta a uma necessidade urgente: oferecer oportunidades reais de desenvolvimento para crianças, 
                                adolescentes e famílias em situação de vulnerabilidade social.
                            </p>
                            <p>
                                Inspirados pelos valores cristãos de amor, solidariedade e justiça social, iniciamos nossa jornada 
                                com o Banco de Alimentos, levando segurança alimentar a dezenas de famílias. Desde então, expandimos 
                                nossas ações para diversas áreas, sempre com o objetivo de promover transformação integral e duradoura.
                            </p>
                            <p>
                                Hoje, somos mais do que uma organização social. Somos uma família comprometida em construir futuros, 
                                despertar talentos e oferecer esperança. Cada projeto, cada iniciativa, cada vida tocada é parte de 
                                um sonho maior: ver comunidades inteiras transformadas pelo poder da educação e do amor.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="missao-visao-valores">
                    <div className="container-quem-somos">
                        <div className="mvv-grid">
                            <div className="mvv-card">
                                <div className="mvv-icon">🎯</div>
                                <h3>Missão</h3>
                                <p>
                                    Promover o desenvolvimento integral de crianças, adolescentes e famílias em situação de 
                                    vulnerabilidade social, através de projetos educacionais, culturais, esportivos e de assistência, 
                                    fundamentados nos princípios cristãos de amor, fé e serviço ao próximo.
                                </p>
                            </div>
                            <div className="mvv-card">
                                <div className="mvv-icon">🌟</div>
                                <h3>Visão</h3>
                                <p>
                                    Ser referência em transformação social na Paraíba, reconhecidos pela excelência de nossos 
                                    projetos e pelo impacto positivo e duradouro na vida das pessoas e comunidades que servimos, 
                                    contribuindo para uma sociedade mais justa, educada e solidária.
                                </p>
                            </div>
                            <div className="mvv-card">
                                <div className="mvv-icon">❤️</div>
                                <h3>Valores</h3>
                                <ul className="valores-lista">
                                    <li>Amor e Compaixao</li>
                                    <li>Integridade e Transparência</li>
                                    <li>Compromisso com a Excelência</li>
                                    <li>Respeito e Inclusão</li>
                                    <li>Fé e Esperança</li>
                                    <li>Trabalho em Equipe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="o-que-fazemos">
                    <div className="container-quem-somos">
                        <h2>O Que Fazemos</h2>
                        <p className="intro-fazemos">
                            Nossos projetos abrangem diversas áreas de atuação, sempre com foco no desenvolvimento 
                            integral e na transformação de vidas:
                        </p>
                        <div className="areas-atuacao">
                            <div className="area-card">
                                <h4>🎓 Educação</h4>
                                <p>Cursos preparatórios, reforo escolar e capacitação profissional</p>
                            </div>
                            <div className="area-card">
                                <h4>⚽ Esporte</h4>
                                <p>Escolas de futebol, ballet e ginástica rítmica</p>
                            </div>
                            <div className="area-card">
                                <h4>💻 Tecnologia</h4>
                                <p>Cursos de programação e inclusão digital</p>
                            </div>
                            <div className="area-card">
                                <h4>🌾 Assistência Social</h4>
                                <p>Banco de alimentos e apoio a famílias</p>
                            </div>
                            <div className="area-card">
                                <h4>🩺 Saúde</h4>
                                <p>Fisioterapia e acompanhamento psicológico</p>
                            </div>
                            <div className="area-card">
                                <h4>🌍 Cultura</h4>
                                <p>Aulas de português para estrangeiros e atividades culturais</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="numeros-impacto">
                    <div className="container-quem-somos">
                        <h2>Nosso Impacto em Números</h2>
                        <div className="numeros-grid">
                            <div className="numero-card">
                                <div className="numero">700+</div>
                                <p>Vidas Impactadas</p>
                            </div>
                            <div className="numero-card">
                                <div className="numero">8</div>
                                <p>Projetos Ativos</p>
                            </div>
                            <div className="numero-card">
                                <div className="numero">3.780</div>
                                <p>Cestas Básicas Doadas</p>
                            </div>
                            <div className="numero-card">
                                <div className="numero">200+</div>
                                <p>Atendimentos de Saúde</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="equipe">
                    <div className="container-quem-somos">
                        <h2>Nossa Equipe</h2>
                        <p className="intro-equipe">
                            Contamos com uma equipe dedicada de profissionais e voluntários apaixonados por fazer a diferença.
                        </p>
                        <div className="equipe-destaque">
                            <p className="texto-equipe">
                                Nossa equipe é formada por educadores, profissionais de saúde, assistentes sociais, treinadores 
                                esportivos, profissionais de tecnologia e voluntários que dedicam seu tempo e talento para tornar 
                                nossos projetos realidade. Todos compartilham o mesmo propósito: transformar vidas e construir um 
                                futuro melhor para nossa comunidade.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="parceiros">
                    <div className="container-quem-somos">
                        <h2>Parcerias e Apoiadores</h2>
                        <p className="intro-parceiros">
                            Nada do que fazemos seria possível sem o apoio de nossos parceiros, doadores e voluntários. 
                            Cada contribuição, seja financeira, material ou de tempo, é fundamental para a continuidade 
                            e expansão de nossos projetos.
                        </p>
                        <div className="agradecimento">
                            <p>
                                Agradecemos a todos que acreditam em nossa missão e nos ajudam a transformá-la em realidade. 
                                Juntos, estamos construindo um futuro melhor!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cta-conheca">
                    <div className="container-quem-somos">
                        <div className="cta-box">
                            <h2>Conheça Nossos Projetos</h2>
                            <p>Veja de perto como estamos transformando vidas em nossa comunidade</p>
                            <Link href="/projetos" className="btn-projetos">Ver Projetos</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}