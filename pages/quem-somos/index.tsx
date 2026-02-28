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
                                Há 102 anos, a Igreja Evangélica Batista de João Pessoa tem consistentemente empreendido iniciativas 
                                que demonstram o amor e a compaixão de Deus pela humanidade materializados na vida e nos ensinamentos 
                                do Senhor Jesus. Por meio da fidelidade de seus membros, ao longo de mais de um século, os esforços 
                                da IEBJP têm sido usados por Deus para alcançar e restaurar a vida de indivíduos e famílias, desde 
                                a linda João Pessoa, até os lugares mais remotos do mundo.
                            </p>
                            <p>
                                No ano de 2007, em um desafio de fé, a igreja adquiriu um amplo terreno situado no bairro de 
                                Jaguaribe, em João Pessoa, com o propósito de construir um novo templo, maior e mais confortável 
                                para melhor acolher seus membros e visitantes nos momentos de culto. Contudo, em harmonia com sua 
                                notável tradição e honrando seu legado centenário, ao identificar necessidades da comunidade na qual 
                                está situada e ao perceber a oportunidade de responder a tais necessidades, em 2018, a IEB tomou uma 
                                decisão que revolucionaria a atuação da igreja em seu contexto local e que, ao longo dos anos, 
                                manifestaria o Evangelho do Reino de Deus a crianças, adolescentes e famílias: em vez de edificar 
                                um novo local de culto, a IEB construiria um centro de acolhimento, educação, profissionalização e 
                                lazer destinado ao serviço à comunidade local e ao anúncio inteligível da mensagem do Evangelho a 
                                todo o público atendido pelos programas oferecidos.
                            </p>
                            <p>
                                Nasceu, assim, o Instituto Gênesis. Resultado da contribuição voluntária de uma dedicada equipe 
                                multidisciplinar, o projeto do Instituto prevê a construção de uma arena poliesportiva coberta 
                                (para prática de esportes coletivos, artes marciais e apresentações artísticas), um campo de 
                                Futebol de 7 com gramado sintético, salas de aula, espaços de atenção à saúde e uma estrutura 
                                para abrigar iniciativas de empreendedorismo e negócios.
                            </p>
                            <p>
                                Por meio das escolas de diferentes modalidades esportivas, do ensino de idiomas, música e outras 
                                habilidades, de cursos profissionalizantes e da disponibilização de acesso a serviços de saúde 
                                física, mental e emocional, o Instituto Gênesis visa promover ações de desenvolvimento integral 
                                por meio da capacitação de indivíduos com criatividade, excelência e mentalidade empreendedora, 
                                valores que têm permeado a cosmovisão cristã por quase dois mil anos.
                            </p>
                            <p>
                                Em 2025, iniciamos a campanha de levantamento de recursos para construção da sede do Instituto 
                                Gênesis, e queremos estender a você a oportunidade de investir na concretização desse sonho. 
                                Sua participação pode fazer grande diferença nesta iniciativa que, temos certeza, será um 
                                instrumento nas mãos de Deus para dar novos rumos às vidas de muita gente. Junte-se a nós!
                            </p>
                            <p className="historia-slogan">
                                Instituto Gênesis, lugar de novos começos.
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
                                    Promover ações de desenvolvimento integrais, por meio da mobilização e capacitação do indivíduo com excelência, criatividade e mentalidade empreendedora, fundamentadas na cosmovisão cristã.
                                </p>
                            </div>
                            <div className="mvv-card">
                                <div className="mvv-icon">🌟</div>
                                <h3>Visão</h3>
                                <p>
                                    Ser uma organização referência em desenvolvimento humano integral, segundo a cosmovisão bíblica, na cidade de João pessoa.
                                </p>
                            </div>
                            <div className="mvv-card mvv-card-valores">
                                <div className="mvv-icon">❤️</div>
                                <h3>Valores</h3>
                                <ul className="valores-lista">
                                    <li><strong>Desenvolvimento de identidade empreendedora:</strong> Porque acreditamos que a construção de uma mentalidade criativa, capaz de traduzir demandas e trazer soluções, de liderar e com poder de decisão é fundamental para uma formação plena.</li>
                                    <li><strong>Compromisso com a integralidade do indivíduo:</strong> Porque acreditamos que todo o indivíduo possui talentos, identidade, capacidade relacional e espiritualidade e que o bom entendimento destes é capaz de transformar seu status quo em oportunidades para seu processo de autenticidade humano.</li>
                                    <li><strong>Inovação:</strong> Porque acreditamos que realizar entregas comuns em um contexto social, econômico, político e espiritual cada vez mais competitivo, exigente e polarizado não é o suficiente.</li>
                                    <li><strong>Excelência nos processos:</strong> Porque acreditamos que a construção e a execução de processos precisam ser tratadas com o melhor de nossos esforços, talentos, habilidades e competências.</li>
                                    <li><strong>Compromisso com o Evangelho do Reino de Deus:</strong> Porque acreditamos que o melhor de nós está em Deus e o compartilhamento e a mordomia são uma tarefa primordial para a manutenção plena do Seu Reino aqui neste mundo.</li>
                                    <li><strong>Ética e Transparência:</strong> Porque confiamos que a ética e a transparência serão diretrizes fundamentais para um processo de sustentabilidade ideológico, de fundamentação do caráter empresarial e da aceitação e fidelidade de nossos stakeholders e clientes.</li>
                                    <li><strong>Integridade nas relações:</strong> Porque acreditamos que todas as relações envolvidas serão tratadas com: retidão, generosidade, respeito, dignidade, responsabilidade e livres de corrupção, má conduta, injustiça e desprezo.</li>
                                    <li><strong>Paixão:</strong> Paixão por quem nos faz existir e por toda obra que Ele nos capacita para fazer.</li>
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