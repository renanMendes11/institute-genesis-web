import "./header.css";

export default function Header() {
  return (
  
    <header className="header">
        <div className="header-container">
        <div className="logo-container">
            <img className="logo" src="assets/logoheader.png" alt="Logo Instituto Gênesis" />
        </div>
        <div className="nav-container">
            <button className="menu-toggle" aria-label="Abrir menu">☰</button>
            <nav className="nav">
            <ul>
                <li><a href="./quem-somos">Quem somos</a></li>
                <li><a href="./projetos">Projetos</a></li>
                <li><a href="./contribua">Contribua</a></li>
            </ul>
            </nav>
        </div>
        </div>
    </header>
  );
}
