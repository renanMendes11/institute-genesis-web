import Header from '@/components/header/header';
import './styles.css'
import Footer from '@/components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function Projetos(){


    const [activeContent, setActiveContent] = useState("escolaballet");
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string, content: string) => {
      if (activeAccordion === id) {
        setActiveAccordion(null);
      } else {
        setActiveAccordion(id);
        setActiveContent(content);
      }
    };

  const renderContent = () => {
    switch (activeContent) {
      case "banco":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Banco de Alimentos</h5>
                <p>Inaugurado em 2020, o projeto do Banco de Alimentos oferece, mensalmente, mais de 60 cestas básicas para suprir famílias de baixa renda, contribuindo com a erradicação da fome no âmbito das famílias beneficiadas. O Banco de Alimentos representa para nós a construção de um sonho: que haja mantimento básico nas mesas de cada família.</p>
                <p><b>Alcance:</b> 3.780 cestas básicas doadas</p>
               </div>;
      case "escolaballet":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Escola de Ballet</h5>
                <p>Inaugurado em 2022, o projeto da Escola de Ballet oferece semanalmente 2 horas de aulas extracurriculares de dança para meninas de baixa renda, promovendo o desenvolvimento relacional, físico, foco e autoestima das alunas. A Escola de Ballet representa para nós a construção de um sonho: oferecer a chance de um futuro de oportunidades para as meninas.</p>
                    <p><b>Alcance:</b> 17 meninas integradas</p>
                    
                     <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <img src="/assets/img/ballet1.jpg" style={{width: '100%'}}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <img src="/assets/img/ballet2.jpg" style={{width: '100%'}}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <img src="/assets/img/ballet3.jpg" style={{width: '100%'}}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <img src="/assets/img/ballet4.jpg" style={{width: '100%'}}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <img src="/assets/img/ballet5.jpg" style={{width: '100%'}}/>
                        </div>
                    </div>
               </div>;
      case "educartransforma":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Educar Transforma</h5>
                <p>Inaugurado em 2023, o projeto Educar Transforma oferece um curso preparatório para o ENEM, voltado a alunos de escola pública, contribuindo com a formação intelectual e vocacional dos beneficários. O Educar Transforma representa para nós a construção de um sonho: que jovens de escola pública tenham acesso às oportunidades do ensino superior.</p>
                <p><b>Alcance:</b> 560 jovens matriculados</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/educar.jpg" style={{width: '100%'}}/>
                    </div>
                </div>

               </div>;
      case "entendes":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Entendes o que lês?</h5>
                <p>Inaugurado em 2024, o projeto “Entendes o que lês?” oferece aulas de português para jovens africanos residentes em João Pessoa, com o objetivo de prepará-los para o exame Celpe-Bras. O “Entendes o que lês?” representa para nós a construção de um sonho: que jovens africanos avancem nos cursos de ensino superior no Brasil.</p>
                <p><b>Alcance:</b> 15 jovens matriculados</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/entendes1.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/entendes2.jpg" style={{width: '100%'}}/>
                    </div>
                </div>
        
               </div>;
      case "escoladefut":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Escola de Futebol</h5>
                <p>Inaugurado em 2023, a Escola de Futebol Gênesis oferece aulas de futebol para crianças e adolescentes de baixa renda. O projeto contribui para a formação do caráter dos alunos, ensinando valores como: responsabilidade, compromisso, cidadania, respeito e gratidão. A Escola de Futebol representa para nós a construção de um sonho: ver a transformação na vida dos alunos pelo poder do Evangelho.</p>
                <p><b>Alcance:</b> 90 alunos matriculados</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/escoladefut1.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/escoladefut2.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/escoladefut3.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/escoladefut4.jpg" style={{width: '100%'}}/>
                    </div>
                </div>

               </div>;
      case "genesistech":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Gênesis Tech</h5>
                <p>Inaugurado em 2024, o projeto Gênesis Tech oferece um curso de iniciação à programação para adolescentes e jovens de baixa renda. O Gênesis Tech representa para nós a construção de um sonho: despertar vocações e contribuir com a inserção de jovens programadores no mercado de trabalho de tecnologia.</p>
                <p><b>Alcance:</b> 15 alunos matriculados</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/genesistech1.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/genesistech2.jpg" style={{width: '100%'}}/>
                    </div>
                </div>
            
               </div>;
      case "ginastica":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Ginástica Rítmica</h5>
                <p>Inaugurado em 2024, a Escola de Ginástica Rítmica oferece aulas de ginástica rítmica para meninas de baixa renda, promovendo o desenvolvimento relacional, físico, disciplina e autoestima das alunas. A Escola de Ginástica Rítmica representa para nós a construção de um sonho: oferecer a chance de um futuro de oportunidades para as meninas.</p>
                <p><b>Alcance:</b> 10 meninas matriculadas</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/ginastica1.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/ginastica2.jpg" style={{width: '100%'}}/>
                    </div>
                </div>

               </div>;  
      case "rededecuidado":
        return <div>
                <h5 className='d-none d-lg-block' style={{ borderBottom: "1px solid #555", paddingBottom: 10}}>Rede de Cuidado</h5>
                <p>Inaugurado em 2020, o projeto Rede de Cuidado começou oferecendo sessões de fisioterapia respiratória para pacientes pós covid. Após a pandemia, o projeto serve a comunidade com sessões de fisioterapia motora e terapia psicológica. A Rede de Cuidado representa para nós a construção de um sonho: contribuir para que as dores físicas e emocionais não paralisem a vida das pessoas.</p>
                <p><b>Alcance:</b> 200 atendimentos ofertados</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/rede1.jpg" style={{width: '100%'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <img src="/assets/img/rede2.jpg" style={{width: '100%'}}/>
                    </div>
                </div>

               </div>;   
      default:
        return <div>Selecione uma opção.</div>;
    }
  };
    useEffect(() => {
        
    }, []);

    return (
        < >
            <Header/>
            
          <div className="container mt-5 mb-5">

            <div className="d-block d-lg-none">
            <h2 className="mb-4">PROJETOS</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseOne' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseOne', "escolaballet")}
                    aria-expanded={activeAccordion === 'collapseOne'}
                    aria-controls="collapseOne"
                    >
                    Escola de Ballet
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseOne' ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                >
                    <div className="accordion-body">
                    {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseTwo' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseTwo', "banco")}
                    aria-expanded={activeAccordion === 'collapseTwo'}
                    aria-controls="collapseTwo"
                    >
                    Banco de Alimentos
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseTwo' ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                >
                    <div className="accordion-body">
                    {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTres">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseTres' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseTres', "educartransforma")}
                    aria-expanded={activeAccordion === 'collapseTres'}
                    aria-controls="collapseTres"
                    >
                    Educar Transforma
                    </button>
                </h2>
                <div
                    id="collapseTres"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseTres' ? 'show' : ''}`}
                    aria-labelledby="headingTres"
                >
                    <div className="accordion-body">
                        {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingQuatro">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseQuatro' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseQuatro', "entendes")}
                    aria-expanded={activeAccordion === 'collapseQuatro'}
                    aria-controls="collapseQuatro"
                    >
                    Entendes o que lês?
                    </button>
                </h2>
                <div
                    id="collapseQuatro"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseQuatro' ? 'show' : ''}`}
                    aria-labelledby="headingQuatro"
                >
                    <div className="accordion-body">
                        {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingCinco">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseCinco' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseCinco', "escoladefut")}
                    aria-expanded={activeAccordion === 'collapseCinco'}
                    aria-controls="collapseCinco"
                    >
                    Escola de Futebol
                    </button>
                </h2>
                <div
                    id="collapseCinco"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseCinco' ? 'show' : ''}`}
                    aria-labelledby="headingCinco"
                >
                    <div className="accordion-body">
                        {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeis">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseSeis' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseSeis', "genesistech")}
                    aria-expanded={activeAccordion === 'collapseSeis'}
                    aria-controls="collapseSeis"
                    >
                    Gênesis Tech
                    </button>
                </h2>
                <div
                    id="collapseSeis"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseSeis' ? 'show' : ''}`}
                    aria-labelledby="headingSeis"
                >
                    <div className="accordion-body">
                        {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingSete">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseSete' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseSete', "ginastica")}
                    aria-expanded={activeAccordion === 'collapseSete'}
                    aria-controls="collapseSete"
                    >
                    Ginástica Rítmica
                    </button>
                </h2>
                <div
                    id="collapseSete"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseSete' ? 'show' : ''}`}
                    aria-labelledby="headingSete"
                >
                    <div className="accordion-body">
                        {renderContent()}
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOito">
                    <button
                    className={`accordion-button ${activeAccordion === 'collapseOito' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseOito', "rededecuidado")}
                    aria-expanded={activeAccordion === 'collapseOito'}
                    aria-controls="collapseOito"
                    >
                    Rede de Cuidado
                    </button>
                </h2>
                <div
                    id="collapseOito"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseOito' ? 'show' : ''}`}
                    aria-labelledby="headingOito"
                >
                    <div className="accordion-body">
                        {renderContent()}
                    </div>
                </div>
                </div>

            </div>
            
    </div>

           
        
    <div className="d-none d-lg-flex row">
      
      
      {/* Sidebar */}
      <div className="col-lg-3" style={{  }}>
        <h5 style={{ textAlign: 'center', borderBottom: "1px solid #555", paddingBottom: 10}}>Projetos</h5>
        <ul className="nav flex-column">
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "escolaballet" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("escolaballet")}
            >
              Escola de Ballet
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "banco" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("banco")}
            >
              Banco de Alimentos
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "educartransforma" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("educartransforma")}
            >
              Educar Transforma
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "entendes" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("entendes")}
            >
              Entendes o que lês?
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "escoladefut" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("escoladefut")}
            >
              Escola de Futebol
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "genesistech" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("genesistech")}
            >
              Gênesis Tech
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "ginastica" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("ginastica")}
            >
              Ginástica Rítmica
            </button>
          </li>
          <li className="nav-item d-flex justify-content-center">
            <button
              className={`nav-link btn btn-link text-start ${activeContent === "rededecuidado" ? "fw-bold" : ""}`}
              onClick={() => setActiveContent("rededecuidado")}
            >
              Rede de Cuidado
            </button>
          </li>
        </ul>
      </div>

      {/* Conteúdo */}
      <div className="col-lg-9" style={{  }}>
        {renderContent()}
      </div>
      
    </div>

    </div>
            
            <Footer/>
        
        
        
        
        </>
    );
}