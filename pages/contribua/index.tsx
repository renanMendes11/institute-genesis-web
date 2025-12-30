import Header from '@/components/header/header';
import './styles.css'
import '../../app/globals.css';
import Footer from '@/components/footer/footer';
import { useState } from 'react';

export default function Contribua(){
    const [copiedPix, setCopiedPix] = useState(false);

    const handleCopyPix = () => {
        const pixKey = '41.505.753/0001-82';
        navigator.clipboard.writeText(pixKey);
        setCopiedPix(true);
        setTimeout(() => setCopiedPix(false), 3000);
    };

    return (
        < >
            <Header/>
            <main className="contribua-page">
                <section className="hero-contribua">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1>Faça Parte Dessa Transformação</h1>
                        <p>Sua contribuição é essencial para mudarmos vidas através da educação, cultura e assistência social.</p>
                    </div>
                </section>

                <section className="como-contribuir">
                    <div className="container-contribua">
                        <h2>Como Você Pode Ajudar</h2>
                        <p className="subtitle">Existem diversas formas de fazer a diferença no Instituto Gênesis</p>

                        <div className="contribuicao-cards">
                            <div className="card-contribuicao">
                                <div className="card-icon">💰</div>
                                <h3>Doação Financeira</h3>
                                <p>Contribua mensalmente ou com uma doação única. Seu apoio financeiro mantém nossos projetos ativos e em constante crescimento.</p>
                                <div className="valores-sugeridos">
                                    <p><strong>Valores sugeridos:</strong></p>
                                    <div className="valor-tags">
                                        <span>R$ 30</span>
                                        <span>R$ 50</span>
                                        <span>R$ 100</span>
                                        <span>R$ 200</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-contribuicao">
                                <div className="card-icon">🎁</div>
                                <h3>Doação de Materiais</h3>
                                <p>Necessitamos de materiais esportivos, escolares, roupas e alimentos para nossos projetos e cestas básicas.</p>
                                <ul className="lista-materiais">
                                    <li>Materiais esportivos</li>
                                    <li>Material escolar</li>
                                    <li>Alimentos não perecíveis</li>
                                    <li>Roupas e calçados</li>
                                </ul>
                            </div>

                            <div className="card-contribuicao">
                                <div className="card-icon">🤝</div>
                                <h3>Seja Voluntário</h3>
                                <p>Doe seu tempo e talento. Temos vagas para professores, treinadores, profissionais de saúde e áreas administrativas.</p>
                                <p className="destaque-voluntario">Entre em contato para saber como fazer parte da nossa equipe de voluntários!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="formas-doacao">
                    <div className="container-contribua">
                        <h2>Formas de Doação</h2>
                        
                        <div className="metodos-doacao">
                            <div className="metodo-item">
                                <h3>PIX (CNPJ)</h3>
                                <div className="pix-box">
                                    <p className="pix-key">41.505.753/0001-82</p>
                                    <button 
                                        className="btn-copiar-pix" 
                                        onClick={handleCopyPix}
                                    >
                                        {copiedPix ? '✓ Copiado!' : 'Copiar Chave PIX'}
                                    </button>
                                </div>
                                <p className="razao-social">Instituto Gênesis de Ensino e Cultura</p>
                            </div>

                            <div className="metodo-item">
                                <h3>Transferência Bancária</h3>
                                <div className="dados-bancarios">
                                    <p><strong>Banco:</strong> Bradesco</p>
                                    <p><strong>Agência:</strong> 3427</p>
                                    <p><strong>Conta Corrente:</strong> 8314-2</p>
                                    <p><strong>CNPJ:</strong> 41.505.753/0001-82</p>
                                    <p><strong>Razão Social:</strong> Instituto Gênesis de Ensino e Cultura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="impacto">
                    <div className="container-contribua">
                        <h2>O Impacto da Sua Doação</h2>
                        <div className="impacto-grid">
                            <div className="impacto-item">
                                <div className="impacto-numero">R$ 30</div>
                                <p>Ajuda a custear materiais escolares para uma criança por um mês</p>
                            </div>
                            <div className="impacto-item">
                                <div className="impacto-numero">R$ 60</div>
                                <p>Contribui com uma cesta básica completa para uma família</p>
                            </div>
                            <div className="impacto-item">
                                <div className="impacto-numero">R$ 100</div>
                                <p>Garante uniforme e equipamento esportivo para um aluno</p>
                            </div>
                            <div className="impacto-item">
                                <div className="impacto-numero">R$ 200</div>
                                <p>Mantém um aluno em nossas aulas por um mês inteiro</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="transparencia">
                    <div className="container-contribua">
                        <h2>Transparência e Prestação de Contas</h2>
                        <p className="texto-transparencia">
                            O Instituto Gênesis acredita na transparência total. Todos os recursos recebidos são investidos diretamente em nossos projetos sociais. 
                            Periodicamente, publicamos relatórios detalhados sobre nossa atuação e aplicação dos recursos.
                        </p>
                        <div className="certificacao">
                            <p><strong>CNPJ:</strong> 41.505.753/0001-82</p>
                            <p><strong>Razão Social:</strong> Instituto Gênesis de Ensino e Cultura</p>
                        </div>
                    </div>
                </section>

                <section className="contato-doacao">
                    <div className="container-contribua">
                        <div className="cta-final">
                            <h2>Pronto para fazer a diferença?</h2>
                            <p>Entre em contato conosco para mais informações sobre como contribuir</p>
                            <div className="contatos">
                                <p>📧 Email: contato@institutogenesispb.com.br</p>
                                <p>📱 WhatsApp: (83) 98888-8888</p>
                                <p>📍 João Pessoa - PB</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}